
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automation <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest trends, best practices, and success stories in business automation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {searchTerm === '' && selectedCategory === 'All' && (
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden group">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-none">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="mr-1" size={14} />
                        {featuredPost.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <User className="mr-2" size={14} />
                        {featuredPost.author}
                        <Clock className="ml-4 mr-1" size={14} />
                        {featuredPost.readTime}
                      </div>
                      
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group/link"
                      >
                        Read More
                        <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <Card key={post.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-none">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="mr-1" size={12} />
                          {post.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-xs">
                          <User className="mr-1" size={12} />
                          {post.author}
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-medium rounded-md hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group/link"
                        >
                          Read More
                          <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={14} />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionBackground>
      
      <Footer />
    </div>
  );
}
