import CarDetails from "./components/carDetails/CarDetails";
import Hero from "./components/hero/Hero";
import Destination from "./components/destinationsCard/Destination";
import OtherCardDetails from "./components/carDetails/OtherCardDetails";
import OutOfStateVisitingPlace from "./components/destinationsCard/OutOfStateVisitingPlace";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Destination/>
      <CarDetails/>
      <OtherCardDetails/>
      <OutOfStateVisitingPlace/>
    </div>
  );
}
