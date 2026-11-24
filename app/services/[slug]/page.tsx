import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { QuoteForm } from '@/components/quote-form'
import { servicePages } from '@/lib/service-pages'
type Slug = keyof typeof servicePages
export function generateStaticParams() { return Object.keys(servicePages).map(slug => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = servicePages[slug as Slug]
  if (!page) return {}
  return { title: `${page.title} | Veteran Lock & Safe`, description: page.description, alternates: { canonical: `https://www.veteranlockandsafe.com/services/${slug}` }, openGraph: { title: page.title, description: page.description, url: `https://www.veteranlockandsafe.com/services/${slug}` } }
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!(slug in servicePages)) notFound()
  const page = servicePages[slug as Slug]
  return <main className="relative z-10 pt-32 pb-24 max-w-5xl mx-auto px-6">
    <Link href="/" className="underline">Veteran Lock &amp; Safe home</Link>
    <h1 className="text-5xl font-bold my-8">{page.title}</h1>
    <p className="text-xl mb-8">{page.description} Call to confirm availability for your location.</p>
    <a className="inline-block bg-accent text-background p-4 font-bold" href="#quote">Request an estimate</a>
    <h2 className="text-2xl mt-12 mb-5">Help us scope your request</h2>
    <ul className="list-disc pl-6 space-y-4">{page.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
    <QuoteForm initialService={page.service} />
    <nav aria-label="Related services" className="flex flex-wrap gap-6">{Object.entries(servicePages).filter(([key]) => key !== slug).map(([key, value]) => <Link className="underline" key={key} href={`/services/${key}`}>{value.title}</Link>)}</nav>
  </main>
}
