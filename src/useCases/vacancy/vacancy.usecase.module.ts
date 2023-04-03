import { Module } from "@nestjs/common";
import { DataServiceModule } from "src/services/dataServices/DataServices.module";
import { VacancyFactoryService } from "./vacancy.factory.service";
import { VacancyUseCase } from "./vacancy.usecase";
import { MatchingVacanciesUseCase } from "./matchingVacancies.usecase";
import { VacancyRequiredSkillUseCase } from "./vacancyRequiredSkill.usecase";

@Module({
    imports: [DataServiceModule],
    providers: [VacancyFactoryService, VacancyUseCase, MatchingVacanciesUseCase, VacancyRequiredSkillUseCase],
    exports: [VacancyFactoryService, VacancyUseCase, MatchingVacanciesUseCase, VacancyRequiredSkillUseCase]
})
export class VacancyUseCaseModule { }