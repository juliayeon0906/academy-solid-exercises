// =============================================================
// Exercise 1 – Single Responsibility Principle (SRP)
//
// YOUR TASK:
//   Refactor it so each class has only ONE reason to change.
//   Wire them together so the output at the bottom still works.
//
// Run:  npm run exercise-1
// =============================================================

class BlogPost {
  title: string;
  content: string;
  author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }
}

class BlogPostDatabase {
  save(post: BlogPost) {
    console.log(`Saving "${post.title}" to the database...`);
  }
}

class BlogPostHtmlRenderer {
  render(post: BlogPost): string {
    return `<h1>${post.title}</h1><p>By ${post.author}</p><p>${post.content}</p>`;
  }
}

class BlogPostNotifier {
  notifySubscribers(post: BlogPost) {
    console.log(`Sending email notification for new post: "${post.title}"`);
  }
}

const post = new BlogPost("SOLID Rocks", "Here is why...", "Alice");

const blogPostRepository = new BlogPostDatabase();
const blogPostHtmlRenderer = new BlogPostHtmlRenderer();
const blogPostNotifier = new BlogPostNotifier();

blogPostRepository.save(post);
console.log(blogPostHtmlRenderer.render(post));
blogPostNotifier.notifySubscribers(post);
