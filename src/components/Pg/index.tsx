import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";

type Post = {
  id: string;
  pgone: string;
  pgtwo: string;
  pgthree: string;
  pgfour: string;
  pgfive: string;
  pgtitle: string;
};

interface PostProps {
    pg: Post[];
}

export function Pg({ pg }: PostProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div  className={styles.title}>
        {pg.map((post) =>(
            <div key={post.id}>
            <h1>{post.pgtitle}</h1>
            </div>
        ))}
      </div>

      <div className={styles.carousel}>
        <div ref={ref} className="keen-slider">
          {pg.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.pgone} alt="" />
            </div>
          ))}

          {pg.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.pgtwo} alt="" />
            </div>
          ))}

          {pg.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.pgthree} alt="" />
            </div>
          ))}

          {pg.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.pgfour} alt="" />
            </div>
          ))}

          {pg.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.pgfive} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}