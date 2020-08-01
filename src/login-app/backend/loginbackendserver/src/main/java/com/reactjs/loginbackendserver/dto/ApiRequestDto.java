package com.reactjs.loginbackendserver.dto;

public class ApiRequestDto<T> {
	
	private String token;
	private T data;
	
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	
	
}
