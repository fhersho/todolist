package com.serempre.todolist.exception;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ExceptionHandlerControllerAdvice {

    @ExceptionHandler(value = UnauthorizedException.class)
    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    public @ResponseBody ExceptionResponse handleUnauthorized(final UnauthorizedException e,
            final HttpServletRequest req) {

        ExceptionResponse error = new ExceptionResponse();
        error.setMessage(e.getMessage());
        error.setUrl(req.getRequestURI());
        error.setStatus(401);
        error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
        return error;
    }

    /**
     * @param Manejo de excepciones no controladas
     * @param req
     * @return
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseStatus(value = HttpStatus.SERVICE_UNAVAILABLE)
    public @ResponseBody ExceptionResponse handleException(final Exception e,
            final HttpServletRequest req) {
        ExceptionResponse error = new ExceptionResponse();
        error.setMessage(e.getMessage());
        error.setUrl(req.getRequestURI());
        error.setStatus(503);
        error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
        return error;
    }    
    
    /**
     * @param Error de validacion de parametros de entrada
     * @param req
     * @return
     */
    @ExceptionHandler(value = ValidationException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    public @ResponseBody ExceptionResponse handleValidationException(final ValidationException e,
            final HttpServletRequest req) {
        ExceptionResponse error = new ExceptionResponse();
        error.setMessage(e.getMessage());
        error.setUrl(req.getRequestURI());
        error.setStatus(400);
        error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
        return error;
    }
    
    /**
     * @param Error de negocio
     * @param req
     * @return
     */
    @ExceptionHandler(value = ServiceException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public @ResponseBody ExceptionResponse handleUnauthorized(final ServiceException e,
            final HttpServletRequest req) {

        ExceptionResponse error = new ExceptionResponse();
        error.setMessage(e.getMessage());
        error.setUrl(req.getRequestURI());
        error.setStatus(500);
        error.setTimestamp(ZonedDateTime.now().format(DateTimeFormatter.ISO_INSTANT));
        return error;
    }

    class ExceptionResponse {

        private String timestamp;
        private int status;
        private String message;
        private String url;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getTimestamp() {
            return timestamp;
        }

        public void setTimestamp(String timestamp) {
            this.timestamp = timestamp;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }

    }
}