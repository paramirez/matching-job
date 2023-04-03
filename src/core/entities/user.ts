import { Entity } from "./entity"
import { ValidSkill } from "../valueObjects"

export interface User extends Entity {
    name: string
    skills: ValidSkill[]
}