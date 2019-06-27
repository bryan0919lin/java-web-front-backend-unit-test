package com.github.bryan0919lin.sampleweb;

import org.springframework.aop.framework.Advised;
import org.springframework.aop.support.AopUtils;

public class TestUtils {

	@SuppressWarnings({ "unchecked" })
	public static <T> T getTargetObject(Object proxy, Class<T> targetClass)
			throws Exception {
		if (AopUtils.isJdkDynamicProxy(proxy)) {
			return (T) ((Advised) proxy).getTargetSource().getTarget();
		} else {
			return (T) proxy;
		}
	}
}
