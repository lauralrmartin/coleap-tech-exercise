import { FC, ReactElement, useEffect, useState } from "react";
import Vehicle, { VehicleData } from "./Vehicle";

type Sorting = "price" | "range";

export interface VehicleGridProps {
  vehicles: VehicleData[];
}

const VehicleGrid: FC<VehicleGridProps> = ({ vehicles }): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {vehicles.map((vehicle: VehicleData) => (
          <Vehicle key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </>
  );
};

export default VehicleGrid;
