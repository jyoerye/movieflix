import {Component, OnInit} from '@angular/core';
import {Video} from "../details/video";
import {VideosService} from "../videos.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(private router: Router, private videosService: VideosService) {
    console.log('VideoComponent: Console log in the constructor');
  }

  ngOnInit() {
    console.log('Before');
    console.log(this.router.url);
    if(this.router.url=='/videos')
    {
      console.log('callingvideos');
      this.getVideos();
    }
    else if(this.router.url=='/series')
    {
      console.log('callingseries');
      this.getSeries();
    }

    else if(this.router.url=='/movies')
    {
      console.log('callingmovies');
      this.getMovies();
    }
   else if(this.router.url=='/videos/movies/top-rated')
    {
      console.log('callingtoprated');
      this.findTopRatedMovies();
    }
    else if(this.router.url=='/videos/series/top-rated')
    {
      console.log('callingtoprated');
      this.findTopRatedTVShows();
    }

    else if(this.router.url=='/videos/sort-by-imdb-rating')
    {
      console.log('calling all videos sort by imdb rating');
      this.sortAllVideosByImdbRating();
    }

    else if(this.router.url=='/movies/sort-by-imdb-rating')
    {
      console.log('calling movies sort by imdb rating');
      this.sortMoviesByImdbRating();
    }

    else if(this.router.url=='/series/sort-by-imdb-rating')
    {
      console.log('calling  series sort by imdb rating');
      this.sortSeriesByImdbRating();
    }

  }

  getVideos() {
    this.videosService.findAll()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after findALl');
  }

  getSeries() {
    this.videosService.findTVShows()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after series');
  }


  getMovies() {
    this.videosService.findMovies()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }

  findTopRatedMovies()
  {
    this.videosService.findTopRatedMovies()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }

  findTopRatedTVShows()
  {
    this.videosService.findTopRatedTVShows()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }


  sortAllVideosByImdbRating()
  {
    this.videosService.sortAllVideosByImdbRating()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }

  sortMoviesByImdbRating()
  {
    this.videosService.sortMoviesByImdbRating()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }

  sortSeriesByImdbRating()
  {
    this.videosService.sortSeriesByImdbRating()
      .subscribe(videos => this.videos = videos,
        error => console.log(error));
    console.log('VideoComponent: after movies');
  }

}

