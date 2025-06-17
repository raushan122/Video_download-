const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const url = decodeURIComponent(event.queryStringParameters.url || "");

  if (!url.includes("instagram") && !url.includes("pinterest")) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Only Instagram and Pinterest URLs are supported." })
    };
  }

  // Dummy placeholder response since real scraping requires headless browser or APIs
  return {
    statusCode: 200,
    body: JSON.stringify({ videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" }) // Replace with real video link from API
  };
};
