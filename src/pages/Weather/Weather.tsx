import { ChangeEvent, useState } from "react";
import { GrayBox, WeatherPage } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityNameData, setCityNameData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const APP_ID = "aabf61496f6d44d03e22284cfd04081f";

  const getWeather = async () => {
    setIsLoading(true);
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
          <h1 key={v4()}>{`City: ${weatherData.name}, ${weatherData.sys.country}`}</h1>
          <h2 key={v4()}>{`Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)} °C`}</h2>
          <h2 key={v4()}>{`Weather: ${weatherData.weather[0].description}`}</h2>
          <h2 key={v4()}>{`Wind: ${weatherData.wind.speed}`}</h2>
        </GrayBox>
      )}
    </WeatherPage>
  );
}

export default Weather;