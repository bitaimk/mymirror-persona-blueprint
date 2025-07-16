import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye } from "lucide-react";

export function WeatherWidget() {
  const weatherData = {
    location: "San Francisco",
    temperature: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    visibility: 10,
    forecast: [
      { day: "Today", high: 72, low: 58, icon: "partly-cloudy" },
      { day: "Tomorrow", high: 75, low: 61, icon: "sunny" },
      { day: "Wednesday", high: 68, low: 55, icon: "rainy" }
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case "rainy":
        return <CloudRain className="h-5 w-5 text-blue-500" />;
      default:
        return <Cloud className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Card className="widget-container">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500">
            <Cloud className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium">Weather</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            {getWeatherIcon("partly-cloudy")}
          </div>
          <div className="text-3xl font-bold">{weatherData.temperature}°</div>
          <div className="text-sm text-muted-foreground">{weatherData.condition}</div>
          <div className="text-xs text-muted-foreground mt-1">{weatherData.location}</div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center">
            <Droplets className="h-4 w-4 mx-auto mb-1 text-blue-500" />
            <div className="font-medium">{weatherData.humidity}%</div>
            <div className="text-muted-foreground">Humidity</div>
          </div>
          <div className="text-center">
            <Wind className="h-4 w-4 mx-auto mb-1 text-gray-500" />
            <div className="font-medium">{weatherData.windSpeed} mph</div>
            <div className="text-muted-foreground">Wind</div>
          </div>
          <div className="text-center">
            <Eye className="h-4 w-4 mx-auto mb-1 text-green-500" />
            <div className="font-medium">{weatherData.visibility} mi</div>
            <div className="text-muted-foreground">Visibility</div>
          </div>
        </div>

        {/* 3-Day Forecast */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">3-Day Forecast</div>
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="font-medium">{day.day}</span>
              <div className="flex items-center space-x-2">
                {getWeatherIcon(day.icon)}
                <span>{day.high}°/{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}