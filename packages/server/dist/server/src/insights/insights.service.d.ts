import { Connection } from 'typeorm';
import { Filter } from './insight-objects';
import { PossibleOutputTypes, InsightObject, ListInsightsResponse } from '@koh/common';
import { UserModel } from 'profile/user.entity';
import { Cache } from 'cache-manager';
declare type ComputeOutputParams = {
    insight: InsightObject;
    filters: Filter[];
};
declare type GenerateAllInsightParams = {
    insights: InsightObject[];
    filters: Filter[];
};
export declare class InsightsService {
    private connection;
    private cacheManager;
    constructor(connection: Connection, cacheManager: Cache);
    computeOutput({ insight, filters, }: ComputeOutputParams): Promise<PossibleOutputTypes>;
    generateAllInsights({ insights, filters, }: GenerateAllInsightParams): Promise<PossibleOutputTypes[]>;
    convertToInsightsListResponse(insightNames: string[]): ListInsightsResponse;
    toggleInsightOn(user: UserModel, insightName: string): Promise<string[]>;
    toggleInsightOff(user: UserModel, insightName: string): Promise<void>;
}
export {};
