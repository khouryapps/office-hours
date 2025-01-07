import { KhouryProfCourse } from '@koh/common';
import { LoginCourseService } from 'login/login-course.service';
import { Connection } from 'typeorm';
export declare class ProfileService {
    private connection;
    private loginCourseService;
    constructor(connection: Connection, loginCourseService: LoginCourseService);
    getPendingCourses(userId: number): Promise<KhouryProfCourse[]>;
    private isSameRegistrationTime;
}
