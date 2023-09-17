import { AutoMap } from '@automapper/classes';

export class CategoryEntity {
  @AutoMap()
  id: number;
  @AutoMap()
  title: string;
  @AutoMap()
  createdAt: Date;
  @AutoMap()
  updatedAt: Date;
}
