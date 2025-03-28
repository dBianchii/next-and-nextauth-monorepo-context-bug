import { ComponentWithUseSession } from "@repo/ui/component-with-use-session";
import Providers from "@repo/ui/session-provider";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Providers session={session}>
      <ComponentWithUseSession />
      <Component {...pageProps} />
    </Providers>
  );
}
