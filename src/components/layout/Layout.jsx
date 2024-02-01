import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from "components/container/Container";
import Header from "components/header/Hearder";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
