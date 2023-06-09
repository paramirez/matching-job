import { Injectable } from "@nestjs/common";
import { CreateSkillDto, UpdateSkillDto } from "../../core/dtos";
import { Skill } from "../../core/entities";
import { UUID } from "../../core/utils/UUID";

@Injectable()
export class SkillFactoryService {
    createSkill(createSkillDto: CreateSkillDto): Skill {
        return { id: UUID.createUUIDv4(), name: createSkillDto.name }
    }

    updateSkill(updateSkillDto: UpdateSkillDto): Omit<Skill, 'id'> {
        const skill = { name: updateSkillDto.name }
        return skill;
    }
}