import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { DataService, GenericRepository } from "src/core/abstracts";
import { Skill } from "src/core/entities";
import { SkillRepository } from "./skill.repository";
import { store } from "./store";
import { UUID } from "src/core/utils/UUID";

@Injectable()
export class InMemoryDataService implements DataService, OnApplicationBootstrap {
    skills: GenericRepository<Skill>;

    constructor() { }

    onApplicationBootstrap() {
        this.skills = new SkillRepository()
        store.skills = [
            { id: UUID.createUUIDv4(), name: "Typescript" },
            { id: UUID.createUUIDv4(), name: "Java" },
            { id: UUID.createUUIDv4(), name: "Golang" },
            { id: UUID.createUUIDv4(), name: "Postgres" }
        ].reduce((previousValue, currentValue) => {
            return {
                ...previousValue,
                [`${currentValue.id}`]: currentValue
            }
        }, {})
    }
}