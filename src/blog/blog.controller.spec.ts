import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";
import { Blog } from "./interfaces/blog.interface";

describe('BlogController', () => {
  let blogController: BlogController;
  let blogService: BlogService;

  beforeEach(() => {
    blogService = new BlogService();
    blogController = new BlogController(blogService);
  });

  describe('findAll', () => {
    it('should return an array of blogs with added blog', async () => {
      const newBlog = {
        id: 0,
        content: 'Test Content',
        title: 'Test Title',
        spoiler: 'Test Content'
      } as Blog;
      const expectedBlogs = [newBlog] as Blog[];
      blogService.create({
        title: newBlog.title,
        content: newBlog.content,
      });

      const actualBlogs = await blogController.getAllBlogs();
      expect(actualBlogs).toEqual(expectedBlogs);
    })
  })
})