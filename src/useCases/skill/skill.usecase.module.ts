import { Module } from "@nestjs/common";
import { DataServiceModule } from "../../services";
import { SkillFactoryService } from "./skill.factory.service";
import { SkillUseCase } from "./skill.usecase";

@Module({
    imports: [DataServiceModule],
    providers: [SkillFactoryService, SkillUseCase],
    exports: [SkillFactoryService, SkillUseCase]
})
export class SkillUseCaseModule { }