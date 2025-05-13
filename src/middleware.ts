import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export async function middleware(req : NextRequest) {
  try {


    const protectedRoutes = [/^\/amis$/, /^\/combats$/, /^\/equipe$/, /^\/mainmenu$/];
    const currentPath = req.nextUrl.pathname;
    const isProtected = protectedRoutes.some((regex) => regex.test(currentPath));
    if (isProtected) {
      
      const session = req.cookies.get('session')?.value;

      if (!session) {
        return NextResponse.redirect(new URL("/", req.url));
      }

    }

    return NextResponse.next();
  } catch (error) {
    return new NextResponse("Erreur serveur", { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
