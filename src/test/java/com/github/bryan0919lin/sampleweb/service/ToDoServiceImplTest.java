package com.github.bryan0919lin.sampleweb.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import com.github.bryan0919lin.sampleweb.DbTestConfig;
import com.github.bryan0919lin.sampleweb.RootConfig;
import com.github.bryan0919lin.sampleweb.dto.TaskDto;
import com.github.bryan0919lin.sampleweb.model.TaskStatus;

import java.util.Date;

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
public class ToDoServiceImplTest {

    @Autowired
    private ToDoService service;

    @Autowired
    private EntityManagerFactory emf;

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.createQuery("delete from Task").executeUpdate();
        em.getTransaction().commit();
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Test
    public void testMyToDo() {
        String r = service.myToDo("To Do");
        assertEquals("Hi, To Do", r);
    }

    @Test
    public void testCreateTask() {
        TaskDto task = new TaskDto();
        task.setCreateUser("bryan");
        task.setStatus(TaskStatus.NEW);
        task.setCreateTime(new Date());
        task.setCreateUser("Alice");

        Long r = service.createTask(task);
        assertNotNull(r);
    }
}
