"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
function IsValid(query) {
    // Fetch params
    const filename = query.filename;
    const width = query.width;
    const height = query.height;
    // Check if undefined param
    if (!filename)
        return false;
    if (!width)
        return false;
    if (!height)
        return false;
    // Check  filename param
    if (validator_1.default.isEmpty(filename))
        return false;
    // Check  width param
    if (validator_1.default.isEmpty(width) || !validator_1.default.isNumeric(width))
        return false;
    // Check  height param
    if (validator_1.default.isEmpty(height) || !validator_1.default.isNumeric(height))
        return false;
    return true;
}
exports.default = IsValid;
