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
          <span className={title()}>Kencana&nbsp;</span>
          <span className={title({ color: "green" })}>Mandiri&nbsp;</span>
          <span className={subtitle()}>
            Bringing Together Faith and Community
          </span>
        </div>
      </section>

      {/* About Section */}

      <section className="flex flex-col gap-4 py-8 md:py-10 h-1/2">
        <div className="inline-block max-w-xl">
          <span className={title()}>Tata Kencana Mandiri</span>
        </div>
        <div>
          Perusahaan furniture yang telah berhasil menembus pasar internasional.
          Dengan fokus pada kualitas tinggi dan desain inovatif, perusahaan ini
          memproduksi berbagai produk furniture untuk kebutuhan rumah tangga dan
          proyek komersial. Berpengalaman dalam ekspor, perusahaan ini dikenal
          karena ketelitian dalam produksi dan kepuasan pelanggan di berbagai
          negara.
        </div>
      </section>

      {/* Product Section */}
      <section className="flex flex-col gap-4 py-8 md:py-10 items-center">
        <div className="inline-block max-w-xl">
          <span className={title({ color: "blue" })}>Product&nbsp;</span>
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
