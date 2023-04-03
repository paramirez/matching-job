import { Injectable } from "@nestjs/common"
import { DataService } from "src/core/abstracts"
import { Vacancy } from "src/core/entities"
import { ValidSkill } from "src/core/valueObjects"

@Injectable()
export class MatchingVacanciesUseCase {
    constructor(
        private dataServices: DataService
    ) { }

    private validateSkills(vacancyRequiredSkills: ValidSkill[], skills: ValidSkill[]): boolean {
        /**
         * Rango mínimo de experiencia que pide la vacante por skill,
         * comparado con lo que tiene la lista de skills que intentan aplicar,
         * esto tiene solo las restricciones experiencia mínima de skill,
         * pero se le pueden recomendar a aquellos que cumplan con al menos un 50% o más de los requisitos
         */

        const matchKeys = vacancyRequiredSkills.reduce((previousValue: string[], currentKey) => {
            const skill = skills.find(skillApplied => skillApplied.skillId === currentKey.skillId)
            if (skill !== undefined && skill.years >= currentKey.years)
                return previousValue.concat(currentKey.skillId)
            return previousValue
        }, [])

        const minimusRequiredSkills = Math.ceil(vacancyRequiredSkills.length / 2)
        return matchKeys.length >= minimusRequiredSkills
    }

    async findMatchingVacancies(skills: ValidSkill[]): Promise<Vacancy[]> {
        const vacancies = await this.dataServices.vacancies.getAll()
        if (!vacancies.length) return []

        const matchingVacancies = vacancies.filter(vacancy => this.validateSkills(vacancy.requiredSkills, skills))
        return matchingVacancies
    }
}
