import { Module } from '@nestjs/common';
import { DataServiceModule } from 'src/services';
import { UserFactoryService } from './user.factory.service';
import { UserUseCase } from './user.usecase';
import { UserSkillUseCase } from './user-skill.usecase';

@Module({
    imports: [DataServiceModule],
    providers: [UserFactoryService, UserUseCase, UserSkillUseCase],
    exports: [UserFactoryService, UserUseCase, UserSkillUseCase]
})
export class UserModule { }
