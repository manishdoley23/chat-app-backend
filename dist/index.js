"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./routes/routes");
var app = (0, express_1.default)();
app.use("/", routes_1.default);
app.listen(7878, function () {
    console.log("Express: 7878");
});
