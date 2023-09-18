import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/Prisma.service';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

const select: Prisma.UserSelect<DefaultArgs> = {
  id: true,
  firstName: true,
  lastName: true,
  userName: true,
  email: true,
}

@Injectable()
export class PostService {
  constructor(private Prisma: PrismaService) { }
  async create(data: Prisma.PostUncheckedCreateInput) {

    return await this.Prisma.post.create({ data })

  }

  async findAll() {
    return await this.Prisma.post.findMany({ include: { author: { select }, Category: true } });
  }

  async findOne(where) {
    return this.Prisma.post.findUnique({ where, include: { author: { select }, Category: true } });;
  }

  async findUserPosts(where) {
    return this.Prisma.post.findUnique({ where, include: { author: { select }, Category: true } });;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
