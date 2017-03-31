/* tslint:disable:no-unused-variable */
import {MockBackend, MockConnection} from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { DetailsService } from './details.service';
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";

describe('DetailsService', () => {
  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [
        {provide: Http, useFactory: (backend, options) => {return new Http(backend, options);},
          deps: [MockBackend, BaseRequestOptions]},
        MockBackend,
        BaseRequestOptions,
        DetailsService
      ]
    });
  });

  it('should create the service', inject([DetailsService], (service: DetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected value from getMovieById', inject([DetailsService, MockBackend], (service: DetailsService, backend: MockBackend) => {
      backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: testData1});
      conn.mockRespond(new Response(options));
    });

    expect(service.getMovieById("123").subscribe(res => expect(res).toBe(testData1)))
  }));


  const testData1 = {
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
  };

});
