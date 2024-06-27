import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  config: {
    id: string;
    image: string;
    title: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ config }) => {
  return (
    <div className="w-[223px] h-[200px] flex flex-col items-center justify-center gap-6 border-2 border-white rounded-xl">
      <Image src={config.image} alt="service icon" width="76" height="76" />
      <p className="text-white font-montserrat font-semibold text-base leading-6">
        {config.title}
      </p>
    </div>
  );
};

export default ServiceCard;
