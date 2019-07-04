package com.github.bryan0919lin.sampleweb.service;

import com.github.bryan0919lin.sampleweb.dto.FoodDto;

import java.util.List;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

public interface FoodService {

    List<FoodDto> findAll();

    @Transactional(propagation = Propagation.REQUIRED)
    Long create(FoodDto dto);

    @Transactional(propagation = Propagation.REQUIRED)
    boolean update(FoodDto dto);

    @Transactional(propagation = Propagation.REQUIRED)
    boolean delete(long id);
}
