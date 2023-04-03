import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/core/dtos";
import { User } from "src/core/entities";

@Injectable()
export class UserFactoryService {
    createUser(createUserUpdateUserDto: CreateUserDto): User {
        return { ...createUserUpdateUserDto, skills: [] }
    }

    updateUser(updateUserUpdateUserDto: UpdateUserDto): Partial<Omit<User, 'id'>> {
        const user: Partial<Omit<User, 'id'>> = { ...updateUserUpdateUserDto }
        return user;
    }
}