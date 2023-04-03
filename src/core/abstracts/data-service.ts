import { Skill, Vacancy } from "../entities";
import { User } from "../entities/user";
import { GenericRepository } from "./generic-repository";

export abstract class DataService {
    abstract skills: GenericRepository<Skill>
    abstract vacancies: GenericRepository<Vacancy>
    abstract users: GenericRepository<User>
}