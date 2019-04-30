import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line:class-name
export class book1556618472206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [
                {
                    name: 'bookId',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    isGenerated: true,
                    isUnique: true,
                },
                {
                    name: 'bookName',
                    type: 'varchar',
                },
                {
                    name: 'category',
                    type: 'varchar',
                },
                {
                    name: 'author',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'createdDate',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'updatedDate',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('books');
    }

}
