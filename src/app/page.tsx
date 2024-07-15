import Image from "next/image";
import ServiceCard from "./_components/ServiceCard";
import { serviceCardConfig } from "./_lib/constants";
import ServiceSection from "./_components/ServiceSection";

export default function Home() {
  return (
    <>
      <main className="">
        {/* About Us */}
        <section className="about bg-white flex px-36 py-24">
          <div className="w-2/6">
            <h3 className="text-black  font-bold text-3xl leading-9">About</h3>
          </div>
          <div className="w-4/6 z-10">
            <p className="text-black  font-semibold text-lg leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="work bg-[#FAF9FD] flex px-36 py-20 gap-40">
          <div className="w-3/6">
            <Image
              src="/how-we-work.svg"
              alt="how-we-work"
              width="372"
              height="254"
            />
          </div>
          <div className="w-3/6 flex flex-col gap-10">
            <h3 className="text-black  font-bold text-3xl leading-9">
              How we Work
            </h3>
            <p className="text-black  font-medium text-base leading-6">
              At Elevano, we leverage the process to deliver exceptional IT
              solutions. Beginning with discovery and defining clear objectives,
              we move into development, where our expert team crafts innovative
              solutions. Our commitment to quality culminates in seamless
              delivery and ongoing support, ensuring your business thrives with
              cutting-edge technology tailored to your needs.
            </p>
          </div>
        </section>

        {/* Our Services */}
        <section className="service bg-white flex flex-col px-36 py-20 gap-24">
          <div className="w-5/6 flex flex-col gap-10">
            <h3 className="text-black  font-bold text-3xl leading-9">
              Our Services
            </h3>
            <p className="text-black  font-medium text-base leading-6">
              Whether you need a stunning website, custom software solutions,
              scalable cloud infrastructure, or strategic guidance for digital
              evolution, we deliver tailored services to propel your business
              forward.
            </p>
          </div>
          <div className="w-ful flex flex-wrap gap-16">
            <ServiceSection />
          </div>
        </section>

        {/* Our Projects */}
        <section className="work bg-[#FAF9FD] flex px-36 py-20 gap-40">
          <div className="w-1/4 flex flex-col gap-10">
            <h3 className="text-black text-nowrap font-bold text-3xl leading-9">
              Our Projects
            </h3>
            <p className="text-black font-medium text-base leading-6">
              Whether you need a stunning website, custom software solutions,
              scalable.
            </p>
          </div>
          <div className="w-3/4 flex gap-6">
            <Image
              src="/project-1.png"
              alt="how-we-work"
              width="372"
              height="254"
            />
            <Image
              src="/project-1.png"
              alt="how-we-work"
              width="372"
              height="254"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="work bg-white flex justify-between px-36 py-20 gap-40">
          <div className="w-1/5 flex flex-col gap-10">
            <h3 className="text-black text-nowrap font-bold text-3xl leading-9">
              People trust us
            </h3>
          </div>
          <div className="w-3/6 flex flex-col gap-10">
            <p className="text-black  font-normal text-base leading-6">
              This team was a revelation for our product. They combined
              incredible creativity with meticulous attention to detail,
              delivering a final product that truly represented our vision.
            </p>

            <div className="flex gap-6">
              <Image src="/user.png" alt="user" width="50" height="40" />

              <div className="text-black">
                <p className="text-xl font-bold text-nowrap">
                  Arnold Schwarzenegger
                </p>
                <p className="text-base font-normal text-[#2A2A39]">
                  Logbook | CEO
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
