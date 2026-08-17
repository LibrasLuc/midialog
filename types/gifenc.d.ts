declare module "gifenc" {
  type Palette = number[][];
  type QuantizeOptions = { format?: "rgb565"|"rgb444"|"rgba4444"; oneBitAlpha?: boolean|number; clearAlpha?: boolean };
  type FrameOptions = { palette?: Palette; transparent?: boolean; transparentIndex?: number; delay?: number; repeat?: number; dispose?: number };
  export function quantize(data: Uint8Array|Uint8ClampedArray, maxColors: number, options?: QuantizeOptions): Palette;
  export function applyPalette(data: Uint8Array|Uint8ClampedArray, palette: Palette, format?: "rgb565"|"rgb444"|"rgba4444"): Uint8Array;
  export function GIFEncoder(): { writeFrame(index:Uint8Array,width:number,height:number,options?:FrameOptions):void; finish():void; bytes():Uint8Array<ArrayBuffer> };
}
