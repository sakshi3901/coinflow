import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("lt")?.value;
  console.log(request.nextUrl.pathname)

  const path = request.nextUrl.pathname;

  // ✅ allowed public routes
  const publicRoutes = ["/", "/login", "/signup"];

  const isPublic = publicRoutes.includes(path);

  // ❌ if not public and no token → redirect
  if (!isPublic && !token) {
    console.log("askjdhkaj", path, !isPublic)
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};