import { useSession } from "next-auth/react";

export function ComponentWithUseSession() {
  const session = useSession();
  return (
    <div>
      <p>{session.data?.user?.name}</p>
    </div>
  );
}
