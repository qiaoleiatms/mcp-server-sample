Weather Data Retrieval Mcp Server Sample
===============================

This is a sample project demonstrating how to create an MCP (Model Context Protocol) server that retrieves weather data for a given location using TypeScript. The server uses the MCP framework to define a tool for fetching weather information.

# Getting Started
## Prerequisites
- Node.js (version 18 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/qiaolei/mcp-server-sample.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mcp-server-sample
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```
## Running the Server
To start the MCP server, run the following command:
```bash
npm start
```
The server will start and listen for incoming requests to fetch weather data.
## Running with Inspector
To run the MCP server with the inspector tool, use the following command:
```bash
npm run inspector
```
This will launch the server along with the MCP inspector for debugging and monitoring.
# Usage
You can configure this MCP server to any MCP-compatible client to request weather data for a specific location. The server will respond with the current temperature and weather description.

```mcp.json
{
    servers: [
        "mcp-server-sample": {
            "type": "stdio",
            "command": "node",
            "args": [
                "absolute/path/to/your/dist/index.js",
                // any additional arguments if needed
            ],
            "env": {
                // any environment variables if needed
            }
        }
    ]
}
```
