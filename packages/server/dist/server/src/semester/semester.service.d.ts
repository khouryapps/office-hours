import { Connection } from 'typeorm';
import { SemesterModel } from './semester.entity';
export declare class SemesterService {
    private connection;
    constructor(connection: Connection);
    toggleActiveSemester(semester: SemesterModel, enable: boolean): Promise<void>;
}
