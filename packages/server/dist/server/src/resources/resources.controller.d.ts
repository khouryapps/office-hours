import { HttpService } from '@nestjs/common';
import { Response } from 'express';
import { Connection } from 'typeorm';
import { ResourcesService } from './resources.service';
export declare class ResourcesController {
    private connection;
    private httpService;
    private resourcesService;
    constructor(connection: Connection, httpService: HttpService, resourcesService: ResourcesService);
    getCourseCalendar(courseId: number, refresh: boolean, res: Response): Promise<void>;
}
