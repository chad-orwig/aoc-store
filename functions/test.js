const scrapeMetadata = require('./scrapeMetadata');

const url = "https://www.amazon.com/Asmodee-SKR01-Skull/dp/B00GYDLY8E";

scrapeMetadata(url)
    .then(console.log)
    .catch(console.error);