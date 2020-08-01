package com.reactjs.loginbackendserver;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;
import com.reactjs.loginbackendserver.cache.CacheStorage;
import com.reactjs.loginbackendserver.dto.LoginRequestDto;
import com.reactjs.loginbackendserver.dto.LoginResponseDto;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/")
public class RestController {

	public static final String INVALID_REQUEST = "Invalid Request";
	public static final String SUCCESS = "SUCCESS";
	
	@GetMapping("/login")
	public LoginResponseDto performLogin(@RequestParam("username") String username,
			@RequestParam("password") String password) {
		if (username == null || password == null)
			return new LoginResponseDto(INVALID_REQUEST);

		Optional<String> passwordOp = CacheStorage.getInstance().getUserPassword(username);
		if (passwordOp.isPresent()) {
			if (password.equals(passwordOp.get())) {
				String token = String.valueOf(new Date().getTime());
				CacheStorage.getInstance().setUserToken(username, token);
				return new LoginResponseDto(SUCCESS, token);
			} else {
				return new LoginResponseDto("Invalid Password", null);
			}
		} else {
			return new LoginResponseDto("Invalid Username", null);
		}
	}
	
	@PostMapping("/user")
	public LoginResponseDto addUser(@RequestBody LoginRequestDto request) {
		if (request.getUsername() == null || request.getPassword() == null)
			return new LoginResponseDto(INVALID_REQUEST);

		boolean isAdded = CacheStorage.getInstance().addUser(request);
		if(!isAdded) {
			return new LoginResponseDto("User Already Exists");
		} else {
			return new LoginResponseDto(SUCCESS);
		}
	}

	@GetMapping("/logout")
	public LoginResponseDto performLogout(@RequestParam("username") String username) {
		if(username == null)
			return new LoginResponseDto(INVALID_REQUEST);
		CacheStorage.getInstance().deleteUserToken(username);
		return new LoginResponseDto(SUCCESS);
	}
	
	@GetMapping("/user")
	public List<LoginRequestDto> getUsers() {
		return CacheStorage.getInstance().getUsers();
	}
	
	@GetMapping(value = "/dashboard", produces = "application/json")
	public ResponseEntity<String> getDashboardData(@RequestParam("username") String username,
			@RequestParam("token") String token) {
		Gson gson = new Gson();
		if (username == null || token == null)
			return ResponseEntity.badRequest().body(gson.toJson(new LoginResponseDto(INVALID_REQUEST)));

		Optional<String> tokenOp = CacheStorage.getInstance().getUserToken(username);
		if (tokenOp.isPresent()) {
			if (token.equals(tokenOp.get())) {
				return ResponseEntity.ok(gson.toJson(CacheStorage.getInstance().getDashboardData()));
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
						.body(gson.toJson(new LoginResponseDto("User Token is invalid")));
			}
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(gson.toJson(new LoginResponseDto("User is not logged in yet")));
		}
	}

}
