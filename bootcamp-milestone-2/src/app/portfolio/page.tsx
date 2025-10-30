import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>

      <div className="project">
        <div className="project-image">
          <Link href="/">
            <Image
              src="/homepage.jpg"
              alt="Homepage"
              width={400}
              height={300}
            />
          </Link>
        </div>

        <div className="project-details">
          <strong className="project-name">
            Rishan Baweja&apos;s Personal Website
          </strong>
          <p className="project-description">
            Built my personal project using Hack4Impact&apos;s Starterpack!
          </p>
          <Link href="/">Learn More</Link>
        </div>
      </div>

      <footer className="footer">
        © 2025 Rishan Baweja&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
