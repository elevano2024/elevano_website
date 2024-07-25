"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const SERVICE_CONFIG = [
  {
    buttonTitle: "Product Design",
    title: "What we do",
    description:
      "Transform your ideas into standout products with our expert product designing service. We blend creativity with cutting-edge technology to deliver intuitive, user-centric designs across web, mobile, and desktop platforms. Accelerate your time-to-market and gain a competitive edge with our scalable and cost-effective solutions.",
    subtitle: "Tools we use",
    images: [
      "/figma-icon.svg",
      "/adobe-photoshop-cc-icon.svg",
      "adobe-illustrator-cc-icon.svg",
    ],
    active: true,
  },
  {
    buttonTitle: "Web and Mobile App Development",
    title: "What we do",
    description:
      "Transform your ideas into standout products with our expert product designing service. We blend creativity with cutting-edge technology to deliver intuitive, user-centric designs across web, mobile, and desktop platforms. Accelerate your time-to-market and gain a competitive edge with our scalable and cost-effective solutions.",
    subtitle: "Tools we use",
    images: [
      "/figma-icon.svg",
      "/adobe-photoshop-cc-icon.svg",
      "adobe-illustrator-cc-icon.svg",
    ],
    active: false,
  },
  {
    buttonTitle: "Cloud Services",
    title: "What we do",
    description:
      "Transform your ideas into standout products with our expert product designing service. We blend creativity with cutting-edge technology to deliver intuitive, user-centric designs across web, mobile, and desktop platforms. Accelerate your time-to-market and gain a competitive edge with our scalable and cost-effective solutions.",
    subtitle: "Tools we use",
    images: [
      "/figma-icon.svg",
      "/adobe-photoshop-cc-icon.svg",
      "adobe-illustrator-cc-icon.svg",
    ],
    active: false,
  },
  {
    buttonTitle: "Digital Transformation Consulting",
    title: "What we do",
    description:
      "Transform your ideas into standout products with our expert product designing service. We blend creativity with cutting-edge technology to deliver intuitive, user-centric designs across web, mobile, and desktop platforms. Accelerate your time-to-market and gain a competitive edge with our scalable and cost-effective solutions.",
    subtitle: "Tools we use",
    images: [
      "/figma-icon.svg",
      "/adobe-photoshop-cc-icon.svg",
      "adobe-illustrator-cc-icon.svg",
    ],
    active: false,
  },
];

const ServiceSection = () => {
  const [services, setServices] = useState(SERVICE_CONFIG);
  const [activeService, setActiveService] = useState(SERVICE_CONFIG[0]);

  useEffect(() => {
    setActiveService(SERVICE_CONFIG[0]);
  }, []);

  const handleServiceClick = (index: number) => {
    const updatedServices = services.map((service, i) => ({
      ...service,
      active: i === index,
    }));

    setServices(updatedServices);
    setActiveService(updatedServices[index]);
  };

  return (
    <div className="w-full flex gap-12">
      {/* Service Buttons */}
      <div className="w-2/6 flex flex-col gap-6">
        {services.map((service, index) => (
          <button
            key={index}
            className={`h-[112px] border-[1px] border-[#4C42D9] text-black rounded-lg py-5 px-9 flex justify-start items-center gap-2 ${
              service.active ? "bg-[#4C42D9]" : ""
            }`}
            onClick={() => handleServiceClick(index)}
          >
            <Image
              src={`${service.active ? "/orion-white.svg" : "/orion.svg"}`}
              alt="orion"
              width="30"
              height="30"
            />
            <span
              className={`text-left font-medium text-lg leading-6 ${
                service.active ? "text-white" : "text-black"
              }`}
            >
              {service.buttonTitle}
            </span>
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="w-4/6 text-black bg-[#FAF9FD] p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">{activeService.title}</h2>
        <p className="mb-4 text-base font-medium">
          {activeService.description}
        </p>
        <h3 className="text-xl font-bold mb-2">{activeService.subtitle}</h3>
        <div className="flex flex-wrap gap-4">
          {activeService.images.length > 0 ? (
            activeService.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`tool-${index}`}
                width="44"
                height="44"
                className="w-[40px] h-[40px]"
              />
            ))
          ) : (
            <p>No tools listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
