export interface ValidSkill {
    skillId: string;
    years: number;
}

export const isEmptySkills = (skills: ValidSkill[]) => skills && Array.isArray(skills) && skills.length === 0
export const haveSkills = (skills: ValidSkill[]) => skills && Array.isArray(skills) && skills.length > 0