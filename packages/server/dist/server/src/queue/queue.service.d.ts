import { ListQuestionsResponse, Role } from '@koh/common';
import { Connection } from 'typeorm';
import { QueueModel } from './queue.entity';
import { AlertsService } from '../alerts/alerts.service';
export declare class QueueService {
    private connection;
    private alertsService;
    constructor(connection: Connection, alertsService: AlertsService);
    getQueue(queueId: number): Promise<QueueModel>;
    getQuestions(queueId: number): Promise<ListQuestionsResponse>;
    personalizeQuestions(queueId: number, questions: ListQuestionsResponse, userId: number, role: Role): Promise<ListQuestionsResponse>;
}
