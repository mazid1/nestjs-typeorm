import { MigrationInterface, QueryRunner } from "typeorm";

export class NotNullEmailColumnInUserTable1690437906667 implements MigrationInterface {
    name = 'NotNullEmailColumnInUserTable1690437906667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "email" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "email" SET DEFAULT ''`);
    }

}
