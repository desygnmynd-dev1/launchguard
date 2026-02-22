import { RouterProvider } from "react-router-dom"
import { AppLayout } from "./layout/AppLayout"
import { router } from "./router"

export const App = () => {
  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  )
}
