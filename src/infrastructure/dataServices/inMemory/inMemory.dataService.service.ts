import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { DataService, GenericRepository, SkillGenericRepository } from "src/core/abstracts";
import { Skill } from "src/core/entities";
import { SkillRepository } from "./skill.repository";
import { store } from "./store";
import { UUID } from "src/core/utils/UUID";
import { Vacancy } from "src/core/entities/vacancy";
import { VacancyRepository } from "./vacancy.repository";

@Injectable()
export class InMemoryDataService implements DataService, OnApplicationBootstrap {
    skills: SkillGenericRepository
    vacancies: GenericRepository<Vacancy>;

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
        this.skills = new SkillRepository()
        this.vacancies = new VacancyRepository()

        const typescriptId = "17c6ee1a-2a74-4ae2-b5fe-90a2a560894e"
        const javaId = "bba9202b-b6e0-40fc-99bc-2bcd755457fb"
        const golangId = "fe1b8051-5f1b-4ba0-b8fa-447383fa6e5f"
        const mongodbId = "50cc6946-e467-4915-b50c-23c065b83ba7"
        const nodeId = "f4ccf94c-7540-4ce1-8a9a-9bf533a80ba1"
        const reactId = "67d1c37b-a8ae-4de0-81af-ee61ba96ce72"

        const skills: Skill[] = [
            { id: typescriptId, name: "Typescript" },
            { id: javaId, name: "Java" },
            { id: golangId, name: "Golang" },
            { id: mongodbId, name: "mongodb" },
            { id: reactId, name: "React" },
            { id: nodeId, name: "NodeJS" },
            { id: mongodbId, name: "mongodb" },
        ]

        const vacancies: Vacancy[] = [
            {
                id: "cba59868-e976-4f36-abea-ba0652953075",
                positionName: "MERN FullStack Developer",
                requiredSkills: [
                    { skillId: typescriptId, years: 2 },
                    { skillId: nodeId, years: 3 },
                    { skillId: mongodbId, years: 2 },
                    { skillId: reactId, years: 3 },
                ]
            },
            {
                id: "8ceb11b6-c1ec-436f-813c-47eb04d92fec",
                positionName: "Java FullStack Developer",
                requiredSkills: [
                    { skillId: javaId, years: 2 },
                    { skillId: mongodbId, years: 2 },
                    { skillId: reactId, years: 3 },
                ]
            },
            {
                id: "5dfdc8a2-e09d-4a56-aed4-f95cf909d1c9",
                positionName: "Golang FullStack Developer",
                requiredSkills: [
                    { skillId: golangId, years: 1 },
                    { skillId: mongodbId, years: 2 },
                    { skillId: reactId, years: 3 },
                ]
            },
        ]

        store.skills = this.transformDataForPersist(skills)
        store.vacancies = this.transformDataForPersist(vacancies)
        store.users = this.transformDataForPersist(skills)
    }
}