const rp = require('request-promise');

// TODO: Extrair constantes da API para arquivo próprio
const SPARK_ENDPOINT = 'http://0.0.0.0:3333/api/v1';

const validFqdnCache = ['localhost'];

module.exports = (req, res, next) => {
  const verifyHostname = async () => {
    const options = {
      uri: `${SPARK_ENDPOINT}/verifyHostname?fqdn=${req.hostname}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      resolveWithFullResponse: true,
    };

    rp(options)
      .then(response => {
        if (response.statusCode === 200) {
          if (!validFqdnCache.includes(req.hostname)) {
            validFqdnCache.push(req.hostname);
          }
          next();
        } else {
          res.sendStatus(404);
        }
      })
      .catch(err => { // eslint-disable-line
        res.sendStatus(404);
      });
  };

  if (validFqdnCache.includes(req.hostname)) {
    next();
  } else {
    verifyHostname();
  }
};
