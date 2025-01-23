import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value || '';
  const protectedRoutes = ['/addEvents', '/addProjects'];

  
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      jwt.verify(token, process.env.TOKEN_SECRET);
      return NextResponse.next();
    } catch (error) {
      
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.set('token', '', { 
        httpOnly: true, 
        expires: new Date(0) 
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/addEvents', '/addProjects']
}