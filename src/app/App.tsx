import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/ThemeProvider";
import { PageLoadingIndicator } from "./components/LoadingIndicator";
import { router } from "./routes";

export default function App() {
  return (
    <ThemeProvider>
      <PageLoadingIndicator />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
