import { Header } from "../components/Header";

import { Footer } from "../components/Footer";


import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { Pg } from "../components/Pg";

type Posts = {
    id: string;
    pgone: string;
    pgtwo: string;
    pgthree: string;
    pgfour: string;
    pgfive: string;
    pgtitle: string;
  };
  
  interface PostProps {
    posts: Posts[];
  }
  

export default function About({ posts }: PostProps) {
    return (
      <>
       <Header/>
       <Pg pg={posts}/>
       <Footer/>
      </>
    )
  }


  export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.query(
      [Prismic.predicates.at("document.type", "pg")],
      {
        fetch: [
          "pg.pgone",
          "pg.pgtwo",
          "pg.pgthree",
          "pg.pgfour",
          "pg.pgfive",
          "pg.pgtitle"
        ],
      }
    );
  
    const posts = response.results.map((post) => {
      console.log("data", post.data);
      console.log("post", post);
      return {
        id: post.uid,
        pgone: post.data.pgone.url,
        pgtwo: post.data.pgtwo.url,
        pgthree: post.data.pgthree.url,
        pgfour: post.data.pgfour.url,
        pgfive: post.data.pgfive.url,
        pgtitle: post.data.pgtitle[0].text
      };
    });
    return {
      props: {
        posts,
      },
    };
  };