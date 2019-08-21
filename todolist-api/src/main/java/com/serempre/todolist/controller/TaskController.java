package com.serempre.todolist.controller;


import java.util.List;

import com.serempre.todolist.exception.ServiceException;
import com.serempre.todolist.model.entity.Task;
import com.serempre.todolist.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 *
 * @author Fernando Padilla velez ing.fernando.padilla@gmail.com
 */
@CrossOrigin
@RestController
@RequestMapping(path="/tasks")
@Api(tags = "Task")
public class TaskController {
    @Autowired
    private TaskService service;

    @GetMapping
    @ResponseBody
    @ApiOperation(value = "Get list of tasks")
    @ApiResponses(value = {
        @ApiResponse(code = 200, response = Task.class, responseContainer = "List", message = "Success|OK"),
        @ApiResponse(code = 401, message = "not authorized!"),
        @ApiResponse(code = 403, message = "forbidden!!!"),
        @ApiResponse(code = 404, message = "not found!!!") })
    public List<Task> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    @ResponseBody
    @ApiOperation(value = "Finding Task by id")
    @ApiResponses(value = {
        @ApiResponse(code = 200, response = Task.class, message = "OK"),
        @ApiResponse(code = 500, message = "Error de negocio") })
    public Task findById(@PathVariable Integer id) throws ServiceException {
    	return service.findById(id);
    }

    @PostMapping()
    @ApiOperation(value = "Save new  Task")
    @ApiResponses(value = {
            @ApiResponse(code = 200, response = Task.class, message = "OK")})
    public Task save(@RequestBody Task task) throws ServiceException {
    	return service.save(task);
    }

}
