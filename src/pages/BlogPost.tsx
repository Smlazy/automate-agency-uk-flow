
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-3 py-1 rounded text-sm">
                {post.category}
              </span>
              {post.tags.map(tag => (
                <span key={tag} className="bg-white/10 text-gray-300 px-3 py-1 rounded text-sm flex items-center gap-1">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6} (.*?)(<br>|$)/g, (match, title) => {
                    const level = match.match(/^#{1,6}/)[0].length;
                    return `<h${level} class="text-white font-bold mt-8 mb-4 ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'}">${title}</h${level}>`;
                  }).replace(/### (.*?)(<br>|$)/g, '<h3 class="text-white font-bold text-xl mt-6 mb-3">$1</h3>')
                    .replace(/## (.*?)(<br>|$)/g, '<h2 class="text-white font-bold text-2xl mt-8 mb-4">$1</h2>')
                    .replace(/# (.*?)(<br>|$)/g, '<h1 class="text-white font-bold text-3xl mt-8 mb-6">$1</h1>')
                }}
              />
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 mb-6">
                Get expert automation guidance tailored to your specific needs and industry.
              </p>
              <Link to="/#contact">
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Book Your Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-emerald-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{new Date(relatedPost.date).toLocaleDateString('en-GB')}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" className="w-full border-white/20 text-gray-300 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
