"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pad_1 = require("./pad");
// Ratio is between 0 and 1
exports.changeColor = function (selectedColor, ratio, darker) {
    // Trim trailing/leading whitespace
    selectedColor = selectedColor.replace(/^\s*|\s*$/, "");
    // Expand three-digit hex
    selectedColor = selectedColor.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, "#$1$1$2$2$3$3");
    // Calculate ratio
    var difference = Math.round(ratio * 256) * (darker ? -1 : 1);
    // Determine if input is RGB(A)
    var fetchedRgb = selectedColor.match(new RegExp("^rgba?\\(\\s*" +
        "(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])" +
        "\\s*,\\s*" +
        "(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])" +
        "\\s*,\\s*" +
        "(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])" +
        "(?:\\s*,\\s*" +
        "(0|1|0?\\.\\d+))?" +
        "\\s*\\)$", "i"));
    var alpha = !!fetchedRgb && fetchedRgb[4] != null ? fetchedRgb[4] : null;
    // Convert hex to decimal
    var decimal = !!fetchedRgb
        ? [fetchedRgb[1], fetchedRgb[2], fetchedRgb[3]]
        : selectedColor
            .replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (parseInt(args[1], 16) +
                "," +
                parseInt(args[2], 16) +
                "," +
                parseInt(args[3], 16));
        })
            .split(/,/);
    // Return RGB(A)
    return !!fetchedRgb
        ? "rgb" +
            (alpha !== null ? "a" : "") +
            "(" +
            Math[darker ? "max" : "min"](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) +
            ", " +
            Math[darker ? "max" : "min"](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) +
            ", " +
            Math[darker ? "max" : "min"](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) +
            (alpha !== null ? ", " + alpha : "") +
            ")"
        : // Return hex
            [
                "#",
                pad_1.pad(Math[darker ? "max" : "min"](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad_1.pad(Math[darker ? "max" : "min"](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad_1.pad(Math[darker ? "max" : "min"](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)
            ].join("");
};
