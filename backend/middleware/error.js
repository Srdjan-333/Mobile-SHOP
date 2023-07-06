const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Interna serverska greška';

  // Greška neispravnog MongoDB ID-a
  if (err.name === 'CastError') {
    const message = `Resurs nije pronađen sa ovim ID-jem. Neispravan ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Greška dupliciranog ključa
  if (err.code === 11000) {
    const message = `Dupliran ključ ${Object.keys(err.keyValue)} unet`;
    err = new ErrorHandler(message, 400);
  }

  // Greška neispravnog JWT tokena
  if (err.name === 'JsonWebTokenError') {
    const message = `Vaš URL je neispravan, molimo pokušajte ponovo`;
    err = new ErrorHandler(message, 400);
  }

  // JWT token je istekao
  if (err.name === 'TokenExpiredError') {
    const message = `Vaš URL je istekao, molimo pokušajte ponovo!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
