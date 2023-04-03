import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { DataService, GenericRepository } from "src/core/abstracts";
import { Skill } from "src/core/entities";
import { inMemoryStore } from "./in-memory.store";
import { Vacancy } from "src/core/entities/vacancy";
import { InMemoryRepository } from "./in-memory.repository";
import { skillsStore } from "./store/skills";
import { vacanciesStore } from "./store/vacancies";
import { usersStore } from "./store/users";
import { User } from "src/core/entities/user";

@Injectable()
export class InMemoryDataService implements DataService, OnApplicationBootstrap {
    skills: GenericRepository<Skill>
    vacancies: GenericRepository<Vacancy>;
    users: GenericRepository<User>;

    constructor() { }

    transformDataForPersist(dataArray) {
        return dataArray.reduce((previousValue, currentValue) => {
            return {
                ...previousValue,
                [`${currentValue.id}`]: currentValue
            }
        }, {})
    }

    onApplicationBootstrap() {
        this.skills = new InMemoryRepository<Skill>("skills")
        this.vacancies = new InMemoryRepository<Vacancy>("vacancies")
        this.users = new InMemoryRepository<User>("users")

        inMemoryStore.skills = this.transformDataForPersist(skillsStore)
        inMemoryStore.vacancies = this.transformDataForPersist(vacanciesStore)
        inMemoryStore.users = this.transformDataForPersist(usersStore)
    }
}