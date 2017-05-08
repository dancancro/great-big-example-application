import { PROGRESS, COMPLETE } from './game-p2p.commands';
import { RPCCommand } from '../../commands/rpc.command';

export const gameProgress = (payload: any, baseCommand: RPCCommand) => {
    baseCommand.payload.appendPair('payload', { text: payload.text });
    baseCommand.payload.appendPair('method', PROGRESS);
    return baseCommand;
};

export const gameComplete = (payload: any, baseCommand: RPCCommand) => {
    baseCommand.payload.appendPair('payload', {});
    baseCommand.payload.appendPair('method', COMPLETE);
    return baseCommand;
};
