import { CommandPayload } from './base.command.payload';

export class JsonPayload extends CommandPayload {
    private payloads: JsonPayload[] = [];

    constructor(payload?: any) {
        super(payload || {});
    }

    concat(payload: JsonPayload): this {
        this.payloads.push(payload);
        return this;
    }

    serialize(): string | Blob | ArrayBuffer {
        let currentSerialized: string;
        try {
            currentSerialized = JSON.stringify(this.data) || '';
        } catch (e) {
            throw new Error(`Invalid JSON command ${this.data.toString()}`);
        }
        if (!this.payloads.length) {
            return currentSerialized;
        } else {
            const serialized = this.payloads.map((c) => c.serialize()).concat(currentSerialized).join(',');
            return `[${serialized}]`;
        }
    }

    setData(data: any) {
        this.data = data;
    }

    appendPair(key: any, value: any) {
        this.data[key.toString()] = value;
    }

    parse(data: any): any {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.warn(`Cannot parse the data ${data}.`);
            return null;
        }
    }

    get mimeType(): string {
        return 'application/json';
    }
}
