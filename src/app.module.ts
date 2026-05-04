import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IdeaModule } from './idea/idea.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, AuthModule, IdeaModule],
  providers: [PrismaService],
})
export class AppModule {}
