declare const r: {
    new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    prototype: ReadableStream<any>;
}, rd: {
    new <R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
    prototype: ReadableStreamDefaultReader<any>;
}, rdc: {
    new (): ReadableStreamDefaultController<any>;
    prototype: ReadableStreamDefaultController<any>;
};
export { r as ReadableStream, rd as ReadableStreamDefaultReader, rdc as ReadableStreamDefaultController };
declare const w: {
    new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    prototype: WritableStream<any>;
}, wd: {
    new <W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
    prototype: WritableStreamDefaultWriter<any>;
}, wdc: {
    new (): WritableStreamDefaultController;
    prototype: WritableStreamDefaultController;
};
export { w as WritableStream, wd as WritableStreamDefaultWriter, wdc as WritableStreamDefaultController };
