import { Injectable } from '@angular/core';
import { features } from './features.meta';

export interface FeatureMeta {
    id: string;
    link: string;
    readme?: string;
}

@Injectable()
export class FeaturesService {

    getFeatures(): FeatureMeta[] {
        return features;
    }
}
