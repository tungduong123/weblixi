const mongoose = require("mongoose");

const monneySchema = new mongoose.Schema(
  {
    name: { type: String  },
    phone: { type: String, required: true , unique: true },
    message: { type: String  },
    money: { type: Number },
  },
  {
    timestamps: true,
  }
);
const Monney = mongoose.model("Monney",monneySchema);

module.exports = Monney;
