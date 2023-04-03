import { Module } from "@nestjs/common";
import { SkillUseCaseModule } from "./useCases/skill/skill.usecase.module";
import { DataServiceModule } from "./services/dataServices/DataServices.module";
import { SkillController } from "./controllers/skill.controller";
import { UUIDController } from "./controllers/uuid.controller";
import { VacancyController } from "./controllers/vacancy.controller";
import { VacancyUseCaseModule } from "./useCases/vacancy/vacancy.usecase.module";

@Module({
    imports: [
        DataServiceModule,
        SkillUseCaseModule,
        VacancyUseCaseModule
    ],
    controllers: [
        SkillController,
        VacancyController,
        UUIDController
    ],
    providers: []
})
export class AppModule { }