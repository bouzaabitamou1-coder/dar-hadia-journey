import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ebony px-4 text-cream">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Lost in the Medina</p>
        <h1 className="mt-6 font-serif text-7xl italic">404</h1>
        <p className="mt-4 text-cream/60">
          The page you seek has been quieted by the walls of the riad.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold/40 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-gold transition-colors hover:bg-gold hover:text-ebony"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ebony px-4 text-cream">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">A pause in the courtyard</p>
        <h1 className="mt-6 font-serif text-3xl italic">Something quieted the page</h1>
        <p className="mt-4 text-cream/60">
          Please try again in a moment, or return to the entrance.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-gold px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-ebony transition-colors hover:bg-cream"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-cream/20 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dar Hadia — A Luxury Riad in the Heart of the Fes Medina" },
      {
        name: "description",
        content:
          "Dar Hadia is an intimate luxury riad in Fes El Bali. Restored suites, a rooftop over the medina, a marble hammam, and hospitality guided by Hadia herself.",
      },
      { name: "author", content: "Dar Hadia" },
      { name: "theme-color", content: "#121212" },
      { property: "og:title", content: "Dar Hadia — A Luxury Riad in the Heart of the Fes Medina" },
      {
        property: "og:description",
        content:
          "Arriving home in the heart of the Medina. An intimate luxury riad in Fes El Bali.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dar Hadia — A Luxury Riad in the Heart of the Fes Medina" },
      {
        name: "twitter:description",
        content: "Arriving home in the heart of the Medina.",
      },
      { name: "description", content: "Dar Hadia is an intimate luxury riad in Fes El Bali. Restored suites, a rooftop over the medina, a marble hammam, and hospitality guided by Hadia herself." },
      { property: "og:description", content: "Dar Hadia is an intimate luxury riad in Fes El Bali. Restored suites, a rooftop over the medina, a marble hammam, and hospitality guided by Hadia herself." },
      { name: "twitter:description", content: "Dar Hadia is an intimate luxury riad in Fes El Bali. Restored suites, a rooftop over the medina, a marble hammam, and hospitality guided by Hadia herself." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/04014314-9da4-4767-b319-b844c057e651/id-preview-ee026f15--f8b7537e-a072-4cec-99b0-b205d7332bda.lovable.app-1783130668452.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/04014314-9da4-4767-b319-b844c057e651/id-preview-ee026f15--f8b7537e-a072-4cec-99b0-b205d7332bda.lovable.app-1783130668452.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@200;300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
