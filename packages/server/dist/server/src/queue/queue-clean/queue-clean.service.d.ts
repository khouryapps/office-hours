import { Connection } from 'typeorm';
export declare class QueueCleanService {
    private connection;
    constructor(connection: Connection);
    cleanAllQueues(): Promise<void>;
    checkoutAllStaff(): Promise<void>;
    cleanSelfEnrollOverrides(): Promise<void>;
    cleanQueue(queueId: number, force?: boolean): Promise<void>;
    private unsafeClean;
}
