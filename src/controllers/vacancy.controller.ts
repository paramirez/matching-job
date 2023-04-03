import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateVacancyDto, IdVacancyDto, UpdateVacancyDto, ValidSkillDto } from "src/core/dtos";
import { Vacancy } from "src/core/entities";
import { Nullable, ResponseData } from "src/core/valueObjects";
import { VacancyUseCase } from "src/useCases/vacancy/vacancy.usecase";
import { VacancyRequiredSkillUseCase } from "src/useCases/vacancy/vacancy-required-skill.usecase";

@ApiTags('vacancy')
@Controller('api/vacancy')
export class VacancyController {
    constructor(private vacancyUseCase: VacancyUseCase, private vacancyRequiredSkillUseCase: VacancyRequiredSkillUseCase) { }

    @Get()
    @ApiOperation({ summary: "Obtain all vacancies" })
    @ApiOkResponse({ description: "List of vacancies" })
    async getAll(): Promise<ResponseData<Vacancy[]>> {
        const result = await this.vacancyUseCase.getAllVacancies()
        return { data: result }
    }

    @Get(':id')
    @ApiOperation({ summary: "Obtain a vacancies by id" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a vacancy', type: "string" })
    async getById(@Param() params: IdVacancyDto): Promise<ResponseData<Nullable<Vacancy>>> {
        const result = await this.vacancyUseCase.getVacancyById(params.id)
        return { data: result }
    }

    @Post()
    @ApiOperation({ summary: "Create a vacancies" })
    @HttpCode(201)
    @ApiBody({ description: 'Body request', type: CreateVacancyDto })
    async create(@Body() body: CreateVacancyDto) {
        await this.vacancyUseCase.createVacancy(body)
    }

    @Put(':id')
    @ApiOperation({ summary: "Update a vacancies" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a vacancy', type: "string" })
    async update(@Param() params: IdVacancyDto, @Body() body: UpdateVacancyDto) {
        await this.vacancyUseCase.updateVacancy(params.id, body)
    }

    @Post(':id/skills')
    @ApiOperation({ summary: "Add a skill of a vacancy" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a vacancy', type: "string" })
    @ApiBody({ description: 'Skill and years of experience', type: ValidSkillDto })
    async addSkill(@Param('id') id: string, @Body() body: ValidSkillDto) {
        await this.vacancyRequiredSkillUseCase.addRequiredSkill(id, body)
    }

    @Delete(':id/skills/:skillId')
    @ApiOperation({ summary: "Remove a skill of a vacancy" })
    @ApiParam({ name: "id", description: 'Identifier in format UUID for a vacancy', type: "string" })
    @ApiParam({ name: "skillId", description: 'Identifier in format UUID for a skill', type: "string" })
    async removeSkill(@Param('id') id: string, @Param('skillId') skillId: string) {
        await this.vacancyRequiredSkillUseCase.RemoveRequiredSkill(id, skillId)
    }

}