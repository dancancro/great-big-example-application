/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RemapPipe } from './remap.pipe';

describe('Pipe: Remap', () => {
    const testData = [
        {
            name: 'Object-1',
            id: 1,
            order: {
                default: 1,
                mobile: 4,
                large: 1
            }
        },
        {
            name: 'Object-2',
            id: 2,
            order: {
                default: 2,
                mobile: 3,
                large: 3
            }
        },
        {
            name: 'Object-3',
            id: 3,
            order: {
                default: 3,
                mobile: 2,
                large: 4
            }
        },
        {
            name: 'Object-4',
            id: 4,
            order: {
                default: 4,
                mobile: 1,
                large: 2
            }
        }
    ];
    it('create an instance', () => {
        const pipe = new RemapPipe();
        expect(pipe).toBeTruthy();
    });
    it('should remap the order', () => {
        const pipe = new RemapPipe();
        const test1 = pipe.transform(testData).map((x) => x.id);
        expect(test1).toEqual([1, 2, 3, 4]);
        const test2 = pipe.transform(testData, 'mobile').map((x) => x.id);
        expect(test2).toEqual([4, 3, 2, 1]);
        const test3 = pipe.transform(testData, 'large').map((x) => x.id);
        expect(test3).toEqual([1, 4, 2, 3]);
    });
});
