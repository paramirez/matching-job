import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from "class-validator";
import { ValidSkill } from "../valueObjects";
import { Type } from "class-transformer";
import { ValidSkillDto } from "./validSkill.dto";
import { User } from "../entities";

export class UserDto implements User {
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
        description: "Name of user",
        type: String
    })
    name: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @ArrayMinSize(10)
    @Type(() => ValidSkillDto)
    @ApiProperty({
        description: "Skills to the user",
        type: [ValidSkillDto]
    })
    skills: ValidSkill[];
}

export class CreateUserDto extends OmitType(UserDto, ['skills']) { }
export class UpdateUserDto extends PartialType(OmitType(UserDto, ['id', 'skills'])) { }
export class IdUserDto extends PickType(UserDto, ['id']) { }
export class UserSkillsDto extends PickType(UserDto, ['skills']) { }
