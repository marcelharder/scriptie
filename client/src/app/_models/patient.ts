import { CAS } from "./cas";
import { GLI } from "./gli";

export interface Patient {
    id: number;
    height: number;
    weight: number;
    age: number;
    gender: number;
    feV1: number;
    tlc: number;
    rv: number;
    erv: number;
    ic: number;
    vc: number;
    gli: GLI;
    cas: CAS;
}