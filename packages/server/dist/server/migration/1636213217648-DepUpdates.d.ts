import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class DepUpdates1636213217648 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
