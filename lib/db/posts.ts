export type Post = {
  id: string
  title: string
  summary: string
  slug: string
  publishedAt: string
  tags?: string[]
}

// Placeholder in-memory data. Replace implementations with Supabase calls
// when configuration is provided.
const SAMPLE_POSTS: Post[] = [
  {
    id: "p1",
    title: "Scaling Websockets for Realtime Apps",
    summary: "How we built a resilient websocket layer for millions of connected clients.",
    slug: "scaling-websockets",
    publishedAt: "2024-09-10",
    tags: ["realtime", "websockets", "scaling"],
  },
  {
    id: "p2",
    title: "Designing a Resilient E-commerce Backend",
    summary: "Patterns and decisions for building a microservices-backed storefront.",
    slug: "resilient-ecommerce",
    publishedAt: "2023-12-02",
    tags: ["backend", "architecture"],
  },
  {
    id: "p3",
    title: "Component-Driven Design with Storybook",
    summary: "How a design system sped up our product development and improved quality.",
    slug: "component-driven-design",
    publishedAt: "2023-05-20",
    tags: ["design-system", "frontend"],
  },
]

import getSupabaseClient from "./supabase"

export async function getTopPosts(limit = 3): Promise<Post[]> {
  const sb = getSupabaseClient()
  if (!sb) return Promise.resolve(SAMPLE_POSTS.slice(0, limit))

  type PostRow = { id: string | number; title: string; summary: string; slug: string; published_at?: string; tags?: string[] }

  const res = await sb
    .from("posts")
    .select("id,title,summary,slug,published_at,tags")
    .order("published_at", { ascending: false })
    .limit(limit)

  const data = (res as any).data as PostRow[] | null
  const error = (res as any).error

  if (error || !data) return SAMPLE_POSTS.slice(0, limit)

  return data.map((r: PostRow) => ({
    id: String(r.id),
    title: r.title,
    summary: r.summary,
    slug: r.slug,
    publishedAt: r.published_at ?? "",
    tags: r.tags ?? [],
  }))
}

export async function getAllPosts(): Promise<Post[]> {
  const sb = getSupabaseClient()
  if (!sb) return Promise.resolve(SAMPLE_POSTS.slice())

  type PostRow = { id: string | number; title: string; summary: string; slug: string; published_at?: string; tags?: string[] }

  const res = await sb.from("posts").select("id,title,summary,slug,published_at,tags").order("published_at", { ascending: false })
  const data = (res as any).data as PostRow[] | null
  const error = (res as any).error
  if (error || !data) return SAMPLE_POSTS.slice()

  return data.map((r: PostRow) => ({
    id: String(r.id),
    title: r.title,
    summary: r.summary,
    slug: r.slug,
    publishedAt: r.published_at ?? "",
    tags: r.tags ?? [],
  }))
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const sb = getSupabaseClient()
  if (!sb) return Promise.resolve(SAMPLE_POSTS.find((p) => p.slug === slug))

  type PostRow = { id: string | number; title: string; summary: string; slug: string; published_at?: string; tags?: string[] }

  const res = await sb.from("posts").select("id,title,summary,slug,published_at,tags").eq("slug", slug).limit(1).single()
  const data = (res as any).data as PostRow | null
  const error = (res as any).error
  if (error || !data) return SAMPLE_POSTS.find((p) => p.slug === slug)

  return {
    id: String(data.id),
    title: data.title,
    summary: data.summary,
    slug: data.slug,
    publishedAt: data.published_at ?? "",
    tags: data.tags ?? [],
  }
}
