import { cookies } from "next/headers";
import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const tokenCookie = (await cookies()).get('token')?.value;

    const protectedPaths = ['/admin', '/user'];

    const isProtectedRoute = protectedPaths.some((path) => pathname.startsWith(path));

    if (isProtectedRoute && !tokenCookie) {

        return NextResponse.redirect(new URL('/login', request.url));
    }


    if (tokenCookie) {


        try {
            const secret = process.env.JWT_SECRET;


            if (!secret) {
                throw new Error('JWT_SECRET is not defined');
            }

            const encodedSecret = new TextEncoder().encode(secret)
            const { payload } = await jose.jwtVerify(tokenCookie, encodedSecret)
        }   catch (error) {
                console.error('JWT verification failed', error);
                const response = NextResponse.redirect(new URL('/login', request.url));
                response.cookies.delete('token');
                return response;
        }
        
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next.*\\..*).*)'],
}