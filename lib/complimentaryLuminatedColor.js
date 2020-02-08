"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var changeColor_1 = require("./changeColor");
var ComplimentaryLuminated = /** @class */ (function () {
    function ComplimentaryLuminated(variables) {
        this.luminocity = 180;
        this.darkOpacity = 0.5;
        this.lightOpacity = 0.5;
        /** This method will return an either darker or lighter version of the color provided, based on the luminous value. Takes an RGB or HEX (with or withour #) */
        this.get = function (color) {
            var subbedColor = color.substring(1); // strip #
            var rgb = parseInt(subbedColor, 16); // convert rrggbb to decimal
            var r = (rgb >> 16) & 0xff; // extract red
            var g = (rgb >> 8) & 0xff; // extract green
            var b = (rgb >> 0) & 0xff; // extract blue
            var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // ITU-R BT.709
            if (luma < 180) {
                return changeColor_1.changeColor(subbedColor, 0.5, false);
            }
            else {
                return changeColor_1.changeColor(subbedColor, 0.5, true);
            }
        };
        if (variables.luminocity) {
            this.luminocity = variables.luminocity;
        }
        if (variables.darkOpacity) {
            this.darkOpacity = variables.darkOpacity;
        }
        if (variables.lightOpacity) {
            this.lightOpacity = variables.lightOpacity;
        }
        console.log("luminocity", this.luminocity);
        console.log("darkOpacity", this.darkOpacity);
        console.log("lightOpacity", this.lightOpacity);
    }
    return ComplimentaryLuminated;
}());
exports.ComplimentaryLuminated = ComplimentaryLuminated;
