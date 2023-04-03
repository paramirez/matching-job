import { GenericRepository } from "src/core/abstracts";
import { Vacancy } from "src/core/entities";
import { Nullable } from "src/core/valueObjects";
import { store } from "./store";

export class VacancyRepository extends GenericRepository<Vacancy> {
    private getVacancyStore = () => Object.values<Vacancy>(store.vacancies)

    async getAll(): Promise<Vacancy[]> {
        console.log(this.getVacancyStore())
        return this.getVacancyStore()
    }

    async get(id: string): Promise<Nullable<Vacancy>> {
        const result = this.getVacancyStore().find((vacancy) => vacancy.id === id)
        return result || null
    }

    async create(item: Vacancy): Promise<void> {
        store.vacancies = {
            ...store.vacancies,
            [`${item.id}`]: item
        }
    }

    async update(id: string, partial: Vacancy): Promise<void> {
        const vacancy = await this.get(id)
        console.log(vacancy, partial)
        store.vacancies[id] = {
            ...vacancy,
            ...partial
        }
        console.log(store.vacancies[id])
    }
}