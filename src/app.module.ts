import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { AutoMapper } from './utils/modules/autoMapper.module';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostModule,
    CategoryModule,
    AutoMapper,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
