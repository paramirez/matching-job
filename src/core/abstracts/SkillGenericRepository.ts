import { Skill } from "../entities"
import { ValidSkill } from "../valueObjects"
import { GenericRepository } from "./GenericRepository"

export abstract class SkillGenericRepository extends GenericRepository<Skill> {
    abstract hasAllSkills(skills: ValidSkill[]);
}