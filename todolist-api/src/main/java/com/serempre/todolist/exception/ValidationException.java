package com.serempre.todolist.exception;

public class ValidationException extends Exception {
    
    private static final long serialVersionUID = 1L;

    public ValidationException() {
        super();
    }
    public ValidationException(String message) {
        super(message);
    }
}