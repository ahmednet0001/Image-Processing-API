"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const directory_constant_1 = require("../directory_constant");
function FileExists(filename, thumb = false) {
    return __awaiter(this, void 0, void 0, function* () {
        // Determine path full or thumb
        const file = !thumb
            ? path_1.default.join(directory_constant_1.ASSETS_FULL_PATH + filename + '.jpg')
            : path_1.default.join(directory_constant_1.ASSETS_THUMB_PATH + filename + '.jpg');
        try {
            yield fs_1.promises.access(file);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.default = FileExists;
