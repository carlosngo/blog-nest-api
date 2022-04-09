import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async getBlogById(@Param('id') id: string): Promise<Blog> {
    return this.blogService.findById(Number(id));
  }

  @Post()
  async createBlog(@Body() createBlogDto: CreateBlogDto) {
    this.blogService.create(createBlogDto);
  }

  @Put(':id')
  async updateBlog(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    this.blogService.update(Number(id), updateBlogDto);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    this.blogService.delete(Number(id));
  }
}
