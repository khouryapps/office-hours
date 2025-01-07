import { Heatmap } from '@koh/common';
import { BaseEntity } from 'typeorm';
import { AlertModel } from '../alerts/alerts.entity';
import { EventModel } from '../profile/event-model.entity';
import { UserCourseModel } from '../profile/user-course.entity';
import { QueueModel } from '../queue/queue.entity';
import { SemesterModel } from '../semester/semester.entity';
export declare class CourseModel extends BaseEntity {
    id: number;
    queues: QueueModel[];
    name: string;
    sectionGroupName: string;
    coordinator_email: string;
    icalURL: string;
    userCourses: UserCourseModel;
    semester: SemesterModel;
    semesterId: number;
    enabled: boolean;
    heatmap: Heatmap | false;
    timezone: string;
    events: EventModel[];
    alerts: AlertModel[];
    selfEnroll: boolean;
}
