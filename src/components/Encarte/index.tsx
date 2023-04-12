import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";

type Post = {
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
  mariano: Post[];
}

export function Ofertas({ mariano }: PostProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div className={styles.title}>
        <h1>OFERTAS</h1>
      </div>

      <div className={styles.carousel}>
        <div ref={ref} className="keen-slider">
          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianoone} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianotwo} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianothree} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianofour} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianofive} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianosix} alt="" />
            </div>
          ))}

          {mariano.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.marianoseven} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
