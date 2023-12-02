package com.dkak.project2.service;

import com.dkak.project2.dao.GameDao;
import com.dkak.project2.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class GameService {

    @Autowired
    GameDao gameDao;

    public ResponseEntity<List<Game>> getAllGames() {
        return new ResponseEntity<>(gameDao.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Game> addGame(Game game) {
        try{
            gameDao.save(game);
            return new ResponseEntity<Game>(game,HttpStatus.CREATED);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new Game(),HttpStatus.NOT_ACCEPTABLE);
    }

    public ResponseEntity<String> removeGame(int gid) {
        try{
            String gameDate = "";
            Game game=gameDao.getOne(gid);
            gameDate=game.getDate();
            gameDao.delete(game);
            return new ResponseEntity<String>(gameDate,HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Game not found!",HttpStatus.NOT_ACCEPTABLE);
    }

    public ResponseEntity<String> validatingName(String name) {

        if(name.matches("[A-Za-z]{3,12}")){
            return new ResponseEntity<String>(name,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<String>("*Enter a valid name",HttpStatus.NOT_ACCEPTABLE);
        }
    }

    public ResponseEntity<String> validatingDate(String date) {
        if(date!=null && !date.equals("")){
            return new ResponseEntity<String>(date,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<String>("Enter a valid date",HttpStatus.NOT_ACCEPTABLE);
        }
    }


}
