import { handleQuote } from '@/lib/quote'
export const runtime = 'nodejs'
export async function POST(request: Request) {
  return handleQuote(request, process.env)
}
