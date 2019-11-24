const metascraper = require('metascraper')([
    require('metascraper-amazon')(),
    require('metascraper-title')(),
    require('metascraper-description')(),
    require('metascraper-image')()
  ]);

const got = require('got');

async function scrapeMetadata(targetUrl) {
    const { body: html, url } = await got(targetUrl);
    const metadata = await metascraper({ html, url });
    return metadata;
}

module.exports = scrapeMetadata;