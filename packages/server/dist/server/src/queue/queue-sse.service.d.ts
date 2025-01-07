/// <reference types="lodash" />
import { Role } from '@koh/common';
import { Response } from 'express';
import { SSEService } from 'sse/sse.service';
import { QueueService } from './queue.service';
declare type QueueClientMetadata = {
    userId: number;
    role: Role;
};
export declare class QueueSSEService {
    private queueService;
    private sseService;
    constructor(queueService: QueueService, sseService: SSEService<QueueClientMetadata>);
    subscribeClient(queueId: number, res: Response, metadata: QueueClientMetadata): void;
    updateQuestions: import("lodash").DebouncedFunc<(queueId: number) => Promise<void>>;
    updateQueue: import("lodash").DebouncedFunc<(queueId: number) => Promise<void>>;
    private sendToRoom;
    private throttleUpdate;
}
export {};
