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
    newMovie.title = req.body.title;
    newMovie.author = req.body.author;
    newMovie.type = req.body.type;

    newMovie.type = req.body.type;

    newMovie.save(( err ) => {
      if ( err ) {
        res.send( err );
      }
      res.json({ message: 'Movie saved successfully'});
    });
  });

  // 'app/cinema/:id' supprimer un film par son id
  api.delete('/:id', ( req, res ) => {
    Cinema.remove({
      _id: req.params.id
    }, ( err, cinema ) => {
      if ( err ) {
        res.send( err )
      }
      res.json({ message: 'Movie removed successfully' });
    });
  });

// 'app/cinema/:id' update d'un film par son id
  api.put('/:id', ( req, res ) => {
    Cinema.findById( req.params.id, ( err, cinema ) => {
      if ( err ) {
        res.send( err );
      }
      cinema.title = req.body.title;
      cinema.author = req.body.author;
      cinema.type = req.body.type;

      cinema.save( ( err ) => {
        if ( err ) {
          res.send( err );
        }
        res.json({ message: 'Movie infos updated' });
      });
    });
  });

  return api
}
