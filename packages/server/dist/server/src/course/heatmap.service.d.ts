import { Cache } from 'cache-manager';
import { Heatmap } from '@koh/common';
import { QuestionModel } from '../question/question.entity';
import 'moment-timezone';
export declare class HeatmapService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getCachedHeatmapFor(courseId: number): Promise<Heatmap | false>;
    _getHeatmapFor(courseId: number): Promise<Heatmap | false>;
    _generateHeatMapWithReplay(questions: QuestionModel[], hourTimestamps: [number, number][], timezone: string, bucketSize: number, samplesPerBucket: number): Heatmap;
    create(courseId: number): Promise<void>;
}
