import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { SceneService } from './scene.service';
import { CreateSceneDto } from './dto/create-scene.dto';
// import { ScenicArea } from '@prisma/client';

@ApiTags('场景')
@Controller('scene')
export class SceneController {
  constructor(private readonly scenicAreaService: SceneService) {}
  //
  @Post()
  @ApiOperation({ summary: '创建场景' })
  @ApiBody({ type: CreateSceneDto })
  // @ApiResponse({ status: 201, description: '景区创建成功', type: ScenicArea })
  async create(@Body() createScenicAreaDto: CreateSceneDto): Promise<any> {
    return this.scenicAreaService.create(createScenicAreaDto);
  }

//   获取所有场景
  @Get()
  async get(@Body() data: any) {
    return this.scenicAreaService.get()
  }
}
