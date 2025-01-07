import { Season } from '@koh/common';
import { SemesterService } from './semester.service';
import { SemesterModel } from './semester.entity';
export declare class SetSemesterCommand {
    private readonly semService;
    constructor(semService: SemesterService);
    create(mode: string, semester: string, year: number): Promise<void>;
    validateSemester(sem: string): Season;
    enableOrDisable(mode: string): boolean;
    getSemester(sea: Season, year: number): Promise<SemesterModel>;
}
