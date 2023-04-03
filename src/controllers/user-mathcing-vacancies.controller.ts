import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserUseCase } from "../useCases/user/user.usecase";
import { MatchingVacanciesUseCase } from "../useCases/vacancy/matching-vacancies.usecase";
import { ResponseData } from "../core/valueObjects";
import { VacancyDto } from "../core/dtos";
import { Vacancy } from "../core/entities";

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