import { UserModel } from '../profile/user.entity';
import { BaseEntity } from 'typeorm';
import { Season } from '@koh/common';
export declare class LastRegistrationModel extends BaseEntity {
    id: number;
    prof: UserModel;
    profId: number;
    lastRegisteredSemester: string;
}
export declare const khourySemesterCodes: Record<Season, string>;
