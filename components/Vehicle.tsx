import { FC, ReactElement } from "react";

interface VehicleRange {
  unit: "km" | "mi";
  distance: string; // FIXME number?
}

export interface VehicleData {
  id: string;
  make: string;
  model: string;
  range: VehicleRange;
  colors: string[];
  price: string;
  photo: URL;
}

const Vehicle: FC<VehicleData> = ({id, make, model, price}): ReactElement => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg px-5 py-3">
        <div>{id}</div>
        <div>{make}</div>
        <div>{model}</div>
        <div>{price}</div>
    </div>
);

export default Vehicle;
