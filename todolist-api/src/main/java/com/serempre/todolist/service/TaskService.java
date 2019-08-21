package com.serempre.todolist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serempre.todolist.exception.ServiceException;
import com.serempre.todolist.model.entity.Task;
import com.serempre.todolist.repository.TaskRepository;

/**
 * @author ing.fernando.padilla@gmail.com
 *
 */
@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public List<Task> findAll() {
        return (List<Task>) repository.findByOrderByTitle();
    }

    /**
     * @param id
     * @return Task
     * @throws ServiceException
     * @throws ValidationException
     */
    public Task findById(Integer id) throws ServiceException {
        Optional<Task> value = repository.findById(id);
        if (value.isPresent()) {
            return value.get();
        } else {
            throw new ServiceException("Task dont found");
        }
    }

    /**
     * save new Task
     *
     * @throws ServiceException
     */
    public Task save(Task task) throws ServiceException {
        return repository.save(task);
    }

}