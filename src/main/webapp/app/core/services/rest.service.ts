import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { Claim } from '../store/claim/claim.model';
import { ClaimRebuttal } from '../store/claim-rebuttal/claim-rebuttal.model';
import { Comment } from '../store/comment/comment.model';
import { Contact } from '../store/contact/contact.model';
import { Crisis } from '../store/crisis/crisis.model';
import { Hero } from '../store/hero/hero.model';
import { Note } from '../store/note/note.model';
import { Rebuttal } from '../store/rebuttal/rebuttal.model';
import { AppConfig } from '../../app.config';
import { DataService } from './data.service';
import { RootState } from '../store';
import { Entity } from '../store/entity/entity.model';
import * as SliceActions from '../store/slice/slice.actions';
import * as EntityActions from '../store/entity/entity.actions';
import { completeAssign, QueryPayload } from '../store/util';
import * as config from '../../app.config';

type APIConfig = {
    method?: ((entity?: any, state?: RootState) => string) | string,
    url?: ((entity?: any, state?: RootState, query?: QueryPayload, slice?: keyof RootState) => string) | string,
    options?: (entity?: any, state?: RootState, query?: QueryPayload) => RequestOptionsArgs,
    response?: (resp: any, entity?: any, state?: RootState, query?: QueryPayload) => any
}

type EntityConfig = {
    url?: ((entity?: any, state?: RootState, query?: QueryPayload) => string) | string,
    options?: (entity?: any, state?: RootState, query?: QueryPayload) => RequestOptionsArgs,

    getEntity?: APIConfig,
    getEntities?: APIConfig,
    update?: APIConfig,
    remove?: APIConfig,
    add?: APIConfig,
}

const GOOGLE_ROOT = 'https://www.googleapis.com/books/v1/volumes';

const apis: { [entity: string]: EntityConfig } = {
    article: {
        url: 'articles',
        update: {
            url: (article, state) => {
                const slug = state.article.entities[article.id].slug;
                if (article.favorited === true || article.favorited === false) {
                    return `${config.apiUrl}/articles/${slug}/favorite`;
                }
                return `${config.apiUrl}/articles/${slug}`;
            },
            method: (article, state) => {
                if (article.favorited === true) {
                    return 'post';
                }
                if (article.favorited === false) {
                    return 'delete';
                }
                return 'put';
            },
            options: (article, state, query) => (typeof article.favorited !== 'undefined') ? null : article,
            response: (resp, article) => ({ id: article.id, ...resp })  // the slug could be different if the title changed
        },
        // getEntity: {
        //     url: (article, state) => {
        //         const slug = article.id;
        //         return `${config.apiUrl}/articles/${slug}`;
        //     }
        // },
        getEntities: {
            url: (article, state: RootState) => {
                return `${config.apiUrl}/articles` + ((state.layout.blogPage.type === 'feed') ? '/feed' : '');
            },
            options: (article, state, query) => ({ params: getParamsFromQuery(query) })
        }
    },
    claim: {
        url: 'claims'
    },
    claimRebuttal: {
        url: 'claim-rebuttals',
        getEntities: {
            response: (resp, claimRebuttal, state, query) => {
                return ({ ...resp, entities: resp.entities.map((cr) => ({ ...cr, id: '' + cr.id, claimId: '' + cr.claimId, rebuttalId: '' + cr.rebuttalId })) });
            }
        }
    },
    comment: {
        url: 'comments',
        add: {
            url: (comment: Comment, state: RootState) => {
                const slug = comment.articleId;
                return `${config.apiUrl}/articles/${slug}/comments`;
            },
            options: (entity, state, query) => ({ body: entity.body }),
            response: (resp, comment) => ({ ...resp, articleId: comment.articleId })
        },
        remove: {
            url: (comment: Comment, state: RootState) => {
                const slug = comment.articleId;
                return `${config.apiUrl}/articles/${slug}/comments/${comment.id}`;
            }
        },
        getEntities: {
            url: (comment: Comment, state: RootState, query: QueryPayload) => {
                const slug = query['slug'];
                return `${config.apiUrl}/articles/${slug}/comments`;
            },
            response: (resp, comment, state, query) => {
                return ({ ...resp, entities: resp.entities.map((comment) => ({ articleId: query['slug'], ...comment })) });
            }
        }
    },
    contact: {
        url: 'contacts'
    },
    crisis: {
        url: 'crises'
    },
    hero: {
        url: 'heroes'
    },
    note: {
        url: 'notes'
    },
    profile: {
        url: 'profiles',
        update: {
            method: (profile, state) => {
                if (profile.following === true) {
                    return 'post';
                }
                if (profile.following === false) {
                    return 'delete';
                }
                return 'put';
            },
            url: (profile, state) => {
                const username = state.profile.entities[profile.id].username;
                if (profile.following === true || profile.following === false) {
                    return `${config.apiUrl}/profiles/${username}/follow`;
                }
                return `${config.apiUrl}/profiles`;
            },
            options: (profile, state, query) => (typeof profile.following !== 'undefined') ? null : profile
        },
        getEntities: {
            url: (profile, state, query) => {
                const id = query['id'];
                return `${config.apiUrl}/profiles/${id}`;
            }
        }
    },
    rebuttal: {
        url: 'rebuttals'
    },
    search: {
        url: 'books',
        getEntity: {
            url: (book, state, query) => {
                return `${GOOGLE_ROOT}/${book.id}`;
            }
        },
        getEntities: {
            url: (book, state, query) => {
                if (typeof query === 'object') {
                    throw new Error(`Invalid parameter [query] passed to book getEntities: ${query}`);
                }
                return `${GOOGLE_ROOT}?q=${query}`;
            },
            response: (resp, entity) => resp.items
        }
    },
    tag: {
        url: 'tags',
        getEntities: {
            response: (resp) => resp.map((tag) => {
                return { id: tag, name: tag };
            })
        }
    },
    talk: {
        url: 'talks'
    },
    defaults: {
        options: (entity, state, query) => entity,
        add: {
            method: 'post',
            url: (entity, state, query, slice) => `${config.apiUrl}/${apis[slice].url}`
        },
        update: {
            method: 'put',
            url: (entity, state, query, slice) => `${config.apiUrl}/${apis[slice].url}`
        },
        getEntity: {
            url: (entity, state, query, slice) => `${config.apiUrl}/${apis[slice].url}/${entity.id}`
        },
        getEntities: {
            url: (entity, state, query, slice) => `${config.apiUrl}/${apis[slice].url}`
        },
        remove: {
            url: (entity, state, query, slice) => `${config.apiUrl}/${apis[slice].url}/${entity.id}`
        }
    }
}

const getParamsFromQuery = (query: QueryPayload) => {

    const params: URLSearchParams = new URLSearchParams();

    if (query && typeof query === 'object') {
        Object.keys(query)
            .forEach((key) => {
                if (query[key] !== null) {
                    params.set(key, '' + query[key]);
                }
            });
    }

    return params;
}

@Injectable()
export class RESTService implements DataService {
    constructor(private http: Http, private config: AppConfig) { }

    private getUrl(slice: keyof RootState, state: RootState, entity: any, query: QueryPayload, job: string): string {
        return apis[slice][job] && (typeof apis[slice][job].url === 'function') && apis[slice][job].url(entity, state, query)
            || (typeof apis.defaults[job].url === 'function') && apis.defaults[job].url(entity, state, query, slice);
    }

    private getOptions(slice: keyof RootState, state: RootState, entity: any, query: QueryPayload, job: string): RequestOptionsArgs {
        // remove the infrastructure parts of the entity
        const newEntity = { ...this.prepareEntity(entity) };

        return apis[slice][job] && (typeof apis[slice][job].options === 'function') && apis[slice][job].options(newEntity, state, query)
            || (typeof apis.defaults[job].options === 'function') && apis.defaults[job].options(newEntity, state, query)
            || (typeof apis.defaults.options === 'function') && apis.defaults.options(newEntity, state, query);
    }

    private getMethod(slice: keyof RootState, state: RootState, entity: any, query: QueryPayload, job: string): string {
        return apis[slice][job] && (typeof apis[slice][job].method === 'function') && apis[slice][job].method(entity, state)
            || apis.defaults[job].method;
    }

    private getResponse(slice: keyof RootState, state: RootState, entity: any, query: QueryPayload, job: string): any {
        return (resp: any) => {
            return apis[slice][job] && (typeof apis[slice][job].response === 'function') && apis[slice][job].response(resp, entity, state, query)
                || resp;
        }
    }

    getEntities(slice: keyof RootState, query: QueryPayload = null,
        state: RootState): Observable<any[]> {

        const url = this.getUrl(slice, state, null, query, 'getEntities');
        const options = this.getOptions(slice, state, null, query, 'getEntities');

        return this.http.get(url, options)
            .map(this.extractData)
            .map(this.getResponse(slice, state, null, query, 'getEntities'))
            .catch(this.handleError);
    }

    getEntity(slice: keyof RootState, id: string, state: RootState): Observable<any> {
        const url = this.getUrl(slice, state, { id }, null, 'getEntity');
        const options = this.getOptions(slice, state, null, null, 'getEntity');
        return this.http.get(url, options)
            .map(this.extractData)
            .map(this.getResponse(slice, state, null, null, 'getEntity'))
            .catch(this.handleError);
    }

    add(slice: keyof RootState, entity: Entity, state: RootState, store: Store<RootState>): Observable<any> {
        const url = this.getUrl(slice, state, entity, null, 'add');
        const options = this.getOptions(slice, state, entity, null, 'add');

        return this.http.post(url, options)
            .map((result) => {
                let oldObject = {};
                const newObject = this.extractData(result);
                const tempEntity = state[slice].entities[EntityActions.TEMP];
                if (tempEntity) {
                    oldObject = completeAssign({}, ...tempEntity);
                    if (typeof oldObject['id'] !== 'undefined') {
                        delete oldObject['id'];
                    }
                    store.dispatch(new EntityActions.DeleteTemp(slice));
                }
                return completeAssign(oldObject, newObject);
            })
            .map(this.getResponse(slice, state, entity, null, 'add'))
            .catch((error: Response | any) => {
                if (state[slice].entities[EntityActions.TEMP]) {
                    store.dispatch(new EntityActions.RestoreTemp(slice));
                }
                return this.handleError(error);
            });
    }

    get(route: string): Observable<any> {
        return this.http.get(`${this.config.apiUrl}/${route}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(route: string, object: any): Observable<any> {
        return this.http.post(`${this.config.apiUrl}/${route}`, this.prepareEntity(object))
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(slice: keyof RootState, entity: Entity, state: RootState, store: Store<RootState>): Observable<any> {
        const url = this.getUrl(slice, state, entity, null, 'update');
        const method = this.getMethod(slice, state, entity, null, 'update');
        const options = this.getOptions(slice, state, entity, null, 'update');

        return this.http[method](url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    remove(slice: keyof RootState, entity: Entity, state: RootState, store: Store<RootState>): Observable<any> {
        const url = this.getUrl(slice, state, entity, null, 'remove');
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Remove all the utility parts of the entity
     */
    prepareEntity(entity: any) {
        const newEntity = { ...entity };
        delete newEntity.dirty;
        delete newEntity.loading;
        delete newEntity.slice;
        return newEntity;
    }

    extractData(res: any) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        let obj =
            (res && !!res._body && res.json()) ||
            res.data ||
            { id: res.url.match(/[^\/]+$/)[0] };

        if (Array.isArray(obj)) {
            obj = { entities: obj, totalItems: +res.headers.get('X-Total-Count') }
        }
        return obj;
    }

    handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        const id = error.url.match(/[^\/]+$/)[0]; // if DELETE_FAIL, get id from resp.url

        return Observable.throw({ errMsg, id })
    }
}
