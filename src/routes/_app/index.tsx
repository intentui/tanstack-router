import { createFileRoute } from "@tanstack/react-router"
import { Avatar } from "@/components/ui/avatar.tsx"

export const Route = createFileRoute("/_app/")({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="flex justify-center">
          <div className="flex items-center gap-x-2">
            <Avatar
              size="sm"
              src="https://design.intentui.com/logo"
              className="outline-hidden"
              isSquare
            />
            Intent <span className="text-muted-fg">UI</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-2 *:block *:p-2 *:text-primary-subtle-fg *:hover:underline">
          <a href="https://intentui.com/docs/components/buttons/button">Docs</a>
          <a href="https://intentui.com/blocks">Blocks</a>
          <a href="https://design.intentui.com/themes">Themes</a>
          <a href="https://design.intentui.com/templates">Templates</a>
          <a href="https://design.intentui.com/patterns">Patterns</a>
        </div>
      </div>
    </div>
  )
}
