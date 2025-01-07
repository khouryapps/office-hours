import { QuestionGroupModel } from '../question/question-group.entity';
import { BaseEntity } from 'typeorm';
import { CourseModel } from '../course/course.entity';
import { UserModel } from '../profile/user.entity';
import { QuestionModel } from '../question/question.entity';
export declare class QueueModel extends BaseEntity {
    id: number;
    course: CourseModel;
    courseId: number;
    room: string;
    questions: QuestionModel[];
    groups: QuestionGroupModel[];
    notes: string;
    staffList: UserModel[];
    allowQuestions: boolean;
    isProfessorQueue: boolean;
    isDisabled: boolean;
    startTime: Date;
    endTime: Date;
    isOpen: boolean;
    checkIsOpen(): Promise<boolean>;
    queueSize: number;
    addQueueSize(): Promise<void>;
}
