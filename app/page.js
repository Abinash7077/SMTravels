import CarDetails from "./components/CarDetails";
import Hero from "./components/hero/Hero";
import Destination from "./components/Destination";
import OtherCardDetails from "./components/OtherCardDetails";
import OutOfStateVisitingPlace from "./components/OutOfStateVisitingPlace";
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
