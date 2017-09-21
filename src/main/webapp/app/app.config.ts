import { OpaqueToken } from '@angular/core';

export class AppConfig {
    public readonly apiUrl = '/api';
    public conduitApiUrl = 'https://conduit.productionready.io/api';
    public readonly API_URL = new OpaqueToken('restful-url');
    public readonly WS_SECURE = false;
    public readonly WS_HOST = 'localhost';
    public readonly WS_PORT = 5552;
};

export const apiUrl = '/api';
export const API_URL = new OpaqueToken('restful-url');
export const WS_SECURE = false;
export const WS_HOST = 'localhost';
export const WS_PORT = 5552;
