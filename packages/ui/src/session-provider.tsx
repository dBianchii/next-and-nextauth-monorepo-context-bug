"use client";

import { getServerSession } from "next-auth";

export default function SessionProvider({
  session,
  children,
}: {
  session: Awaited<ReturnType<typeof getServerSession>>;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
