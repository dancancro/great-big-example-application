import {
    Component, Renderer, Input, ViewChild, ElementRef, Output, EventEmitter,
    AfterViewInit
} from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { GameFacade } from '../../../../core/store/game/game.facade';

@Component({
    selector: 'jhi-game',
    template: `
    <section [hidden]="!(invalid() | async)">
      <h1>Your game is invalid!</h1>
      <img ng-src="./assets/cheater.gif">
    </section>
    <section [hidden]="(invalid() | async)">
      <jhi-timer #myTimer></jhi-timer>
      <div class="game" #gameContainer>
        <div class="game-text">{{ text }}</div>
        <textarea #textArea (keyup)="changeHandler($event.target.value)"></textarea>
      </div>
    </section>
  `,
    styles: [`
    .game textarea {
      font-size: 14px;
      width: 400px;
      height: 250px;
    }
    .game.wrong textarea {
      background-color: red;
      color: white;
    }
  `]
})
export class GameComponent implements AfterViewInit {
    @ViewChild('gameContainer') gameContainer: ElementRef;  // 'gameContainer', 'textArea', etc
    @ViewChild('textArea') textArea: ElementRef;            //  have to be in camelCase
    @ViewChild('myTimer') timer: TimerComponent;
    @Input() text: string;
    @Output() end: EventEmitter<number> = new EventEmitter<number>();
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    constructor(private facade: GameFacade, private renderer: Renderer) { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.facade.startGame();
            this.timer.start();
            this.renderer.invokeElementMethod(this.textArea.nativeElement, 'focus', []);
        }, 0);
    }

    changeHandler(data: string) {
        if (this.text === data) {
            this.facade.completeGame(data, this.timer.time);
            this.end.emit(this.timer.time);
            this.timer.reset();
        } else {
            this.facade.onProgress(data, this.timer.time);
            if (this.text.indexOf(data) !== 0) {
                this.renderer.setElementClass(this.gameContainer.nativeElement, 'wrong', true);
            } else {
                this.renderer.setElementClass(this.gameContainer.nativeElement, 'wrong', false);
            }
        }
    }

    reset() {
        this.timer.reset();
        this.text = '';
        this.textArea.nativeElement.value = '';
        this.renderer.setElementClass(this.gameContainer.nativeElement, 'wrong', false);
    }

    invalid() {
        return this.facade.game$
            .scan((accum: boolean, current: any) => {
                return (current && current.get('invalid')) || accum;
            }, false);
    }

}
