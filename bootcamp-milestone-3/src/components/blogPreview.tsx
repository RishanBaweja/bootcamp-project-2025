import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import Link from "next/link";
import type Blog from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {
  return (
    <article className={style.card}>
      <h3>{props.title}</h3>
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
          className="postImg"
        />
        <Link
          href={`/blog/${props.slug}`}
          aria-label={`Read more: ${props.title}`}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
