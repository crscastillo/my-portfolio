import { Link } from "react-router"

export default function BlogCard({ post }: { post: { title: string; summary: string; slug: string; publishedAt: string } }) {
  return (
    <article className="rounded-md border p-4">
      <h3 className="text-lg font-semibold">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>
      <p className="mt-2 text-xs text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</p>
    </article>
  )
}
