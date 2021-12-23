import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import Script from "next/script";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title className="title">First Post</title>
        <link rel="icon" href="/images/profile.jpg" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      <Layout />
    </>
  );
};
export default FirstPost;
