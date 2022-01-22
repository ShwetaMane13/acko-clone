// const dotenv = require("dotenv");
const express = require("express");
// dotenv.config({ path: "./config.env" });
const bodyparser = require("body-parser");
const cors = require("cors");

// const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
// app.use(require("./router/auth"));

// app.listen(PORT, () => {
//   console.log(`server is running at port ${PORT}`);
// });

const otpRouter = require("./Routers/otpRouter");
const userRegistrationRouter = require("./Routers/userRegistrationRouter");
const carDetailsRouter = require("./Routers/carDetailsRouter");
const carPicRouter = require("./Routers/carPicRouter");
const paymentCheckoutRouter = require("./Routers/paymentCheckoutRouter");

app.use("/signup", otpRouter);
app.use("/user", userRegistrationRouter);
app.use("/cars", carDetailsRouter);
app.use("/car", carPicRouter);
app.use("/payment", paymentCheckoutRouter);

module.exports = app;
