import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { UserUseCase } from "../useCases/user/user.usecase";
import { UserSkillUseCase } from "../useCases/user/user-skill.usecase";
import { Nullable, ResponseData } from "../core/valueObjects";
import { User } from "../core/entities";
import { CreateUserDto, IdUserDto, UpdateUserDto, ValidSkillDto } from "../core/dtos";

@ApiTags('user')
@Controller('api/user')
export class UserController {
    constructor(private userUseCase: UserUseCase, private userSkillUserCase: UserSkillUseCase) { }

    @Get()
    @ApiOperation({ summary: "Obtain all users" })
    @ApiOkResponse({ description: "List of users" })
    async getAll(): Promise<ResponseData<User[]>> {
        const result = await this.userUseCase.getAllUsers()
        return { data: result }
    }

    @Get(':id')
    @ApiOperation({ summary: "Obtain a users by id" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a user', type: "string" })
    async getById(@Param() params: IdUserDto): Promise<ResponseData<Nullable<User>>> {
        const result = await this.userUseCase.getUserById(params.id)
        return { data: result }
    }

    @Post()
    @ApiOperation({ summary: "Create a users" })
    @HttpCode(201)
    @ApiBody({ description: 'Body request', type: CreateUserDto })
    async create(@Body() body: CreateUserDto) {
        await this.userUseCase.createUser(body)
    }

    @Put(':id')
    @ApiOperation({ summary: "Update a users" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a user', type: "string" })
    async update(@Param() params: IdUserDto, @Body() body: UpdateUserDto) {
        await this.userUseCase.updateUser(params.id, body)
    }

    @Post(':id/skills')
    @ApiOperation({ summary: "Add a skill of a user" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a user', type: "string" })
    @ApiBody({ description: 'Skill and years of experience', type: ValidSkillDto })
    async addSkill(@Param('id') id: string, @Body() body: ValidSkillDto) {
        await this.userSkillUserCase.addSkill(id, body)
    }

    @Delete(':id/skills/:skillId')
    @ApiOperation({ summary: "Remove a skill of a user" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a user', type: "string" })
    @ApiParam({ name: "skillId", description: 'Identifier in format UUID for a skill', type: "string" })
    async removeSkill(@Param('id') id: string, @Param('skillId') skillId: string) {
        await this.userSkillUserCase.RemoveSkill(id, skillId)
    }

}