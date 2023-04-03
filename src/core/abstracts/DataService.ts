import { Skill, Vacancy } from "../entities";
import { GenericRepository } from "./GenericRepository";
import { SkillGenericRepository } from "./SkillGenericRepository";

export abstract class DataService {
    abstract skills: SkillGenericRepository
    abstract vacancies: GenericRepository<Vacancy>
}