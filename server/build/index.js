"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_1 = __importDefault(require("./products"));
var app = (0, express_1.default)();
app.get("/api/products", function (req, res) {
    res.json(products_1.default);
});
app.get("/api/products/:id", function (req, res) {
    var product = products_1.default.find(function (p) { return p._id === req.params.id; });
    res.json(product);
});
app.get("/", function (req, res) {
    res.send("Server is running...");
});
app.listen(5000, function () {
    console.log("Listening on port 5000...");
});
