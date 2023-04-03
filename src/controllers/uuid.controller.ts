import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UUIDResponse } from "../core/dtos";
import { UUID } from "../core/utils/UUID";

@ApiTags('utils')
@Controller('api/utils')
export class UUIDController {
    @Get('uuid')
    @ApiOperation({ summary: "Obtain a generated UUID" })
    @ApiOkResponse({ description: "Generate a new UUID", type: UUIDResponse })
    get(): UUIDResponse {
        return {
            uuid: UUID.createUUIDv4()
        }
    }
}