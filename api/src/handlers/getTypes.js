const c_getTypes = require("../controlers/c_getTypes");
const getTypes = async (req, res) => {
  try {
    const data = await c_getTypes();
    console.log("La data es: " + data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getTypes;
