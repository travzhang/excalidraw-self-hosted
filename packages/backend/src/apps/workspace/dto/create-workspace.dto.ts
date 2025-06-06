import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsObject } from 'class-validator';

// DTO: 创建无障碍点
export class CreateWorkspaceDto {
  @ApiProperty({ description: '所属景区ID' })
  @IsString()
  @IsNotEmpty()
  scenicAreaId: string;

  @ApiProperty({ description: '无障碍点名称' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: '无障碍点描述', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: '位置，GeoJSON Point 格式',
    example: { type: 'Point', coordinates: [121.5, 31.2] },
  })
  @IsObject()
  location: any;
}
