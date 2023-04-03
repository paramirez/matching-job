import { ApiProperty } from "@nestjs/swagger";

export class UUIDResponse {
    @ApiProperty({
        description: 'UUID string',
        type: String
    })
    uuid: string
}