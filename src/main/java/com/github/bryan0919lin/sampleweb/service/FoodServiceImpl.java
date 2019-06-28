package com.github.bryan0919lin.sampleweb.service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

import com.github.bryan0919lin.sampleweb.dto.FoodDto;
import com.github.bryan0919lin.sampleweb.model.Food;

@Component
public class FoodServiceImpl implements FoodService {

	@PersistenceContext 
	protected EntityManager em;
	
	@Override
	public List<FoodDto> findAll() {
		return em.createNamedQuery("Food.findAll", Food.class)
				.getResultList()
				.stream()
				.map(x -> transferFoodDto(x))
				.collect(Collectors.toList());
	}

	private FoodDto transferFoodDto(Food model) {
		if (model == null) {
			return null;
		}
		
		FoodDto dto = new FoodDto();
		dto.setId(model.getId());
		dto.setImgUrl(model.getImgUrl());
		dto.setTitle(model.getTitle());
		dto.setDetail(model.getDetail());
		dto.setCreateTime(model.getCreateTime());
		dto.setUpdateTime(model.getUpdateTime());
		return dto;
	}
	
	private Food transferFood(FoodDto dto) {
		if (dto == null) {
			return null;
		}
		
		Food model = new Food();
		model.setId(dto.getId());
		model.setImgUrl(dto.getImgUrl());
		model.setTitle(dto.getTitle());
		model.setDetail(dto.getDetail());
		model.setCreateTime(dto.getCreateTime());
		model.setUpdateTime(dto.getUpdateTime());
		return model;
	}
	
	@Override
	public Long create(FoodDto dto) {
		if (dto == null) {
			return null;
		}
		
		Food model = transferFood(dto);
		model.setCreateTime(new Date());
		em.persist(model);
		return model.getId();
	}

	@Override
	public boolean update(FoodDto dto) {
		if (dto == null || dto.getId() == null) {
			return false;
		}
		
		Food model = em.find(Food.class, dto.getId());
		model.setImgUrl(dto.getImgUrl());
		model.setTitle(dto.getTitle());
		model.setDetail(dto.getDetail());
		model.setCreateTime(dto.getCreateTime());
		model.setUpdateTime(new Date());
		return true;
	}

	@Override
	public boolean delete(long id) {
		Food model = em.find(Food.class, id);
		if (model == null) {
			return false;
		}
		
		em.remove(model);
		return true;
	}

}
