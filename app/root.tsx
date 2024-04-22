import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import styles from "./tailwind.css?url"
import React, { createContext, useState } from "react";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
];

interface ContextValue {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
}

export const DataContext = createContext<ContextValue>({ currentIndex: 0, setCurrentIndex: undefined });

export function Layout({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contextValue: ContextValue = {
    currentIndex,
    setCurrentIndex,
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark overflow-x-clip">
        <DataContext.Provider value={contextValue} >
          <div className="w-full overflow-x-clip">
            {children}
          </div>
          <Footer />
          <Nav />
        </DataContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
