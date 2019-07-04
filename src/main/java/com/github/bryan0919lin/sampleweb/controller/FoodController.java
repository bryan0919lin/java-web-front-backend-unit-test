package com.github.bryan0919lin.sampleweb.controller;

import com.github.bryan0919lin.sampleweb.dto.FoodDto;
import com.github.bryan0919lin.sampleweb.service.FoodService;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/food",
        produces = {
            MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
public class FoodController {

    @Autowired
    private FoodService foodService;

    @RequestMapping(method = RequestMethod.GET)
    public List<FoodDto> findAll(HttpServletRequest request) {
        return foodService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
    public Long createFood(HttpServletRequest request, @RequestBody FoodDto dto) {
        return foodService.create(dto);
    }

    @RequestMapping(method = RequestMethod.PUT,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
    public boolean updateFood(HttpServletRequest request, @RequestBody FoodDto dto) {
        return foodService.update(dto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean updateFood(HttpServletRequest request, @PathVariable("id") long id) {
        return foodService.delete(id);
    }
}
