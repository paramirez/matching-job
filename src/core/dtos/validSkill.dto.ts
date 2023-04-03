import { IsNotEmpty, IsNumber, IsUUID, Max, Min } from "class-validator";
import { ValidSkill } from "../valueObjects";
import { ApiProperty } from "@nestjs/swagger";

export class ValidSkillDto implements ValidSkill {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: "Identificador UUID v4",
        type: String
    })
    skillId: string;

    @IsNumber()
    @Min(1)
    @Max(100)
    @ApiProperty({
        description: "PositionName Name of vacancy",
        type: String
    })
    years: number;
}