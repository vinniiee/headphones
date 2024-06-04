"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var products_1 = __importDefault(require("./data/products"));
var users_1 = __importDefault(require("./data/users"));
var productModel_1 = __importDefault(require("./models/productModel"));
var userModel_1 = __importDefault(require("./models/userModel"));
var orderModel_1 = __importDefault(require("./models/orderModel"));
var db_1 = require("./config/db");
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var populate, destroy;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, db_1.dbConnect)()];
            case 1:
                _a.sent();
                populate = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var savedUsers, user_1, formattedProducts, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 6, , 7]);
                                // Clear existing data
                                return [4 /*yield*/, userModel_1.default.deleteMany()];
                            case 1:
                                // Clear existing data
                                _a.sent();
                                return [4 /*yield*/, productModel_1.default.deleteMany()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, orderModel_1.default.deleteMany()];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, userModel_1.default.insertMany(users_1.default)];
                            case 4:
                                savedUsers = _a.sent();
                                user_1 = savedUsers[0]._id;
                                formattedProducts = products_1.default.map(function (p) {
                                    return __assign(__assign({}, p), { user: user_1 });
                                });
                                return [4 /*yield*/, productModel_1.default.insertMany(formattedProducts)];
                            case 5:
                                _a.sent();
                                console.log("Data Populated!");
                                process.exit(0);
                                return [3 /*break*/, 7];
                            case 6:
                                e_1 = _a.sent();
                                console.log("".concat(e_1));
                                process.exit(1);
                                return [3 /*break*/, 7];
                            case 7: return [2 /*return*/];
                        }
                    });
                }); };
                destroy = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                // Ensure await is used with async operations
                                return [4 /*yield*/, userModel_1.default.deleteMany()];
                            case 1:
                                // Ensure await is used with async operations
                                _a.sent();
                                return [4 /*yield*/, productModel_1.default.deleteMany()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, orderModel_1.default.deleteMany()];
                            case 3:
                                _a.sent();
                                console.log("Data Erased!");
                                process.exit(0);
                                return [3 /*break*/, 5];
                            case 4:
                                e_2 = _a.sent();
                                console.log("".concat(e_2));
                                process.exit(1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); };
                if (process.argv[2] === "-d") {
                    destroy();
                }
                else {
                    populate();
                }
                return [2 /*return*/];
        }
    });
}); };
run();
