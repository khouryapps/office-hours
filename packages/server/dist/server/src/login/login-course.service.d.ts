import { KhouryDataParams, Role, Season } from '@koh/common';
import { CourseModel } from 'course/course.entity';
import { UserCourseModel } from 'profile/user-course.entity';
import { UserModel } from 'profile/user.entity';
import { Connection } from 'typeorm';
export declare class LoginCourseService {
    private connection;
    constructor(connection: Connection);
    addUserFromKhoury(info: KhouryDataParams): Promise<UserModel>;
    courseCRNToCourse(courseCRN: number, semester: string): Promise<CourseModel>;
    courseToUserCourse(userId: number, courseId: number, role: Role): Promise<UserCourseModel>;
    parseKhourySemester(khourySemester: string): {
        season: Season;
        year: number;
    };
    private getOrTransitionSemester;
    private disablePrevCourses;
    private hasUserCourse;
    private convertKhouryRole;
}
