import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumnInUserTable1690437844800 implements MigrationInterface {
    name = 'AddEmailColumnInUserTable1690437844800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
