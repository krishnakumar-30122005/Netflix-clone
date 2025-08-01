import express from 'express';
import { searchMovie,searchTv,searchPerson } from '../controllers/search.controllers.js';
import { getSearchHistory, removeItemFromSearchHistory } from '../controllers/search.controllers.js';

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history",getSearchHistory);
router.delete("/history/:id",removeItemFromSearchHistory)

export default router;