import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsObject, IsString, IsUUID, ValidateNested } from "class-validator";
import { ValidSkill } from "../valueObjects";
import { Type } from "class-transformer";
import { ValidSkillDto } from "./validSkill.dto";

export class VacancyDto {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: "Identificador UUID v4",
        type: String
    })
    id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "PositionName Name of vacancy",
        type: String
    })
    positionName: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @ArrayMinSize(10)
    @Type(() => ValidSkillDto)
    @ApiProperty({
        description: "Skills required to apply for the vacancy",
        type: [ValidSkillDto]
    })
    requiredSkills: ValidSkill[];
}

export class CreateVacancyDto extends OmitType(VacancyDto, ['requiredSkills']) { }
export class UpdateVacancyDto extends PartialType(OmitType(VacancyDto, ['id', 'requiredSkills'])) { }
export class IdVacancyDto extends PickType(VacancyDto, ['id']) { }
export class RequiredSkillsDto extends PickType(VacancyDto, ['requiredSkills']) { }
