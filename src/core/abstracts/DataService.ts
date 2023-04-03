import { Skill } from "../entities";
import { GenericRepository } from "./GenericRepository";

export abstract class DataService {
    abstract skills: GenericRepository<Skill>
}