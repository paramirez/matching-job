import { Module } from "@nestjs/common";
import { DataServiceModule } from "../../services";
import { VacancyFactoryService } from "./vacancy.factory.service";
import { VacancyUseCase } from "./vacancy.usecase";
import { MatchingVacanciesUseCase } from "./matching-vacancies.usecase";
import { VacancyRequiredSkillUseCase } from "./vacancy-required-skill.usecase";

@Module({
    imports: [DataServiceModule],
    providers: [VacancyFactoryService, VacancyUseCase, MatchingVacanciesUseCase, VacancyRequiredSkillUseCase],
    exports: [VacancyFactoryService, VacancyUseCase, MatchingVacanciesUseCase, VacancyRequiredSkillUseCase]
})
export class VacancyUseCaseModule { }