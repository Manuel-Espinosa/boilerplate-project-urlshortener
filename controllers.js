let urlDatabase = {};
let urlIndex = 1;

exports.shortenUrl = (req, res) => {
    const { url: originalUrl } = req.body;
    const urlPattern = new RegExp('^(http://www.|https://www.|http://|https://)[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$');

    if (!urlPattern.test(originalUrl)) {
        return res.json({ error: 'invalid url' });
    }

    const shortUrl = urlIndex++;
    urlDatabase[shortUrl] = originalUrl;
    res.json({ original_url: originalUrl, short_url: shortUrl });
};

exports.redirectToOriginalUrl = (req, res) => {
    const { shortUrl } = req.params;
    const originalUrl = urlDatabase[shortUrl];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.json({ error: 'No short URL found for the given input' });
    }
};
