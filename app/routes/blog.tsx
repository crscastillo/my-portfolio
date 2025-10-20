import type { Route } from "./+types/home"
import { useLoaderData } from "react-router"
import BlogCard from "~/components/blog-card"
import { getAllPosts, type Post } from "../../lib/db/posts"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blog — Carlos Castillo" }]
}

export async function loader() {
  const posts = await getAllPosts()
  return posts
}

export default function Blog() {
  const posts = useLoaderData() as Post[]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="mt-2 text-muted-foreground">Notes and writeups about engineering and design.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
