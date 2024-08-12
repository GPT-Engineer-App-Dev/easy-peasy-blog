import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/ThemeToggle';
import { PenTool } from 'lucide-react';

const blogPosts = [
  { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey...", date: "2023-04-01" },
  { id: 2, title: "Reflections on Web Development", excerpt: "Exploring the ever-changing landscape of web technologies...", date: "2023-04-15" },
  { id: 3, title: "The Joy of Coding", excerpt: "Why I find programming so rewarding and fulfilling...", date: "2023-05-01" },
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Personal Blog</h1>
        <div className="flex items-center space-x-4">
          <Link to="/new">
            <Button variant="outline">
              <PenTool className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
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
