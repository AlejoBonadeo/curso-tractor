import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";
import { Sidebar } from "../ui/Sidebar";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({
  children,
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        {imageUrl && <meta name="og:image" content={imageUrl} />}
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
