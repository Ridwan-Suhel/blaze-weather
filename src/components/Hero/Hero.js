import MainForecast from "../MainForecast/MainForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="w-wrapper flex justify-between my-5 gap-4">
        <MainForecast />
        <WeatherDetails />
      </div>
    </section>
  );
};

export default Hero;
