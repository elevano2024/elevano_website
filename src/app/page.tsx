import Image from "next/image";
import ServiceCard from "./_components/ServiceCard";
import { serviceCardConfig } from "./_lib/constants";

export default function Home() {
  return (
    <>
      <main>
        {/* About Us */}
        <section className="about bg-white flex px-40 py-24">
          <div className="w-2/6">
            <h3 className="text-black font-montserrat font-bold text-3xl leading-9">
              About
            </h3>
          </div>
          <div className="w-4/6 z-10">
            <p className="text-black font-montserrat font-semibold text-lg leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="about bg-[#FAF9FD] flex px-48 py-24 gap-40">
          <div className="w-3/6">
            <Image
              src="/how-we-work.png"
              alt="how-we-work"
              width="372"
              height="254"
            />
          </div>
          <div className="w-3/6 flex flex-col gap-10">
            <h3 className="text-black font-montserrat font-bold text-3xl leading-9">
              How we Work
            </h3>
            <p className="text-black font-montserrat font-semibold text-base leading-6">
              Crafting innovative solutions to enhance your business growth
              while delivering unparalleled value, satisfaction, and superior
              user experience to users worldwide.
            </p>
          </div>
        </section>

        {/* Our Services */}
        <section className="about bg-[#1E263B] flex px-40 py-24 gap-40">
          <div className="w-2/6 flex flex-col gap-10">
            <h3 className="text-white font-montserrat font-bold text-3xl leading-9">
              Our Services
            </h3>
            <p className="text-white font-montserrat font-medium text-base leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>
          </div>
          <div className="w-3/6 flex flex-wrap gap-16">
            {serviceCardConfig.map((card) => (
              <ServiceCard key={card.id} config={card} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
