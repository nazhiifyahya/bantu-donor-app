import Image from "next/image";
import Link from "next/link";
import DonorRequestsList from "./components/DonorRequestsList";
import MapComponent from "./components/DonorRequestsMap";
import DonorRequestButton from "./components/DonorRequestButton";
import LoginButton from "./components/LoginButton";
import SignupLink from "./components/SignupLink";

export default function Home() {
  return (
    <main>
      <h1>Menghubungkan Pendonor dengan Penerima Darah</h1>

      <div className="relative w-full h-[600px]">
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
          <h3>Butuh Kantong Darah?</h3>
          <DonorRequestButton/>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
          <h3>Anda Sukarelawan Donor?</h3>
          <LoginButton/>
          <h3>atau <SignupLink/></h3>
        </div>

        <div className="absolute left-4">
          <MapComponent 
            center = {[-2.5489, 118.0149]}
            zoom = {4}
          />
        </div>
      </div>

      <DonorRequestsList/>
    </main>
  );
}
