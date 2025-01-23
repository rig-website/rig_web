import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ valid: false });
    }

    jwt.verify(token, process.env.TOKEN_SECRET);
    return NextResponse.json({ valid: true });
  } catch (error) {
    return NextResponse.json({ valid: false });
  }
}