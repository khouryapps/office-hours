import { TACheckinTimesResponse, RegisterCourseParams, Role, EditCourseInfoParams, GetCourseUserInfoResponse } from '@koh/common';
import { Connection } from 'typeorm';
import { UserCourseModel } from '../profile/user-course.entity';
import { LoginCourseService } from '../login/login-course.service';
export declare class CourseService {
    private connection;
    private loginCourseService;
    constructor(connection: Connection, loginCourseService: LoginCourseService);
    getTACheckInCheckOutTimes(courseId: number, startDate: string, endDate: string): Promise<TACheckinTimesResponse>;
    removeUserFromCourse(userCourse: UserCourseModel): Promise<void>;
    editCourse(courseId: number, coursePatch: EditCourseInfoParams): Promise<void>;
    registerCourses(body: RegisterCourseParams[], userId: number): Promise<void>;
    getUserInfo(courseId: number, page: number, pageSize: number, search?: string, role?: Role): Promise<GetCourseUserInfoResponse>;
}
