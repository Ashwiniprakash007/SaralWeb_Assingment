const fs = require("fs");
const readline = require("readline");

const logFilePath = "server.log"; // Change as needed

// Function to parse log file
async function parseLog() {
    const ipCount = {};
    const hourlyTraffic = {};
    const requestMethods = {};

    const fileStream = fs.createReadStream(logFilePath);
    const rl = readline.createInterface({ input: fileStream });

    for await (const line of rl) {
        const ipMatch = line.match(/(\d+\.\d+\.\d+\.\d+)/);
        const timeMatch = line.match(/\[(\d{2})\/(\w+)\/(\d{4}):(\d{2}):(\d{2}):(\d{2})/);
        const methodMatch = line.match(/"(GET|POST|PUT|DELETE)/);

        if (ipMatch && timeMatch) {
            const ip = ipMatch[1];
            const hour = timeMatch[4]; // Extract hour

            ipCount[ip] = (ipCount[ip] || 0) + 1;
            hourlyTraffic[hour] = (hourlyTraffic[hour] || 0) + 1;
        }

        if (methodMatch) {
            const method = methodMatch[1];
            requestMethods[method] = (requestMethods[method] || 0) + 1;
        }
    }

    return { ipCount, hourlyTraffic, requestMethods };
}

module.exports = parseLog;
