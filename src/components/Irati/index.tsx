import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";

type Post = {
  id: string;
  iratione: string;
  iratitwo: string;
  iratithree: string;
  iratifour: string;
  iratifive: string;
  iratititle: string;
};

interface PostProps {
  irati: Post[];
}

export function Irati({ irati }: PostProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div  className={styles.title}>
        {irati.map((post) =>(
            <div key={post.id}>
            <h1>{post.iratititle}</h1>
            </div>
        ))}
      </div>

      <div className={styles.carousel}>
        <div ref={ref} className="keen-slider">
          {irati.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.iratione} alt="" />
            </div>
          ))}

          {irati.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.iratitwo} alt="" />
            </div>
          ))}

          {irati.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.iratithree} alt="" />
            </div>
          ))}

          {irati.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.iratifour} alt="" />
            </div>
          ))}

          {irati.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.iratifive} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}