import Image from "next/image";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <main>
      <h1 className="page-title">Summary</h1>

      <div className="about">
        <div className="about-image">
          <Image
            src="/IMG_1254.JPG"
            alt="A photo of myself at Sausalito"
            width={350}
            height={350}
          />
        </div>

        <p className="about-text">
          Motivated student attending <strong>Cal Poly SLO</strong> with
          aspirations to work at an organization offering opportunities for
          growth and skill enhancement. Looking to{" "}
          <strong>apply and enhance</strong> my knowledge and experience, I am
          drawn to <em>innovative companies.</em> Possessing an{" "}
          <em>inquisitive, quick-learning mindset,</em> I am enthusiastic about
          actively participating in a <em>growth-oriented organization.</em>
        </p>
      </div>

      <footer className="footer">
        © 2025 Rishan Baweja&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
