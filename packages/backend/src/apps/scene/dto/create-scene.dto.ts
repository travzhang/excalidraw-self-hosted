import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsObject,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSceneDto {
  @ApiProperty({
    example: 'Untitled scene',
    description: 'The title of the scene',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'scene data',
    description: '场景数据',
  })
  @IsString()
  @IsNotEmpty()
  data: string;

  @ApiProperty({
    example: 1,
    description: '所属工作空间的ID',
  })
  @IsString()
  @IsNotEmpty()
  workspaceID: string;
}
