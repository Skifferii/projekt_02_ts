
export interface WeatherProps{
name: string;
country: string;
temp: number;
description: string;
wind: number;
weatherIcon: string;
}

export interface WeatherErrorProps{
    cod: string;
    message: string;    
    }