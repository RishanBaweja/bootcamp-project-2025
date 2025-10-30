import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import type { Blog } from "../app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <Image src={props.image} alt="img" width={500} height={500}></Image>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
