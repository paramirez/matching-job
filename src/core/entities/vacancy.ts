import { ValidSkill } from "../valueObjects";

export interface Vacancy {
    id: string;
    positionName: string;
    requiredSkills: ValidSkill[];
}