(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "DHFv":
/*!*******************************************!*\
  !*** ./src/services/harmonics.service.ts ***!
  \*******************************************/
/*! exports provided: HarmonicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarmonicsService", function() { return HarmonicsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class HarmonicsService {
    constructor(http) {
        this.http = http;
    }
    getTHDLoad(load, time) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].servicesUrl + '/ActivePower/GetHarmonics/' + load + "/" + time);
    }
    getTHDFunctions(time) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].servicesUrl + '/ActivePower/GetFunctionHarmonics/' + time);
    }
    getTHDFunction(id, time) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].servicesUrl + '/ActivePower/GetFunctionHarmonics/' + id + "/" + time);
    }
    getTHDArea(id, time) {
        return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].servicesUrl + '/ActivePower/GetAreaHarmonics/' + id + "/" + time);
    }
    getthdfactory(factId, time) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdfactory', {
            params: { factId, date: time },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getthdfactoryfromto(factId, fromdate, todate) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdfactoryfrom', {
            params: { factId, fromdate, todate },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getMaxAndMin(factId, time) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/maxminthdfactory', {
            params: { factId, date: time },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getMaxAndMinfromto(factId, fromdate, todate) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/maxminthdfactoryfrom', {
            params: { factId, fromdate, todate },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdDistribution(factId, time, featureId) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdDistPerFeature', {
            params: { factId, date: time, featureId },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdDistributionfromto(factId, fromdate, todate, featureId) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdDistPerFeaturefrom', {
            params: { factId, fromdate, todate, featureId },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdDistributionFunc(factId, time, featureId) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdDistPerFunction', {
            params: { factId, date: time, featureId },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdDistributionFuncfromto(factId, fromdate, todate, featureId) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdDistPerFunctionfrom', {
            params: { factId, fromdate, todate, featureId },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdloadDistribution(time, loadid) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdforload', {
            params: { date: time, loadid },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    thdloadDistributionfromto(fromdate, todate, loadid) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Harmonics/thdforloadfrom', {
            params: { fromdate, todate, loadid },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getFeatures() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Functions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getFactories() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/factories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getFunctions() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Loads')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getFunctionsfunctions() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/functions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getAreas() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Areas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(err) {
        console.log(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err.status || 'Server Error');
    }
}
HarmonicsService.ɵfac = function HarmonicsService_Factory(t) { return new (t || HarmonicsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
HarmonicsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HarmonicsService, factory: HarmonicsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map