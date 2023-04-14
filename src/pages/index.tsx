import { ContentHome } from "../components/ContentHome";

import { Video } from "../components/Filme";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Cookie } from "../components/Cookies";
import { Oferta } from "../components/Ofertas";


export default function Home() {
  return (
    <>
      <Header />
      <Video />
      <ContentHome />
      <Oferta/>
      <Cookie/>
      <Footer />
    </>
  );
}


