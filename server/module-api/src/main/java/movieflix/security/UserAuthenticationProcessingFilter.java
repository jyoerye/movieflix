package movieflix.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.AnyRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;


public class UserAuthenticationProcessingFilter extends AbstractAuthenticationProcessingFilter {

	public UserAuthenticationProcessingFilter() {
		this(new OrRequestMatcher(new AntPathRequestMatcher("/api/videos/**"),new AntPathRequestMatcher("/api/videos/movies/**")));
	}

	protected UserAuthenticationProcessingFilter(RequestMatcher instance) {
		super(instance);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest httpServletRequest,
			HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {
		System.out.println("Filter: Attempt to authentication user...");
		String authToken = httpServletRequest.getHeader("Authorization");
		System.out.println(authToken);
		System.out.println(httpServletRequest.getHeaderNames());
		Enumeration<String> headers = httpServletRequest.getHeaderNames();
		
		JWTVerifier verifier = JWT.require(Algorithm.HMAC256("secret")).withIssuer("MOVIEFLIX").build(); 
		DecodedJWT decodedJwt = verifier.verify(authToken);
		System.out.println(decodedJwt.getClaim("username").asString());
		ArrayList<String> roleList = (ArrayList<String>) decodedJwt.getClaim("role").asList(String.class);
		ArrayList<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
		for (String role : roleList) {
			roles.add(new SimpleGrantedAuthority(role));
		}
		return new UsernamePasswordAuthenticationToken(decodedJwt.getClaim("username").asString(), null, roles);
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		SecurityContext context = SecurityContextHolder.createEmptyContext();
		context.setAuthentication(authResult);
		SecurityContextHolder.setContext(context);
		chain.doFilter(request, response);
	}
}
