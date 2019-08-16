package com.woowacourse.edd.presentation.exceptionhandler;

import com.woowacourse.edd.exceptions.ErrorResponseException;
import com.woowacourse.edd.exceptions.InvalidTitleException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice(basePackages = {"com.woowacourse.edd.presentation.controller"})
public class VideoExceptionHandler {

    @ResponseBody
    @ExceptionHandler(ErrorResponseException.class)
    public ResponseEntity<Error> handleErrorResponse(ErrorResponseException e) {
        return ResponseEntity.badRequest()
            .body(new Error("FAIL", e.getMessage()));
    }
}
