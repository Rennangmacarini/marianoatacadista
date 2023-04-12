import { ContentHome } from "../components/ContentHome";
import { Ofertas } from "../components/Encarte";
import { Video } from "../components/Filme";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

type Posts = {
  id: string;
  marianoone: string;
  marianotwo: string;
  marianothree: string;
  marianofour: string;
  marianofive: string;
  marianosix: string;
  marianoseven: string;
};

interface PostProps {
  posts: Posts[];
}

export default function Home({ posts }: PostProps) {
  return (
    <>
      <Header />
      <Video />
      <ContentHome />
      <Ofertas mariano={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "mariano")],
    {
      fetch: [
        "mariano.marianoone",
        "mariano.marianotwo",
        "mariano.marianothree",
        "mariano.marianofour",
        "mariano.marianofive",
        "mariano.marianosix",
        "mariano.marianoseven",
      ],
    }
  );

  const posts = response.results.map((post) => {
    console.log("data", post.data);
    console.log("post", post);
    return {
      id: post.uid,
      marianoone: post.data.marianoone.url,
      marianotwo: post.data.marianoone.url,
      marianothree: post.data.marianoone.url,
      marianofour: post.data.marianoone.url,
      marianofive: post.data.marianoone.url,
      marianosix: post.data.marianoone.url,
      marianoseven: post.data.marianoone.url,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
