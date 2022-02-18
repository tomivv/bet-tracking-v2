import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}