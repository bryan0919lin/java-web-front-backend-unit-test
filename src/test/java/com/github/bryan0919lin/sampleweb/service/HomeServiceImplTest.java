package com.github.bryan0919lin.sampleweb.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.Matchers.any;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.github.bryan0919lin.sampleweb.DbTestConfig;
import com.github.bryan0919lin.sampleweb.RootConfig;
import com.github.bryan0919lin.sampleweb.TestUtils;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { RootConfig.class, DbTestConfig.class })
public class HomeServiceImplTest {

    @Autowired
    private HomeService service;

    @Mock
    private ToDoService toDoService;
    
    @Before
    public void setUp() throws Exception {
    	MockitoAnnotations.initMocks(this);
    	HomeServiceImpl instance = 
    			TestUtils.getTargetObject(service, HomeServiceImpl.class);
    	instance.setToDoService(toDoService);
    }

    @After
    public void tearDown() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Test
    public void testAction1() {
        String r = service.action1("msg");
        assertEquals("Hello, msg", r);
    }
    
    @Test
    public void testGetToDoAction() {
    	when(toDoService.myToDo(any())).thenReturn("good to do");
    	
    	String r = service.getToDoAction("to do");
    	assertEquals("OK! good to do", r);
    }
}
