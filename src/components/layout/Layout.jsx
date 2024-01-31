import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
