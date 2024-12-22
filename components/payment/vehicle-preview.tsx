"use client";

import Image from "next/image";

interface VehiclePreviewProps {
  image: string;
  name: string;
  description: string;
}

export function VehiclePreview({ image, name, description }: VehiclePreviewProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12">
      <div className="relative h-[400px]">
        <Image
          src={image}
          alt={`${name} - Premium vehicle for Uber drivers`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}