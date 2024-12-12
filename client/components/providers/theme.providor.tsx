"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [mount, setMount] = React.useState(false)

  React.useEffect(() => setMount(true), [])

  return (
  <NextThemesProvider {...props}>
    {mount && children}
  </NextThemesProvider>
  )
}
