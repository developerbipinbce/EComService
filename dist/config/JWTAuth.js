"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const constant_1 = require("./constant");
const generateToken = (userId, role) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            role
        };
        const token = jsonwebtoken_1.sign(payload, constant_1.default);
        resolve(token);
    });
};
exports.generateToken = generateToken;
