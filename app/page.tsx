import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <section className="flex gap-4 py-8 md:py-10 justify-around items-center h-screen">
        <div className="inline-block max-w-xl">
          <span className={title()}>HALAL&nbsp;</span>
          <span className={title({ color: "green" })}>LINK&nbsp;</span>
          <span className={subtitle()}>Bringing Together Faith and Community</span>
        </div>

        <div className="inline-block">
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
        </div>
      </section>

      {/* About Section */}

      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl">
          <span className={title()}>Tentang HALAL&nbsp;</span>
          <span className={title({ color: "green" })}>LINK&nbsp;</span>
        </div>

        <div>
          Halal Link adalah event organizer Islami yang berdedikasi
          untuk menciptakan event-event bermakna yang menginspirasi dan
          memperkuat nilai-nilai Islam dalam kehidupan sehari-hari. Kami percaya
          bahwa setiap acara bisa menjadi momen untuk memperdalam keimanan dan
          mempererat tali silaturahmi di antara umat. Dengan berbagai acara
          islami mulai dari seminar, konferensi, hingga kegiatan sosial, Halal
          Link hadir sebagai jembatan yang menghubungkan komunitas dengan
          inspirasi Islami. Visi kami adalah menjadi EO Islami terdepan yang
          membawa keberkahan bagi setiap langkah acara yang kami selenggarakan.
        </div>
      </section>

      {/* Product Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10 items-center">
        <div className="inline-block max-w-xl">
          <span className={title({ color: "blue" })}>Event&nbsp;</span>
        </div>
        <div className="py-10">
          <ProductCard />
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl">
          <span className={title({ color: "violet" })}>Contact&nbsp;</span>
          <span className={title()}>Me&nbsp;</span>
        </div>
      </section>
    </main>
  );
}
