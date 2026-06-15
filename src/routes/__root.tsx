import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { type ReactNode } from "react";
import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink-900">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink-900">Page not found</h2>
        <div className="mt-6">
          <Link to="/" className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}