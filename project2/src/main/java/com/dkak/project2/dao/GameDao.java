package com.dkak.project2.dao;

import com.dkak.project2.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;


@Repository
public interface GameDao extends JpaRepository<Game,Integer> {

}
