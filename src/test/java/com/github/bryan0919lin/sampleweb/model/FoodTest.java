package com.github.bryan0919lin.sampleweb.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.github.bryan0919lin.sampleweb.DbTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { DbTestConfig.class })
public class FoodTest {

	@Autowired
	private EntityManagerFactory emf;
	
	private EntityManager em;
	
	private EntityManager em2;
	
	@Before
    public void setUp() throws Exception {
		em = emf.createEntityManager();
		em2 = emf.createEntityManager();
    }

    @After
    public void tearDown() {
    	em.getTransaction().begin();
    	em.createQuery("delete from Food").executeUpdate();
    	em.getTransaction().commit();
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }
    
    @Test
    public void testCreate() {
    	Food food = new Food();
    	
    	food.setImgUrl("imgUrl");
    	food.setTitle("title");
    	food.setDetail("detail");
    	food.setCreateTime(new Date());
    	
    	em.getTransaction().begin();
    	em.persist(food);
    	em.getTransaction().commit();
    	assertNotNull(food.getId());
    	
    	Food r = em2.find(Food.class, food.getId());
    	assertNotNull(r);
    	assertEquals(food, r);
    }
    
    @Test
    public void testUpdate() {
        Food food = new Food();
    	food.setImgUrl("imgUrl");
    	food.setTitle("title");
    	food.setDetail("detail");
    	food.setCreateTime(new Date());
    	
    	em.getTransaction().begin();
    	em.persist(food);
    	em.getTransaction().commit();
    	assertNotNull(food.getId());
    	
    	em.getTransaction().begin();
    	Food entity = em.find(Food.class, food.getId());
    	entity.setTitle("title2");
    	entity.setUpdateTime(new Date());
    	em.merge(entity);
    	em.getTransaction().commit();
    	
    	Food r = em.find(Food.class, food.getId());
    	assertNotNull(r);
    	assertEquals("title2", r.getTitle());
    	assertNotNull(r.getUpdateTime());
    }
    
    @Test
    public void testDelete() {
        Food food = new Food();
    	food.setImgUrl("imgUrl");
    	food.setTitle("title");
    	food.setDetail("detail");
    	food.setCreateTime(new Date());
    	
    	em.getTransaction().begin();
    	em.persist(food);
    	em.getTransaction().commit();
    	assertNotNull(food.getId());
    	
    	Food entity = em.find(Food.class, food.getId());
    	em.getTransaction().begin();
    	em.remove(entity);
    	em.getTransaction().commit();
    	
    	Food r = em2.find(Food.class, food.getId());
    	assertNull(r);
    }
    
    @Test
    public void testFindAll() {
    	Food food1 = new Food();
    	food1.setImgUrl("imgUrl");
    	food1.setTitle("title");
    	food1.setDetail("detail");
    	food1.setCreateTime(new Date());
    	
    	Food food2 = new Food();
    	food2.setImgUrl("imgUrl2");
    	food2.setTitle("title2");
    	food2.setDetail("detail2");
    	food2.setCreateTime(new Date());
    	
    	em.getTransaction().begin();
    	em.persist(food1);
    	em.persist(food2);
    	em.getTransaction().commit();
    	assertNotNull(food1.getId());
    	assertNotNull(food2.getId());
    	
    	List<Food> r = em.createNamedQuery("Food.findAll", Food.class)
    			.getResultList();
    	assertEquals(2, r.size());
    }
}
