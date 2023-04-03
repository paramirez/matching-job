import { Module } from "@nestjs/common";
import { SkillUseCaseModule } from "./useCases/skill/skill.usecase.module";
import { DataServiceModule } from "./services/dataServices/DataServices.module";
import { SkillController } from "./controllers/skill.controller";
import { UUIDController } from "./controllers/uuid.controller";

@Module({
    imports: [
        DataServiceModule,
        SkillUseCaseModule
    ],
    controllers: [
        SkillController,
        UUIDController
    ],
    providers: []
})
export class AppModule { }