webpackJsonp([1,4],{

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(441);


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsService = (function () {
    function DetailsService(http) {
        this.http = http;
    }
    DetailsService.prototype.getMovieById = function (id) {
        var _this = this;
        console.log('DetailsService: here before call to api');
        console.log('searching for movie with id: ' + id);
        return this.http
            .get('http://localhost:8080/module-api/api/videos/' + id)
            .map(function (response) { return _this.handleResponse(response); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    DetailsService.prototype.handleResponse = function (response) {
        console.log('Processing response from getById...');
        console.log(response.json());
        console.log('Returning response from getById...');
        return response.json();
    };
    DetailsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], DetailsService);
    return DetailsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/details.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(router, route, detailsService) {
        this.router = router;
        this.route = route;
        this.detailsService = detailsService;
        console.log('in constructor of detCOmp' + this.router.url);
        this.getMovieById();
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.getMovieById = function () {
        var _this = this;
        console.log('DetailComponent: before getMovieID');
        this.route.params.subscribe(function (params) {
            _this.detailsService.getMovieById(params['id'])
                .subscribe(function (video) { return _this.video = video; }, function (error) { return console.log(error); });
        });
        console.log(this.video);
    };
    DetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(734),
            styles: [__webpack_require__(727)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__details_service__["a" /* DetailsService */]) === 'function' && _c) || Object])
    ], DetailsComponent);
    return DetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/details.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.authenticateUser = function (username, password) {
        console.log('JYOOOauthenticateUser: here before call to user comments api' + "movies ");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set("userName", username);
        params.set("password", password);
        options.search = params;
        return this.http.get('http://localhost:8080/module-api/api/users/login', options)
            .map(this.saveToken)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    LoginService.prototype.saveToken = function (response) {
        console.log("token");
        console.log(response.text());
        sessionStorage.setItem("authToken", response.text());
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/login.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, loginService) {
        this.route = route;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("Unmame" + this.username);
        this.loginService.authenticateUser(this.username, this.password).subscribe(function (error) { return console.log(error); });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(735),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/login.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RatingService = (function () {
    function RatingService(http) {
        this.http = http;
        console.log("RatingService: init");
    }
    RatingService.prototype.getRatingByUserName = function (moviedId, userName) {
        console.log('getRatingByUserName: here before call to user rating api' + "  username " + userName + "movies " + moviedId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set("userName", userName);
        params.set("movieId", moviedId);
        options.search = params;
        return this.http.get('http://localhost:8080/module-api/api/user-ratings/get-rating', options)
            .map(function (response) { return response.json().userRating; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    RatingService.prototype.saveUserRating = function (id, ratingValue) {
        console.log('SaveUserRating: here before call to user rating api' + ratingValue);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set("userName", "jacky");
        params.set("movieId", id);
        params.set("rating", ratingValue.toString());
        options.search = params;
        return this.http.post('http://localhost:8080/module-api/api/user-ratings', {}, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    RatingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], RatingService);
    return RatingService;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/rating.service.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(737),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/registration.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserCommentsService = (function () {
    function UserCommentsService(http) {
        this.http = http;
    }
    UserCommentsService.prototype.saveUserComments = function (id, userName, comments) {
        console.log('SaveUserRating: here before call to user rating api' + "id " + id + "user " + userName + "comments " + comments);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set("userName", userName);
        params.set("movieId", id);
        params.set("comments", comments);
        options.search = params;
        return this.http.post('http://localhost:8080/module-api/api/user-comments', {}, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    UserCommentsService.prototype.getCommentsByVideoId = function (videoId) {
        console.log('JYOOOgetCommentsByMovieId: here before call to user comments api' + "movies " + videoId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set("videoId", videoId);
        options.search = params;
        return this.http.get('http://localhost:8080/module-api/api/user-comments/get-comments-by-movieid', options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    UserCommentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], UserCommentsService);
    return UserCommentsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/usercomments.service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosService = (function () {
    function VideosService(http) {
        this.http = http;
        console.log("VideoService: init");
    }
    VideosService.prototype.findAll = function () {
        console.log('VideosService: here before call to api');
        //{'Content-Type': 'application/json','Authorization':sessionStorage.getItem("authToken")}
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwiaXNzIjoiTU9WSUVGTElYIiwiaWQiOiIyMGE3NWE0Ny0zYWUxLTQyYTctYWIxOS03NWQxNjJhZWNmYjYiLCJ1c2VybmFtZSI6Imp5byJ9.cZI9jRNhb0zx_BFrT58DnJ6RQGAoEkWLmNCIy5WrQ3w');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http
            .get('http://localhost:8080/module-api/api/videos', { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.findMovies = function () {
        console.log('VideosService: here before call to api');
        return this.http
            .get('http://localhost:8080/module-api/api/videos/movies')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.findTVShows = function () {
        console.log('VideosService: here before call to api');
        return this.http
            .get('http://localhost:8080/module-api/api/videos/series')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.findTopRatedMovies = function () {
        console.log('VideosService: here before call to api');
        return this.http.get('http://localhost:8080/module-api/api/videos/movies/top-rated/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.findTopRatedTVShows = function () {
        console.log('VideosService: here before call to api');
        return this.http.get('http://localhost:8080/module-api/api/videos/series/top-rated/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.sortAllVideosByImdbRating = function () {
        console.log('VideosService: here before call to sort');
        return this.http.get('http://localhost:8080/module-api/api/videos/sort-by-imdb-rating')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.sortMoviesByImdbRating = function () {
        console.log('VideosService: here before call to movies sort');
        return this.http.get('http://localhost:8080/module-api/api/videos/movies/sort-by-imdb-rating')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService.prototype.sortSeriesByImdbRating = function () {
        console.log('VideosService: here before call to series sort');
        return this.http.get('http://localhost:8080/module-api/api/videos/series/sort-by-imdb-rating')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.statusText); });
    };
    VideosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], VideosService);
    return VideosService;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/videos.service.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__videos_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosComponent = (function () {
    function VideosComponent(router, route, videosService) {
        this.router = router;
        this.route = route;
        this.videosService = videosService;
        console.log('VideoComponent: Console log in the constructor');
    }
    VideosComponent.prototype.ngOnInit = function () {
        console.log('Before');
        console.log(this.router.url);
        if (this.router.url == '/videos') {
            console.log('callingvideos');
            this.getVideos();
        }
        else if (this.router.url == '/series') {
            console.log('callingseries');
            this.getSeries();
        }
        else if (this.router.url == '/movies') {
            console.log('callingmovies');
            this.getMovies();
        }
        else if (this.router.url == '/videos/movies/top-rated') {
            console.log('callingtoprated');
            this.findTopRatedMovies();
        }
        else if (this.router.url == '/videos/series/top-rated') {
            console.log('callingtoprated');
            this.findTopRatedTVShows();
        }
        else if (this.router.url == '/videos/sort-by-imdb-rating') {
            console.log('calling all videos sort by imdb rating');
            this.sortAllVideosByImdbRating();
        }
        else if (this.router.url == '/movies/sort-by-imdb-rating') {
            console.log('calling movies sort by imdb rating');
            this.sortMoviesByImdbRating();
        }
        else if (this.router.url == '/series/sort-by-imdb-rating') {
            console.log('calling  series sort by imdb rating');
            this.sortSeriesByImdbRating();
        }
    };
    VideosComponent.prototype.getVideos = function () {
        var _this = this;
        this.videosService.findAll()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after findALl');
    };
    VideosComponent.prototype.getSeries = function () {
        var _this = this;
        this.videosService.findTVShows()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after series');
    };
    VideosComponent.prototype.getMovies = function () {
        var _this = this;
        this.videosService.findMovies()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent.prototype.findTopRatedMovies = function () {
        var _this = this;
        this.videosService.findTopRatedMovies()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent.prototype.findTopRatedTVShows = function () {
        var _this = this;
        this.videosService.findTopRatedTVShows()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent.prototype.sortAllVideosByImdbRating = function () {
        var _this = this;
        this.videosService.sortAllVideosByImdbRating()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent.prototype.sortMoviesByImdbRating = function () {
        var _this = this;
        this.videosService.sortMoviesByImdbRating()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent.prototype.sortSeriesByImdbRating = function () {
        var _this = this;
        this.videosService.sortSeriesByImdbRating()
            .subscribe(function (videos) { return _this.videos = videos; }, function (error) { return console.log(error); });
        console.log('VideoComponent: after movies');
    };
    VideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            template: __webpack_require__(739),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__videos_service__["a" /* VideosService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__videos_service__["a" /* VideosService */]) === 'function' && _c) || Object])
    ], VideosComponent);
    return VideosComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/videos.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 440;


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(560);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/main.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [{ path: 'videos', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_3__details_details_component__["a" /* DetailsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'series', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'videos/movies/top-rated', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'videos/series/top-rated', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'videos/sort-by-imdb-rating', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'movies/sort-by-imdb-rating', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] },
    { path: 'series/sort-by-imdb-rating', component: __WEBPACK_IMPORTED_MODULE_2__videos_videos_component__["a" /* VideosComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/app-routing.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(733),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/app.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_module__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videos_videos_module__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details_module__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_module__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_module__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__videos_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rating_service__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__usercomments_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_service__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_module__["a" /* NavModule */],
                __WEBPACK_IMPORTED_MODULE_7__videos_videos_module__["a" /* VideosModule */],
                __WEBPACK_IMPORTED_MODULE_8__details_details_module__["a" /* DetailsModule */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_10__registration_registration_module__["a" /* RegistrationModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__videos_service__["a" /* VideosService */], __WEBPACK_IMPORTED_MODULE_12__details_service__["a" /* DetailsService */], __WEBPACK_IMPORTED_MODULE_13__rating_service__["a" /* RatingService */], __WEBPACK_IMPORTED_MODULE_14__usercomments_service__["a" /* UserCommentsService */], __WEBPACK_IMPORTED_MODULE_15__login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
console.log("HELLO");
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rating_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usercomments_usercomments_component__ = __webpack_require__(567);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_4__rating_component__["a" /* RatingComponent */], __WEBPACK_IMPORTED_MODULE_5__usercomments_usercomments_component__["a" /* UserCommentsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__details_component__["a" /* DetailsComponent */], __WEBPACK_IMPORTED_MODULE_4__rating_component__["a" /* RatingComponent */], __WEBPACK_IMPORTED_MODULE_5__usercomments_usercomments_component__["a" /* UserCommentsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsModule);
    return DetailsModule;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/details.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_service__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RatingComponent = (function () {
    function RatingComponent(cdref, ratingService, route) {
        this.cdref = cdref;
        this.ratingService = ratingService;
        this.route = route;
        this.range = [1, 2, 3, 4, 5];
        console.log('RatingComponent: Console log in the constructor');
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.getRatingByUserName();
    };
    RatingComponent.prototype.getRatingByUserName = function () {
        var _this = this;
        console.log('RatingComponent: getRatingByUserName');
        this.route.params.subscribe(function (params) {
            _this.ratingService.getRatingByUserName(_this.movieId, _this.userName).subscribe(function (rate) {
                _this.rate = rate;
                _this.cdref.detectChanges();
            }, function (error) { return console.log(error); });
        });
    };
    RatingComponent.prototype.update = function (value) {
        var _this = this;
        this.rate = value;
        this.updateRate = value;
        console.log('RatingComponent: before stars');
        this.route.params.subscribe(function (params) {
            _this.ratingService.saveUserRating(params['id'], _this.updateRate).subscribe(function (error) { return console.log(error); });
        });
        console.log('RatingComponent: after stars');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "movieId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "userName", void 0);
    RatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'rating',
            template: "\n    <span style=\"color: gold\">   \n      <template ngFor [ngForOf]=\"range\" let-index=\"index\">\n        <i class=\"fa\" (click)=\"update(index + 1)\" [ngClass]=\"index < rate ? 'fa-star' : 'fa-star-o'\"></i>\n      </template>\n    </span>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rating_service__["a" /* RatingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__rating_service__["a" /* RatingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], RatingComponent);
    return RatingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/rating.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/login.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(router) {
        this.router = router;
        this.username = 'Jyo';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'nav-selector',
            template: __webpack_require__(736),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/nav.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavModule = (function () {
    function NavModule() {
    }
    NavModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__nav_component__["a" /* NavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__nav_component__["a" /* NavComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NavModule);
    return NavModule;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/nav.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_component__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__registration_component__["a" /* RegistrationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__registration_component__["a" /* RegistrationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationModule);
    return RegistrationModule;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/registration.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usercomments_service__ = __webpack_require__(370);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCommentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCommentsComponent = (function () {
    function UserCommentsComponent(route, userCommentsService) {
        this.route = route;
        this.userCommentsService = userCommentsService;
        this.flag = false;
    }
    UserCommentsComponent.prototype.ngOnInit = function () {
        console.log("INIT JYOTHSSNAIn show COmments");
        this.showComments();
    };
    UserCommentsComponent.prototype.toggleCommentsView = function () {
        if (this.flag) {
            this.flag = false;
        }
        else {
            this.flag = true;
        }
    };
    UserCommentsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.comments);
        this.route.params.subscribe(function (params) {
            _this.userCommentsService.saveUserComments(params['id'], "jacky", _this.comments).subscribe(function (error) { return console.log(error); });
        });
    };
    UserCommentsComponent.prototype.showComments = function () {
        var _this = this;
        console.log("JYOTHSSNAIn show COmments");
        this.route.params.subscribe(function (params) {
            _this.userCommentsService.getCommentsByVideoId(params['id']).subscribe(function (userCommentsResponse) { return _this.userComments = userCommentsResponse; }, function (error) { return console.log(error); });
        });
    };
    UserCommentsComponent.prototype.handleResults = function (userComments) {
        this.userComments = userComments;
        console.log(this.userComments);
    };
    UserCommentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'user-comments',
            template: __webpack_require__(738),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__usercomments_service__["a" /* UserCommentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__usercomments_service__["a" /* UserCommentsService */]) === 'function' && _b) || Object])
    ], UserCommentsComponent);
    return UserCommentsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/usercomments.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__videos_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosModule = (function () {
    function VideosModule() {
    }
    VideosModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__videos_component__["a" /* VideosComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__videos_component__["a" /* VideosComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], VideosModule);
    return VideosModule;
}());
console.log("HELLO2");
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/videos.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/m1020536/Desktop/movieflix/client/src/environment.js.map

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = ".details-title-row * {\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.details-row * {\r\n  display: inline-block;\r\n\r\n}\r\n.imp-person\r\n{\r\n  font-weight: bold;\r\n}\r\n\r\n.details-image\r\n{\r\n  width:30%;\r\n  float: left;\r\n}\r\n.details-image img{\r\n  width: 300px;\r\n  height: 444px;\r\n}\r\n\r\n.details-side\r\n{\r\n  width:50%;\r\n  float: left;\r\n}\r\n\r\n.details-main\r\n{\r\n  width: 80%;\r\n  height: 450px;\r\n}\r\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "html{\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n.form-login{\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n  font: bold 14px sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.form-log-in-with-email{\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin-right: 130px;\r\n  text-align: center;\r\n}\r\n\r\n.form-log-in-with-email .form-white-background{\r\n  width: 570px;\r\n  box-sizing: border-box;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\r\n  padding: 60px 80px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.form-log-in-with-email .form-row{\r\n  text-align: left;\r\n  margin-bottom: 23px;\r\n}\r\n\r\n.form-log-in-with-email .form-title-row{\r\n  display: inline-block;\r\n  text-align: center;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.form-log-in-with-email h1{\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  color:  #4c565e;\r\n  font-size: 24px;\r\n  padding: 0 30px 15px;\r\n  border-bottom: 2px solid #6caee0;\r\n  margin:0;\r\n}\r\n\r\n.form-log-in-with-email .form-row > label span{\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  color:  #5f5f5f;\r\n  width: 125px;\r\n  text-align: right;\r\n  padding-right: 25px;\r\n}\r\n\r\n.form-log-in-with-email input{\r\n  color:  #5f5f5f;\r\n  box-sizing: border-box;\r\n  width: 230px;\r\n  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n  padding: 12px 18px;\r\n  border: 1px solid #dbdbdb;\r\n}\r\n\r\n.form-log-in-with-email button{\r\n  display: block;\r\n  border-radius: 2px;\r\n  background-color:  #6caee0;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n  padding: 15px 35px;\r\n  border: 0;\r\n  margin: 55px auto 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-log-in-with-email .form-forgotten-password,\r\n.form-log-in-with-email .form-create-an-account{\r\n  text-decoration: none;\r\n  padding: 4px 8px;\r\n  font-weight: normal;\r\n}\r\n\r\n.form-log-in-with-email .form-forgotten-password{\r\n  color:  #4e9eda;\r\n}\r\n\r\n.form-log-in-with-email .form-create-an-account{\r\n  color:  #7b9d62;\r\n  background-color: #d6f0c3;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "\r\nnav {\r\n  width: 100%;\r\n}\r\n\r\n#upper-nav {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n#logo {\r\n  float: left;\r\n  background-image: url('assets/MovieflixLogo.png'),\r\n  -webkit-radial-gradient(blue 15%, grey 75%);\r\n  background-image: url('assets/MovieflixLogo.png'),\r\n  radial-gradient(blue 15%, grey 75%);\r\n  width: 125px;\r\n  height: 75px;\r\n  background-size: cover;\r\n}\r\n\r\n#search {\r\n  float: left; background-color : #fffbf8;\r\n  padding: 13px;\r\n  width: 335px;\r\n  margin: 0px 0px 0px 300px;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83), 0 10px 15px 0\r\n  rgba(126, 126, 126, 0.12), 0 -2px 6px 1px rgba(199, 199, 199, 0.55)\r\n  inset, 0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;\r\n  background-color: #fffbf8;\r\n}\r\n\r\n#search input {\r\n  width: 250px;\r\n  -webkit-transition: width 0.2s ease-in-out;\r\n  transition: width 0.2s ease-in-out;\r\n  height: 30px;\r\n  padding-left: 15px;\r\n  border-radius: 6px;\r\n  border: none;\r\n  color: #0F0D0D;;\r\n  font-weight: 500; background-color : #E2EFF7;\r\n  box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff, 0\r\n  2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2\r\n  inset, 0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;\r\n  background-color: #E2EFF7;\r\n}\r\n\r\n#search i {\r\n  opacity: 0.5;\r\n  padding-left: 15px;\r\n  font-size: 25px;\r\n  color: grey;\r\n}\r\n\r\n#user {\r\n  margin: 0px 0px 0px 0px;\r\n  float: right;\r\n}\r\n\r\n#user i {\r\n  float: left;\r\n  font-size: 50px;\r\n  color: grey;\r\n}\r\n\r\n#user p {\r\n  float: right;\r\n  margin: 0px 0px 0px 0px;\r\n  padding: 10px 0px 5px 15px;\r\n  color: grey;\r\n}\r\n\r\n#bottom-nav {\r\n  padding: 10px 0px 0px 0px;\r\n  clear: left;\r\n}\r\n\r\n#browse {\r\n  clear: left;\r\n  margin: 0;\r\n  padding-left: 50px;\r\n  color:black;\r\n}\r\n\r\n#browse li {\r\n  float: left;\r\n  border: 1px solid black;\r\n  opacity: 0.7;\r\n  width: 15%;\r\n  list-style: none;\r\n\r\n}\r\n\r\n#browse li a {\r\n  background: black;\r\n  display: block;\r\n  padding: 5% 12%;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  color:grey;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  opacity: 0.7;\r\n}\r\n\r\n#sort {\r\n  float: right;\r\n}\r\n\r\n#sort i {\r\n  float: left;\r\n  color: grey;\r\n}\r\n\r\n#sort p {\r\n  margin: 0px 0px 0px 0px;\r\n  padding: 0px 0px 0px 5px;\r\n  float: right;\r\n  color: grey;\r\n}\r\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ".form-register{\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n\r\n  font: bold 14px sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.form-register-with-email{\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin-right: 130px;\r\n  text-align: center;\r\n}\r\n\r\n.form-register-with-email .form-white-background{\r\n  width: 570px;\r\n  box-sizing: border-box;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\r\n  padding: 60px 80px;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.form-register-with-email .form-row{\r\n  text-align: left;\r\n  margin-bottom: 23px;\r\n}\r\n\r\n.form-register-with-email .form-title-row{\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.form-register-with-email h1{\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  color:  #4c565e;\r\n  font-size: 24px;\r\n  padding: 0 20px 15px;\r\n  border-bottom: 2px solid #6caee0;\r\n  margin: 0;\r\n}\r\n\r\n.form-register-with-email .form-row > label span{\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  color:  #5f5f5f;\r\n  width: 125px;\r\n  text-align: right;\r\n  padding-right: 25px;\r\n}\r\n\r\n.form-register-with-email input{\r\n  color:  #5f5f5f;\r\n  box-sizing: border-box;\r\n  width: 230px;\r\n  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n  padding: 12px 18px;\r\n  border: 1px solid #dbdbdb;\r\n}\r\n\r\n.form-register-with-email .form-checkbox input{\r\n  margin-left: 128px;\r\n  margin-right: 10px;\r\n  width: auto;\r\n  vertical-align: top;\r\n}\r\n\r\n.form-register-with-email .form-row .form-checkbox span{\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  display: inline-block;\r\n  text-align: left;\r\n  width: 220px;\r\n  margin: 0;\r\n}\r\n\r\n.form-register-with-email .form-checkbox span a{\r\n  text-decoration: none;\r\n  color:  #6caee0;\r\n}\r\n\r\n.form-register-with-email button{\r\n  display: block;\r\n  border-radius: 2px;\r\n  background-color:  #6caee0;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n  padding: 15px 35px;\r\n  border: 0;\r\n  margin: 55px auto 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-register-with-email .form-log-in-with-existing{\r\n  text-decoration: none;\r\n  padding: 4px 8px;\r\n  font-weight: normal;\r\n  color: #7b9d62;\r\n  background-color: #d6f0c3;\r\n}\r\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "#images {\r\n  clear: left;\r\n  width: 1700px;\r\n}\r\n\r\n.preview-poster {\r\n  float: left;\r\n}\r\n\r\n.preview-poster img {\r\n  width: 291px;\r\n  height: 432px;\r\n  margin: 15px 15px 15px 15px;\r\n}\r\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "<nav-selector> </nav-selector>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"video\" class=\"main-content\">\r\n\r\n  <div class=\"details-section\">\r\n\r\n    <div class=\"details-title-row\">\r\n      <h1>This is the title{{video.title}}</h1>\r\n      <p>{{video.year}}</p>\r\n      <div>Rating</div>\r\n     <rating [movieId]=\"video.id\" userName=\"jacky\"></rating>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"details-row\">\r\n      <p>{{video.released}}</p>\r\n      <i class=\"fa fa-diamond\" aria-hidden=\"true\"></i>\r\n      <p>{{video.runtime}}</p>\r\n      <i class=\"fa fa-diamond\" aria-hidden=\"true\"></i>\r\n      <p>{{video.genre}}</p>\r\n      <i class=\"fa fa-diamond\" aria-hidden=\"true\"></i>\r\n      <p>{{video.released}}</p>\r\n    </div>\r\n\r\n    <div class=\"details-main\">\r\n      <div class=\"details-image\">\r\n        <img\r\n          src={{video.poster}}>\r\n      </div>\r\n\r\n\r\n      <div class=\"details-side\">\r\n        <label> <span><i class=\"fa fa-trophy\"\r\n                         aria-hidden=\"true\"></i></span>\r\n        </label> <span>{{video.awards}}</span> <span>{{video.language}}</span>\r\n        <div class=\"details-row\">\r\n          <p>{{video.plot}}</p>\r\n        </div>\r\n\r\n        <div class=\"details-row\">\r\n          <div class=\"imp-person\">\r\n            <label> <span>Director:</span>\r\n            </label>\r\n          </div>\r\n          <p>{{video.director}}</p>\r\n          <div class=\"imp-person\">\r\n            <label> <span>Writers</span>\r\n            </label>\r\n          </div>\r\n          <p>{{video.writer}}</p>\r\n        </div>\r\n\r\n        <div class=\"details-row\">\r\n          <div class=\"imp-person\">\r\n            <label> <span>Starring</span>\r\n            </label>\r\n          </div>\r\n          <p>{{video.actors}}</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"details-row\">\r\n\r\n      <label> <span>Metascore:</span></label>\r\n      <p>{{video.metaScore}}</p>\r\n      <label> <span>ImdbRating:</span>\r\n      </label>\r\n      <p>{{video.imdbRating}}</p>\r\n      <label> <span>Votes:</span>\r\n      </label>\r\n      <p>{{video.imdbVotes}}</p>\r\n\r\n    </div>\r\n\r\n    <div class=\"review-row\"></div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"user-comments\">\r\n    <user-comments></user-comments>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<ul>\r\n\r\n  <li><a href=\"form-register.html\">Register</a></li>\r\n  <li><a href=\"form-login.html\" class=\"active\">Login</a></li>\r\n\r\n</ul>\r\n\r\n\r\n<div class=\"main-content\">\r\n\r\n  <!-- You only need this form and the form-login.css -->\r\n\r\n  <form class=\"form-login\" (ngSubmit)=\"onSubmit()\" #userLoginForm=\"ngForm\" method=\"post\" action=\"#\">\r\n\r\n    <div class=\"form-log-in-with-email\">\r\n\r\n      <div class=\"form-white-background\">\r\n\r\n        <div class=\"form-title-row\">\r\n          <h1>Log in</h1>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label> <span>Username</span> <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" required>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label> <span>Password</span> <input [(ngModel)]=\"password\" type=\"password\"\r\n                                               name=\"password\" required>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <button type=\"submit\" class=\"btn btn-success\">Log in</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <a href=\"#\" class=\"form-forgotten-password\">Forgotten password\r\n        &middot;</a> <a href=\"#\" class=\"form-create-an-account\">Create an\r\n      account &rarr;</a>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div id=\"upper-nav\">\r\n    <div id=\"logo\"></div>\r\n\r\n    <div id=\"search\">\r\n      <input type=\"text\" placeholder=\"Search\"><i\r\n      class=\"fa fa-search\"></i>\r\n    </div>\r\n\r\n    <div id=\"user\">\r\n      <i class=\"fa fa-user-circle\"></i>\r\n      <p>{{username}}</p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"bottom-nav\">\r\n    <div id=\"browse\">\r\n      <ul>\r\n\r\n        <li><a routerLink=\"series\" routerLinkActive=\"active\">TV Shows</a></li>\r\n        <li><a routerLink=\"movies\" routerLinkActive=\"active\">Movies</a></li>\r\n        <li><a routerLink=\"videos\" routerLinkActive=\"active\">All Videos</a></li>\r\n        <li><a routerLink=\"videos/movies/top-rated\" routerLinkActive=\"active\">TopRatedMovies</a></li>\r\n        <li><a routerLink=\"videos/series/top-rated\" routerLinkActive=\"active\">TopRateSeries</a></li>\r\n\r\n        <li><a [routerLink]=\"[router.url,'sort-by-imdb-rating']\" routerLinkActive=\"active\">SortByImdbRating</a></li>\r\n\r\n\r\n      </ul>\r\n\r\n    </div>\r\n    <div id=\"sort\">\r\n      <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n      <p>Sort</p>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<ul>\r\n\r\n  <li><a href=\"form-register.html\" class=\"active\">Register</a></li>\r\n  <li><a href=\"form-login.html\">Login</a></li>\r\n\r\n</ul>\r\n\r\n\r\n<div class=\"main-content\">\r\n\r\n  <!-- You only need this form and the form-register.css -->\r\n\r\n  <form class=\"form-register\" method=\"post\" action=\"#\">\r\n\r\n    <div class=\"form-register-with-email\">\r\n\r\n      <div class=\"form-white-background\">\r\n\r\n        <div class=\"form-title-row\">\r\n          <h1>Create an account</h1>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label> <span>Name</span> <input type=\"text\" name=\"name\" required>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label> <span>Email</span> <input type=\"email\" name=\"email\" required>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label> <span>Password</span> <input type=\"password\"\r\n                                               name=\"password\" required>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <label class=\"form-checkbox\"> <input type=\"checkbox\"\r\n                                               name=\"checkbox\" checked> <span>I agree to the <a\r\n            href=\"#\">terms and conditions</a></span>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n          <button type=\"submit\">Register</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <a href=\"#\" class=\"form-log-in-with-existing\">Already have an\r\n        account? Login here &rarr;</a>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<i (click)=\"toggleCommentsView()\" class=\"fa\" aria-hidden=\"true\"\r\n   [ngClass]=\"!flag?'fa-plus-square-o':'fa-minus-square-o'\"></i>\r\n<template [ngIf]=\"flag\">\r\n  <form (ngSubmit)=\"onSubmit()\" #userCommentsForm=\"ngForm\">\r\n <textarea [(ngModel)]=\"comments\" name=\"enteredComments\" rows=\"3\" cols=\"100\" placeholder=\"Enter your comments here...\">\r\n\r\n</textarea>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!userCommentsForm.form.valid\">Submit</button>\r\n\r\n  </form>\r\n\r\n</template>\r\n\r\n<div  *ngFor=\"let comment of userComments\" class=\"showcomments\">\r\n\r\n  <p> {{comment.userComments}}</p>\r\n</div>\r\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div id=\"images\">\r\n\r\n    <div  *ngFor=\"let video of videos\" class=\"preview-poster\">\r\n\r\n      <a [routerLink]=\"['/details',video.id]\" routerLinkActive=\"active\"> <img [src]=\"video.poster\"></a>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ })

},[1006]);
//# sourceMappingURL=main.bundle.map