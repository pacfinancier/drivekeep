"use client";

import { VehicleCard } from "./vehicle-card";
import { VEHICLES } from "./vehicles-data";

export function Vehicles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Premium Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <div key={vehicle.name} className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-gray-900">
                {vehicle.title}
              </h3>
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}