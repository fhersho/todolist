package com.serempre.todolist.repository;

import org.springframework.data.repository.CrudRepository;

import com.serempre.todolist.model.entity.Developer;

/**
 *
 * @author Fernando Padilla velez ing.fernando.padilla@gmail.com
 */
public interface DeveloperRepository extends CrudRepository<Developer, Integer>{

}