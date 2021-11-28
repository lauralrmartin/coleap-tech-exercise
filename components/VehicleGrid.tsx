import { FC, ReactElement, useEffect, useState } from "react";
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
  const [sortedVehicles, setSortedVehicles] = useState(vehicles);

  useEffect(() => {
    setSortedVehicles(
      vehicles.sort((a, b) => {
        switch (sorting) {
          case "range":
            return a.range.distance > b.range.distance ? -1 : 1;
          default:
          case "price":
            return sortOrder === "asc"
              ? parsePrice(a.price) - parsePrice(b.price)
              : parsePrice(b.price) - parsePrice(a.price);
        }
      })
    );
  }, [vehicles, sorting, sortOrder]);

  return (
    <>
      <Select id="sorting" options={sortOptions} onSelect={(s) => setSorting(s)} />
      <Select id="sortOrder" options={sortDirection} onSelect={(s) => setSortOrder(s)} />
      <div className="grid grid-cols-2 gap-4">
        {sortedVehicles.map((vehicle: VehicleData) => (
          <Vehicle key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </>
  );
};

export default VehicleGrid;
