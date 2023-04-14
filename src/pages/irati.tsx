import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { Irati } from "../components/Irati";

import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

type Posts = {
    id: string;
    iratione: string;
    iratitwo: string;
    iratithree: string;
    iratifour: string;
    iratifive: string;
    iratititle: string;
  };
  
  interface PostProps {
    posts: Posts[];
  }
  

export default function About({ posts }: PostProps) {
    return (
      <>
       <Header/>
       <Irati irati={posts}/>
       <Footer/>
      </>
    )
  }


  export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.query(
      [Prismic.predicates.at("document.type", "irati")],
      {
        fetch: [
          "irati.iratione",
          "irati.iratitwo",
          "irati.iratithree",
          "irati.iratifour",
          "irati.iratifive",
          "irati.iratititle"
        ],
      }
    );
  
    const posts = response.results.map((post) => {
      console.log("data", post.data);
      console.log("post", post);
      return {
        id: post.uid,
        iratione: post.data.iratione.url,
        iratitwo: post.data.iratitwo.url,
        iratithree: post.data.iratithree.url,
        iratifour: post.data.iratifour.url,
        iratifive: post.data.iratifive.url,
        iratititle: post.data.iratititle[0].text
      };
    });
    return {
      props: {
        posts,
      },
    };
  };