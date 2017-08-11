import { Talk } from '../../core/store/talk/talk.model';

export type Filters = { speaker: string, title: string, minRating: number };
export type TalksPageLayout = { filters: Filters, watched: { [id: number]: boolean } };
export const initialTalksPageLayout: TalksPageLayout = {
    filters: {
        speaker: null,
        title: null,
        minRating: 0
    },
    watched: {}
};
