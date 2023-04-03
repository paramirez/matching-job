import { Injectable } from "@nestjs/common";
import { DataService } from "src/core/abstracts";
import { CreateUserDto, UpdateUserDto } from "src/core/dtos";
import { User } from "src/core/entities";
import { UserFactoryService } from "./user.factory.service";
import { AlreadyExistError, NotFoundError } from "src/core/errors";

@Injectable()
export class UserUseCase {
    constructor(
        private dataServices: DataService,
        private userFactoryService: UserFactoryService
    ) { }

    getAllUsers(): Promise<User[]> {
        return this.dataServices.users.getAll()
    }

    async getUserById(id: string): Promise<User> {
        const user = await this.dataServices.users.get(id)
        if (!user) throw new NotFoundError()
        return user
    }

    async createUser(createUserDto: CreateUserDto): Promise<void> {
        const user = this.userFactoryService.createUser(createUserDto)
        const alreadyExist = await this.dataServices.users.get(user.id)
        if (alreadyExist) throw new AlreadyExistError()

        await this.dataServices.users.create(user);
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<void> {
        const partialUser = this.userFactoryService.updateUser(updateUserDto);
        const found = await this.dataServices.users.get(id)
        if (!found) throw new NotFoundError()

        // more logic for update
        await this.dataServices.users.update(id, partialUser);
    }
}