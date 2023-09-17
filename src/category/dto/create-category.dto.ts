import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @ApiProperty({
    default: 'tech',
    description: 'choose a description for your category and its ((unique))',
  })
  @MinLength(3)
  title: string;
}

export class CatDTO {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
