"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var get_users_1 = require("./get-users");
var router = (0, express_1.Router)();
router.get("/", get_users_1.getUsers);
exports.default = router;
