import { NextResponse } from "next/server";

/** @param {import("next/server").NextRequest} request */
export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Redirect non-www to www
  if (hostname && !hostname.startsWith("www.")) {
    url.hostname = `www.${hostname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
