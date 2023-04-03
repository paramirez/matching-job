import { Injectable } from "@nestjs/common";
import { DataService } from "src/core/abstracts";
import { CreateSkillDto, UpdateSkillDto } from "src/core/dtos";
import { Skill } from "src/core/entities";
import { SkillFactoryService } from "./skill.factory.service";
import { AlreadyExistError, NotFoundError } from "src/core/errors";

@Injectable()
export class SkillUseCase {
    constructor(
        private dataServices: DataService,
        private skillFactoryService: SkillFactoryService
    ) { }

    getAllSkills(): Promise<Skill[]> {
        return this.dataServices.skills.getAll()
    }

    getSkillById(id: string): Promise<Skill> {
        return this.dataServices.skills.get(id)
    }

    async createSkill(createSkillDto: CreateSkillDto): Promise<void> {
        const skill = this.skillFactoryService.createSkill(createSkillDto)
        const alreadyExist = await this.dataServices.skills.get(skill.id)
        if (alreadyExist) throw new AlreadyExistError()
        await this.dataServices.skills.create(skill);

        // more logic
        return
    }

    async updateSkill(id: string, updateSkillDto: UpdateSkillDto): Promise<void> {
        const partialSkill = this.skillFactoryService.updateSkill(updateSkillDto);
        const found = await this.dataServices.skills.get(id)
        if (!found) throw new NotFoundError()
        // more logic for update
        return this.dataServices.skills.update(id, partialSkill);
    }
}