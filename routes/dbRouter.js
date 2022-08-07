"use stricts";

import { Router } from "express";
import { insertInfo } from "../services.js";

export const dbRouter = Router();

dbRouter.post("/", (req, res) => {
  insertInfo(req.uuid, req.menu, req.old, req.sex, req.race);
  console.log("dbRouter.post");
});
