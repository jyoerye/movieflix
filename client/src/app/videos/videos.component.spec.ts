/* tslint:disable:no-unused-variable */

import {
    TestBed, async, inject,ComponentFixture
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { VideosComponent } from './videos.component';
import {Router} from "@angular/router";
import {VideosService} from "../videos.service";
import {Observable}     from 'rxjs/Observable';
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";
import {ActivatedRouteStub} from "../testing/ActivatedRouteStub";
import {RouterLinkStubDirective} from "../testing/RouterLinkStub";
import {MockRouter} from "../testing/MockRouter";


describe('VideosComponent', () => {
  let component: VideosComponent;
  let router: Router;
  let fixture: ComponentFixture<VideosComponent>;
  let mrouter: MockRouter;
  beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
              RouterLinkStubDirective,
              VideosComponent
            ],
            imports: [ReactiveFormsModule],
             providers: [
                { provide: Router, useClass: MockRouter},
                { provide: VideosService, useClass: MockVideoService}       
                               
            ]
        });
        
        fixture = TestBed.createComponent(VideosComponent);
        component = fixture.componentInstance;
        mrouter = TestBed.get(Router);
    });

 

  it('should get all videos',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'findAll').and.callFake(() => {
        return Observable.of(testAllVideos);
      });
    
      mrouter.url = "/videos";
      console.log("Jyothsna check" +mrouter.url);
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.findAll).toHaveBeenCalled();
  }));
 


  it('should get all series',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'findTVShows').and.callFake(() => {
        return Observable.of(testAllSeries);
      });
      mrouter.url = "/series";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.findTVShows).toHaveBeenCalled();
  }));

  it('should get all movies',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'findMovies').and.callFake(() => {
        return Observable.of(testAllMovies);
      });
      mrouter.url = "/movies";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.findMovies).toHaveBeenCalled();
  }));


  it('should get all top rated movies',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'findTopRatedMovies').and.callFake(() => {
        return Observable.of(testAllMovies);
      });
      mrouter.url = "/videos/movies/top-rated";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.findTopRatedMovies).toHaveBeenCalled();
  }));

    it('should get all top rated series',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'findTopRatedTVShows').and.callFake(() => {
        return Observable.of(testAllSeries);
      });
      mrouter.url = "/videos/series/top-rated";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.findTopRatedTVShows).toHaveBeenCalled();
  }));

    it('should get all videos sorted by imdb rating',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'sortAllVideosByImdbRating').and.callFake(() => {
        return Observable.of(testAllVideos);
      });
      mrouter.url = "/videos/sort-by-imdb-rating";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.sortAllVideosByImdbRating).toHaveBeenCalled();
  }));

    it('should get all movies sorted by imdb rating',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'sortMoviesByImdbRating').and.callFake(() => {
        return Observable.of(testAllMovies);
      });
      mrouter.url = "/movies/sort-by-imdb-rating";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.sortMoviesByImdbRating).toHaveBeenCalled();
  }));

    it('should get all series sorted by imdb rating',  inject([VideosService], (service: VideosService) => {
    spyOn(service, 'sortSeriesByImdbRating').and.callFake(() => {
        return Observable.of(testAllSeries);
      });
      mrouter.url = "/series/sort-by-imdb-rating";
      fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(service.sortSeriesByImdbRating).toHaveBeenCalled();
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

 const testAllMovies : any[]= [
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
  }
]

 const testAllSeries : any[]= [
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


class MockVideoService{
  findAll() {}
  findMovies(){}
  findTVShows(){}
  findTopRatedMovies(){}
  findTopRatedTVShows(){}
  sortAllVideosByImdbRating(){}
  sortMoviesByImdbRating(){}
  sortSeriesByImdbRating(){}
}

});


