"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface VehicleCardProps {
  title: string;
  name: string;
  image: string;
  description: string;
  features?: string[];
  specs?: {
    seating?: string;
    cargo?: string;
    comfort?: string;
    tech?: string;
    safety?: string;
  };
}

export function VehicleCard({ title, name, image, description, features, specs }: VehicleCardProps) {
  const [showLargeImage, setShowLargeImage] = useState(false);
  const router = useRouter();

  const handleSelectVehicle = () => {
    switch (title) {
      case "Drive Uber XXL/Black":
        router.push("/payment");
        break;
      case "Drive Uber Comfort":
        router.push("/payment-comfort");
        break;
      case "Drive UberX":
        router.push("/payment-mazda");
        break;
      default:
        alert("Coming soon!");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div 
          className="relative h-64 cursor-pointer"
          onClick={() => setShowLargeImage(true)}
        >
          <Image
            src={image}
            alt={`${name} - Premium vehicle available for Uber drivers`}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {features && features.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {specs && (
            <div className="mb-4 pt-4 border-t">
              <h4 className="font-semibold mb-2">Specifications:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-500 capitalize">{key}: </span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleSelectVehicle}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Select Vehicle
          </Button>
        </div>
      </div>

      <Dialog open={showLargeImage} onOpenChange={setShowLargeImage}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="text-xl font-semibold">{name}</DialogTitle>
          <div className="relative h-[600px] w-full">
            <Image
              src={image}
              alt={`${name} - Premium vehicle available for Uber drivers`}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          {features && features.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">All Features:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}