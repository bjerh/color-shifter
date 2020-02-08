"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = function (num, totalChars) {
    num = num + "";
    while (num.length < totalChars) {
        num = "0" + num;
    }
    return num;
};
