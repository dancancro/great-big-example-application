import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GameFacade } from '../../../core/store/game/game.facade';
import { RoomConfig } from '../../../core/gateways/webrtc.gateway';

@Component({
    selector: 'jhi-home',
    styles: [`
    strong {
      cursor: pointer;
    }
  `],
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    partner: string;
    name: string;

    constructor(public game: GameFacade,
        private roomConfig: RoomConfig,
        private router: Router,
        private route: ActivatedRoute) { }

    startSinglePlayerGame() {
        this.router.navigate(['single-player'], { relativeTo: this.route });
    }

    startMultiPlayerGame() {
        this.roomConfig.name = this.name;
        this.roomConfig.isInitiator = true;
        this.router.navigate(['multi-player'], { relativeTo: this.route });
    }

    joinGame() {
        this.roomConfig.name = this.partner;
        this.roomConfig.isInitiator = false;
        this.router.navigate(['multi-player'], { relativeTo: this.route });
    }

    hasGames() {
        return this.game.games$
            .scan((accum: boolean, game: any) => (accum || !!game.size), false);
    }
}
