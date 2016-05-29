import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { notes } from './notes.reducer';

describe('Reducer: Notes', () => {
    let initialState = 
    [
        {
        "colour": "green",
        "text": "First Note from DB",
        "id": 1
        },
        {
        "colour": "green",
        "text": "Second Note from DB",
        "id": 2
        },
        {
        "colour": "green",
        "text": "Third Note from DB",
        "id": 3
        }
    ];
        
    it('`should update the item`', () => {
        let payload = {id: 2, newText: "new note 2"};
        let result = [ 
            initialState[0], 
            {
                "colour": "green",
                "text": "new note 2",
                "id": 2,
                "dirty":true
            },
            initialState[2] 
            ];
            
        let stateItems = notes(initialState, {type: 'UPDATE_NOTE_TEXT', payload: payload});

        expect(stateItems).toEqual(result);
    });  
});



