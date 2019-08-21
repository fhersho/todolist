package com.serempre.todolist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serempre.todolist.exception.ServiceException;
import com.serempre.todolist.model.entity.Developer;
import com.serempre.todolist.repository.DeveloperRepository;

/**
 * @author ing.fernando.padilla@gmail.com
 *
 */
@Service
public class DeveloperService {

    @Autowired
    private DeveloperRepository repository;

    public List<Developer> findAll() {
        return (List<Developer>) repository.findAll();
    }

    /**
     * @param id
     * @return Developer
     * @throws ServiceException
     * @throws ValidationException
     */
    public Developer findById(Integer id) throws ServiceException {
        Optional<Developer> value = repository.findById(id);
        if (value.isPresent()) {
            return value.get();
        } else {
            throw new ServiceException("Developer dont found");
        }
    }

    /**
     * save new Developer
     *
     * @throws ServiceException
     */
    public Developer save(Developer developer) throws ServiceException {
        return repository.save(developer);
    }

}