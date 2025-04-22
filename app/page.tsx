import Image from "next/image";
import Link from "next/link";
import DonorRequestsList from "./components/DonorRequestsList";
import MapComponent from "./components/DonorRequestsMap";

export default function Home() {
  return (
    <main>
      <h1>Menghubungkan Pendonor dengan Penerima Darah</h1>
      <div className="map-container">
        <MapComponent 
          center = {[-2.5489, 118.0149]}
          zoom = {5}
          markerPosition = {[-6.200000, 106.816666]}
        />
      </div>
      <DonorRequestsList/>
    </main>
  );
}
