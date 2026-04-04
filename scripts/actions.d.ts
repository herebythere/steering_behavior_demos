interface Action {
    kind: string;
}
interface SetupCanvas extends Action {
    action: "setup_canvas_2d";
    offscreenCanvas: OffscreenCanvas;
}
export type Actions = SetupCanvas;
export {};
