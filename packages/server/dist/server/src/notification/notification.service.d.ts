import { ConfigService } from '@nestjs/config';
import { DeepPartial } from 'typeorm';
import { DesktopNotifModel } from './desktop-notif.entity';
export declare const NotifMsgs: {
    phone: {
        WRONG_MESSAGE: string;
        COULD_NOT_FIND_NUMBER: string;
        UNREGISTER: string;
        DUPLICATE: string;
        OK: string;
    };
    queue: {
        ALERT_BUTTON: string;
        THIRD_PLACE: string;
        TA_HIT_HELPED: (taName: string) => string;
        REMOVED: string;
    };
    ta: {
        STUDENT_JOINED_EMPTY_QUEUE: string;
    };
};
export declare class NotificationService {
    private configService;
    desktopPublicKey: string;
    constructor(configService: ConfigService);
    registerDesktop(info: DeepPartial<DesktopNotifModel>): Promise<DesktopNotifModel>;
    notifyUser(userId: number, message: string): Promise<void>;
    notifyDesktop(nm: DesktopNotifModel, message: string): Promise<void>;
}
