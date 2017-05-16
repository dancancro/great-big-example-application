import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-todo',
    templateUrl: './todo.html'
})

export class TodoComponent implements OnInit {
    newName: string;
    nameList: any = [
        'Meeting with Bryan.',
        'Exercise at 6:pm with Yoga.',
        'Lunch Lunch Lunch.',
        'Her birthday at riverside.'
    ];
    addName(): boolean {
        this.nameList.push(this.newName);
        this.newName = '';
        return true;
    }
    ngOnInit() {
        // let todoListWraper: any = $('.todo-list-wrap')
        // todoListWraper.perfectScrollbar({})
    }
}
