import mongoose, { Schema } from "mongoose";

const mongoDBSchema = new Schema(
    {
        name: { type: String, requirede: true },
        email: { type: String, requirede: true }
    },
    {
        timestamps: true
    }
)

const productModel = mongoose.models.Product || mongoose.model("Product", mongoDBSchema)

export default productModel