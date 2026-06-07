import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "../services/api";
import { Calendar } from "lucide-react";

export default function Blog() {
  const { data: posts = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogPosts,
  });

  return (
    <section id="blog" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Latest Articles
        </motion.h2>
        <p className="text-center text-slate-400 mb-16">
          Thoughts on development, technology, and design
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post: any, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-3xl overflow-hidden group hover:border-cyan-400 border border-transparent transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar size={14} />
                  {new Date(post.created_at).toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
