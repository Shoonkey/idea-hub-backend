import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { UserModule } from './user.module';

@Module({
  imports: [PrismaModule, UserModule], // AuthModule, IdeaModule],
})
export class AppModule {}
