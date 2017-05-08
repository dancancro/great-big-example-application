import { OpaqueToken } from '@angular/core';

export const API_URL = new OpaqueToken('restful-url');
export const WS_SECURE = false;
export const WS_HOST = 'localhost';
export const WS_PORT = 5552;
export const GAME_TEXT = `Lorem Ipsum is simply dummy text of the printing.`;

export class RoomConfig {
  isInitiator: boolean;
  name: string;
}
