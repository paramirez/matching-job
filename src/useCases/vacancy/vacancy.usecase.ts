import { Injectable } from "@nestjs/common";
import { DataService } from "../../core/abstracts";
import { Vacancy } from "../../core/entities";
import { CreateVacancyDto, UpdateVacancyDto } from "../../core/dtos";
import { AlreadyExistError, NotFoundError } from "../../core/errors";
import { VacancyFactoryService } from "./vacancy.factory.service";

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