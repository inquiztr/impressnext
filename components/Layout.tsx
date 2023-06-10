import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
