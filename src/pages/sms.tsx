import { Header } from "../components/Header";

import { Footer } from "../components/Footer";


import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { Sms } from "../components/Sms";

type Posts = {
    id: string;
    smsone: string;
    smstwo: string;
    smsthree: string;
    smsfour: string;
    smsfive: string;
    smstitle: string;
  };
  
  interface PostProps {
    posts: Posts[];
  }
  

export default function About({ posts }: PostProps) {
    return (
      <>
       <Header/>
       <Sms sms={posts}/>
       <Footer/>
      </>
    )
  }


  export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.query(
      [Prismic.predicates.at("document.type", "sms")],
      {
        fetch: [
          "sms.smsone",
          "sms.smstwo",
          "sms.smsthree",
          "sms.smsfour",
          "sms.smsfive",
          "sms.smstitle"
        ],
      }
    );
  
    const posts = response.results.map((post) => {
      console.log("data", post.data);
      console.log("post", post);
      return {
        id: post.uid,
        smsone: post.data.smsone.url,
        smstwo: post.data.smstwo.url,
        smsthree: post.data.smsthree.url,
        smsfour: post.data.smsfour.url,
        smsfive: post.data.smsfive.url,
        smstitle: post.data.smstitle[0].text
      };
    });
    return {
      props: {
        posts,
      },
    };
  };