import { Injectable } from "@nestjs/common"
import { DataService } from "src/core/abstracts"
import { NotFoundError } from "src/core/errors"
import { ValidSkill } from "src/core/valueObjects"

@Injectable()
export class UserSkillUseCase {
    constructor(
        private dataServices: DataService
    ) { }

    async addSkill(id: string, skill: ValidSkill): Promise<void> {
        const found = await this.dataServices.users.get(id)
        if (!found) throw new NotFoundError()

        const haveSkill = found.skills.find(requiredSkill => requiredSkill.skillId === skill.skillId)
        if (haveSkill) return

        const skillFound = await this.dataServices.skills.get(skill.skillId)
        if (!skillFound) throw new NotFoundError()

        await this.dataServices.users.update(id, {
            skills: found.skills.concat(skill)
        })
    }

    async RemoveSkill(id: string, skill: string): Promise<void> {
        const found = await this.dataServices.users.get(id)
        if (!found) throw new NotFoundError()

        const skills = found.skills.filter(userSkill => userSkill.skillId !== skill)
        if (skills.length < found.skills.length)
            await this.dataServices.users.update(id, {
                skills: skills
            })
    }
}
