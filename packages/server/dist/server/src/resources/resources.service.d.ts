import { HttpService } from '@nestjs/common';
import { CourseModel } from '../course/course.entity';
import { Connection } from 'typeorm';
import { RedisService } from 'nestjs-redis';
export declare class ResourcesService {
    private connection;
    private httpService;
    private readonly redisService;
    constructor(connection: Connection, httpService: HttpService, redisService: RedisService);
    refetchAllCalendarsJob(): Promise<void>;
    private refetchAllCalendars;
    refetchCalendar(course: CourseModel): Promise<string>;
    getCalFilename(courseId: number): string;
}
