import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/ThemeToggle';
import { PenTool, Trash2 } from 'lucide-react';

const initialBlogPosts = [
  { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey...", date: "2023-04-01" },
  { id: 2, title: "Reflections on Web Development", excerpt: "Exploring the ever-changing landscape of web technologies...", date: "2023-04-15" },
  { id: 3, title: "The Joy of Coding", excerpt: "Why I find programming so rewarding and fulfilling...", date: "2023-05-01" },
];

const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/new');
  };

  const handleDeletePost = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Personal Blog</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={handleNewPost}>
            <PenTool className="mr-2 h-4 w-4" />
            New Post
          </Button>
          <ThemeToggle />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {post.title}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
