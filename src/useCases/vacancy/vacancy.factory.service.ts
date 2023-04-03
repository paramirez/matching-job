import { Injectable } from "@nestjs/common";
import { CreateVacancyDto, UpdateVacancyDto } from "src/core/dtos";
import { Vacancy } from "src/core/entities";

@Injectable()
export class VacancyFactoryService {
    createVacancy(createVacancyDto: CreateVacancyDto): Vacancy {
        return { ...createVacancyDto, requiredSkills: [] }
    }

    updateVacancy(updateVacancyDto: UpdateVacancyDto): Partial<Omit<Vacancy, 'id'>> {
        const vacancy: Partial<Omit<Vacancy, 'id'>> = { ...updateVacancyDto }
        return vacancy;
    }
}