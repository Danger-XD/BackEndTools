import { DefaultErrorHandler, NotFoundError } from "./app/utilities/ErrorHandler.js"
import express from "express";
const app = express();

//Not Found Error Handler
app.use(NotFoundError);

// Default Error Handler
app.use(DefaultErrorHandler);