package com.reactjs.loginbackendserver.cache;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import com.reactjs.loginbackendserver.dto.DashboardDto;
import com.reactjs.loginbackendserver.dto.LoginRequestDto;
import com.reactjs.loginbackendserver.util.ILogger;

public enum CacheStorage {
	INSTANCE;
	
	private Map<String, String> users = new HashMap<>();
	private Map<String, String> userToken = new HashMap<>();
	private List<DashboardDto> dashboardData = new ArrayList<>();
	
	private CacheStorage() {
		ILogger.log("Loading Data for Cache");
		dashboardData.add(new DashboardDto(new Date().getTime(), "Project Stats", "CHART",
				"This is used to display charts in the board",
				"https://f1.pngfuel.com/png/36/22/357/business-chart-growth-chart-business-network-bar-chart-organization-graph-of-a-function-company-png-clip-art.png"));
		dashboardData.add(new DashboardDto(new Date().getTime(), "Sathish Profile", "IMAGE",
				"This is me just showing off !!!",
				"https://mun-sathish.github.io/img/member/member-1.jpg"));
		dashboardData.add(new DashboardDto(new Date().getTime(), "Data Management", "INFO",
				"This is used to display charts in the board",
				"https://i.pinimg.com/736x/87/fb/cb/87fbcb25a5a97f4b2d859e2349ef2cea.jpg"));
//		dashboardData.add(new DashboardDto(new Date().getTime(), "Project Stats", "CHART",
//				"This is used to display charts in the board",
//				""));
//		dashboardData.add(new DashboardDto(new Date().getTime(), "Project Stats", "CHART",
//				"This is used to display charts in the board",
//				""));
//		dashboardData.add(new DashboardDto(new Date().getTime(), "Project Stats", "CHART",
//				"This is used to display charts in the board",
//				""));
//		dashboardData.add(new DashboardDto(new Date().getTime(), "Project Stats", "CHART",
//				"This is used to display charts in the board",
//				""));
	}
	
	public static CacheStorage getInstance() {
		return INSTANCE;
	}
	
	public List<LoginRequestDto> getUsers() {
		return users.entrySet()
		  .stream()
		  .map(m->new LoginRequestDto(m.getKey(), m.getValue()))
		  .collect(Collectors.toList());
	}
	
	
	public boolean addUser(LoginRequestDto requestDto) {
		if(users.containsKey(requestDto.getUsername()))
			return false;
		users.put(requestDto.getUsername(), requestDto.getPassword());
		return true;
	}
	
	public Optional<String> getUserToken(String username) {
		return Optional.ofNullable(userToken.get(username));
	}
	
	public void setUserToken(String username, String token) {
		String res = userToken.replace(username, token);
		if(res == null)
			userToken.put(username, token);
	}
	
	public void deleteUserToken(String username) {
		userToken.remove(username);
	}
	
	public Optional<String> getUserPassword(String username) {
		return Optional.ofNullable(users.get(username));
	}
	
	public List<DashboardDto> getDashboardData() {
		return dashboardData;
	}
}
