import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    
    return NextResponse.json({ 
      valid: true, 
      user: {
        id: decoded.id,
        rigId: decoded.rigId
      } 
    });
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}