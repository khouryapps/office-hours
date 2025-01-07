import { KhouryProfCourse } from '@koh/common';
import { UserModel } from '../profile/user.entity';
import { BaseEntity } from 'typeorm';
export declare class ProfSectionGroupsModel extends BaseEntity {
    id: number;
    prof: UserModel;
    profId: number;
    sectionGroups: KhouryProfCourse[];
}
