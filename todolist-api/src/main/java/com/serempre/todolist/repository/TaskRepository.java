package com.serempre.todolist.repository;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

import com.serempre.todolist.model.entity.Task;

/**
 *
 * @author Fernando Padilla velez ing.fernando.padilla@gmail.com
 */
public interface TaskRepository extends CrudRepository<Task, Integer>{
    List<Task> findByOrderByTitle();
}