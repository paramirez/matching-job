import { Entity } from "./entity";
import { ValidSkill } from "../valueObjects";

export interface Vacancy extends Entity {
    positionName: string;
    requiredSkills: ValidSkill[];
}