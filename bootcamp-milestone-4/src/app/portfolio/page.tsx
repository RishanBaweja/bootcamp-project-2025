import Image from "next/image";
import Link from "next/link";
import style from "@/components/portfolio.module.css";
import connectDB from "@/database/database";
import Portfolio from "@/database/portfolioSchema";

async function getPortfolios() {
  await connectDB();
  const docs = await Portfolio.find().sort({ date: -1 }).lean();

  return docs.map((d: any) => ({
    _id: d._id.toString(),
    title: d.title ?? "",
    slug: d.slug ?? "",
    date: d.date ? new Date(d.date).toISOString() : "",
    description: d.description ?? "",
    image: d.image ?? "",
    imageAlt: d.imageAlt ?? "",
  }));
}

export default async function PortfolioPage() {
  const portfolios = await getPortfolios();

  return (
    <section className={style.portfolioSection}>
      {portfolios.map((p) => (
        <article key={p._id} className={style.portfolioItem}>
          <h2>{p.title}</h2>

          <Link href="/">
            <img
              src={p.image}
              alt={p.imageAlt}
              className={style.portfolioImg}
            />
          </Link>

          <p>{p.description}</p>
          <p className={style.date}>{new Date(p.date).toLocaleDateString()}</p>
        </article>
      ))}
    </section>
  );
}
