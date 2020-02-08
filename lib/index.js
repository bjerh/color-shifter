"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var complimentaryLuminatedColor_1 = require("./complimentaryLuminatedColor");
exports.getComplimentaryLuminatedColor = function (color, variables) { return new complimentaryLuminatedColor_1.ComplimentaryLuminated(variables).get(color); };
