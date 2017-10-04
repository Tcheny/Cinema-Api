import mongoose from "mongoose"; // DB
import { Router } from "express"; // definir la route
import Cinema from "../model/cinema"; // model
import bodyParser from "body-parser"; // vérifier l'injection

export default () => {
  let api = Router();
  
  // app/cinema ('home')
  api.get('/', ( req, res ) =>{
    Cinema.find({}, ( err, cinemas ) => {
      if( err ) {
        res.send( err );
      }
      res.json( cinemas );
    });
  });

  return api
}
