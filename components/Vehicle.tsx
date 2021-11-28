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
  photo: string;
}

interface VehicleProps {
  data: VehicleData;
  onClick: () => void;
}

const Vehicle: FC<VehicleProps> = ({
  data: { make, model, price, colors, photo, range },
  onClick,
}): ReactElement => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg cursor-pointer hover:shadow-lg" onClick={onClick}>
    <div className="px-5 py-3 bg-gradient-to-br from-purple-800 to-purple-500 text-white">
      {make} {model}
    </div>
    <div className="border-b-2">
      <img className="max-h-48 m-auto" src={photo} />
    </div>
    <ul className="px-5 py-3">
      <li>Make: {make}</li>
      <li>Model: {model}</li>
      <li>Price: {price}</li>
      <li>
        Range: {range.distance} {range.unit}
      </li>
    </ul>
  </div>
);

export default Vehicle;
