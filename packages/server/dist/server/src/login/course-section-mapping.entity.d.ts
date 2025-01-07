import { BaseEntity } from 'typeorm';
import { CourseModel } from '../course/course.entity';
export declare class CourseSectionMappingModel extends BaseEntity {
    id: number;
    crn: number;
    course: CourseModel;
    courseId: number;
}
