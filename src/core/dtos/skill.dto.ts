import { OmitType, PickType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class SkillDto {
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
        description: "Unique Name of skill",
        type: String
    })
    name: string;
}

export class CreateSkillDto extends SkillDto { }
export class UpdateSkillDto extends OmitType(SkillDto, ['id']) { }
export class IdSkillDto extends PickType(SkillDto, ['id']) { }
