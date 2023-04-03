import { Module } from "@nestjs/common";
import { SkillUseCaseModule } from "./useCases/skill/skill.usecase.module";
import { DataServiceModule } from "./services/data-services/data-services.module";
import { SkillController } from "./controllers/skill.controller";
import { UUIDController } from "./controllers/uuid.controller";
import { VacancyController } from "./controllers/vacancy.controller";
import { VacancyUseCaseModule } from "./useCases/vacancy/vacancy.usecase.module";
import { UserModule } from './useCases/user/user.module';
import { UserController } from "./controllers/user.controller";
import { UserMatchingVacanciesController } from "./controllers/user-mathcing-vacancies.controller";

@Module({
    imports: [
        DataServiceModule,
        SkillUseCaseModule,
        VacancyUseCaseModule,
        UserModule
    ],
    controllers: [
        SkillController,
        VacancyController,
        UserController,
        UUIDController,
        UserMatchingVacanciesController
    ],
    providers: []
})
export class AppModule { }