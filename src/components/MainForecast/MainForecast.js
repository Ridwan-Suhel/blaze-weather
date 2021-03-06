import {
  BeakerIcon,
  CloudIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import moment from "moment-timezone";
const MainForecast = ({
  search,
  fetchWeather,
  setSearch,
  weatherInfo,
  isLoading,
  unit,
  timeZone,
}) => {
  let descTxt = weatherInfo?.description;
  const desc = descTxt?.charAt(0)?.toUpperCase() + descTxt?.slice(1);

  const isFetched = fetchWeather?.cod === "404";
  return (
    <aside className="border border-slate-500 main-forecast md:w-2/4 lg:w-1/4 h-auto lg:h-screen bg-white shadow rounded dark:bg-black dark:shadow-slate-500">
      <div className="form-group flex items-center bg-base-100 px-2 md:px-4 py-1 border-b dark:border-slate-800">
        <label htmlFor="searchInput">
          <SearchCircleIcon className="h-5 w-5 text-slate-500 rotate-[-90deg]" />
        </label>

        <input
          title="Write Your City Name Here"
          id="searchInput"
          type="text"
          placeholder="Search Place Here..."
          className=" py-1 px-2 text-lg w-full text-slate-500 focus:outline-none bg-transparent dark:text-white"
          autoFocus={true}
          onChange={(e) => {
            const searchTxt = e.target.value;
            const txtValue = searchTxt.toLowerCase();
            setSearch(txtValue);
          }}
        />
      </div>

      {isLoading ? (
        <>
          {!isFetched ? (
            <div className="forecast-detail  px-2 md:px-4 overflow-x-hidden dark:text-white">
              <div className="sm:flex md:block items-center justify-center">
                <div className="w-img">
                  <img
                    title={`Current weather is - ${weatherInfo?.main}`}
                    className="w-[120px] mx-auto sm:mx-start md:w-[200px] md:ml-[-35px] md:mt-[-35px]"
                    src={`http://openweathermap.org/img/wn/${weatherInfo?.icon}@4x.png`}
                    alt="img"
                  />
                </div>

                <h2 className="mt-[-20px] mb-4 sm:mb-0 sm:mt-[-15px] text-center sm:text-start text-5xl font-light ">
                  {fetchWeather?.main?.temp.toFixed()}&deg;
                  <span className="text-3xl">
                    {unit === "metric" || unit === "" ? "C" : "F"}
                  </span>
                </h2>
              </div>

              <div className="sm:flex md:block justify-center gap-2">
                <h2 className="text-center sm:text-left text-2xl font-normal md:my-6 start">
                  {moment?.unix(fetchWeather?.dt)?.tz(timeZone)?.format("dddd")}
                  ,{" "}
                  <span className="text-slate-500 font-light dark:text-slate-200">
                    {moment?.unix(fetchWeather?.dt)?.tz(timeZone)?.format("LT")}
                  </span>
                </h2>

                <div className="more-info text-slate-500 dark:text-slate-400">
                  <div className="my-1 sm:my-0 flex items-center justify-center sm:justify-start gap-3">
                    <BeakerIcon className="h-5 w-5" />{" "}
                    <span>
                      Feels Like {fetchWeather?.main?.feels_like}&deg;
                      {unit === "metric" || unit === "" ? "C" : "F"}
                    </span>
                  </div>
                  <div className="flex items-center justify-center  sm:justify-start gap-3">
                    <CloudIcon className="h-5 w-5" />{" "}
                    <span>Cloudy - {fetchWeather?.clouds?.all}%</span>
                  </div>
                </div>
              </div>

              <div className="border border-slate-600 mb-4 md:mb-0 font-light mt-6 bg-black p-5 text-white rounded-lg relative overflow-hidden dark:bg-slate-900">
                <h2>
                  Weather Information:{" "}
                  <span className="text-gray-300">{weatherInfo?.main},</span>
                </h2>
                <h2 className="text-gray-300">{desc}</h2>
                <h2 className="text-xl font-light text-right ">
                  {fetchWeather?.name} -{" "}
                  <span>{fetchWeather?.sys?.country}</span>
                </h2>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherInfo?.icon}@2x.png`}
                  alt="img"
                  className="absolute top-[-10px] right-[-10px]"
                />
              </div>
            </div>
          ) : (
            <NotFound />
          )}
        </>
      ) : (
        <div className="text-center w-full flex items-center content-center">
          <div className="w-[100px] mx-auto mt-12">
            <Loading />
          </div>
        </div>
      )}
    </aside>
  );
};

export default MainForecast;
