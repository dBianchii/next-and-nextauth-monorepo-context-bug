import { useSession } from "next-auth/react";

export default function ComponentWithUseSession() {
  const { data: session } = useSession();

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
