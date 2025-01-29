const Monney = require("../model/LuckyMoney");

const luckyMoney = async (req, res) => {
  try {
    const { name, phone, message, money } = req.body;
    console.log("req.body", req.body);
    if (!name || !phone || !message || !money) {
      return res.status(400).json({
        status: "Error",
        message: "the input is required",
      });
    } 
    const saveMonney = await Monney.create({
      name,
      phone,
      message,
      money,
    });

    return res.status(200).json({
      status: "OK",
      message: "SUCCESS",
      data: saveMonney,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  luckyMoney,
};
