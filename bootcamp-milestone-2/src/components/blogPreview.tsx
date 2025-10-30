import React from "react";
import Image from "next/image";
import style from "./blogPreview.module.css";
import Link from "next/link";
import type { Blog } from "../app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
          className="postImg"
        />
        <p>{props.date}</p>
        <Link
          href={`/blog/${props.slug}`}
          aria-label={`Read more: ${props.title}`}
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
