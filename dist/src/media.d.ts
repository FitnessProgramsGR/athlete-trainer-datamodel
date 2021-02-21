import { Serializable } from "./helpers";
export interface MediaEntryJSON {
    id: string;
    src: string;
    type: MediaEntryType;
}
export declare type MediaEntryType = "video" | "image";
export declare type AnyMediaEntry = VideoMedia | ImageMedia;
declare class MediaEntry extends Serializable {
    id: string;
    src: string;
    type: MediaEntryType;
    constructor(id: string, src: string, type: MediaEntryType);
}
export declare class ImageMedia extends MediaEntry {
    id: string;
    src: string;
    constructor(id: string, src: string);
    toJSON(): MediaEntryJSON;
}
export declare class VideoMedia extends MediaEntry {
    id: string;
    src: string;
    constructor(id: string, src: string);
    toJSON(): MediaEntryJSON;
}
export {};
