import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";
import { Sidebar } from "../ui/Sidebar";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content="/images/m34.JPG" />
      </Head>
      <nav>
        <NavBar />
      </nav>
      <Sidebar/>
      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0 30px",
        }}
      >
        {children}
      </main>
    </>
  );
};
