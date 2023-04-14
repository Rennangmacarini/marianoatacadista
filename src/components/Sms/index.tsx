import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";

type Post = {
  id: string;
  smsone: string;
  smstwo: string;
  smsthree: string;
  smsfour: string;
  smsfive: string;
  smstitle: string;
};

interface PostProps {
    sms: Post[];
}

export function Sms({ sms }: PostProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div  className={styles.title}>
        {sms.map((post) =>(
            <div key={post.id}>
            <h1>{post.smstitle}</h1>
            </div>
        ))}
      </div>

      <div className={styles.carousel}>
        <div ref={ref} className="keen-slider">
          {sms.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.smsone} alt="" />
            </div>
          ))}

          {sms.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.smstwo} alt="" />
            </div>
          ))}

          {sms.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.smsthree} alt="" />
            </div>
          ))}

          {sms.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.smsfour} alt="" />
            </div>
          ))}

          {sms.map((post) => (
            <div key={post.id} className="keen-slider__slide number-slide1">
              <img src={post.smsfive} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}