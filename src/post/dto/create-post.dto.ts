import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsInt } from "class-validator"

export class CreatePostDto {
    @IsString()
    @ApiProperty({
        default: 'starfield',
        description: 'Write a title ',
    })
    title: string
    @IsString()
    @ApiProperty({
        default: 'some....',
        description: 'Write your content ',
    })
    content: string
    @IsInt()
    @ApiProperty({
        default: 1,
        description: 'Write a category ID ',
    })
    categoryId?: number

}
