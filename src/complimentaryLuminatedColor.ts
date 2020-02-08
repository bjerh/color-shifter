import { changeColor } from "./changeColor";
import { Construct } from "./constructInterface";

export class ComplimentaryLuminated {
  private luminocity = 180;
  private darkOpacity = 0.5;
  private lightOpacity = 0.5;

  constructor(variables: Construct) {
    if (variables.luminocity) {
      this.luminocity = variables.luminocity;
    }
    if (variables.darkOpacity) {
      this.darkOpacity = variables.darkOpacity;
    }
    if (variables.lightOpacity) {
      this.lightOpacity = variables.lightOpacity;
    }
  }

  /** This method will return an either darker or lighter version of the color provided, based on the luminous value. Takes an RGB or HEX (with or withour #) */
  public get = (color: string) => {
    const subbedColor = color.substring(1); // strip #
    const rgb = parseInt(subbedColor, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // ITU-R BT.709

    if (luma < 180) {
      return changeColor(subbedColor, this.lightOpacity, false);
    } else {
      return changeColor(subbedColor, this.darkOpacity, true);
    }
  };
}
