import mongoose from "mongoose";
import { bookModel } from "@/app/models/book-model";

async function getAllBooks(){
    const allBooks = await bookModel.find().lean();
    return allBooks;
}

export {
    getAllBooks
}