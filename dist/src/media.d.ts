export interface MediaEntry {
    id: string;
    src: string;
    type: MediaEntryType;
}
export declare type MediaEntryType = "video" | "image";
