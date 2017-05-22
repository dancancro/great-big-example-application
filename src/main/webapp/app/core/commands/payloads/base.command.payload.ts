export abstract class CommandPayload {
    mimeType: string;
    protected data: any;
    topic: string;

    constructor(payload?: any) {
        this.data = payload;
    }

    abstract concat(payload: CommandPayload): CommandPayload;

    abstract serialize(): string | Blob | ArrayBuffer;

    abstract appendPair(key: any, value: any): void;

    abstract setData(data: any): void;

    abstract parse(data: any): any;
}
