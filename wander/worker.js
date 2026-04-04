import { Timestep } from "timestep";
import { Integrator } from "./integrator.js";
let timestep;
self.addEventListener("message", function (e) {
    let { data } = e;
    if ("setup_canvas_2d" === data.action) {
        // connect to integrator
        timestep = new Timestep({
            integrator: new Integrator(),
            maxIntegrationMs: 250,
            intervalMs: 10,
        });
    }
});
