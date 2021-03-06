"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_filter_pipe_1 = require("./movie-filter.pipe");
var review_component_1 = require("../shared/review.component");
var movie_service_1 = require("./movie.service");
var MovieListComponent = (function () {
    function MovieListComponent(_movieService) {
        this._movieService = _movieService;
        this.pageTitle = 'Movie List';
        this.imageWidth = 50;
        this.ImageMargin = 2;
        this.seePoster = false;
        this.listFilter = null;
        this.movies = [];
    }
    MovieListComponent.prototype.toggleImage = function () {
        this.seePoster = !this.seePoster;
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._movieService.getMovies()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
    };
    MovieListComponent.prototype.onRatingClicked = function (messages) {
        this.pageTitle = 'Movie List' + messages;
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'mm-movies',
        templateUrl: 'app/movies/movie-list.component.html',
        styleUrls: ['app/movies/movie-list-component.css'],
        pipes: [movie_filter_pipe_1.MovieFilterPipe],
        directives: [review_component_1.ReviewComponent]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map