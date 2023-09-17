import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/Prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private Prisma: PrismaService) { }
  async create(data: Prisma.PostCreateInput) {
    return await this.Prisma.post.create({ data })

  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
