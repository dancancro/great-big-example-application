import { Observable } from 'rxjs/Observable';
import { CommandPayload } from './payloads/base.command.payload';
import { BaseGateway } from '../gateways/base.gateway';
import { Observer } from 'rxjs/Observer';

export enum CommandState {
  IDLE,
  EXECUTING,
  INVOKED
};

export interface CommandResult {
  command: Command;
  payload: any;
}

export abstract class Command {
  static _id = 0;
  protected _state: CommandState;
  protected _payload: CommandPayload;
  protected _commands: Command[] = [];
  protected _method: any;
  protected _gateway: BaseGateway;
  protected _id = 0;

  constructor(payload?: CommandPayload) {
    this._payload = payload;
    Command._id += 1;
    this._id = Command._id;
  }

  get id(): number {
    return this._id;
  }

  get payload(): CommandPayload {
    return this._payload;
  }

  set payload(value: CommandPayload) {
    this._payload = value;
  }

  get method(): any {
    return this._method;
  }

  set method(value: any) {
    this._method = value;
  }

  set gateway(value: BaseGateway) {
    this._gateway = value;
  }

  get mimeType() {
    return this.payload.mimeType;
  }

  concat(command: Command): void {
    this.payload.concat(command.payload);
  }

  serialize(): string | Blob | ArrayBuffer {
    return this.payload.serialize();
  }

  parse(response: any): any {
    return this.payload.parse(response);
  };

  invoke(context?: Command): Observable<CommandResult> {
    context = context || this;
    context.state = CommandState.EXECUTING;
    const result = Observable.create((observer: Observer<CommandResult>) => {
      this._gateway.send(context).subscribe((response: Observer<any>) => {
        context.state = CommandState.INVOKED;
        observer.next({
          command: context,
          payload: context.parse(response)
        });
      }, (error: any) => observer.error(context.parse(error)),
        () => observer.complete());
    });
    return result;
  }

  set state(value: CommandState) {
    this._state = value;
  }

  get state(): CommandState {
    return this._state;
  }
}
