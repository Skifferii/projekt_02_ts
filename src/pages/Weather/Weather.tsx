import { ChangeEvent, useState } from "react";
import { GrayBox, WeatherPage } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityNameData, setCityNameData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const APP_ID = "aabf61496f6d44d03e22284cfd04081f";

  const getWeather = async () => {
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
          setWeatherData(result);
        } else {
          throw Object.assign(new Error("API ERROR"), { errorObj: result });
        }
      } catch (error) {
        console.error("API Error ", error);
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
          placeholder={"City"}
          value={cityNameData}
          onChange={cityChange}
        />
        <Button name={"Search"} onButtonClick={getWeather} />
      </GrayBox>
      {weatherData && (
        <GrayBox>
          <h1>{`City: ${weatherData.name}, ${weatherData.sys.country}`}</h1>
          <h2>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              style={{ width: "90px", height: "90px" }}
            />
          </h2>
          <h2>{`${weatherData.weather[0].description}`}</h2>
          <h2>{` ${(weatherData.main.temp - 273.15).toFixed(1)} °C`}</h2>
          <h2>{`wind ${weatherData.wind.speed}`}</h2>
        </GrayBox>
      )}
    </WeatherPage>
  );
}

export default Weather;
