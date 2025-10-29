import * as zod from "zod";

// Schema for validating the get weather request
export const GetWeatherRequestSchema = zod.object({
  location: zod.string().describe("The location to get the weather for."),
});

export type GetWeatherRequest = zod.infer<typeof GetWeatherRequestSchema>;

export function validateGetWeatherRequest(
  data: unknown
): GetWeatherRequest {
  return GetWeatherRequestSchema.parse(data);
}

export interface WeatherData {
  temperature: number;
  description: string;
}

// Mock function to simulate fetching weather data from an API
export function fetchWeatherData(location: string): Promise<WeatherData> {
    const mockData: Record<string, WeatherData> = {
        "Sydney": { temperature: 70, description: "Sunny" },
        "Bangalore": { temperature: 80, description: "Sunny" },
        "New York": { temperature: 75, description: "Sunny" },
        "Los Angeles": { temperature: 85, description: "Clear skies" },
        "Chicago": { temperature: 65, description: "Partly cloudy" },
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mockData[location]) {
                resolve(mockData[location]);
            } else {
                reject(new Error("Location not found"));
            }
        }, 1000);
    });
}

// Function to format the weather data into a readable string
export function formatWeatherData(data: WeatherData): string {
    return `The current temperature is ${data.temperature}°F with ${data.description}.`;
}
