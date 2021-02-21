import { Serializable } from "./helpers";

export interface MediaEntryJSON {
    id: string
    src: string,
    type: MediaEntryType
}

export type MediaEntryType = "video" | "image"
export type AnyMediaEntry = VideoMedia | ImageMedia

class MediaEntry extends Serializable {
    constructor(public id: string, public src: string, public type: MediaEntryType) {
        super(id)
        this.src = src;
        this.type = type
    }
}

export class ImageMedia extends MediaEntry {
    constructor(public id: string, public src: string) {
        super(id, src, 'image')
    }

    toJSON(): MediaEntryJSON {
        return Object.assign({}, this)
    }
}

export class VideoMedia extends MediaEntry {
    constructor(public id: string, public src: string) {
        super(id, src, 'video')
    }

    toJSON(): MediaEntryJSON {
        return Object.assign({}, this)
    }
}


