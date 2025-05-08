import DonorRequestsList from "./components/DonorRequestsList";
import MapComponent from "./components/DonorRequestsMap";
import DonorRequestButton from "./components/DonorRequestButton";
import LoginButton from "./components/LoginButton";
import SignupLink from "./components/SignupLink";

export default function Home() {
  return (
    <main>
      <h1>Menghubungkan Pendonor dengan Penerima Darah</h1>

      <div className="flex flex-row">        
        <MapComponent 
          center = {[-2.5489, 118.0149]}
          zoom = {4}
        />

        <div className="flex flex-col">
          <div className="flex">
            <h3>Butuh Kantong Darah?</h3>
            <DonorRequestButton/>
          </div>

          <div className="flex">
            <h3>Anda Sukarelawan Donor?</h3>
            <LoginButton/>
            <h3>atau <SignupLink/></h3>
          </div>
        </div>
      </div>

      <DonorRequestsList/>
    </main>
  );
}
