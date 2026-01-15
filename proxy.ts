import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  // Example: allow all requests to continue
  return NextResponse.next();
}
