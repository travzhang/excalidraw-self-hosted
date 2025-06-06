import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './apps/user/user.module';
import { AuthModule } from './apps/auth/auth.module';
import {SceneModule} from "./apps/scene/scene.module";
import {WorkspaceModule} from "./apps/workspace/workspace.module";

@Module({
  imports: [
    PrismaModule,
    // apps
    UserModule,
    AuthModule,
    SceneModule,
    WorkspaceModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../frontend', 'dist'),
      exclude: ['/graphql'], // 这样就不会触发 path-to-regexp 解析错误
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
