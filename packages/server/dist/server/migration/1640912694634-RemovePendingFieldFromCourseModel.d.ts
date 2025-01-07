import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RemovePendingFieldFromCourseModel1640912694634 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
