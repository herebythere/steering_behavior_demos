import type { IntegratorInterface } from "timestep";
export declare class Integrator implements IntegratorInterface {
    constructor();
    integrate(_msInterval: number): void;
    render(_deltaRemainder: number): void;
    error(e: Error): void;
}
