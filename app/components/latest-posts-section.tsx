import BlogCard from "~/components/blog-card"

export default function LatestPostsSection({ posts }: { posts: Array<any> }) {
  return (
    <section id="latest-posts" className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Latest posts</h2>
        <a href="/blog" className="text-sm text-primary underline">See all</a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {posts.length ? (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
      </div>
    </section>
  )
}
