import { ChangeEvent, useState } from "react";
import { GrayBox, WeatherPage, ImgBox } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { WeatherProps,WeatherErrorProps } from "./types";

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [weatherError, setWeatherError] = useState<WeatherErrorProps | null>(null);
  const [cityNameData, setCityNameData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const APP_ID = "aabf61496f6d44d03e22284cfd04081f";

  const getWeather = async () => {
    setWeatherData(null);
    setWeatherError(null);
    setIsLoading(true);
    if (cityNameData === "") {
      alert("Enter city");
      setIsLoading(false);
    } else {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityNameData}&appid=${APP_ID}`
        );
        const result = await response.json();
        console.log(result);
        if (response.ok) {
          setWeatherData({
            name: result.name,
            country: result.sys.country,
            temp: result.main.temp,
            description: result.weather[0].description,
            wind: result.wind.speed,
            weatherIcon: result.weather[0].icon,
          });
        } else {
          setWeatherError({ 
            cod: result.cod, 
            message: result.message });
          //throw Object.assign(new Error("API ERROR"), { errorObj: result });
        }
      } catch (error) {
        console.log(error)        
      } finally {
        setIsLoading(false);
      }
    }
  };
   const cityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityNameData(event.target.value);
  };

  return (
    <WeatherPage>
      {isLoading && <Spinner />}
      <GrayBox>
        <Input
          name={"Input"}
          placeholder={"Input City"}
          value={cityNameData}
          onChange={cityChange}
        />
        <Button name={"Search"} onButtonClick={getWeather} />
      </GrayBox>
      {weatherData && (
        <GrayBox>
          <h1>{`City: ${weatherData.name}, ${weatherData.country}`}</h1>
          <h2>
            <ImgBox>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
                alt={weatherData.description}
              />
            </ImgBox>
          </h2>
          <h2>{`${weatherData.description}`}</h2>
          <h2>{` ${(weatherData.temp - 273.15).toFixed(1)} °C`}</h2>
          <h2>{`wind ${weatherData.wind} m/s`}</h2>
        </GrayBox>
      )}
      {weatherError && (
        <GrayBox>
          <h1>{`Code: ${weatherError.cod}`}</h1>          
          <h2>{`${weatherError.message}`}</h2>          
        </GrayBox>
      )}
    </WeatherPage>
  );
}

export default Weather;
