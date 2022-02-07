import React from "react";
import { Article } from "./article/Article";

import "./Blog.css";
import yena from "../../assets/yena.jpg";
import sinestrea from "../../assets/sinestrea.jpg";
import liliana from "../../assets/liliana.jpg";
import nata from "../../assets/natalya.jpg";
import gildur from "../../assets/gildur.jpg";

export const Blog = () => {
  return (
    <div className="blog">
      <h1 className="gradient-txt">
        How it looks like with <br /> Display: Grid
      </h1>
      <div className="blog_container">
        <div className="blog_container_a">
          <Article
            time="Jan 20, 2022"
            tit="How to become top one champ Yena"
            im={yena}
          />
        </div>
        <div className="blog_container_b">
          <Article
            time="Jan 20, 2022"
            tit="How to become top one champ Sinestrea"
            im={sinestrea}
          />
          <Article
            time="Jan 20, 2022"
            tit="How to become top one champ Liliana"
            im={liliana}
          />
          <Article
            time="Jan 20, 2022"
            tit="How to become top one champ Natalya"
            im={nata}
          />
          <Article
            time="Jan 20, 2022"
            tit="How to become top one champ Gildur"
            im={gildur}
          />
        </div>
      </div>
    </div>
  );
};
