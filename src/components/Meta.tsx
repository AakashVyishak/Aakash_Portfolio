import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { capitalise } from "../utils/capitalise";

type IMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta: React.FC<IMeta> = ({
  title,
  description = "Python Developer Focused on Backend Development Python,SQL & Django. Passionate about creating efficient and scalable solutions.",
  keywords = "Python, Django, Postgresql, Javascript ,NextJS,AWS",
}) => {
  const router = useRouter();

  let pageTitle;
  if (router.pathname === "/") {
    pageTitle = "Aakash | Python Developer";
  } else {
    const path = router.pathname.split("/").pop();
    pageTitle = `Aakash | ${capitalise(path)}`;
  }

  console.log(window.location)

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageTitle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={window.location.href} />
      <title>{pageTitle}</title>
    </Head>
  );
};

export default Meta;
