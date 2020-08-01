package com.reactjs.loginbackendserver.dto;

public class DashboardDto {

	private Long id;
	private String name;
	private String type;
	private String description;
	private String url;
	
	public DashboardDto(Long id, String name, String type, String description, String url) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.description = description;
		this.url = url;
	}
	
}
