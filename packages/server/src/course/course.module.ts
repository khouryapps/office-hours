import { CacheModule, Module } from '@nestjs/common';
import { QueueModule } from '../queue/queue.module';
import { LoginModule } from '../login/login.module';
import { LoginCourseService } from '../login/login-course.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { HeatmapService } from './heatmap.service';
import { ICalCommand } from './ical.command';
import { IcalService } from './ical.service';

@Module({
  controllers: [CourseController],
  imports: [QueueModule, LoginModule, CacheModule.register()],
  providers: [
    LoginCourseService,
    ICalCommand,
    IcalService,
    HeatmapService,
    CourseService,
  ],
})
export class CourseModule {}
