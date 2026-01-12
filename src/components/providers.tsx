"use client"

import { type NavigateOptions, type ToOptions, useRouter } from "@tanstack/react-router"
import { RouterProvider } from "react-aria-components"
import { ThemeProvider } from "./theme-provider"

declare module "react-aria-components" {
  interface RouterConfig {
    href: ToOptions["to"]
    params: ToOptions["params"]
    routerOptions: Omit<NavigateOptions, "params">
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={(to) => router.buildLocation({ to: to }).href}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  )
}
