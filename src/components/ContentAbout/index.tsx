import styles from "./styles.module.scss";

import bannerMariano from "../../../public/img/banner-mariano.png";
import fundador from "../../../public/img/fundador.png";
import marianoOne from "../../../public/img/marianoOne.png";
import marianoTwo from "../../../public/img/marianoTwo.png";
import marianoThree from "../../../public/img/marianoThree.png";
import Image from "next/image";

import somos from "../../../public/img/somos.png";
import sustentabilidade from "../../../public/img/sustentabilidade.png";
import colaboradores from "../../../public/img/colaboradores.png";
import tecnologia from "../../../public/img/tecnologia.png";
import comprometimento from "../../../public/img/comprometimento.png";
import etica from "../../../public/img/etica.png";
import responsabilidade from "../../../public/img/responsabilidade.png";

import nosso from "../../../public/img/nosso.png";
import missao from "../../../public/img/missao.png";
import visao from "../../../public/img/visao.png";
import valor from "../../../public/img/valor.png";

export function ContentAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.cardBanner}>
        <Image src={bannerMariano} alt="" />
        <Image src={fundador} alt="" />
      </div>

      <div className={styles.content}>
        <Image src={marianoOne} alt="" />
        <div className={styles.text}>
          <h1>NOSSAS HISTÓRIAS</h1>
          <p>
            Na década de 80, o Seu Mariano Ivasko iniciava seu negócio em
            Irati-PR. Um pequeno bar que passou por muitas mudanças durante os
            anos. De bar para mercearia, para um mini mercado, até que em 1998,
            com a ajuda do seu filho mais velho e sua esposa, inauguraram o
            primeiro supermercado, localizado na mesma cidade, conscientemente
            ou não, na mesma rua que iniciaram anos antes. Logo, a empresa
            ganhou corpo e o filho mais novo do Seu Mariano começou a trabalhar
            junto.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>A FAMÍLIA </h1>
          <p>
            Durante anos, a família trabalhou lado a lado. A história do Seu
            Mariano e de seus filhos passou por diversas dificuldades, mas o
            coração e a vontade de vencer, eram maiores. A união da família
            sempre foi o alicerce de tudo. Na foto ao lado, vemos o Seu Mariano
            vendendo pêssegos, os quais ele mesmo produzia.
          </p>
        </div>
        <Image src={marianoTwo} alt="" />
      </div>

      <div className={styles.contentFirst}>
        <Image src={marianoThree} alt="" />
        <div className={styles.text}>
          <h1>MARIANO ATACADISTA </h1>
          <p>
            Em 2019, a primeira loja do modelo atacadista da família foi
            inaugurada em Irati, também na mesma rua onde tudo começou. Em
            dezembro de 2020, a segunda loja, em São Mateus do Sul, foi
            inaugurada. Nas duas cidades, a família trouxe inovação e preço
            baixo para seus clientes, sendo ambas, as primeiras lojas
            atacadistas em suas cidades.No dia 14 de junho de 2022, é inaugurado
            - até então - o maior Mariano Atacadista, na cidade de Ponta Grossa.
            Trazendo mais uma vez, inovação, preço baixo e economia para a
            cidade, além de gerar mais de 100 empregos diretos. O Mariano
            Atacadista é uma empresa familiar com mais de 24 anos de história e
            compromisso com a economia.
          </p>
        </div>
      </div>

      <div className={styles.contentEmpresa}>
        <div className={styles.title}>
          <Image src={somos} alt="" />
          <h2>SOMOS UMA EMPRESA FAMÍLIA</h2>
        </div>

        <div className={styles.text}>
          <Image src={sustentabilidade} alt="" />
          <h3>Sustentabilidade</h3>
        </div>
        <p>
          Descartamos e proporcionamos uma destinação correta para os alimentos.
          Possuímos uma fazenda onde é feito uma manejo correto do lixo
          orgânico, sendo utilizado como adubo. Assim, evita-se o uso de
          componentes quimicos no solo.
        </p>

        <div className={styles.text}>
          <Image src={colaboradores} alt="" />
          <h3>Colaboradores</h3>
        </div>
        <p>
          Contamos com mais de 1200 de colaboradores, em mais de 13 cidades do
          Paraná.
        </p>


        <div className={styles.text}>
          <Image src={tecnologia} alt="" />
          <h3>Tecnoligia</h3>
        </div>
        <p>
        Mantemos iniciativas voltadas para tecnologia e melhorias nos processos internos.
        </p>

        <div className={styles.text}>
          <Image src={comprometimento} alt="" />
          <h3>Comprometimento</h3>
        </div>
        <p>
        Somos uma empresa comprometida com o bem estar dos nossos colaboradores e das cidades em que atuamos.
        </p>

        <div className={styles.text}>
          <Image src={etica} alt="" />
          <h3>Ética e União</h3>
        </div>
        <p>
        Buscamos sempre ser transparentes e éticos em nossas negociações. Assim como, para criarmos um ambiente empresarial forte e próspero é preciso união.
        </p>

        <div className={styles.text}>
          <Image src={responsabilidade} alt="" />
          <h3>Responsabilidade Social</h3>
        </div>
        <p>
        O X-Solidário arrecada fundos para instituições de luta ao câncer, procurando melhorar a qualidade de vida das cidades onde atua.
        </p>
        
      </div>

      <div className={styles.contentEmpresa}>
        <div className={styles.title}>
          <Image src={nosso} alt="" />
          <h2>NOSSOS COMPROMISSOS</h2>
        </div>

        <div className={styles.text}>
          <Image src={missao} alt="" />
          <h3>Missão</h3>
        </div>
        <p>
        Ser uma empresa que busca telentos, unido pessoas com qualidades distintas para juntas, atuarem pelo mesmo objetivo.
        </p>

        <div className={styles.text}>
          <Image src={visao} alt="" />
          <h3>Visão</h3>
        </div>
        <p>
        Buscar sempre novos desafios, mas mantendo os mesmos princípios do início como uma empresa familiar. Otimizando processos e levando qualidade de vida para as pessoas.
        </p>


        <div className={styles.text}>
          <Image src={valor} alt="" />
          <h3>Valores</h3>
        </div>
        <p>
        Responsabilidade pelo bem estar de nossos colaboradores; Responsabilidade Social; Inovação para melhoria de processos; Levar atendimento e produtos de qualidade para as cidades em que atuamos.
        </p>
      </div>
    </div>
  );
}
