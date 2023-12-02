package com.dkak.project2.controller;

import com.dkak.project2.model.Game;
import com.dkak.project2.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("home")
public class GameController {
    @Autowired
    GameService gameService;

    @GetMapping("getAllGames")
    public ResponseEntity<List<Game>> getAllGames(){
        return gameService.getAllGames();
    }

    @PostMapping("add")
    public ResponseEntity<Game> addGame(@RequestBody Game game){
        return gameService.addGame(game);
    }

    @DeleteMapping("delete/{gid}")
    public ResponseEntity<String> removeGame(@PathVariable int gid){
        return gameService.removeGame(gid);
    }

    @GetMapping("validatingName")
    public ResponseEntity<String> validatingName(String name){
        return gameService.validatingName(name);
    }

    @GetMapping("validatingDate")
    public ResponseEntity<String> validatingDate(String date){
        return gameService.validatingDate(date);
    }
}
