"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryParams {
    constructor(filename, width, height) {
        this.filename = filename;
        this.width = width;
        this.height = height;
    }
    getThumbStr() {
        let thumbName = '';
        thumbName += this.filename;
        thumbName += '_';
        thumbName += this.width;
        thumbName += '_';
        thumbName += this.height;
        return thumbName;
    }
}
exports.default = QueryParams;
