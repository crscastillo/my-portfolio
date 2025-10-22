import type { Route } from "../+types/home"
import { useLoaderData } from "react-router"
import { getPostBySlug } from "../../../lib/db/posts"

export async function loader({ params }: { params: { slug?: string } }) {
  const slug = params.slug || ""
  const post = await getPostBySlug(slug)
  if (!post) throw new Response("Not Found", { status: 404 })
  return post
}

export function meta({ data }: { data: any }) {
  return [{ title: data?.title || "Post" }]
}

export default function PostRoute() {
  const post = useLoaderData() as any

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <article className="mt-6 prose dark:prose-invert">
        {post.body ? (
          post.body.split("\n\n").map((para: string, idx: number) => <p key={idx}>{para}</p>)
        ) : (
          <p>{post.summary}</p>
        )}
      </article>
    </main>
  )
}
