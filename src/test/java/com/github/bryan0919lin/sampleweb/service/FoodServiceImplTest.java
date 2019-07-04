package com.github.bryan0919lin.sampleweb.service;

import static org.junit.Assert.assertNotNull;

import com.github.bryan0919lin.sampleweb.DbTestConfig;
import com.github.bryan0919lin.sampleweb.RootConfig;
import com.github.bryan0919lin.sampleweb.dto.FoodDto;

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

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { RootConfig.class, DbTestConfig.class })
public class FoodServiceImplTest {

    @Autowired
    private FoodService service;

    @Autowired
    private EntityManagerFactory emf;

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
        EntityManager em = emf.createEntityManager();
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
    public void testCreateTask() {
        FoodDto food = new FoodDto();
        food.setImgUrl("imgUrl");
        food.setTitle("title");
        food.setDetail("detail");

        Long r = service.create(food);
        assertNotNull(r);
    }
}
