import { Body, Controller, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateSkillDto, IdSkillDto, SkillDto, UpdateSkillDto } from "src/core/dtos";
import { Skill } from "src/core/entities";
import { Nullable, ResponseData } from "src/core/valueObjects";
import { SkillUseCase } from "src/useCases/skill/skill.usecase";

@ApiTags('skill')
@Controller('api/skill')
export class SkillController {
    constructor(private skillUseCase: SkillUseCase) { }

    @Get()
    @ApiOperation({ summary: "Obtain all skills" })
    @ApiOkResponse({ description: "List of skills" })
    async getAll(): Promise<ResponseData<Skill[]>> {
        const result = await this.skillUseCase.getAllSkills()
        return { data: result }
    }

    @Get(':id')
    @ApiOperation({ summary: "Obtain a skills by id" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a skill', type: "string" })
    async getById(@Param() params: IdSkillDto): Promise<ResponseData<Nullable<Skill>>> {
        const result = await this.skillUseCase.getSkillById(params.id)
        return { data: result }
    }

    @Post()
    @ApiOperation({ summary: "Create a skills" })
    @HttpCode(201)
    async create(@Body() body: CreateSkillDto) {
        await this.skillUseCase.createSkill(body)
    }

    @Put(':id')
    @ApiOperation({ summary: "Update a skills" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a skill', type: "string" })
    async update(@Param() params: IdSkillDto, @Body() body: UpdateSkillDto) {
        await this.skillUseCase.updateSkill(params.id, body)
    }
}