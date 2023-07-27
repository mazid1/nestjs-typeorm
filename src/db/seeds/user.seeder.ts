import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../resources/users/entities/user.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(User);
    await repository.insert([
      {
        firstName: 'Mazedul',
        lastName: 'Islam',
        email: 'mazidmailbox@gmail.com',
      },
    ]);

    // ---------------------------------------------------

    const userFactory = factoryManager.get(User);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(5);
  }
}
