import { Injectable } from '@nestjs/common';
import { Blog } from './interfaces/blog.interface';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  private readonly blogs: Blog[] = [];
  private id = 0;
  private readonly spoilerLength = 100;

  findAll(): Blog[] {
    return this.blogs;
  }

  findById(id: number): Blog {
    return this.blogs.find((blog) => blog.id === id);
  }

  create(createBlogDto: CreateBlogDto) {
    const blog = new Blog();
    blog.id = this.id++;
    blog.title = createBlogDto.title;
    blog.spoiler = createBlogDto.content.substring(0, this.spoilerLength);
    blog.content = createBlogDto.content;
    this.blogs.push(blog);
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    const blogToUpdate = this.findById(id);
    blogToUpdate.title = updateBlogDto.newTitle;
    blogToUpdate.spoiler = updateBlogDto.newContent.substring(0, this.spoilerLength);
    blogToUpdate.content = updateBlogDto.newContent;
  }

  delete(id: number) {
    const indexOfBlogWithId = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs.splice(indexOfBlogWithId, 1);
  }
}
