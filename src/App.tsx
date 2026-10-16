/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Nav } from "@/components/layout/nav";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { Providers } from "@/components/layout/providers";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { RouterProvider, usePathname } from "./shims/router-context";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";

function PageContent() {
  const pathname = usePathname();

  if (pathname === "/projects" || pathname.startsWith("/projects/")) {
    return <ProjectsPage />;
  }

  if (pathname === "/about" || pathname.startsWith("/about/")) {
    return <AboutPage />;
  }

  return <HomePage />;
}

export default function App() {
  React.useEffect(() => {
    const preventCopy = (e: ClipboardEvent) => {
      const selected = window.getSelection()?.toString();
      if (selected && selected.length > 0) {
        e.preventDefault();
      }
    };
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();
    const preventSelect = (e: Event) => e.preventDefault();

    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("selectstart", preventSelect);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("selectstart", preventSelect);
    };
  }, []);

  return (
    <RouterProvider>
      <Providers>
        <div className="site-frame site-frame--top" aria-hidden="true" />
        <div className="site-frame site-frame--left" aria-hidden="true" />
        <div className="site-frame site-frame--right" aria-hidden="true" />
        <svg
          className="site-corner site-corner--top-left"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="site-corner site-corner--top-right"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
            fill="currentColor"
          />
        </svg>
        <SkipToContent />
        <PageBackdrop />
        <Nav />
        <PageContent />
      </Providers>
    </RouterProvider>
  );
}
