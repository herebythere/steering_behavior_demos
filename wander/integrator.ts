import type { IntegratorInterface } from "timestep";

// message to wander state
// send canvas to wander state

export class Integrator implements IntegratorInterface {
	constructor() {}

	integrate(_msInterval: number) {}

	render(_deltaRemainder: number) {}

	error(e: Error) {
		console.log("error!", e);
	}
}
