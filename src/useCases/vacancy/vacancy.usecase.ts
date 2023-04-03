import { Injectable } from "@nestjs/common";
import { DataService } from "src/core/abstracts";
import { CreateVacancyDto, UpdateVacancyDto } from "src/core/dtos";
import { Vacancy } from "src/core/entities";
import { VacancyFactoryService } from "./vacancy.factory.service";
import { AlreadyExistError, FieldRequiredError, NotFoundError } from "src/core/errors";
import { ValidSkill, haveSkills, isEmptySkills } from "src/core/valueObjects";

@Injectable()
export class VacancyUseCase {
    constructor(
        private dataServices: DataService,
        private vacancyFactoryService: VacancyFactoryService
    ) { }

    getAllVacancies(): Promise<Vacancy[]> {
        return this.dataServices.vacancies.getAll()
    }

    getVacancyById(id: string): Promise<Vacancy> {
        return this.dataServices.vacancies.get(id)
    }

    async createVacancy(createVacancyDto: CreateVacancyDto): Promise<void> {
        const vacancy = this.vacancyFactoryService.createVacancy(createVacancyDto)
        const alreadyExist = await this.dataServices.vacancies.get(vacancy.id)
        if (alreadyExist) throw new AlreadyExistError()

        await this.dataServices.vacancies.create(vacancy);
    }

    async updateVacancy(id: string, updateVacancyDto: UpdateVacancyDto): Promise<void> {
        const partialVacancy = this.vacancyFactoryService.updateVacancy(updateVacancyDto);
        const found = await this.dataServices.vacancies.get(id)
        if (!found) throw new NotFoundError()

        // more logic for update
        await this.dataServices.vacancies.update(id, partialVacancy);
    }
}