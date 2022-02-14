
export interface MediaEntry {
    id: string
    src: string,
    type: MediaEntryType
}

export type MediaEntryType = "video" | "image"
