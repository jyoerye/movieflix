package movieflix.controller;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import movieflix.entity.Video;
import movieflix.service.VideoService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { VideoControllerTestConfig.class })
@WebAppConfiguration
public class VideoControllerTest {

	private VideoController controller;

	private MockMvc mockMvc;
	private VideoService mockMovieService;

	@Before
	public void setup() {

		controller = new VideoController();
		mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
		mockMovieService = mock(VideoService.class);

		controller.setService(mockMovieService);
	}

	
	
	@Test
	public void shouldFindAllMovies() throws Exception {
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findAll()).thenReturn(arrList);

		mockMvc.perform(get("/videos")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(jsonPath("$", hasSize(2)));
		// .andExpect(jsonPath("$.name", equalTo("someName")));

		verify(mockMovieService, times(1)).findAll();

	}

	@Test
	public void shouldFindOneMovie() throws Exception {
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		when(mockMovieService.findOne(Mockito.any())).thenReturn(m1);

		mockMvc.perform(get("/videos/602b3c67-5c71-4495-b7f4-04f20f5ae495")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.title", equalTo("Modern Family")));
		// .andExpect(jsonPath("$.name", equalTo("someName")));

		verify(mockMovieService, times(1)).findOne("602b3c67-5c71-4495-b7f4-04f20f5ae495");

	}

	@Test
	public void shouldCreateOneMovie() throws Exception {
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		when(mockMovieService.create(Mockito.any())).thenReturn(m1);

		mockMvc.perform(post("/videos").accept(MediaType.APPLICATION_JSON).contentType(MediaType.APPLICATION_JSON)
				.content(this.json(m1))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).create(Mockito.any());

	}

	@Test
	public void shouldUpdateOneMovie() throws Exception {

		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		when(mockMovieService.update(Mockito.any(), Mockito.any())).thenReturn(m1);

		mockMvc.perform(put("/videos/602b3c67-5c71-4495-b7f4-04f20f5ae495").accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON).content(this.json(m1))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).update(Mockito.any(), Mockito.any());

	}

	@Test
	public void shouldFindTopRatedMovies() throws Exception {

		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findTopRatedMovies()).thenReturn(arrList);

		mockMvc.perform(get("/videos/movies/top-rated/").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findTopRatedMovies();
	}
	
	@Test
	public void shouldFindTopRatedTVShows() throws Exception {

		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findTopRatedTVShows()).thenReturn(arrList);

		mockMvc.perform(get("/videos/series/top-rated/").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findTopRatedTVShows();
	}
	
	
	@Test
	public void shouldFindMovies() throws Exception {
		
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findByType(Mockito.any())).thenReturn(arrList);

		mockMvc.perform(get("/videos/movies").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findByType(Mockito.any());
		
	}
	
	
	@Test
	public void shouldFindTVShows() throws Exception {
		
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findByType(Mockito.any())).thenReturn(arrList);

		mockMvc.perform(get("/videos/series").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findByType(Mockito.any());
		
	}

	@Test
	public void shouldFindVideosByYear() throws Exception {
		
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findByYear(Mockito.anyInt())).thenReturn(arrList);

		mockMvc.perform(get("/videos/year?year=2015").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findByYear(Mockito.anyInt());
		
	}
	
	@Test
	public void shouldFindVideosByGenre() throws Exception {
		
		Video m1 = new Video();
		m1.setYear(2015);
		m1.setTitle("Modern Family");

		Video m2 = new Video();
		m2.setYear(2016);
		m2.setTitle("Modern Fights");

		ArrayList<Video> arrList = new ArrayList<>();
		arrList.add(m1);
		arrList.add(m2);

		when(mockMovieService.findByGenre(Mockito.any())).thenReturn(arrList);

		mockMvc.perform(get("/videos/genre?genre=comedy").accept(MediaType.APPLICATION_JSON).
				 contentType(MediaType.APPLICATION_JSON)
				.content(this.json(arrList))).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(jsonPath("$.[0].title", equalTo("Modern Family")));

		verify(mockMovieService, times(1)).findByGenre(Mockito.any());
		
	}

	protected String json(Object o) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(o);
	}

}
