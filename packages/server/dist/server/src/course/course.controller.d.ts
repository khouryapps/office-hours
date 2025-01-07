import { EditCourseInfoParams, GetCourseOverridesResponse, GetCourseResponse, GetCourseUserInfoResponse, QueuePartial, RegisterCourseParams, Role, TACheckinTimesResponse, TACheckoutResponse, UpdateCourseOverrideBody, UpdateCourseOverrideResponse } from '@koh/common';
import { Connection } from 'typeorm';
import { UserModel } from '../profile/user.entity';
import { QueueModel } from '../queue/queue.entity';
import { QueueCleanService } from '../queue/queue-clean/queue-clean.service';
import { QueueSSEService } from '../queue/queue-sse.service';
import { CourseService } from './course.service';
import { HeatmapService } from './heatmap.service';
export declare class CourseController {
    private connection;
    private queueCleanService;
    private queueSSEService;
    private heatmapService;
    private courseService;
    constructor(connection: Connection, queueCleanService: QueueCleanService, queueSSEService: QueueSSEService, heatmapService: HeatmapService, courseService: CourseService);
    get(id: number, user: UserModel): Promise<GetCourseResponse>;
    editCourseInfo(courseId: number, coursePatch: EditCourseInfoParams): Promise<void>;
    checkIn(courseId: number, room: string, user: UserModel): Promise<QueuePartial>;
    generateQueue(courseId: number, room: string, user: UserModel, body: {
        notes: string;
        isProfessorQueue: boolean;
    }): Promise<QueueModel>;
    checkOut(courseId: number, room: string, user: UserModel): Promise<TACheckoutResponse>;
    getCourseOverrides(courseId: number): Promise<GetCourseOverridesResponse>;
    addOverride(courseId: number, overrideInfo: UpdateCourseOverrideBody): Promise<UpdateCourseOverrideResponse>;
    deleteOverride(courseId: number, overrideInfo: UpdateCourseOverrideBody): Promise<void>;
    withdrawCourse(courseId: number, userId: number): Promise<void>;
    registerCourses(body: RegisterCourseParams[], userId: number): Promise<void>;
    taCheckinTimes(courseId: number, startDate: string, endDate: string): Promise<TACheckinTimesResponse>;
    getUserInfo(courseId: number, page: number, role?: Role, search?: string): Promise<GetCourseUserInfoResponse>;
    toggleSelfEnroll(courseId: number): Promise<void>;
}
