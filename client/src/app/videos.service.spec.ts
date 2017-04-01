/* tslint:disable:no-unused-variable */
import {MockBackend, MockConnection} from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { VideosService } from './videos.service';
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";

describe('VideosService', () => {
 beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [
        {provide: Http, useFactory: (backend, options) => {return new Http(backend, options);},
          deps: [MockBackend, BaseRequestOptions]},
        MockBackend,
        BaseRequestOptions,
        VideosService
      ]
    });
  });

  it('should create the service', inject([VideosService], (service: VideosService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected value from findall', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testAllVideos});
      conn.mockRespond(new Response(options));
    });

    expect(service.findAll().subscribe(res => expect(res).toBe(testAllVideos)))
  }));

   it('should return expected value from findMovies', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testMovies});
      conn.mockRespond(new Response(options));
    });

    expect(service.findMovies().subscribe(res => expect(res).toBe(testMovies)))
  }));

   it('should return expected value from findTVShows', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testSeries});
      conn.mockRespond(new Response(options));
    });

    expect(service.findTVShows().subscribe(res => expect(res).toBe(testSeries)))
  }));

   it('should return expected value from findTopRatedMovies', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testMovies});
      conn.mockRespond(new Response(options));
    });

    expect(service.findTopRatedMovies().subscribe(res => expect(res).toBe(testMovies)))
  }));

  it('should return expected value from findTopRatedTVShows', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testSeries});
      conn.mockRespond(new Response(options));
    });

    expect(service.findTopRatedTVShows().subscribe(res => expect(res).toBe(testSeries)))
  }));

   it('should return expected value from sortAllVideosByImdbRating', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testAllVideos});
      conn.mockRespond(new Response(options));
    });

    expect(service.sortAllVideosByImdbRating().subscribe(res => expect(res).toBe(testAllVideos)))
  }));

 it('should return expected value from sortMoviesByImdbRating', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testMovies});
      conn.mockRespond(new Response(options));
    });

    expect(service.sortMoviesByImdbRating().subscribe(res => expect(res).toBe(testMovies)))
  }));

 it('should return expected value from sortSeriesByImdbRating', inject([VideosService, MockBackend], (service: VideosService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testSeries});
      conn.mockRespond(new Response(options));
    });

    expect(service.sortSeriesByImdbRating().subscribe(res => expect(res).toBe(testSeries)))
  }));





 const testAllVideos : any[]= [
  {
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "rated": "PG-13",
    "released": "2015-05-01",
    "runtime": "141 min",
    "genre": "Action, Adventure, Sci-Fi",
    "director": "Joss Whedon",
    "writer": "Joss Whedon, Stan Lee (Marvel comics), Jack Kirby (Marvel comics)",
    "actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    "plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.",
    "language": "English",
    "country": "USA",
    "awards": "1 win & 12 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTU4MDU3NDQ5Ml5BMl5BanBnXkFtZTgwOTU5MDUxNTE@._V1_SX300.jpg",
    "metaScore": 66,
    "imdbRating": 7.6,
    "imdbVotes": 370909,
    "imdbId": "tt2395427",
    "type": "movie"
  },
   {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "rated": "R",
    "released": "1994-10-14",
    "runtime": "142 min",
    "genre": "Crime, Drama",
    "director": "Frank Darabont",
    "writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
    "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "language": "English",
    "country": "USA",
    "awards": "Nominated for 7 Oscars. Another 14 wins & 20 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    "metaScore": 80,
    "imdbRating": 9.3,
    "imdbVotes": 1590699,
    "imdbId": "tt0111161",
    "type": "movie"
  },
  {
    "title": "Top Gear",
    "year": 2015,
    "rated": null,
    "released": "2002-10-20",
    "runtime": "60 min",
    "genre": "Comedy, Talk-Show",
    "director": null,
    "writer": null,
    "actors": "Richard Hammond, Jeremy Clarkson, James May, Ben Collins",
    "plot": "Jeremy, Richard and James talk about everything car-related. From new cars to how they're fueled, this show has it all.",
    "language": "English",
    "country": "UK",
    "awards": "11 wins & 16 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTM2OTYwMjIzOV5BMl5BanBnXkFtZTcwNTMzNTAwMQ@@._V1._CR0,0,317,396_SY132_CR8,0,89,132_AL_.jpg_V1_SX300.jpg",
    "metaScore": 0,
    "imdbRating": 8.9,
    "imdbVotes": 70914,
    "imdbId": "tt1628033",
    "type": "series"
  }
]


 const testMovies : any[]= [
 {
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "rated": "R",
    "released": "2014-03-28",
    "runtime": "99 min",
    "genre": "Adventure, Comedy, Drama",
    "director": "Wes Anderson",
    "writer": "Stefan Zweig (inspired by the writings of), Wes Anderson (screenplay), Wes Anderson (story), Hugo Guinness (story)",
    "actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
    "plot": "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    "language": "English, French",
    "country": "USA, Germany, UK",
    "awards": "Won 4 Oscars. Another 115 wins & 204 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    "metaScore": 88,
    "imdbRating": 8.1,
    "imdbVotes": 423004,
    "imdbId": "tt2278388",
    "type": "movie"
  },
  {
    "title": "Shutter Island",
    "year": 2010,
    "rated": "R",
    "released": "2010-02-19",
    "runtime": "138 min",
    "genre": "Mystery, Thriller",
    "director": "Martin Scorsese",
    "writer": "Laeta Kalogridis (screenplay), Dennis Lehane (novel)",
    "actors": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
    "plot": "A U.S Marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
    "language": "English, German",
    "country": "USA",
    "awards": "7 wins & 53 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
    "metaScore": 63,
    "imdbRating": 8.1,
    "imdbVotes": 720127,
    "imdbId": "tt1130884",
    "type": "movie"
  }
 ]


 const testSeries : any[]= [
  {
    "title": "Homeland",
    "year": 2015,
    "rated": "TV-MA",
    "released": "2011-10-02",
    "runtime": "55 min",
    "genre": "Drama, Mystery, Thriller",
    "director": null,
    "writer": "Alex Gansa, Howard Gordon",
    "actors": "Claire Danes, Mandy Patinkin, Rupert Friend, Damian Lewis",
    "plot": "When Marine Nicolas Brody is hailed as a hero after he returns home from eight years of captivity in Iraq, intelligence officer Carrie Mathison is the only one who suspects that he may have been turned.",
    "language": "English",
    "country": "USA",
    "awards": "Won 5 Golden Globes. Another 45 wins & 134 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMjE0NTc2MzM1OV5BMl5BanBnXkFtZTgwMDk2NjA2NjE@._V1_SX300.jpg",
    "metaScore": 0,
    "imdbRating": 8.4,
    "imdbVotes": 214463,
    "imdbId": "tt1796960",
    "type": "series"
  },
  {
    "title": "The Office",
    "year": 2013,
    "rated": "TV-PG",
    "released": "2005-03-24",
    "runtime": "22 min",
    "genre": "Comedy",
    "director": null,
    "writer": "Greg Daniels, Ricky Gervais, Stephen Merchant",
    "actors": "Rainn Wilson, John Krasinski, Jenna Fischer, Leslie David Baker",
    "plot": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. Based on the hit BBC series.",
    "language": "English",
    "country": "USA",
    "awards": "Won 1 Golden Globe. Another 37 wins & 150 nominations.",
    "poster": "http://ia.media-imdb.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_SX300.jpg",
    "metaScore": 0,
    "imdbRating": 8.8,
    "imdbVotes": 186531,
    "imdbId": "tt0386676",
    "type": "series"
  }
 ]


});

