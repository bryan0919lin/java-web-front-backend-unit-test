package com.github.bryan0919lin.sampleweb.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import com.github.bryan0919lin.sampleweb.DbTestConfig;

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

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { DbTestConfig.class })
public class TaskTest {

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
    public void testCreate() {
        Task task = new Task();
        task.setCreateUser("bryan");
        task.setCreateTime(new Date());
        task.setCreateUser("Alice");

        em.getTransaction().begin();
        em.persist(task);
        em.getTransaction().commit();
        assertNotNull(task.getId());

        Task r = em2.find(Task.class, task.getId());
        assertNotNull(r);
        assertEquals(task, r);
    }

    @Test
    public void testUpdate() {
        Task task = new Task();
        task.setCreateUser("bryan");
        task.setCreateTime(new Date());
        task.setCreateUser("Alice");

        em.getTransaction().begin();
        em.persist(task);
        em.getTransaction().commit();
        assertNotNull(task.getId());

        em.getTransaction().begin();
        Task entity = em.find(Task.class, task.getId());
        entity.setCurrentOwner("Alice");
        entity.setUpdateTime(new Date());
        entity.setUpdateUser("Alice");
        em.merge(entity);
        em.getTransaction().commit();

        Task r = em.find(Task.class, task.getId());
        assertNotNull(r);
        assertEquals("Alice", task.getCurrentOwner());
        assertEquals("Alice", task.getUpdateUser());
    }

    @Test
    public void testDelete() {
        Task task = new Task();
        task.setCreateUser("bryan");
        task.setCreateTime(new Date());
        task.setCreateUser("Alice");

        em.getTransaction().begin();
        em.persist(task);
        em.getTransaction().commit();
        assertNotNull(task.getId());

        Task entity = em.find(Task.class, task.getId());
        em.getTransaction().begin();
        em.remove(entity);
        em.getTransaction().commit();

        Task r = em2.find(Task.class, task.getId());
        assertNull(r);
    }

    @Test
    public void testFindAll() {
        Task task1 = new Task();
        task1.setCreateUser("bryan");
        task1.setCreateTime(new Date());
        task1.setCreateUser("Alice");

        Task task2 = new Task();
        task2.setCreateUser("bryan");
        task2.setCreateTime(new Date());
        task2.setCreateUser("Alice");

        em.getTransaction().begin();
        em.persist(task1);
        em.persist(task2);
        em.getTransaction().commit();
        assertNotNull(task1.getId());
        assertNotNull(task2.getId());

        List<Task> r = em.createNamedQuery("Task.findAll", Task.class)
                .getResultList();
        assertEquals(2, r.size());
    }
}
