import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@ApiTags('无障碍点管理')
@Controller('workspace')
export class WorkspaceController {
  constructor(
    private readonly accessiblePointService: WorkspaceService,
  ) {}

  @Post('create')
  @ApiOperation({ summary: '创建无障碍点' })
  create(@Body() data: CreateWorkspaceDto) {
    return this.accessiblePointService.create();
  }

  @Get('scenic/:scenicAreaId')
  @ApiOperation({ summary: '获取景区无障碍点列表' })
  findByScenicArea(@Param('scenicAreaId') scenicAreaId: string) {
    return this.accessiblePointService.create();
  }
}
