import { FC, ReactElement, useEffect, useState } from "react";
import Modal from "./Modal";
import Select from "./Select";
import Vehicle, { VehicleData } from "./Vehicle";

type Sorting = "price" | "range";
type SortOrder = "asc" | "desc";

export interface VehicleGridProps {
  vehicles: VehicleData[];
}

const parsePrice = (price: string): number => parseInt(price.match(/\d+/)[0]);

const sortOptions: Sorting[] = ["price", "range"];
const sortDirection: SortOrder[] = ["asc", "desc"];

const VehicleGrid: FC<VehicleGridProps> = ({ vehicles }): ReactElement => {
  const [sorting, setSorting] = useState<Sorting>("price");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [sortedVehicles, setSortedVehicles] = useState<VehicleData[]>(vehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleData>(null);

  useEffect(() => {
    const sortedVehicles = [...vehicles];
    setSortedVehicles(
      sortedVehicles.sort((a, b) => {
        switch (sorting) {
          case "range":
            let s = sortOrder === "asc" ? -1 : 1;
            return a.range.distance > b.range.distance ? -s : s;
          default:
          case "price":
            return sortOrder === "asc"
              ? parsePrice(a.price) - parsePrice(b.price)
              : parsePrice(b.price) - parsePrice(a.price);
        }
      })
    );

    console.log(vehicles.map((v) => parsePrice(v.price)));
  }, [vehicles, sorting, sortOrder]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Select
            id="sorting"
            label="Sort By"
            options={sortOptions}
            onSelect={(s) => setSorting(s)}
          />
        </div>
        <div>
          <Select
            id="sortOrder"
            label="Sort Order"
            options={sortDirection}
            onSelect={(s) => setSortOrder(s)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {sortedVehicles.map((vehicle: VehicleData) => (
          <Vehicle
            key={vehicle.id}
            data={vehicle}
            onClick={() => setSelectedVehicle(vehicle)}
          />
        ))}
      </div>
      <Modal
        isOpen={!!selectedVehicle}
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </>
  );
};

export default VehicleGrid;
