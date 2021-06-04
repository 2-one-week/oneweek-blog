export interface IPostCard {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      thumbnail: any;
      draft: string;
      category: string;
      tags: string[];
      date: string;
    };
    fields: {
      slug: string;
    };
    id: string;
  };
}
