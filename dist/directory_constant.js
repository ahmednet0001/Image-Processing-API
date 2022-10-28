"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASSETS_THUMB_PATH = exports.ASSETS_FULL_PATH = void 0;
const path_1 = __importDefault(require("path"));
const DIRECTORY_SEPARATOR = path_1.default.sep;
exports.ASSETS_FULL_PATH = __dirname +
    DIRECTORY_SEPARATOR +
    'assets' +
    DIRECTORY_SEPARATOR +
    'full' +
    DIRECTORY_SEPARATOR;
exports.ASSETS_THUMB_PATH = __dirname +
    DIRECTORY_SEPARATOR +
    'assets' +
    DIRECTORY_SEPARATOR +
    'thumb' +
    DIRECTORY_SEPARATOR;
