const Cars = require("./cars-model");

const requiredFields = ['vin', 'make', 'model', 'mileage'];
const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    if (!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      req.car = car;
      next();
    }
  } catch (error) {
    next({ status: 500, message: "Internal Server Error" });
  }
};

const checkCarPayload = (req, res, next) => {
  console.log('Checking payload');
  requiredFields.forEach(field => {
    if (!req.body[field]) {
      next({
        status: 400, message: `${field} is missing`
      })
    } else {
      next();
    }
  })
  next();
};

const checkVinNumberValid = (req, res, next) => {
  next();
};

const checkVinNumberUnique = (req, res, next) => {
  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
