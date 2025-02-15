import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css"; // Tailwind CSS import
import Navbar from "~/components/Navbar"; // Import Navbar component
import Footer from "~/components/Footer"; // Import Footer component

// Define any global links (e.g., fonts)
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap",
  },
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Free open source Tailwind CSS Store template" />
        <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" />
        <title>Nordic Shop</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar /> {/* Navbar component */}
        <main>
          <Outlet /> {/* This will render the route-specific content */}
        </main>
        <Footer /> {/* Footer component */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
