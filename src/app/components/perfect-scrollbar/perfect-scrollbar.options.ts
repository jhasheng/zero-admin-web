export interface IPerfectScrollbarOptions {
    wheelSpeed?: number;
    wheelPropagation?: boolean;
    swipePropagation?: boolean;
    minScrollbarLength?: number;
    maxScrollbarLength?: number;
    useBothWheelAxes?: boolean;
    suppressScrollX?: boolean;
    suppressScrollY?: boolean;
    scrollXMarginOffset?: number;
    scrollYMarginOffset?: number;
    stopPropagationOnClick?: boolean;
}

export class PerfectScrollbarOptions implements IPerfectScrollbarOptions {
    public wheelSpeed: number;
    public wheelPropagation: boolean;
    public swipePropagation: boolean;
    public minScrollbarLength: number;
    public maxScrollbarLength: number;
    public useBothWheelAxes: boolean;
    public suppressScrollX: boolean;
    public suppressScrollY: boolean;
    public scrollXMarginOffset: number;
    public scrollYMarginOffset: number;
    public stopPropagationOnClick: boolean;

    constructor(config: IPerfectScrollbarOptions = {}) {
        this.assign(config);
    }

    public assign(config: IPerfectScrollbarOptions = {}) {
        for (var key in config) {
            this[key] = config[key];
        }
    }
}

export class Geometry {
    x: number;
    y: number;

    w: number;
    h: number;
}