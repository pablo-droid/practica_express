import mongoose from "mongoose";

export const dbConnect = async (uri) => {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        throw `Data base connection failed: ${error}`;
    }
};