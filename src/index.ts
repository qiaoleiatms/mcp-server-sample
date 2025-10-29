import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    fetchWeatherData,
    formatWeatherData,
    GetWeatherRequestSchema,
} from "./tools/get_weather";

// Initialize the MCP server
const server = new McpServer({ name: "mcp-server-sample", version: "1.0.0" });

// Register the get_weather tool
server.registerTool(
    "get_weather",
    {
        description: "Get the current weather for a specified location.",
        inputSchema: GetWeatherRequestSchema.shape,
    },
    async (input) => {
        const { location } = input;
        try {
            const weatherData = await fetchWeatherData(location);
            const formattedData = formatWeatherData(weatherData);
            return {
                content: [
                    {
                        type: "text",
                        text: formattedData
                    }
                ]
            }; // Return the formatted weather data in the expected response format
        } catch (error) {
            console.error("Error occurred while fetching weather data:", error);
            return {
                content: [
                    {
                        type: "text",
                        text: "Error fetching weather data"
                    }
                ],
                isError: true
            }; // Return an error response
        }
    }
);

// Connect the server using standard input/output transport
const transport = new StdioServerTransport();
server
    .connect(transport)
    .then(async () => {
        // For debugging purposes, you can uncomment the following line
        // But it's commented out to keep the output clean during normal operation as we're using stdio transport
        // console.info("MCP server connected successfully.");
    })
    .catch((error: Error) => {
        // console.error("Error occurred while connect to MCP server:", error);
    })
    .finally(() => {
        // console.info("MCP server is running. Press Ctrl+C to exit.");
    });
