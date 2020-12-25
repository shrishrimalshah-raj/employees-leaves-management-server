import express from "express";

import { BookRouter } from "./Book";

const router = express.Router();

// BOOK ROUTES
router.use("/book", BookRouter);

export default router;
