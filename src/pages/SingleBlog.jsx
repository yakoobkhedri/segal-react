// src/pages/SingleBlog.jsx
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogHeader from '../components/blog/BlogHeader';
import BlogDescription from '../components/blog/BlogDescription';
import BlogComments from '../components/blog/BlogComments';
import RelatedPosts from '../components/blog/RelatedPosts';
import Shoar from '../components/home/Shoar';
import SEO from '../components/SEO';

export default function SingleBlog() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id)) || blogPosts[0];

  return (
    <main className="mt-4 position-relative">
      <SEO
        title={`${post.title} | سگال`}
        description={post.excerpt || post.content?.slice(0, 150)}
        image={post.image}
      />

      <section id="blog" className="mt-4">
        <div className="container">
          <BlogHeader post={post} />
          <BlogDescription post={post} />
          <BlogComments />
          <RelatedPosts posts={blogPosts.filter((p) => p.id !== post.id).slice(0, 3)} />
        </div>
      </section>

      <Shoar />

      <img alt="wave" src="/assets/img/footerWave.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none" />
      <img alt="wave" src="/assets/img/footerBg2.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none" />
    </main>
  );
}