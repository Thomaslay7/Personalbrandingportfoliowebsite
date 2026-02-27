import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { ChatWidget } from "./ChatWidget";

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <ChatWidget />
    </>
  );
}
