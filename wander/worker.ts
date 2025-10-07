import type { Actions } from "../scripts/actions.ts";
import { Timestep, TimestepInterface } from "timestep";
import { Integrator } from "./integrator.js";

let timestep: TimestepInterface | undefined;

self.addEventListener("message", function (e: MessageEvent<Actions>) {
    let { data } = e;

    if ("setup_canvas_2d" === data.action) {
        // connect to integrator
		timestep = new Timestep({
            integrator: new Integrator(),
            maxIntegrationMs: 250,
            intervalMs: 10,
        })
	}

    // start wanders

    // stop wanders
})