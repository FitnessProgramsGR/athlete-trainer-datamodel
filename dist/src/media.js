"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoMedia = exports.ImageMedia = void 0;
var helpers_1 = require("./helpers");
var MediaEntry = /** @class */ (function (_super) {
    __extends(MediaEntry, _super);
    function MediaEntry(id, src, type) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.src = src;
        _this.type = type;
        _this.src = src;
        _this.type = type;
        return _this;
    }
    return MediaEntry;
}(helpers_1.Serializable));
var ImageMedia = /** @class */ (function (_super) {
    __extends(ImageMedia, _super);
    function ImageMedia(id, src) {
        var _this = _super.call(this, id, src, 'image') || this;
        _this.id = id;
        _this.src = src;
        return _this;
    }
    ImageMedia.prototype.toJSON = function () {
        return Object.assign({}, this);
    };
    return ImageMedia;
}(MediaEntry));
exports.ImageMedia = ImageMedia;
var VideoMedia = /** @class */ (function (_super) {
    __extends(VideoMedia, _super);
    function VideoMedia(id, src) {
        var _this = _super.call(this, id, src, 'video') || this;
        _this.id = id;
        _this.src = src;
        return _this;
    }
    VideoMedia.prototype.toJSON = function () {
        return Object.assign({}, this);
    };
    return VideoMedia;
}(MediaEntry));
exports.VideoMedia = VideoMedia;
//# sourceMappingURL=media.js.map