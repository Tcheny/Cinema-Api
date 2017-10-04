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

  // 'app/cinema/:id' récupérer le id
  api.get('/:id', ( req, res ) => {
    Cinema.findById(req.params.id, ( err, cinema ) => {
      if( err ) {
        res.send( err )
      }
      res.json( cinema );
    });
  });

  // 'app/cinema/add' ajouter un film (titre, auteur, genre)
  api.post('/add', ( req, res ) => {
    let newMovie = new Cinema();
    newMovie.title = req.body.title
    newMovie.autor = req.body.autor
    newMovie.type = req.body.type

    newMovie.save(( err ) => {
      if ( err ) {
        res.send( err );
      }
      res.json({ message: 'Cinema saved successfully'});
    });
  });
  
  return api
}
