import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    const token = await getToken({ req })
    if (token) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/dashboard'
      return NextResponse.redirect(redirectUrl)
    }
  }

  if (pathname === '/dashboard') {
    const token = await getToken({ req })
    if (!token) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/'
      return NextResponse.redirect(redirectUrl)
    }
  }
}
