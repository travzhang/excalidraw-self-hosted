import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma.service';
// import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SceneService {
  constructor(private prisma: PrismaService) {}

  async create(data): Promise<any> {
    console.log(data,'data')
    return this.prisma.scene.create({
      data: {
        title:'s',
        workspaceID:1,
        data: JSON.stringify({
          name:'z'
        }),
        creator:'123'
      },
    });
  }
  async get(){
    return this.prisma.scene.findMany({
      where:{}
    })
  }
}
