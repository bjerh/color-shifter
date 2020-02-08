import { Construct } from "./constructInterface";
export declare class ComplimentaryLuminated {
    private luminocity;
    private darkOpacity;
    private lightOpacity;
    constructor(variables: Construct);
    /** This method will return an either darker or lighter version of the color provided, based on the luminous value. Takes an RGB or HEX (with or withour #) */
    get: (color: string) => string;
}
