import { UserModel } from '../profile/user.entity';
import { RolesGuard } from '../guards/role.guard';
export declare class CourseRolesGuard extends RolesGuard {
    setupData(request: any): Promise<{
        courseId: number;
        user: UserModel;
    }>;
}
