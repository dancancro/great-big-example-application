/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilterUtilitiesService } from './filter-utilities.service';

describe('Service: FilterUtilities', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FilterUtilitiesService]
        });
    });

    it('should ...', inject([FilterUtilitiesService], (service: FilterUtilitiesService) => {
        expect(service).toBeTruthy();
    }));

    it('should convert text to camel case', inject([FilterUtilitiesService], (service: FilterUtilitiesService) => {
        expect(service.camelize('EquipmentClass name')).toBe('equipmentClassName');
        expect(service.camelize('Equipment className')).toBe('equipmentClassName');
        expect(service.camelize('equipment class name')).toBe('equipmentClassName');
        expect(service.camelize('Equipment Class Name')).toBe('equipmentClassName');
    }));
});
