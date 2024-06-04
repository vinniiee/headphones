"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var reviewSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
}, {
    timestamps: true,
});
var ProductSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.ObjectId,
        required: true,
        ref: "user",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0.0,
        required: true,
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true,
    },
    rating: {
        type: Number,
        default: 0.0,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    reviews: [reviewSchema],
}, {
    timestamps: true,
});
var Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
