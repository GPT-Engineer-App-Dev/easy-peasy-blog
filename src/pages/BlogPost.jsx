import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  1: {
    title: "My First Blog Post",
    content: "This is the beginning of my blogging journey. I'm excited to share my thoughts and experiences with you all. Stay tuned for more content!",
    date: "2023-04-01"
  },
  2: {
    title: "Reflections on Web Development",
    content: "Web development is a constantly evolving field. From new frameworks to improved best practices, there's always something new to learn. In this post, I'll share some of my recent insights and discoveries.",
    date: "2023-04-15"
  },
  3: {
    title: "The Joy of Coding",
    content: "Coding is more than just a job for me - it's a passion. The satisfaction of solving complex problems and creating something from nothing is unparalleled. Let me tell you why I find programming so rewarding and fulfilling.",
    date: "2023-05-01"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-500 hover:underline mb-4">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div className="mt-4">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
