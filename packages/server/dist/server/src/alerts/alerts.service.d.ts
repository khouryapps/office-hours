import { Alert, AlertPayload, AlertType } from '@koh/common';
import { Connection } from 'typeorm';
import { AlertModel } from './alerts.entity';
export declare class AlertsService {
    private connection;
    constructor(connection: Connection);
    removeStaleAlerts(alerts: AlertModel[]): Promise<Alert[]>;
    assertPayloadType(alertType: AlertType, payload: AlertPayload): boolean;
    getUnresolvedRephraseQuestionAlert(queueId: number): Promise<AlertModel[]>;
}
