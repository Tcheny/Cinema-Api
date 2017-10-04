import express from "express";
import config from "../config";
import initializeDb from "../db";
import middleware from "../middleware";
import cinema from "../controller/cinema";

let router = express();

// se connecter à la db
initializeDb(db => {
  // middleware pour tester le Router de express
  router.use(middleware());
  // 'app/cinema'
  router.use("/cinema", cinema());
});

export default router;
