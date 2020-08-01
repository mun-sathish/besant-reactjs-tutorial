package com.reactjs.loginbackendserver.util;

public class ILogger {

	public static final String DEFAULT_TAG = "DEFAULT";
	
	public static void log(String msg) {
		System.out.println(String.format("[SATHISH-LOG][%s] %s", DEFAULT_TAG, msg));
	}
	
	public static void log(String tag, String msg) {
		System.out.println(String.format("[SATHISH-LOG][%s] %s", tag, msg));
	}
	
	public static void error(String msg) {
		System.out.println(String.format("[SATHISH-ERROR][%s] %s", DEFAULT_TAG, msg));
	}
	
	public static void error(String tag, String msg) {
		System.out.println(String.format("[SATHISH-ERROR][%s] %s", tag, msg));
	}
	
}
