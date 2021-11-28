import { ReactElement } from "react";
import Vehicle, { VehicleData } from "../components/Vehicle";
import VehicleGrid from "../components/VehicleGrid";



export default function Home({ data }): ReactElement {
  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-4xl mb-10">Coleap Technical Exercise</h1>
      <VehicleGrid vehicles={data} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
