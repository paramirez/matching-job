import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { VacancyDto } from "src/core/dtos";
import { Vacancy } from "src/core/entities";
import { ResponseData } from "src/core/valueObjects";
import { UserUseCase } from "src/useCases/user/user.usecase";
import { MatchingVacanciesUseCase } from "src/useCases/vacancy/matching-vacancies.usecase";

@ApiTags('user')
@Controller('api/user/:id/vacancies/match')
export class UserMatchingVacanciesController {
    constructor(private userUseCase: UserUseCase, private matchingVacanciesUseCase: MatchingVacanciesUseCase) { }

    @Get()
    @ApiOperation({ summary: "Obtain all matching User vacancies" })
    @ApiOkResponse({ description: "Generate a new UUID", type: ResponseData<VacancyDto[]> })
    async getMatchingUserVacancies(@Param('id') id: string): Promise<ResponseData<Vacancy[]>> {
        const user = await this.userUseCase.getUserById(id)
        const vacancies = await this.matchingVacanciesUseCase.findMatchingVacancies(user.skills)
        return {
            data: vacancies
        }
    }
}