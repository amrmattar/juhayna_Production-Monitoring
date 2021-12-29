(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compare-compare-module"],{

/***/ "+KRh":
/*!************************************************!*\
  !*** ./src/compare/report/report.component.ts ***!
  \************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/compare.service */ "Czm6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "i4u0");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



















function ReportComponent_mat_tree_node_35_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_mat_tree_node_35_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r24.loadCode = node_r19.code; ctx_r24.loadName = node_r19.name; return ctx_r24.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "../../assets/imgs/" + node_r19.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ReportComponent_mat_tree_node_35_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_mat_tree_node_35_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r28.loadCode = node_r19.code; return ctx_r28.loadName = node_r19.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "../../assets/imgs/" + node_r19.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ReportComponent_mat_tree_node_35_h5_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_mat_tree_node_35_h5_3_Template_h5_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r32.loadCode = node_r19.code; ctx_r32.loadName = node_r19.name; return ctx_r32.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r19.name, "");
} }
function ReportComponent_mat_tree_node_35_h5_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_mat_tree_node_35_h5_4_Template_h5_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r36.loadCode = node_r19.code; return ctx_r36.loadName = node_r19.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r19.name, "");
} }
function ReportComponent_mat_tree_node_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReportComponent_mat_tree_node_35_button_1_Template, 2, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReportComponent_mat_tree_node_35_button_2_Template, 2, 1, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReportComponent_mat_tree_node_35_h5_3_Template, 2, 1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReportComponent_mat_tree_node_35_h5_4_Template, 2, 1, "h5", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.option == 1 && ctx_r0.duration == 1 && ctx_r0.resolution == 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.option != 1 || ctx_r0.duration != 1 || ctx_r0.resolution != 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.option == 1 && ctx_r0.duration == 1 && ctx_r0.resolution == 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.option != 1 || ctx_r0.duration != 1 || ctx_r0.resolution != 15);
} }
function ReportComponent_mat_tree_node_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tree-node", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r40 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Toggle " + node_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r40) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "../../assets/imgs/" + node_r40.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", node_r40.name, " ");
} }
function ReportComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReportComponent_div_79_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r41.duration = $event.target.value; return ctx_r41.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select A Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Quarter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReportComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReportComponent_div_80_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r43.duration = $event.target.value; return ctx_r43.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select A Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Quarter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReportComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_104_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r45.resolution = 15; return ctx_r45.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "15 Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_104_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r47.resolution = 60; return ctx_r47.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "1 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_104_Template_input_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r48.resolution = 120; return ctx_r48.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "2 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_104_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r49.resolution = 180; return ctx_r49.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "3 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_104_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r50.resolution = 1440; return ctx_r50.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "1 Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReportComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_105_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r51.resolution = 15; return ctx_r51.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "15 Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_105_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r53.resolution = 60; return ctx_r53.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "1 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_105_Template_input_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r54.resolution = 120; return ctx_r54.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "2 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_105_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r55.resolution = 180; return ctx_r55.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "3 Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_105_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r56.resolution = 1440; return ctx_r56.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "1 Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReportComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_106_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r57.resolution = 1440; return ctx_r57.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_106_Template_input_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r59.resolution = 10080; return ctx_r59.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_106_Template_input_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r60.resolution = 40320; return ctx_r60.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_div_106_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r61.resolution = 120960; return ctx_r61.getReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Quarter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReportComponent_h1_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Load Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n", ctx_r9.loadName, " ");
} }
function ReportComponent_h1_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Period Energy Consumption: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n", ctx_r10.totalEnergy.toFixed(2), " KWH ");
} }
function ReportComponent_h1_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Start Date: ", ctx_r11.from, "");
} }
function ReportComponent_h1_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("End Date: ", ctx_r12.tp, "");
} }
function ReportComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "apx-chart", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx_r13.chartOptions.series)("chart", ctx_r13.chartOptions.chart)("xaxis", ctx_r13.chartOptions.xaxis)("colors", ctx_r13.chartOptions.colors)("tooltip", ctx_r13.chartOptions.tooltip)("dataLabels", ctx_r13.chartOptions.dataLabels)("grid", ctx_r13.chartOptions.grid)("stroke", ctx_r13.chartOptions.stroke)("title", ctx_r13.chartOptions.title)("yaxis", ctx_r13.chartOptions.yaxis);
} }
function ReportComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "apx-chart", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx_r14.chartOptions2.series)("chart", ctx_r14.chartOptions2.chart)("dataLabels", ctx_r14.chartOptions2.dataLabels)("plotOptions", ctx_r14.chartOptions2.plotOptions)("yaxis", ctx_r14.chartOptions2.yaxis)("legend", ctx_r14.chartOptions2.legend)("fill", ctx_r14.chartOptions2.fill)("stroke", ctx_r14.chartOptions2.stroke)("tooltip", ctx_r14.chartOptions2.tooltip)("xaxis", ctx_r14.chartOptions2.xaxis)("yaxis", ctx_r14.chartOptions2.yaxis);
} }
function ReportComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "apx-chart", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx_r15.chartOptions3.series)("chart", ctx_r15.chartOptions3.chart)("xaxis", ctx_r15.chartOptions3.xaxis)("stroke", ctx_r15.chartOptions3.stroke)("colors", ctx_r15.chartOptions3.colors)("dataLabels", ctx_r15.chartOptions3.dataLabels)("tooltip", ctx_r15.chartOptions3.tooltip)("plotOptions", ctx_r15.chartOptions3.plotOptions)("markers", ctx_r15.chartOptions3.markers)("yaxis", ctx_r15.chartOptions3.yaxis)("fill", ctx_r15.chartOptions3.fill)("legend", ctx_r15.chartOptions3.legend);
} }
function ReportComponent_div_142_tbody_14_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](func_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", func_r65.phase1.toFixed(2), " ", func_r65.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", func_r65.phase2.toFixed(2), " ", func_r65.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", func_r65.phase3.toFixed(2), " ", func_r65.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r64.getTime(func_r65.timeStamp), " ");
} }
function ReportComponent_div_142_tbody_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReportComponent_div_142_tbody_14_tr_1_Template, 11, 8, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r62.data);
} }
function ReportComponent_div_142_tbody_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r67 = ctx.$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](func_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", (func_r67.phase1 * ctx_r66.mathS()).toFixed(2), " ", func_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", (func_r67.phase2 * ctx_r66.mathS()).toFixed(2), " ", func_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", (func_r67.phase3 * ctx_r66.mathS()).toFixed(2), " ", func_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r66.getTime(func_r67.timeStamp), " ");
} }
function ReportComponent_div_142_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReportComponent_div_142_tbody_15_tr_1_Template, 11, 8, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r63.data);
} }
function ReportComponent_div_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Phase 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Phase 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Phase 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " TimeStamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReportComponent_div_142_tbody_14_Template, 2, 1, "tbody", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReportComponent_div_142_tbody_15_Template, 2, 1, "tbody", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.option != 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.option == 11);
} }
function ReportComponent_div_143_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](func_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", func_r69.phase1.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", func_r69.phase2.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", func_r69.phase3.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r68.getTime(func_r69.timeStamp), " ");
} }
function ReportComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Phase 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Phase 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Phase 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " TimeStamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReportComponent_div_143_tr_15_Template, 11, 5, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.definedReports);
} }
function ReportComponent_mat_card_content_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " summarize ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const definedReport_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](definedReport_r70.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](definedReport_r70.loadCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](definedReport_r70.option);
} }
const TREE_DATA = [];
const reports = [];
class ReportComponent {
    constructor(compareService, http, exportAsService) {
        this.compareService = compareService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.lineChart = true;
        this.barChart = false;
        this.pieChart = false;
        this.option = 1;
        this.duration = 1;
        this.resolution = 15;
        this.lineData = null;
        this.barData = null;
        this.pieData = null;
        this.loadData = [{ name: '', time: [], phase1: [], phase2: [], phase3: [] }];
        this.chart = true;
        this.table = false;
        this.dataTable = false;
        this.dateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.dateControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.loadName = null;
        this.report = {
            name: "",
            loadCode: "",
            option: "",
            phase1: 0,
            phase2: 0,
            phase3: 0,
            timeStamp: ""
        };
        this.optionName = "";
        this.reportName = "";
        this.totalEnergy = 0;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'myTableElementId' // the id of html/table element
        };
        this.exportAsConfig2 = {
            type: 'csv',
            elementIdOrContent: 'myTableElementId' // the id of html/table element
        };
        this.exportAsConfig3 = {
            type: 'xls',
            elementIdOrContent: 'myTableElementId' // the id of html/table element
        };
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                img: node.img,
                level: level,
                id: node.id,
                code: node.code
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.setActive = function (buttonName) {
            this.activeButton = buttonName;
        };
        this.isActive = function (buttonName) {
            return this.activeButton === buttonName;
        };
        this.chartOptions = {
            series: [
                {
                    name: "Phase 1",
                    data: []
                },
                {
                    name: "Phase 2",
                    data: []
                },
                {
                    name: "Phase 3",
                    data: []
                },
            ],
            chart: {
                height: 550,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            yaxis: {
                labels: {
                    formatter: (value, val) => { return value + '' + val; }
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.chartOptions2 = {
            series: [
                {
                    name: "Phase 1",
                    data: []
                },
                {
                    name: "Phase 2",
                    data: []
                },
                {
                    name: "Phase 3",
                    data: []
                }
            ],
            chart: {
                type: "bar",
                height: 550
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded"
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            yaxis: {
            // title: {
            //   text: ""
            // }
            },
            fill: {
                opacity: 1
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            }
        };
        this.chartOptions3 = {
            series: [
                {
                    name: "Phase 1",
                    data: []
                },
                {
                    name: "Phase 2",
                    data: []
                },
                {
                    name: "Phase 3",
                    data: []
                }
            ],
            chart: {
                height: 550,
                type: "radar",
                toolbar: {
                    show: false,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        customIcons: []
                    },
                    export: {
                        csv: {
                            filename: undefined,
                            columnDelimiter: ",",
                            headerCategory: "category",
                            headerValue: "value",
                            dateFormatter(timestamp) {
                                return new Date(timestamp).toDateString();
                            }
                        },
                        svg: {
                            filename: undefined
                        },
                        png: {
                            filename: undefined
                        }
                    },
                    autoSelected: "zoom"
                }
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        fill: {
                            colors: ["#f8f8f8", "#fff"]
                        }
                    }
                }
            },
            colors: ["#009ACF", "#009ACF33"],
            markers: {
                size: 1,
                colors: ["#fff"],
                strokeColors: ["#FF4560"],
                strokeWidth: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: []
            },
            yaxis: {
                tickAmount: 7,
                show: false,
            }
        };
    }
    ngOnInit() {
        if (this.option == 1) {
            this.optionName = "Current";
        }
        else if (this.option == 2) {
            this.optionName = "Voltage";
        }
        else if (this.option == 3) {
            this.optionName = "Power Factor";
        }
        else if (this.option == 4) {
            this.optionName = "Active Power";
        }
        else if (this.option == 5) {
            this.optionName = "Reactive Power";
        }
        else if (this.option == 6) {
            this.optionName = "Apparent Power";
        }
        else if (this.option == 7) {
            this.optionName = "Energy";
        }
        else if (this.option == 8) {
            this.optionName = "Harmonics Current";
        }
        else if (this.option == 9) {
            this.optionName = "Harmonics Voltage";
        }
        this.getHierarchyArea();
        this.getReports();
    }
    buttonFunction(el) {
        el.style.backgroundColor = "red";
    }
    getHierarchy() {
        const TREE_DATA = [];
        this.dataSource.data = [];
        this.compareService.getHierarchy(1)
            .subscribe((res) => {
            TREE_DATA.push(JSON.parse(JSON.stringify(res)));
            this.dataSource.data = TREE_DATA;
            console.log(TREE_DATA);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    getHierarchyArea() {
        const TREE_DATA = [];
        this.dataSource.data = [];
        this.compareService.getHierarchyArea(1)
            .subscribe((res) => {
            TREE_DATA.push(JSON.parse(JSON.stringify(res)));
            this.dataSource.data = TREE_DATA;
            console.log(TREE_DATA);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    getHierarchySources() {
        const TREE_DATA = [];
        this.dataSource.data = [];
        this.compareService.getHierarchySources(1)
            .subscribe((res) => {
            TREE_DATA.push(JSON.parse(JSON.stringify(res)));
            this.dataSource.data = TREE_DATA;
            console.log(TREE_DATA);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    mathS() {
        return Math.sqrt(3);
    }
    getReport() {
        this.totalEnergy = 0;
        this.chartOptions.series[0].data = [];
        this.chartOptions.series[1].data = [];
        this.chartOptions.series[2].data = [];
        this.chartOptions.xaxis.categories = [];
        this.chartOptions2.series[0].data = [];
        this.chartOptions2.series[1].data = [];
        this.chartOptions2.series[2].data = [];
        this.chartOptions3.series[0].data = [];
        this.chartOptions3.series[1].data = [];
        this.chartOptions3.series[2].data = [];
        this.chartOptions2.xaxis.categories = [];
        this.chartOptions3.xaxis.categories = [];
        this.lineData = null;
        this.barData = null;
        this.pieData = null;
        this.loadData = [{ name: '', time: [], phase1: [], phase2: [], phase3: [] }];
        console.log(this.loadCode, this.option, this.duration, this.resolution);
        if (this.option == 1) {
            this.optionName = "Current";
        }
        else if (this.option == 2) {
            this.optionName = "Voltage";
        }
        else if (this.option == 3) {
            this.optionName = "Power Factor";
        }
        else if (this.option == 4) {
            this.optionName = "Active Power";
        }
        else if (this.option == 5) {
            this.optionName = "Reactive Power";
        }
        else if (this.option == 6) {
            this.optionName = "Apparent Power";
        }
        else if (this.option == 7) {
            this.optionName = "Energy";
        }
        else if (this.option == 8) {
            this.optionName = "Harmonics Current";
        }
        else if (this.option == 9) {
            this.optionName = "Harmonics Voltage";
        }
        if (this.option == 10) {
            this.compareService.getReport(this.loadCode, 1, this.duration, this.resolution)
                .subscribe((res) => {
                this.data = JSON.parse(JSON.stringify(res));
                this.data.forEach((element, i) => {
                    this.chartOptions.yaxis.labels.formatter = (value, val) => { return value + ' ' + element.unit; };
                    // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
                });
                this.lineData = this.chartOptions.series[0].data;
                this.barData = this.chartOptions2.series[0].data;
                this.pieData = this.chartOptions3.series[0].data;
                console.log(this.data);
            }, (err) => {
                console.log("Test: ", err);
            });
        }
        else if (this.option == 11) {
            this.compareService.getReport(this.loadCode, 2, this.duration, this.resolution)
                .subscribe((res) => {
                this.data = JSON.parse(JSON.stringify(res));
                this.data.forEach((element, i) => {
                    this.chartOptions.yaxis.labels.formatter = (value, val) => { return value + ' ' + element.unit; };
                    // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    this.chartOptions.series[0].data.push((element.phase1 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions.series[1].data.push((element.phase2 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions.series[2].data.push((element.phase3 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions2.series[0].data.push((element.phase1 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions2.series[1].data.push((element.phase2 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions2.series[2].data.push((element.phase3 * Math.sqrt(3)).toFixed(2));
                    this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
                });
                this.lineData = this.chartOptions.series[0].data;
                this.barData = this.chartOptions2.series[0].data;
                this.pieData = this.chartOptions3.series[0].data;
                console.log(this.data);
            }, (err) => {
                console.log("Test: ", err);
            });
        }
        else {
            this.compareService.getReport(this.loadCode, this.option, this.duration, this.resolution)
                .subscribe((res) => {
                this.data = JSON.parse(JSON.stringify(res));
                this.data.forEach((element, i) => {
                    this.chartOptions.yaxis.labels.formatter = (value, val) => { return value + ' ' + element.unit; };
                    // this.chartOptions2.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    //this.chartOptions3.yaxis.labels.formatter = (value,val) => { return value+' '+element.unit }
                    this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
                    this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
                    this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
                    this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                    this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getHours());
                    if (this.option == 7) {
                        this.totalEnergy = this.totalEnergy + (element.phase1 + element.phase2 + element.phase3);
                    }
                });
                this.lineData = this.chartOptions.series[0].data;
                this.barData = this.chartOptions2.series[0].data;
                this.pieData = this.chartOptions3.series[0].data;
                console.log(this.data);
            }, (err) => {
                console.log("Test: ", err);
            });
        }
    }
    getReportDate() {
        this.totalEnergy = 0;
        this.chartOptions.series[0].data = [];
        this.chartOptions.series[1].data = [];
        this.chartOptions.series[2].data = [];
        this.chartOptions.xaxis.categories = [];
        this.chartOptions2.series[0].data = [];
        this.chartOptions2.series[1].data = [];
        this.chartOptions2.series[2].data = [];
        this.chartOptions3.series[0].data = [];
        this.chartOptions3.series[1].data = [];
        this.chartOptions3.series[2].data = [];
        this.chartOptions2.xaxis.categories = [];
        this.chartOptions3.xaxis.categories = [];
        this.lineData = null;
        this.barData = null;
        this.pieData = null;
        this.loadData = [{ name: '', time: [], phase1: [], phase2: [], phase3: [] }];
        console.log(this.loadCode, this.option, this.From, this.To, this.resolution);
        this.compareService.getReportDate(this.loadCode, this.option, this.From, this.To, this.resolution)
            .subscribe((res) => {
            this.data = JSON.parse(JSON.stringify(res));
            this.data.forEach((element, i) => {
                this.chartOptions.series[0].data.push(element.phase1.toFixed(2));
                this.chartOptions.series[1].data.push(element.phase2.toFixed(2));
                this.chartOptions.series[2].data.push(element.phase3.toFixed(2));
                this.chartOptions2.series[0].data.push(element.phase1.toFixed(2));
                this.chartOptions2.series[1].data.push(element.phase2.toFixed(2));
                this.chartOptions2.series[2].data.push(element.phase3.toFixed(2));
                this.chartOptions3.series[0].data.push(element.phase1.toFixed(2));
                this.chartOptions3.series[1].data.push(element.phase2.toFixed(2));
                this.chartOptions3.series[2].data.push(element.phase3.toFixed(2));
                this.chartOptions.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                this.chartOptions2.xaxis.categories.push(new Date(element.timeStamp).setHours(new Date(element.timeStamp).getHours() + 2));
                this.chartOptions3.xaxis.categories.push(new Date(element.timeStamp).getDate());
                if (this.option == 7) {
                    this.totalEnergy = this.totalEnergy + (element.phase1 + element.phase2 + element.phase3);
                }
            });
            this.lineData = this.chartOptions.series[0].data;
            this.barData = this.chartOptions2.series[0].data;
            this.pieData = this.chartOptions3.series[0].data;
            console.log(this.data);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    postReports() {
        this.data.forEach((element, i) => {
            reports.push({
                name: this.reportName,
                loadCode: this.data[0].name,
                option: this.optionName,
                phase1: element.phase1,
                phase2: element.phase2,
                phase3: element.phase3,
                timeStamp: element.timeStamp
            });
        });
        console.log(reports);
        this.compareService.postReport(reports)
            .subscribe((res) => {
            console.log(res);
            // if(res)
            // this.toastr.success('Hello world!', 'Toastr fun!');
        });
    }
    getReports() {
        this.compareService.getReports()
            .subscribe((res) => {
            this.definedReports = JSON.parse(JSON.stringify(res));
        });
    }
    changeTab(tab) {
        if (tab.index == 0) {
            this.chart = true;
            this.table = false;
            this.dataTable = false;
        }
        else if (tab.index == 1) {
            this.chart = false;
            this.table = true;
            this.dataTable = false;
        }
        else if (tab.index == 2) {
            this.chart = false;
            this.table = false;
            this.dataTable = true;
        }
    }
    getTime(time) {
        return new Date(time).toLocaleString();
    }
    fromDate(ee) {
        this.From = new Date(ee.value.setHours(new Date(ee.value).getHours() + 2)).toISOString();
        console.log(this.From);
    }
    toDate(ee) {
        this.To = new Date(ee.value.setHours(new Date(ee.value).getHours() + 2)).toISOString();
        console.log(this.From.substring(0, this.From.length - 1));
        console.log(this.To.substring(0, this.To.length - 1));
        //this.getReportDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
        // this.getEnergyAllLoadsDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
        // this.getEnergyFactoryDate(this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
        // this.getEnergyFunctionDate(this.funcId,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
        // this.getEnergyLoadDate(this.loadCode,this.From.substring(0,this.From.length-1),this.To.substring(0,this.To.length-1));
    }
    download() {
        this.exportAsService.save(this.exportAsConfig, `${this.optionName + ' ' + new Date().toDateString()}`);
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig).subscribe(content => {
            console.log(content);
        });
    }
    download2() {
        this.exportAsService.save(this.exportAsConfig2, `${this.optionName + ' ' + new Date().toDateString()}`);
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig2).subscribe(content => {
            console.log(content);
        });
    }
    download3() {
        this.exportAsService.save(this.exportAsConfig3, `${this.optionName + ' ' + new Date().toDateString()}`);
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig3).subscribe(content => {
            console.log(content);
        });
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsService"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 181, vars: 26, consts: [[1, "row", "justify-content-md-center"], ["src", "../../assets/imgs/unnamed.png", "alt", "", 2, "width", "150px"], [1, "container-fluid"], [1, "row"], [1, "col-2", 2, "background", "#FFFFFF 0% 0% no-repeat padding-box", "box-shadow", "1px 3px 6px #00000029", "opacity", "1"], [1, "row", "justify-content-center", "rowdiv"], [1, "col-3"], ["src", "../../assets/imgs/factory.svg", 1, "img"], [1, "col"], ["aria-label", "Default select example", 1, "form-select", "factories"], ["selected", ""], ["selected", "", "value", "1"], ["value", "2"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "autocomplete", "off", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-outline-warning", 2, "color", "grey", 3, "click"], ["type", "radio", "name", "btnradio", "id", "btnradio2", "autocomplete", "off", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-outline-warning", 2, "color", "grey", 3, "click"], ["type", "radio", "name", "btnradio", "id", "btnradio3", "autocomplete", "off", 1, "btn-check"], ["for", "btnradio3", 1, "btn", "btn-outline-warning", 2, "color", "grey", 3, "click"], [3, "dataSource", "treeControl"], ["matTreeNodePadding", "", "class", "node-st act", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", "class", "node-st", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [1, "col-10"], ["mat-stretch-tabs", "", 3, "selectedTabChange"], ["label", "CURRENT", 1, "font-weight-bold"], ["label", "VOLTAGE", 1, "font-weight-bold"], ["label", "POWER FACTOR", 1, "font-weight-bold"], ["label", "Active Power", 1, "font-weight-bold"], ["label", "Reactive Power", 1, "font-weight-bold"], ["label", "Apparent Power", 1, "font-weight-bold"], ["label", "Energy", 1, "font-weight-bold"], ["label", "Harmonics Current", 1, "font-weight-bold"], ["label", "Harmonics Voltage", 1, "font-weight-bold"], ["label", "Line CURRENT", 1, "font-weight-bold"], ["label", "Line VOLTAGE", 1, "font-weight-bold"], [1, "col-6"], [1, "col-12"], [2, "text-align", "left", "font", "normal normal normal 12px/25px Montserrat", "letter-spacing", "0px", "color", "#B2BEC3", "opacity", "1"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", "matInput", "", "placeholder", "From", 1, "form-control", 3, "ngxMatDatetimePicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for", "click"], ["showSeconds", "true"], ["picker", ""], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", "matInput", "", "placeholder", "To", "matInput", "", 1, "form-control", 3, "ngxMatDatetimePicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["picker2", ""], [1, "col-1"], [2, "border-left", "2px   solid #B2BEC3", "height", "120px"], [1, "col-5"], ["class", "col-7", 4, "ngIf"], [1, "col-9"], [1, "col-4"], ["aria-hidden", "true", 1, "fa", "fa-line-chart", 2, "font-size", "30px", "color", "#707070", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bar-chart", 2, "font-size", "30px", "color", "#707070", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-area-chart", 2, "font-size", "30px", "color", "#707070", 3, "click"], [2, "border-left", "2px   solid #B2BEC3", "height", "50px"], [1, "col-2"], [1, "mt-2", 2, "text-align", "left", "font", "normal normal normal 12px/25px Montserrat", "letter-spacing", "0px", "color", "#B2BEC3", "opacity", "1"], ["class", "btn-group", "role", "group2", "aria-label", "Basic radio toggle button group", 4, "ngIf"], ["class", "text-center", "style", "font: normal normal medium 14px/18px Montserrat;\n      letter-spacing: 0.28px;\n      color: #000000;\n      opacity: 1;", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "col", 2, "margin-left", "80px"], [1, "col-8"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "height", "720px"], [1, "mt-4"], [1, "text-muted"], ["label", "CHART"], ["label", "RECORD LIST"], ["label", "REPORT DATA"], ["id", "chart", 4, "ngIf"], ["id", "myTableElementId", "class", "table-responsive table-wrapper-scroll-y my-custom-scrollbar", 4, "ngIf"], [1, "text-muted", 2, "text-align", "left", "font", "normal normal medium 14px/18px Montserrat", "letter-spacing", "0.28px", "color", "#707070", "opacity", "1"], [4, "ngFor", "ngForOf"], [1, "col-3", 2, "background", "#FFFFFF 0% 0% no-repeat padding-box", "box-shadow", "1px 3px 6px #00000029", "opacity", "1"], [1, "mt-2", 2, "text-align", "left", "font", "normal normal 600 16px/19px Montserrat", "letter-spacing", "0.32px", "color", "#B2BEC3", "opacity", "1"], ["type", "text", "placeholder", "Report Name...", "aria-label", "Report Name...", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "change"], ["type", "button", 1, "btn", "mt-1", 2, "background", "#F39C12 0% 0% no-repeat padding-box", "box-shadow", "0px 3px 6px #00000029", "border-radius", "8px", "opacity", "1", "text-align", "left", "font", "normal normal normal 16px/19px Montserrat", "letter-spacing", "0.32px", "color", "#FFFFFF", "opacity", "1", 3, "click"], [1, "col-1", 2, "border-left", "2px   solid #B2BEC3", "height", "50px"], ["type", "button", "disabled", "", 1, "btn", "mt-1", 2, "background", "transparent 0% 0% no-repeat padding-box", "border-radius", "8px", "opacity", "1", "text-align", "left", "font", "normal normal normal 16px/19px Montserrat", "letter-spacing", "0.32px", "color", "grey", "opacity", "1"], ["type", "button", 1, "btn", "mt-1", 2, "background", "transparent 0% 0% no-repeat padding-box", "border-radius", "8px", "opacity", "1", "text-align", "left", "font", "normal normal normal 14px/17px Montserrat", "letter-spacing", "0.28px", "color", "#F39C12", "opacity", "1", 3, "click"], ["matTreeNodePadding", "", 1, "node-st", "act"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [3, "src"], ["type", "button", 3, "click"], ["matTreeNodePadding", "", 1, "node-st"], ["mat-icon-button", "", "matTreeNodeToggle", "", 1, "me-3"], [1, "mat-icon-rtl-mirror"], [1, "col-7"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3", 3, "change"], ["value", "1"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "7"], ["value", "6"], ["role", "group2", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnradio3", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio3", 1, "btn", "btn-outline-warning", 2, "color", "grey"], ["type", "radio", "name", "btnradio", "id", "btnradio4", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio4", 1, "btn", "btn-outline-warning", 2, "color", "grey"], ["type", "radio", "name", "btnradio", "id", "btnradio5", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio5", 1, "btn", "btn-outline-warning", 2, "color", "grey"], ["type", "radio", "name", "btnradio", "id", "btnradio6", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio6", 1, "btn", "btn-outline-warning", 2, "color", "grey"], ["type", "radio", "name", "btnradio", "id", "btnradio7", "autocomplete", "off", 1, "btn-check", 3, "click"], ["for", "btnradio7", 1, "btn", "btn-outline-warning", 2, "color", "grey"], ["type", "radio", "disabled", "", "name", "btnradio", "id", "btnradio3", "autocomplete", "off", 1, "btn-check", 3, "click"], ["type", "radio", "disabled", "", "name", "btnradio", "id", "btnradio4", "autocomplete", "off", 1, "btn-check", 3, "click"], ["type", "radio", "disabled", "", "name", "btnradio", "id", "btnradio5", "autocomplete", "off", 1, "btn-check", 3, "click"], ["type", "radio", "disabled", "", "name", "btnradio", "id", "btnradio6", "autocomplete", "off", 1, "btn-check", 3, "click"], ["type", "radio", "disabled", "", "name", "btnradio", "id", "btnradio7", "autocomplete", "off", 1, "btn-check", 3, "click"], [1, "text-center", 2, "font", "normal normal medium 14px/18px Montserrat", "letter-spacing", "0.28px", "color", "#000000", "opacity", "1"], [2, "font-weight", "bold"], [1, "text-center"], ["id", "chart"], [3, "series", "chart", "xaxis", "colors", "tooltip", "dataLabels", "grid", "stroke", "title", "yaxis"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis"], [3, "series", "chart", "xaxis", "stroke", "colors", "dataLabels", "tooltip", "plotOptions", "markers", "yaxis", "fill", "legend"], ["id", "myTableElementId", 1, "table-responsive", "table-wrapper-scroll-y", "my-custom-scrollbar"], [1, "table", "mt-5"], ["scope", "col", 1, "text-muted"], [4, "ngIf"], ["scope", "row", 1, "text-muted"], [1, "material-icons", 2, "font-size", "30px", "color", "#707070"], [1, "col", "mt-2"], [2, "text-align", "left", "font", "normal normal normal 16px/19px Montserrat", "letter-spacing", "0.32px", "color", "#707070", "opacity", "1"], [2, "text-align", "left", "font", "normal normal 600 11px/14px Montserrat", "letter-spacing", "0.22px", "color", "#B2BEC3", "opacity", "1"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Select A Factory");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "All Factories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "EGFood");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_label_click_23_listener() { return ctx.getHierarchyArea(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_label_click_26_listener() { return ctx.getHierarchy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_label_click_29_listener() { return ctx.getHierarchySources(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-tree", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ReportComponent_mat_tree_node_35_Template, 5, 4, "mat-tree-node", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ReportComponent_mat_tree_node_36_Template, 6, 4, "mat-tree-node", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-tab-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedTabChange", function ReportComponent_Template_mat_tab_group_selectedTabChange_39_listener($event) { ctx.option = $event.index + 1; return ctx.getReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-tab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "mat-tab", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "mat-tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-tab", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "mat-tab", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "mat-tab", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "mat-tab", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-tab", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Absolute Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function ReportComponent_Template_input_dateChange_60_listener($event) { return ctx.fromDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-datepicker-toggle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_mat_datepicker_toggle_click_61_listener() { return ctx.From = ctx.dateControl.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "ngx-mat-datetime-picker", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function ReportComponent_Template_input_dateChange_66_listener($event) { ctx.toDate($event); return ctx.getReportDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "mat-datepicker-toggle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "ngx-mat-datetime-picker", 42, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Relative Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, ReportComponent_div_79_Template, 16, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](80, ReportComponent_div_80_Template, 18, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Chart Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_i_click_91_listener() { ctx.barChart = false; ctx.pieChart = false; return ctx.lineChart = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_i_click_93_listener() { ctx.barChart = true; ctx.pieChart = false; return ctx.lineChart = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_i_click_95_listener() { ctx.barChart = false; ctx.pieChart = true; return ctx.lineChart = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Resolution");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ReportComponent_div_104_Template, 16, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, ReportComponent_div_105_Template, 16, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, ReportComponent_div_106_Template, 13, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, ReportComponent_h1_109_Template, 4, 1, "h1", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, ReportComponent_h1_110_Template, 4, 1, "h1", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](114, ReportComponent_h1_114_Template, 2, 1, "h1", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, ReportComponent_h1_116_Template, 2, 1, "h1", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "mat-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "mat-card-header", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "mat-card-subtitle", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "mat-tab-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedTabChange", function ReportComponent_Template_mat_tab_group_selectedTabChange_134_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "mat-tab", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "mat-tab", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "mat-tab", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, ReportComponent_div_139_Template, 2, 10, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, ReportComponent_div_140_Template, 2, 11, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](141, ReportComponent_div_141_Template, 2, 12, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](142, ReportComponent_div_142_Template, 16, 2, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](143, ReportComponent_div_143_Template, 16, 1, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "mat-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "mat-card-header", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "mat-card-subtitle", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Pre Defined Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, ReportComponent_mat_card_content_152_Template, 15, 3, "mat-card-content", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "h3", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReportComponent_Template_input_change_162_listener($event) { return ctx.reportName = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_164_listener() { return ctx.postReports(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_173_listener() { return ctx.download2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_176_listener() { return ctx.download3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "XLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_179_listener() { return ctx.download(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](63);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxMatDatetimePicker", _r2)("ngxMatDatetimePicker", _r2)("formControl", ctx.dateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxMatDatetimePicker", _r3)("formControl", ctx.dateControl2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.duration != 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.duration == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.duration != 6 && ctx.duration != 4 && ctx.duration != 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.duration == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.duration == 4 || ctx.duration == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.option == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.optionName, " Consumption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lineChart == true && ctx.barChart == false && ctx.pieChart == false && ctx.lineData != null && ctx.table == false && ctx.dataTable == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lineChart == false && ctx.barChart == true && ctx.pieChart == false && ctx.table == false && ctx.barData != null && ctx.dataTable == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lineChart == false && ctx.barChart == false && ctx.pieChart == true && ctx.dataTable == false && ctx.table == false && ctx.pieData != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.table == true && ctx.dataTable == false && ctx.chart == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.table == false && ctx.dataTable == true && ctx.chart == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.definedReports);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodeDef"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_9__["NgxMatDatetimeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_9__["NgxMatDatetimePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_1__["MatTreeNodeToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__["ChartComponent"]], styles: [".factories[_ngcontent-%COMP%]{\r\ntext-align: left;\r\nfont: normal normal 600 16px/19px Montserrat;\r\nletter-spacing: 0px;\r\ncolor: #F39C12;\r\nopacity: 1;\r\nmargin-top: 20px;\r\nbackground-color: transparent;\r\n}\r\n.rowdiv[_ngcontent-%COMP%]{\r\n  background: #F39C124D 0% 0% no-repeat padding-box;\r\nopacity: 1;\r\nheight: 70px;\r\n}\r\n.img[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\nopacity: 1;\r\nwidth: 40px;\r\n}\r\n.node-st[_ngcontent-%COMP%]\r\n{\r\n  text-align: left;\r\nfont: normal normal normal 13px/25px Montserrat;\r\nletter-spacing: 0px;\r\nopacity: 1;\r\n}\r\nmat-card[_ngcontent-%COMP%]{\r\n  border-radius: 20px;\r\n  max-height:800px;\r\n  position: relative;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZ0JBQWdCO0FBQ2hCLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsY0FBYztBQUNkLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCO0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQsVUFBVTtBQUNWLFlBQVk7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCLFVBQVU7QUFDVixXQUFXO0FBQ1g7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEIsK0NBQStDO0FBQy9DLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEIiLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFjdG9yaWVze1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5mb250OiBub3JtYWwgbm9ybWFsIDYwMCAxNnB4LzE5cHggTW9udHNlcnJhdDtcclxubGV0dGVyLXNwYWNpbmc6IDBweDtcclxuY29sb3I6ICNGMzlDMTI7XHJcbm9wYWNpdHk6IDE7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5yb3dkaXZ7XHJcbiAgYmFja2dyb3VuZDogI0YzOUMxMjREIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxub3BhY2l0eTogMTtcclxuaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5pbWd7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxub3BhY2l0eTogMTtcclxud2lkdGg6IDQwcHg7XHJcbn1cclxuLm5vZGUtc3Rcclxue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEzcHgvMjVweCBNb250c2VycmF0O1xyXG5sZXR0ZXItc3BhY2luZzogMHB4O1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbm1hdC1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDo4MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "1MAX":
/*!**************************************************!*\
  !*** ./src/compare/summary/summary.component.ts ***!
  \**************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/compare.service */ "Czm6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "i4u0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");














function SummaryComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r4.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.pricing(mF_r4.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r9.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.pricing(mF_r9.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r10.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.pricing(mF_r10.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r11 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r11.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.pricing(mF_r11.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r16.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.pricing(mF_r16.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.download2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_1_tr_18_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", func_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.mF1);
} }
function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_2_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mF_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mF_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mF_r21.energy.toFixed(2), " KWH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r20.pricing(mF_r21.energy), " EGP ");
} }
function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r22.download2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_2_tr_18_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", func_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.mF2);
} }
function SummaryComponent_mat_card_content_46_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_1_Template, 19, 2, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SummaryComponent_mat_card_content_46_div_61_mat_expansion_panel_2_Template, 19, 2, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", func_r12.name == "Switch Gear INC 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", func_r12.name == "Switch Gear INC 2");
} }
function SummaryComponent_mat_card_content_46_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-tab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " MDB1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Total Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_mat_card_content_46_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.download2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SummaryComponent_mat_card_content_46_tr_21_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " MDB2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Total Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_mat_card_content_46_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.download2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SummaryComponent_mat_card_content_46_tr_40_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " MDB3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Total Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_mat_card_content_46_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.download2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, SummaryComponent_mat_card_content_46_tr_59_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-tab", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, SummaryComponent_mat_card_content_46_div_61_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.md1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.md2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.md3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.sources);
} }
class SummaryComponent {
    constructor(compareService, http, exportAsService) {
        this.compareService = compareService;
        this.http = http;
        this.exportAsService = exportAsService;
        this.mF1 = [];
        this.mF2 = [];
        this.md1 = [];
        this.md2 = [];
        this.md3 = [];
        this.pricingValues = null;
        this.tableChange = null;
        this.dateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.dateControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.exportAsConfig2 = {
            type: 'csv',
            elementIdOrContent: 'myTableElementId' // the id of html/table element
        };
    }
    ngOnInit() {
        this.getReadsYesterday();
        this.getPricing();
    }
    getPricing() {
        this.compareService.GetPricing()
            .subscribe((res) => {
            this.pricingValues = JSON.parse(JSON.stringify(res));
            console.log(this.pricingValues);
        });
    }
    getReadsYesterday() {
        this.tableChange = null;
        this.mF1 = [];
        this.mF2 = [];
        this.md1 = [];
        this.md2 = [];
        this.md3 = [];
        this.loads = [];
        this.sources = [];
        this.allLoads = [];
        this.compareService.GetAllLoadsYesterday()
            .subscribe((res) => {
            this.loads = JSON.parse(JSON.stringify(res)).loads;
            this.sources = JSON.parse(JSON.stringify(res)).sources;
            this.allLoads = JSON.parse(JSON.stringify(res)).allLoads;
            this.tableChange = this.loads;
            this.sources.forEach(element => {
                if (element.name == 'MDB 1 INC1' || element.name == 'MDB 1 INC2' || element.name == 'MBD 2 INC ' || element.name == 'Switch Gear INC 1') {
                    this.mF1.push(element);
                }
                else if (element.name == 'MDB 3 INC1' || element.name == 'Switch Gear INC 2') {
                    this.mF2.push(element);
                }
            });
            this.loads.forEach(element => {
                if (element.areaName == 'MDB1') {
                    this.md1.push(element);
                }
                else if (element.areaName == 'MDB2') {
                    this.md2.push(element);
                }
                else if (element.areaName == 'MDB3') {
                    this.md3.push(element);
                }
            });
            console.log(this.mF1);
            console.log(this.mF2);
        });
    }
    download2() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.exportAsService.save(this.exportAsConfig2, `${'All Loads Consumption Yesterday' + ' ' + d.toDateString()}`);
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig2).subscribe(content => {
            console.log(content);
        });
    }
    fromDate(ee) {
        this.From = new Date(ee.value.setHours(new Date(ee.value).getHours() + 2)).toISOString();
        console.log(this.From);
    }
    toDate(ee) {
        this.To = new Date(ee.value.setHours(new Date(ee.value).getHours() + 2)).toISOString();
        console.log(this.From.substring(0, this.From.length - 1));
        console.log(this.To.substring(0, this.To.length - 1));
        this.tableChange = null;
        this.mF1 = [];
        this.mF2 = [];
        this.md1 = [];
        this.md2 = [];
        this.md3 = [];
        this.loads = [];
        this.sources = [];
        this.allLoads = [];
        this.compareService.GetAllLoadsPeriod(this.From.substring(0, this.From.length - 1), this.To.substring(0, this.To.length - 1)).subscribe((res) => {
            this.loads = res["loads"];
            this.sources = res["sources"];
            this.tableChange = this.loads;
            this.allLoads = JSON.parse(JSON.stringify(res)).allLoads;
            console.log(this.loads);
            this.sources.forEach(element => {
                if (element.name == 'MDB 1 INC1' || element.name == 'MDB 1 INC2' || element.name == 'MBD 2 INC ' || element.name == 'Switch Gear INC 1') {
                    this.mF1.push(element);
                }
                else if (element.name == 'MDB 3 INC1' || element.name == 'Switch Gear INC 2') {
                    this.mF2.push(element);
                }
            });
            this.loads.forEach(element => {
                if (element.areaName == 'MDB1') {
                    this.md1.push(element);
                }
                else if (element.areaName == 'MDB2') {
                    this.md2.push(element);
                }
                else if (element.areaName == 'MDB3') {
                    this.md3.push(element);
                }
            });
        });
    }
    pricing(energy) {
        if (this.pricingValues != null) {
            // this.pricingValues[0].forEach(element => {
            if (energy >= this.pricingValues[0].min && energy <= this.pricingValues[0].max) {
                return (energy * this.pricingValues[0].pricing).toFixed(2);
            }
            else if (energy >= this.pricingValues[1].min && energy <= this.pricingValues[1].max) {
                return (energy * this.pricingValues[1].pricing).toFixed(2);
            }
            else if (energy >= this.pricingValues[2].min && energy <= this.pricingValues[2].max) {
                return (energy * this.pricingValues[2].pricing).toFixed(2);
            }
            else if (energy >= this.pricingValues[3].min && energy <= this.pricingValues[3].max) {
                return (energy * this.pricingValues[3].pricing).toFixed(2);
            }
            else if (energy >= this.pricingValues[4].min && energy <= this.pricingValues[4].max) {
                return (energy * this.pricingValues[4].pricing).toFixed(2);
            }
            // });
            //   if(energy >=0 && energy <= 100)
            // {
            //   return (energy*0.65).toFixed(2)
            // }
            // else if(energy >=101 && energy <= 250)
            // {
            //   return(energy*1.2).toFixed(2)
            // }
            // else if(energy >=251 && energy <= 600)
            // {
            //   return(energy*1.4).toFixed(2)
            // }
            // else if(energy >=601 && energy <= 1000)
            // {
            //   return (energy*1.55).toFixed(2)
            // }
            // else if(energy >=1000)
            // {
            //   return(energy*1.6).toFixed(2)
            // }
        }
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"])); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 47, vars: 8, consts: [[1, "row", "justify-content-md-center"], ["src", "../../assets/imgs/unnamed.png", "alt", "", 2, "width", "150px"], [1, "row", "justify-content-between", "mb-2"], ["id", "btnToggle", 1, "col-3", "mt-4"], [1, "col"], [1, "row", "mt-3"], [1, "row"], [2, "width", "230px"], ["matInput", "", "placeholder", "Start Date", 3, "ngxMatDatetimePicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for", "click"], ["showSeconds", "true"], ["picker", ""], ["matInput", "", "placeholder", "End Date", 3, "ngxMatDatetimePicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["picker2", ""], [1, "col-12"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded"], [1, "col-10"], [1, "text-muted"], ["mat-align-tabs", "center"], ["label", "All Loads"], [1, "mt-5"], ["id", "myTableElementId", 1, "table", "mt-5"], ["scope", "col", 1, "text-muted"], [1, "col-2"], ["type", "button", 1, "btn", "mt-1", 2, "background", "transparent 0% 0% no-repeat padding-box", "border-radius", "8px", "opacity", "1", "text-align", "left", "font", "normal normal normal 14px/17px Montserrat", "letter-spacing", "0.28px", "color", "#F39C12", "opacity", "1", 3, "click"], ["id", "myTableElementId", 4, "ngFor", "ngForOf"], ["label", "Sorted Loads"], ["class", "mt-5", 4, "ngIf"], ["id", "myTableElementId"], ["scope", "row", 1, "text-muted"], ["label", "Loads"], ["label", "Sources"], ["class", "row", 4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function SummaryComponent_Template_input_dateChange_10_listener($event) { return ctx.fromDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_Template_mat_datepicker_toggle_click_11_listener() { return ctx.From = ctx.dateControl.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-mat-datetime-picker", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function SummaryComponent_Template_input_dateChange_16_listener($event) { return ctx.toDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngx-mat-datetime-picker", 10, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-subtitle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Day Energy Consumption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-tab-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card-content", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_41_listener() { return ctx.download2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, SummaryComponent_tr_44_Template, 7, 3, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SummaryComponent_mat_card_content_46_Template, 62, 4, "mat-card-content", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxMatDatetimePicker", _r0)("formControl", ctx.dateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxMatDatetimePicker", _r1)("formControl", ctx.dateControl2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allLoads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tableChange != null);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_7__["NgxMatDatetimeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_7__["NgxMatDatetimePicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "1jcm":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************/
/*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function() { return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return MatSlideToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return MatSlideToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return MatSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function() { return MatSlideToggleRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function() { return _MatSlideToggleRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */





const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: () => ({ disableToggleValue: false })
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggle),
    multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
    constructor(
    /** The source MatSlideToggle of the event. */
    source, 
    /** The new `checked` value of the MatSlideToggle. */
    checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
class MatSlideToggleBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
/** Represents a slidable "switch" toggle that can be moved between on and off. */
class MatSlideToggle extends _MatSlideToggleMixinBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /** Name value will be applied to the input element if present. */
        this.name = null;
        /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
        this.labelPosition = 'after';
        /** Used to set the aria-label attribute on the underlying input element. */
        this.ariaLabel = null;
        /** Used to set the aria-labelledby attribute on the underlying input element. */
        this.ariaLabelledby = null;
        /** An event will be dispatched each time the slide-toggle changes its value. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Whether the slide-toggle is required. */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /** Whether the slide-toggle element is checked or not. */
    get checked() { return this._checked; }
    set checked(value) {
        this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._changeDetectorRef.markForCheck();
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this._onTouched());
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Method being called whenever the underlying input emits a change event. */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /** Method being called whenever the slide-toggle has been clicked. */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
        this.checked = !!value;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the slide-toggle. */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /** Toggles the checked state of the slide-toggle. */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange" }, exportAs: ["matSlideToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
MatSlideToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['toggleBar',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-labelledby',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggleRequiredValidator),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"] {
}
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based slide-toggle implementations. */
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
            _MatSlideToggleRequiredValidatorModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
        ], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]
                ],
                declarations: [MatSlideToggle]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=slide-toggle.js.map

/***/ }),

/***/ "7EHt":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
  \***************************************************************************/
/*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/accordion */ "N/qJ");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */






const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) { }
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
} }
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
    /** Animation that rotates the indicator arrow. */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /** Animation that expands and collapses the panel content. */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) { return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelContent, selectors: [["ng-template", "matExpansionPanelContent", ""]] });
MatExpansionPanelContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matExpansionPanelContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
const ɵ0 = undefined;
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"] {
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._animationMode = _animationMode;
        this._hideToggle = false;
        /** An event emitted after the body's expansion animation happens. */
        this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** An event emitted after the body's collapse animation happens. */
        this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** Stream that emits for changes in `@Input` properties. */
        this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** ID for the associated header element. Used for a11y labelling. */
        this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
        /** Stream of body animation done events. */
        this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.accordion = accordion;
        this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        });
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /** Whether the toggle indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    set hideToggle(value) {
        this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /** The position of the expansion indicator. */
    get togglePosition() {
        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
    }
    set togglePosition(value) {
        this._togglePosition = value;
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing() {
        if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
        }
        return false;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /** Toggles the expanded state of the expansion panel. */
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */
    close() {
        this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */
    open() {
        this.expanded = true;
    }
    ngAfterContentInit() {
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => this.expanded && !this._portal), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(() => {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._lazyContent._template, this._viewContainerRef);
            });
        }
    }
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus() {
        if (this._body) {
            const focusedElement = this._document.activeElement;
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
}
MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) { return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8)); };
MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanel, selectors: [["mat-expansion-panel"]], contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, viewQuery: function MatExpansionPanel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
    } }, hostAttrs: [1, "mat-expansion-panel"], hostVars: 6, hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
    } }, inputs: { disabled: "disabled", expanded: "expanded", hideToggle: "hideToggle", togglePosition: "togglePosition" }, outputs: { opened: "opened", closed: "closed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, exportAs: ["matExpansionPanel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            // Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            { provide: MAT_ACCORDION, useValue: ɵ0 },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 7, vars: 4, consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]], template: function MatExpansionPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) { return ctx._bodyAnimationDone.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matExpansionAnimations.bodyExpansion] }, changeDetection: 0 });
MatExpansionPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_ACCORDION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
MatExpansionPanel.propDecorators = {
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatExpansionPanelContent,] }],
    _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['body',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel',
                exportAs: 'matExpansionPanel',
                template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled', 'expanded'],
                outputs: ['opened', 'closed', 'expandedChange'],
                animations: [matExpansionAnimations.bodyExpansion],
                providers: [
                    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                    // to the same accordion.
                    { provide: MAT_ACCORDION, useValue: ɵ0 },
                ],
                host: {
                    'class': 'mat-expansion-panel',
                    '[class.mat-expanded]': 'expanded',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
                },
                styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_ACCORDION]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["UniqueSelectionDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
        }], _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
        }] }); })();
/**
 * Actions of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelActionRow {
}
MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) { return new (t || MatExpansionPanelActionRow)(); };
MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelActionRow, selectors: [["mat-action-row"]], hostAttrs: [1, "mat-action-row"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-action-row',
                host: {
                    class: 'mat-action-row'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Header element of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader {
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        const accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(changes => !!(changes['hideToggle'] || changes['togglePosition']))) :
            rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(changes => {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            })))
                .subscribe(() => this._changeDetectorRef.markForCheck());
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => panel._containsFocus()))
            .subscribe(() => _focusMonitor.focusVia(_element, 'program'));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled() {
        return this.panel.disabled;
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
        if (!this.disabled) {
            this.panel.toggle();
        }
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
        return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
        return this.panel.id;
    }
    /** Gets the toggle position for the header. */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */
    _getHeaderHeight() {
        const isExpanded = this._isExpanded();
        if (isExpanded && this.expandedHeight) {
            return this.expandedHeight;
        }
        else if (!isExpanded && this.collapsedHeight) {
            return this.collapsedHeight;
        }
        return null;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._element, origin, options);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._element).subscribe(origin => {
            if (origin && this.panel.accordion) {
                this.panel.accordion._handleHeaderFocus(this);
            }
        });
    }
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
}
MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) { return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8)); };
MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanelHeader, selectors: [["mat-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"], hostVars: 15, hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() { return ctx._toggle(); })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, ngContentSelectors: _c4, decls: 5, vars: 1, consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]], template: function MatExpansionPanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"], encapsulation: 2, data: { animation: [
            matExpansionAnimations.indicatorRotate,
        ] }, changeDetection: 0 });
MatExpansionPanelHeader.ctorParameters = () => [
    { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
];
MatExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel-header',
                template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    matExpansionAnimations.indicatorRotate,
                ],
                host: {
                    'class': 'mat-expansion-panel-header mat-focus-indicator',
                    'role': 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.mat-expanded]': '_isExpanded()',
                    '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
                    '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[style.height]': '_getHeaderHeight()',
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)'
                },
                styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
            }]
    }], function () { return [{ type: MatExpansionPanel, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelDescription {
}
MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) { return new (t || MatExpansionPanelDescription)(); };
MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelDescription, selectors: [["mat-panel-description"]], hostAttrs: [1, "mat-expansion-panel-header-description"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-description',
                host: {
                    class: 'mat-expansion-panel-header-description'
                }
            }]
    }], null, null); })();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelTitle {
}
MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) { return new (t || MatExpansionPanelTitle)(); };
MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelTitle, selectors: [["mat-panel-title"]], hostAttrs: [1, "mat-expansion-panel-header-title"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-title',
                host: {
                    class: 'mat-expansion-panel-header-title'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"] {
    constructor() {
        super(...arguments);
        /** Headers belonging to this accordion. */
        this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /** The position of the expansion indicator. */
        this.togglePosition = 'after';
    }
    /** Whether the expansion indicator should be hidden. */
    get hideToggle() { return this._hideToggle; }
    set hideToggle(show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show); }
    ngAfterContentInit() {
        this._headers.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._headers))
            .subscribe((headers) => {
            this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
            this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
    }
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
}
MatAccordion.ɵfac = function MatAccordion_Factory(t) { return ɵMatAccordion_BaseFactory(t || MatAccordion); };
MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatAccordion, selectors: [["mat-accordion"]], contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
    } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function MatAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
    } }, inputs: { multi: "multi", displayMode: "displayMode", togglePosition: "togglePosition", hideToggle: "hideToggle" }, exportAs: ["matAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
                provide: MAT_ACCORDION,
                useExisting: MatAccordion
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
MatAccordion.propDecorators = {
    _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
const ɵMatAccordion_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if multiple panel support is enabled.
                    '[class.mat-accordion-multi]': 'this.multi'
                }
            }]
    }], null, { displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatExpansionModule {
}
MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatExpansionModule });
MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatExpansionModule_Factory(t) { return new (t || MatExpansionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, { declarations: function () { return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]; }, exports: function () { return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
                exports: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ],
                declarations: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=expansion.js.map

/***/ }),

/***/ "FI+a":
/*!******************************************!*\
  !*** ./src/compare/compare.component.ts ***!
  \******************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class CompareComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompareComponent.ɵfac = function CompareComponent_Factory(t) { return new (t || CompareComponent)(); };
CompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompareComponent, selectors: [["app-compare"]], decls: 1, vars: 0, template: function CompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-button-toggle[_ngcontent-%COMP%], mat-tab[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: Montserrat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0VBU0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImNvbXBhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLFxyXG5oMyxcclxuaDQsXHJcbnNwYW4sXHJcbnAsXHJcbm1hdC1jYXJkLXN1YnRpdGxlLFxyXG5tYXQtYnV0dG9uLXRvZ2dsZSxcclxubWF0LXRhYixcclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Fs0V":
/*!************************************************************************!*\
  !*** ./src/compare/comapre-historical/comapre-historical.component.ts ***!
  \************************************************************************/
/*! exports provided: ComapreHistoricalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComapreHistoricalComponent", function() { return ComapreHistoricalComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/compare.service */ "Czm6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");














const _c0 = ["chart"];
function ComapreHistoricalComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const load_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", load_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", load_r4.name, " ");
} }
function ComapreHistoricalComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const load_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", load_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", load_r5.name, " ");
} }
function ComapreHistoricalComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ComapreHistoricalComponent_div_49_mat_card_title_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ComapreHistoricalComponent_div_49_mat_card_title_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.loadName1, "");
} }
function ComapreHistoricalComponent_div_49_h3_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.i1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.i2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.i3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.v1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.v2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.v3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.pact1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.pact2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.pact3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.pF1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.pF2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.pF3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.papp1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.papp2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.papp3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.energy1Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.energy2Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.energy3Load1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.totalEnergyLoad1.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_mat_card_title_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ComapreHistoricalComponent_div_49_mat_card_title_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.loadName2);
} }
function ComapreHistoricalComponent_div_49_h3_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.i1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.i2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r31.i3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r32.v1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.v2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.v3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.pact1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.pact2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r37.pact3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r38.pF1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.pF2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.pF3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.papp1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.papp2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r43.papp3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r44.energy1Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r45.energy2Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.energy3Load2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_h3_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r47.totalEnergyLoad2.toFixed(2));
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r54.current.series)("chart", ctx_r54.current.chart)("xaxis", ctx_r54.current.xaxis)("dataLabels", ctx_r54.current.dataLabels)("grid", ctx_r54.current.grid)("stroke", ctx_r54.current.stroke)("title", ctx_r54.current.title)("tooltip", ctx_r54.current.tooltip);
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_div_49_div_169_mat_card_2_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r55.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ComapreHistoricalComponent_div_49_div_169_mat_card_2_div_10_Template, 2, 8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r49.dagta != null);
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Voltage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_div_49_div_169_mat_card_3_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r57.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r50.voltage.series)("chart", ctx_r50.voltage.chart)("xaxis", ctx_r50.voltage.xaxis)("dataLabels", ctx_r50.voltage.dataLabels)("grid", ctx_r50.voltage.grid)("stroke", ctx_r50.voltage.stroke)("title", ctx_r50.voltage.title)("tooltip", ctx_r50.voltage.tooltip);
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Energy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_div_49_div_169_mat_card_4_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r59.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r51.energy.series)("chart", ctx_r51.energy.chart)("xaxis", ctx_r51.energy.xaxis)("dataLabels", ctx_r51.energy.dataLabels)("grid", ctx_r51.energy.grid)("stroke", ctx_r51.energy.stroke)("title", ctx_r51.energy.title)("tooltip", ctx_r51.energy.tooltip);
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Power Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_div_49_div_169_mat_card_5_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r61.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r52.pf.series)("chart", ctx_r52.pf.chart)("xaxis", ctx_r52.pf.xaxis)("dataLabels", ctx_r52.pf.dataLabels)("grid", ctx_r52.pf.grid)("stroke", ctx_r52.pf.stroke)("title", ctx_r52.pf.title)("tooltip", ctx_r52.pf.tooltip);
} }
function ComapreHistoricalComponent_div_49_div_169_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Apparent Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_div_49_div_169_mat_card_6_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r63.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r53.ap.series)("chart", ctx_r53.ap.chart)("xaxis", ctx_r53.ap.xaxis)("dataLabels", ctx_r53.ap.dataLabels)("grid", ctx_r53.ap.grid)("stroke", ctx_r53.ap.stroke)("title", ctx_r53.ap.title)("tooltip", ctx_r53.ap.tooltip);
} }
function ComapreHistoricalComponent_div_49_div_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ComapreHistoricalComponent_div_49_div_169_mat_card_2_Template, 11, 1, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ComapreHistoricalComponent_div_49_div_169_mat_card_3_Template, 12, 8, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComapreHistoricalComponent_div_49_div_169_mat_card_4_Template, 12, 8, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ComapreHistoricalComponent_div_49_div_169_mat_card_5_Template, 12, 8, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComapreHistoricalComponent_div_49_div_169_mat_card_6_Template, 12, 8, "mat-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.currentRender == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.voltageRender == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.energyRender == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.pfRender == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r48.apparentRender == true);
} }
function ComapreHistoricalComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ComapreHistoricalComponent_div_49_mat_card_title_4_Template, 2, 0, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ComapreHistoricalComponent_div_49_mat_card_title_5_Template, 2, 1, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Current1 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ComapreHistoricalComponent_div_49_h3_12_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Current2 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ComapreHistoricalComponent_div_49_h3_16_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Current3 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ComapreHistoricalComponent_div_49_h3_20_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Voltage1 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ComapreHistoricalComponent_div_49_h3_24_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Voltage2 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ComapreHistoricalComponent_div_49_h3_28_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Voltage3 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ComapreHistoricalComponent_div_49_h3_32_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ActivePower 1 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ComapreHistoricalComponent_div_49_h3_36_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "ActivePower 2 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ComapreHistoricalComponent_div_49_h3_40_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "ActivePower 3 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ComapreHistoricalComponent_div_49_h3_44_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Power Factor1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ComapreHistoricalComponent_div_49_h3_48_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Power Factor2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ComapreHistoricalComponent_div_49_h3_52_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Power Factor3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ComapreHistoricalComponent_div_49_h3_56_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Apparent Power1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ComapreHistoricalComponent_div_49_h3_60_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Apparent Power2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ComapreHistoricalComponent_div_49_h3_64_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Apparent Power3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, ComapreHistoricalComponent_div_49_h3_68_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Energy1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ComapreHistoricalComponent_div_49_h3_72_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Energy2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ComapreHistoricalComponent_div_49_h3_76_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Energy3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, ComapreHistoricalComponent_div_49_h3_80_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Total Energy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, ComapreHistoricalComponent_div_49_h3_84_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, ComapreHistoricalComponent_div_49_mat_card_title_88_Template, 2, 0, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ComapreHistoricalComponent_div_49_mat_card_title_89_Template, 2, 1, "mat-card-title", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Current1 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, ComapreHistoricalComponent_div_49_h3_96_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Current2 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, ComapreHistoricalComponent_div_49_h3_100_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Current3 (A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, ComapreHistoricalComponent_div_49_h3_104_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Voltage1 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, ComapreHistoricalComponent_div_49_h3_108_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Voltage2 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, ComapreHistoricalComponent_div_49_h3_112_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Voltage3 (V)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, ComapreHistoricalComponent_div_49_h3_116_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Active Power1 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, ComapreHistoricalComponent_div_49_h3_120_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Active Power2 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, ComapreHistoricalComponent_div_49_h3_124_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Active Power3 (KWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, ComapreHistoricalComponent_div_49_h3_128_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Power Factor1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, ComapreHistoricalComponent_div_49_h3_132_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Power Factor2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, ComapreHistoricalComponent_div_49_h3_136_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Power Factor3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, ComapreHistoricalComponent_div_49_h3_140_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Apparent Power1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, ComapreHistoricalComponent_div_49_h3_144_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Apparent Power2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, ComapreHistoricalComponent_div_49_h3_148_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Apparent Power3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, ComapreHistoricalComponent_div_49_h3_152_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Energy1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, ComapreHistoricalComponent_div_49_h3_156_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Energy2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](160, ComapreHistoricalComponent_div_49_h3_160_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Energy3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, ComapreHistoricalComponent_div_49_h3_164_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Total Energy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, ComapreHistoricalComponent_div_49_h3_168_Template, 2, 1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, ComapreHistoricalComponent_div_49_div_169_Template, 7, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loadName2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loadName2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.load1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading == false);
} }
const _c1 = function (a0) { return { active: a0 }; };
class ComapreHistoricalComponent {
    constructor(compareService, http) {
        this.compareService = compareService;
        this.http = http;
        this.lineChartVisiable = true;
        this.tableVisisable = false;
        this.functionRender = false;
        this.factoryRender = false;
        this.loadRender = false;
        this.currentRender = true;
        this.voltageRender = false;
        this.frequencyRender = false;
        this.pfRender = false;
        this.apparentRender = false;
        this.energyRender = false;
        this.loads = [];
        this.loadId1 = '';
        this.loadId2 = '';
        this.loadName1 = '';
        this.loadName2 = '';
        this.i1Load1 = 0;
        this.v1Load1 = 0;
        this.pact1Load1 = 0;
        this.pF1Load1 = 0;
        this.papp1Load1 = 0;
        this.energy1Load1 = 0;
        this.i1Load2 = 0;
        this.v1Load2 = 0;
        this.pact1Load2 = 0;
        this.pF1Load2 = 0;
        this.papp1Load2 = 0;
        this.energy1Load2 = 0;
        this.i2Load1 = 0;
        this.v2Load1 = 0;
        this.pact2Load1 = 0;
        this.pF2Load1 = 0;
        this.papp2Load1 = 0;
        this.energy2Load1 = 0;
        this.i2Load2 = 0;
        this.v2Load2 = 0;
        this.pact2Load2 = 0;
        this.pF2Load2 = 0;
        this.papp2Load2 = 0;
        this.energy2Load2 = 0;
        this.i3Load1 = 0;
        this.v3Load1 = 0;
        this.pact3Load1 = 0;
        this.pF3Load1 = 0;
        this.papp3Load1 = 0;
        this.energy3Load1 = 0;
        this.i3Load2 = 0;
        this.v3Load2 = 0;
        this.pact3Load2 = 0;
        this.pF3Load2 = 0;
        this.papp3Load2 = 0;
        this.energy3Load2 = 0;
        this.totalEnergyLoad1 = 0;
        this.totalEnergyLoad2 = 0;
        this.currentLoad1Ref = 0;
        this.voltageLoad1Ref = 0;
        this.frequencyLoad1Ref = 0;
        this.pfLoad1Ref = 0;
        this.apLoad1Ref = 0;
        this.currentLoad2Ref = 0;
        this.voltageLoad2Ref = 0;
        this.frequencyLoad2Ref = 0;
        this.pfLoad2Ref = 0;
        this.apLoad2Ref = 0;
        this.checked1 = true;
        this.checked2 = false;
        this.loadRef = 'load1';
        this.loading = true;
        this.notLoading = false;
        this.tabIndex = 0;
        this.current = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
                y: {
                    formatter: function (val) {
                        return val + " A";
                    }
                }
            }
        };
        this.voltage = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
                y: {
                    formatter: function (val) {
                        return val + " V";
                    }
                }
            }
        };
        this.frequency = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
                y: {
                    formatter: function (val) {
                        return val + " KWH";
                    }
                }
            }
        };
        this.pf = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.ap = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
                y: {
                    formatter: function (val) {
                        return val + " KVA";
                    }
                }
            }
        };
        this.energy = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
                y: {
                    formatter: function (val) {
                        return val + " KWH";
                    }
                }
            }
        };
    }
    onTabClick(index) {
        this.tabIndex = index;
    }
    ngOnInit() {
        this.getAllLoads();
    }
    getAllLoads() {
        this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servicesUrl}/Loads`)
            .subscribe((Response) => {
            this.loads = JSON.parse(JSON.stringify(Response));
            // this.routeSummary = data.routeSummary;
            //this.processesSummaryList = data.processesSummaryList;
        });
    }
    ;
    changeParaTab(tab) {
        if (tab.index == 0) {
            this.currentRender = true;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = false;
            this.energyRender = false;
        }
        else if (tab.index == 1) {
            this.currentRender = false;
            this.voltageRender = true;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = false;
            this.energyRender = false;
        }
        else if (tab.index == 2) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = true;
            this.pfRender = false;
            this.apparentRender = false;
            this.energyRender = false;
        }
        else if (tab.index == 3) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = true;
            this.apparentRender = false;
            this.energyRender = false;
        }
        else if (tab.index == 4) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = true;
            this.energyRender = false;
        }
        else if (tab.index == 5) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = false;
            this.energyRender = true;
        }
    }
    changeTab(tab) {
        if (tab.index == 0) {
            this.lineChartVisiable = true;
            this.tableVisisable = false;
        }
        else if (tab.index == 1) {
            this.lineChartVisiable = false;
            this.tableVisisable = true;
        }
    }
    changeChecked() {
        if (this.checked2 == true) {
            this.loadRef = 'load2';
        }
        else {
            this.loadRef = '';
        }
    }
    log() {
        console.log(this.checked2);
    }
    getCompareDefault() {
        this.notLoading = true;
        this.loading = true;
        this.compareService.getCompareHistoricValues(this.loadId1, this.loadId2, 1)
            .subscribe((res) => {
            this.load1 = JSON.parse(JSON.stringify(res)).load1;
            this.load2 = JSON.parse(JSON.stringify(res)).load2;
            this.i1Load1 = (this.load1.i1Load1);
            this.v1Load1 = (this.load1.v1Load1);
            this.pact1Load1 = (this.load1.pact1Load1);
            this.pF1Load1 = (this.load1.pF1Load1);
            this.papp1Load1 = (this.load1.papp1Load1);
            this.energy1Load1 = (this.load1.energy1Load1);
            this.i1Load2 = (this.load2.i1Load2);
            this.v1Load2 = (this.load2.v1Load2);
            this.pact1Load2 = (this.load2.pact1Load2);
            this.pF1Load2 = (this.load2.pF1Load2);
            this.papp1Load2 = (this.load2.papp1Load2);
            this.energy1Load2 = (this.load2.energy1Load2);
            this.i2Load1 = (this.load1.i2Load1);
            this.v2Load1 = (this.load1.v2Load1);
            this.pact2Load1 = (this.load1.pact2Load1);
            this.pF2Load1 = (this.load1.pF2Load1);
            this.papp2Load1 = (this.load1.papp2Load1);
            this.energy2Load1 = (this.load1.energy2Load1);
            this.i2Load2 = (this.load2.i2Load2);
            this.v2Load2 = (this.load2.v2Load2);
            this.pact2Load2 = (this.load2.pact2Load2);
            this.pF2Load2 = (this.load2.pF2Load2);
            this.papp2Load2 = (this.load2.papp2Load2);
            this.energy2Load2 = (this.load2.energy2Load2);
            this.i3Load1 = (this.load1.i3Load1);
            this.v3Load1 = (this.load1.v3Load1);
            this.pact3Load1 = (this.load1.pact3Load1);
            this.pF3Load1 = (this.load1.pF3Load1);
            this.papp3Load1 = (this.load1.papp3Load1);
            this.energy3Load1 = (this.load1.energy3Load1);
            this.i3Load2 = (this.load2.i3Load2);
            this.v3Load2 = (this.load2.v3Load2);
            this.pact3Load2 = (this.load2.pact3Load2);
            this.pF3Load2 = (this.load2.pF3Load2);
            this.papp3Load2 = (this.load2.papp3Load2);
            this.energy3Load2 = (this.load2.energy3Load2);
            this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
            this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;
            this.totalEnergyLoad1 = this.energy1Load1 + this.energy2Load1 + this.energy3Load1;
            this.totalEnergyLoad2 = this.energy1Load2 + this.energy2Load2 + this.energy3Load2;
            // this.currentLoad1Ref=this.currentLoad1 - this.currentLoad2;
            // this.voltageLoad1Ref=this.voltageLoad1 - this.voltageLoad2;
            // this.frequencyLoad1Ref=this.frequencyLoad1 - this.frequencyLoad2;
            // this.pFLoad1Ref=this.pFLoad1 - this.pFLoad2;
            // this.apLoad1Ref=this.apLoad1 - this.apLoad2;
            // this.currentLoad2Ref=this.currentLoad2 - this.currentLoad1;
            // this.voltageLoad2Ref=this.voltageLoad2 - this.voltageLoad1;
            // this.frequencyLoad2Ref=this.frequencyLoad2 - this.frequencyLoad1;
            // this.pFLoad2Ref=this.pFLoad2 - this.pFLoad1;
            // this.apLoad2Ref=this.apLoad2 - this.apLoad1;
            this.loading = false;
            console.log(this.load1);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    ;
    getCompareTime(time) {
        this.loading = true;
        this.compareService.getCompareHistoricValues(this.loadId1, this.loadId2, time)
            .subscribe((res) => {
            this.load1 = JSON.parse(JSON.stringify(res)).load1;
            this.load2 = JSON.parse(JSON.stringify(res)).load2;
            this.i1Load1 = (this.load1.i1Load1);
            this.v1Load1 = (this.load1.v1Load1);
            this.pact1Load1 = (this.load1.pact1Load1);
            this.pF1Load1 = (this.load1.pF1Load1);
            this.papp1Load1 = (this.load1.papp1Load1);
            this.energy1Load1 = (this.load1.energy1Load1);
            this.i1Load2 = (this.load2.i1Load2);
            this.v1Load2 = (this.load2.v1Load2);
            this.pact1Load2 = (this.load2.pact1Load2);
            this.pF1Load2 = (this.load2.pF1Load2);
            this.papp1Load2 = (this.load2.papp1Load2);
            this.energy1Load2 = (this.load2.energy1Load2);
            this.i2Load1 = (this.load1.i2Load1);
            this.v2Load1 = (this.load1.v2Load1);
            this.pact2Load1 = (this.load1.pact2Load1);
            this.pF2Load1 = (this.load1.pF2Load1);
            this.papp2Load1 = (this.load1.papp2Load1);
            this.energy2Load1 = (this.load1.energy2Load1);
            this.i2Load2 = (this.load2.i2Load2);
            this.v2Load2 = (this.load2.v2Load2);
            this.pact2Load2 = (this.load2.pact2Load2);
            this.pF2Load2 = (this.load2.pF2Load2);
            this.papp2Load2 = (this.load2.papp2Load2);
            this.energy2Load2 = (this.load2.energy2Load2);
            this.i3Load1 = (this.load1.i3Load1);
            this.v3Load1 = (this.load1.v3Load1);
            this.pact3Load1 = (this.load1.pact3Load1);
            this.pF3Load1 = (this.load1.pF3Load1);
            this.papp3Load1 = (this.load1.papp3Load1);
            this.energy3Load1 = (this.load1.energy3Load1);
            this.i3Load2 = (this.load2.i3Load2);
            this.v3Load2 = (this.load2.v3Load2);
            this.pact3Load2 = (this.load2.pact3Load2);
            this.pF3Load2 = (this.load2.pF3Load2);
            this.papp3Load2 = (this.load2.papp3Load2);
            this.energy3Load2 = (this.load2.energy3Load2);
            this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
            this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;
            // this.currentLoad1Ref=this.currentLoad1 - this.currentLoad2;
            // this.voltageLoad1Ref=this.voltageLoad1 - this.voltageLoad2;
            // this.frequencyLoad1Ref=this.frequencyLoad1 - this.frequencyLoad2;
            // this.pFLoad1Ref=this.pFLoad1 - this.pFLoad2;
            // this.apLoad1Ref=this.apLoad1 - this.apLoad2;
            // this.currentLoad2Ref=this.currentLoad2 - this.currentLoad1;
            // this.voltageLoad2Ref=this.voltageLoad2 - this.voltageLoad1;
            // this.frequencyLoad2Ref=this.frequencyLoad2 - this.frequencyLoad1;
            // this.pFLoad2Ref=this.pFLoad2 - this.pFLoad1;
            // this.apLoad2Ref=this.apLoad2 - this.apLoad1;
            this.loading = false;
            console.log(this.load1);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    ;
    getCompareCharts() {
        this.current.series = [
            {
                name: "C1Load1",
                data: []
            },
            {
                name: "C1Load2",
                data: []
            },
            {
                name: "C2Load1",
                data: []
            },
            {
                name: "C2Load2",
                data: []
            },
            {
                name: "C3Load1",
                data: []
            },
            {
                name: "C3Load2",
                data: []
            },
        ];
        this.voltage.series = [
            {
                name: "V1Load1",
                data: []
            },
            {
                name: "V1Load2",
                data: []
            },
            {
                name: "V2Load1",
                data: []
            },
            {
                name: "V2Load2",
                data: []
            },
            {
                name: "V3Load1",
                data: []
            },
            {
                name: "V3Load2",
                data: []
            },
        ];
        this.frequency.series = [
            {
                name: "Pact1Load1",
                data: []
            },
            {
                name: "Pact1Load2",
                data: []
            },
            {
                name: "Pact2Load1",
                data: []
            },
            {
                name: "Pact2Load2",
                data: []
            },
            {
                name: "Pact3Load1",
                data: []
            },
            {
                name: "Pact3Load2",
                data: []
            },
        ];
        this.pf.series = [
            {
                name: "P1Load1",
                data: []
            },
            {
                name: "P1Load2",
                data: []
            },
            {
                name: "P2Load1",
                data: []
            },
            {
                name: "P2Load2",
                data: []
            },
            {
                name: "P3Load1",
                data: []
            },
            {
                name: "P3Load2",
                data: []
            },
        ];
        this.ap.series = [
            {
                name: "AP1Load1",
                data: []
            },
            {
                name: "AP1Load2",
                data: []
            },
            {
                name: "AP2Load1",
                data: []
            },
            {
                name: "AP2Load2",
                data: []
            },
            {
                name: "AP3Load1",
                data: []
            },
            {
                name: "AP3Load2",
                data: []
            },
        ];
        this.energy.series = [
            {
                name: "Energy1Load1",
                data: []
            },
            {
                name: "Energy1Load2",
                data: []
            },
            {
                name: "Energy2Load1",
                data: []
            },
            {
                name: "Energy2Load2",
                data: []
            },
            {
                name: "Energy3Load1",
                data: []
            },
            {
                name: "Energy3Load2",
                data: []
            },
        ];
        this.current.xaxis.categories = [];
        this.voltage.xaxis.categories = [];
        this.frequency.xaxis.categories = [];
        this.pf.xaxis.categories = [];
        this.ap.xaxis.categories = [];
        this.energy.xaxis.categories = [];
        this.dagta = null;
        this.compareService.getCompareHistoricChart(this.loadId1, this.loadId2, 1)
            .subscribe((res) => {
            this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
            this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
            console.log(this.load1Chart.avgAvgI1);
            this.load1Chart.avgAvgI11.forEach(element => {
                this.current.series[0].data.push(element.avgI1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgI12.forEach(element => {
                this.current.series[2].data.push(element.avgI2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgI13.forEach(element => {
                this.current.series[4].data.push(element.avgI3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy11.forEach(element => {
                this.energy.series[0].data.push(element.sumEnergy1);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy12.forEach(element => {
                this.energy.series[2].data.push(element.sumEnergy2);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy13.forEach(element => {
                this.energy.series[4].data.push(element.sumEnergy3);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV11.forEach(element => {
                this.voltage.series[0].data.push(element.avgV1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV12.forEach(element => {
                this.voltage.series[2].data.push(element.avgV2);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV13.forEach(element => {
                this.voltage.series[4].data.push(element.avgV3);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact11.forEach(element => {
                this.frequency.series[0].data.push(element.avgPact1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact12.forEach(element => {
                this.frequency.series[2].data.push(element.avgPact2);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact13.forEach(element => {
                this.frequency.series[4].data.push(element.avgPact3);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF11.forEach(element => {
                this.pf.series[0].data.push(element.avgPF1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF12.forEach(element => {
                this.pf.series[2].data.push(element.avgPF2);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF13.forEach(element => {
                this.pf.series[4].data.push(element.avgPF3);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp11.forEach(element => {
                this.ap.series[0].data.push(element.avgPapp1);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp12.forEach(element => {
                this.ap.series[2].data.push(element.avgPapp2);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp13.forEach(element => {
                this.ap.series[4].data.push(element.avgPapp3);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.sumEnergy21.forEach(element => {
                this.energy.series[1].data.push(element.sumEnergy1);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.sumEnergy22.forEach(element => {
                this.energy.series[3].data.push(element.sumEnergy2);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.sumEnergy23.forEach(element => {
                this.energy.series[5].data.push(element.sumEnergy3);
                this.energy.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI21.forEach(element => {
                this.current.series[1].data.push(element.avgI1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI22.forEach(element => {
                this.current.series[3].data.push(element.avgI2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI23.forEach(element => {
                this.current.series[5].data.push(element.avgI3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV21.forEach(element => {
                this.voltage.series[1].data.push(element.avgV1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV22.forEach(element => {
                this.voltage.series[3].data.push(element.avgV2);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV23.forEach(element => {
                this.voltage.series[5].data.push(element.avgV3);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact21.forEach(element => {
                this.frequency.series[1].data.push(element.avgPact1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact22.forEach(element => {
                this.frequency.series[3].data.push(element.avgPact2);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact23.forEach(element => {
                this.frequency.series[5].data.push(element.avgPact3);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF21.forEach(element => {
                this.pf.series[1].data.push(element.avgPF1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF22.forEach(element => {
                this.pf.series[3].data.push(element.avgPF2);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF23.forEach(element => {
                this.pf.series[5].data.push(element.avgPF3);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp21.forEach(element => {
                this.ap.series[1].data.push(element.avgPapp1);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp22.forEach(element => {
                this.ap.series[3].data.push(element.avgPapp2);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp23.forEach(element => {
                this.ap.series[5].data.push(element.avgPapp3);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            console.log(this.voltage.series[0]);
            this.dagta = this.current.series;
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    getCompareChartsTime(time) {
        this.current.series = [
            {
                name: "C1Load1",
                data: []
            },
            {
                name: "C1Load2",
                data: []
            },
            {
                name: "C2Load1",
                data: []
            },
            {
                name: "C2Load2",
                data: []
            },
            {
                name: "C3Load1",
                data: []
            },
            {
                name: "C3Load2",
                data: []
            },
        ];
        this.voltage.series = [
            {
                name: "V1Load1",
                data: []
            },
            {
                name: "V1Load2",
                data: []
            },
            {
                name: "V2Load1",
                data: []
            },
            {
                name: "V2Load2",
                data: []
            },
            {
                name: "V3Load1",
                data: []
            },
            {
                name: "V3Load2",
                data: []
            },
        ];
        this.frequency.series = [
            {
                name: "F1Load1",
                data: []
            },
            {
                name: "F1Load2",
                data: []
            },
            {
                name: "F2Load1",
                data: []
            },
            {
                name: "F2Load2",
                data: []
            },
            {
                name: "F3Load1",
                data: []
            },
            {
                name: "F3Load2",
                data: []
            },
        ];
        this.pf.series = [
            {
                name: "P1Load1",
                data: []
            },
            {
                name: "P1Load2",
                data: []
            },
            {
                name: "P2Load1",
                data: []
            },
            {
                name: "P2Load2",
                data: []
            },
            {
                name: "P3Load1",
                data: []
            },
            {
                name: "P3Load2",
                data: []
            },
        ];
        this.ap.series = [
            {
                name: "AP1Load1",
                data: []
            },
            {
                name: "AP1Load2",
                data: []
            },
            {
                name: "AP2Load1",
                data: []
            },
            {
                name: "AP2Load2",
                data: []
            },
            {
                name: "AP3Load1",
                data: []
            },
            {
                name: "AP3Load2",
                data: []
            },
        ];
        this.energy.series = [
            {
                name: "Energy1Load1",
                data: []
            },
            {
                name: "Energy1Load2",
                data: []
            },
            {
                name: "Energy2Load1",
                data: []
            },
            {
                name: "Energy2Load2",
                data: []
            },
            {
                name: "Energy3Load1",
                data: []
            },
            {
                name: "Energy3Load2",
                data: []
            },
        ];
        this.current.xaxis.categories = [];
        this.voltage.xaxis.categories = [];
        this.frequency.xaxis.categories = [];
        this.pf.xaxis.categories = [];
        this.ap.xaxis.categories = [];
        this.energy.xaxis.categories = [];
        this.dagta = null;
        this.compareService.getCompareHistoricChart(this.loadId1, this.loadId2, time)
            .subscribe((res) => {
            this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
            this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
            console.log(this.load1Chart.avgAvgI1);
            this.load1Chart.avgAvgI11.forEach(element => {
                this.current.series[0].data.push(element.avgI1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgI12.forEach(element => {
                this.current.series[2].data.push(element.avgI2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgI13.forEach(element => {
                this.current.series[4].data.push(element.avgI3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy11.forEach(element => {
                this.current.series[0].data.push(element.sumEnergy1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy12.forEach(element => {
                this.current.series[2].data.push(element.sumEnergy2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy13.forEach(element => {
                this.current.series[4].data.push(element.sumEnergy3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV11.forEach(element => {
                this.voltage.series[0].data.push(element.avgV1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV12.forEach(element => {
                this.voltage.series[2].data.push(element.avgV2);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgV13.forEach(element => {
                this.voltage.series[4].data.push(element.avgV3);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact11.forEach(element => {
                this.frequency.series[0].data.push(element.avgPact1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact12.forEach(element => {
                this.frequency.series[2].data.push(element.avgPact2);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPact13.forEach(element => {
                this.frequency.series[4].data.push(element.avgPact3);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF11.forEach(element => {
                this.pf.series[0].data.push(element.avgPF1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF12.forEach(element => {
                this.pf.series[2].data.push(element.avgPF2);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPF13.forEach(element => {
                this.pf.series[4].data.push(element.avgPF3);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp11.forEach(element => {
                this.ap.series[0].data.push(element.avgPapp1);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp12.forEach(element => {
                this.ap.series[2].data.push(element.avgPapp2);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgAvgPapp13.forEach(element => {
                this.ap.series[4].data.push(element.avgPapp3);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy21.forEach(element => {
                this.current.series[1].data.push(element.sumEnergy1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy22.forEach(element => {
                this.current.series[3].data.push(element.sumEnergy2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.sumEnergy23.forEach(element => {
                this.current.series[5].data.push(element.sumEnergy3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI21.forEach(element => {
                this.current.series[1].data.push(element.avgI1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI22.forEach(element => {
                this.current.series[3].data.push(element.avgI2);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgI23.forEach(element => {
                this.current.series[5].data.push(element.avgI3);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV21.forEach(element => {
                this.voltage.series[1].data.push(element.avgV1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV22.forEach(element => {
                this.voltage.series[3].data.push(element.avgV2);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgV23.forEach(element => {
                this.voltage.series[5].data.push(element.avgV3);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact21.forEach(element => {
                this.frequency.series[1].data.push(element.avgPact1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact22.forEach(element => {
                this.frequency.series[3].data.push(element.avgPact2);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPact23.forEach(element => {
                this.frequency.series[5].data.push(element.avgPact3);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF21.forEach(element => {
                this.pf.series[1].data.push(element.avgPF1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF22.forEach(element => {
                this.pf.series[3].data.push(element.avgPF2);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPF23.forEach(element => {
                this.pf.series[5].data.push(element.avgPF3);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp21.forEach(element => {
                this.ap.series[1].data.push(element.avgPapp1);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp22.forEach(element => {
                this.ap.series[3].data.push(element.avgPapp2);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgAvgPapp23.forEach(element => {
                this.ap.series[5].data.push(element.avgPapp3);
                this.ap.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            console.log(this.voltage.series[0]);
            this.dagta = this.current.series;
        }, (err) => {
            console.log("Test: ", err);
        });
    }
}
ComapreHistoricalComponent.ɵfac = function ComapreHistoricalComponent_Factory(t) { return new (t || ComapreHistoricalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ComapreHistoricalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ComapreHistoricalComponent, selectors: [["app-comapre-historical"]], viewQuery: function ComapreHistoricalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 50, vars: 18, consts: [[1, "row", "justify-content-md-center"], ["src", "../../assets/imgs/unnamed.png", "alt", "", 2, "width", "150px"], [1, "container-fluid"], [1, "row", "justify-content-between", "mt-2"], [1, "col-9", "mt-3"], [1, "col-3"], ["mat-flat-button", "", 1, "text-muted", "btn-outline-warning", 3, "ngClass", "click"], ["mat-flat-button", "", "checked", "", 1, "text-muted", "btn-outline-warning", "active", 3, "ngClass", "click"], ["mat-stretch-tabs", "", 3, "selectedTabChange"], ["label", "CURRENT", 1, "font-weight-bold"], ["label", "VOLTAGE", 1, "font-weight-bold"], ["label", "Active Power", 1, "font-weight-bold"], ["label", "POWER FACTOR", 1, "font-weight-bold"], ["label", "Apparent Power", 1, "font-weight-bold"], ["label", "Energy", 1, "font-weight-bold"], [1, "container-fluid", 2, "background-color", "rgb(235, 245, 235)", "padding-top", "50px"], [1, "row", "justify-content-around", "mt-5"], [1, "col-4"], ["appearance", "outline", 2, "width", "430px"], [1, "mr-3", 2, "font-size", "20px"], ["name", "load1", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "load2", 3, "ngModel", "ngModelChange"], [1, "col-4", "mt-2"], [1, "btn", "btn-warning", "text-white", 2, "width", "170px", 3, "click"], [1, "row", "justify-content-center"], ["class", "circles-to-rhombuses-spinner", 4, "ngIf"], ["class", "row justify-content-around mt-5", 4, "ngIf"], [3, "value"], [1, "circles-to-rhombuses-spinner"], [1, "circle"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded"], ["class", "text-muted", 4, "ngIf"], [1, "col", "justify-content-center"], [1, "row", "justify-content-around"], [1, "font-weight-bold", "text-muted"], ["class", "font-weight-bold", 4, "ngIf"], [1, "text-muted"], [1, "font-weight-bold"], [1, "col-12"], ["class", "example-card shadow p-3 mb-5 bg-white rounded", 4, "ngIf"], [1, "row"], [1, "col-8"], [1, "mt-4"], ["label", "LINE CHART"], ["id", "chart", 4, "ngIf"], ["id", "chart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title", "tooltip"]], template: function ComapreHistoricalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComapreHistoricalComponent_Template_button_click_7_listener() { ctx.getCompareChartsTime(1); ctx.getCompareTime(0); return ctx.onTabClick(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Instant Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComapreHistoricalComponent_Template_button_click_9_listener() { ctx.getCompareChartsTime(1); ctx.getCompareTime(1); return ctx.onTabClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComapreHistoricalComponent_Template_button_click_11_listener() { ctx.getCompareChartsTime(2); ctx.getCompareTime(2); return ctx.onTabClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Yesterday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComapreHistoricalComponent_Template_button_click_13_listener() { ctx.getCompareChartsTime(3); ctx.getCompareTime(3); return ctx.onTabClick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Last Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-tab-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ComapreHistoricalComponent_Template_mat_tab_group_selectedTabChange_16_listener($event) { return ctx.changeParaTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "precision_manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Load 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComapreHistoricalComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.loadId1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ComapreHistoricalComponent_mat_option_32_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "precision_manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Load 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ComapreHistoricalComponent_Template_mat_select_ngModelChange_40_listener($event) { return ctx.loadId2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ComapreHistoricalComponent_mat_option_41_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComapreHistoricalComponent_Template_button_click_44_listener() { ctx.getCompareDefault(); return ctx.getCompareCharts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ComapreHistoricalComponent_div_48_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ComapreHistoricalComponent_div_49_Template, 170, 43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.tabIndex === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.tabIndex === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.tabIndex === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.tabIndex === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loadId1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loadId2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading == true && ctx.notLoading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading == false);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"]], styles: [".circles-to-rhombuses-spinner[_ngcontent-%COMP%], .circles-to-rhombuses-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.circles-to-rhombuses-spinner[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: calc( (15px + 15px * 1.125) * 3);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center\r\n}\r\n\r\n.circles-to-rhombuses-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: 15px;\r\n  margin-left: calc(15px * 1.125);\r\n  transform: rotate(45deg);\r\n  border-radius: 10%;\r\n  border: 3px solid #ff1d5e;\r\n  overflow: hidden;\r\n  background: transparent;\r\n\r\n  animation: circles-to-rhombuses-animation 1200ms linear infinite;\r\n}\r\n\r\n.circles-to-rhombuses-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation-delay: calc(150ms * 1);\r\n  margin-left: 0\r\n}\r\n\r\n.circles-to-rhombuses-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation-delay: calc(150ms * 2);\r\n}\r\n\r\n.circles-to-rhombuses-spinner[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation-delay: calc(150ms * 3);\r\n}\r\n\r\n@keyframes circles-to-rhombuses-animation {\r\n  0% {\r\n    border-radius: 10%;\r\n  }\r\n\r\n  17.5% {\r\n    border-radius: 10%;\r\n  }\r\n\r\n  50% {\r\n    border-radius: 100%;\r\n  }\r\n\r\n\r\n  93.5% {\r\n    border-radius: 10%;\r\n  }\r\n\r\n  100% {\r\n    border-radius: 10%;\r\n  }\r\n}\r\n\r\n@keyframes circles-to-rhombuses-background-animation {\r\n  50% {\r\n    opacity: 0.4;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWFwcmUtaGlzdG9yaWNhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsdUJBQXVCOztFQUV2QixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7RUFHQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJjb21hcHJlLWhpc3RvcmljYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGVzLXRvLXJob21idXNlcy1zcGlubmVyLCAuY2lyY2xlcy10by1yaG9tYnVzZXMtc3Bpbm5lciAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY2lyY2xlcy10by1yaG9tYnVzZXMtc3Bpbm5lciB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiBjYWxjKCAoMTVweCArIDE1cHggKiAxLjEyNSkgKiAzKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmNpcmNsZXMtdG8tcmhvbWJ1c2VzLXNwaW5uZXIgLmNpcmNsZSB7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDE1cHggKiAxLjEyNSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmYxZDVlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGFuaW1hdGlvbjogY2lyY2xlcy10by1yaG9tYnVzZXMtYW5pbWF0aW9uIDEyMDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jaXJjbGVzLXRvLXJob21idXNlcy1zcGlubmVyIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoMTUwbXMgKiAxKTtcclxuICBtYXJnaW4tbGVmdDogMFxyXG59XHJcblxyXG4uY2lyY2xlcy10by1yaG9tYnVzZXMtc3Bpbm5lciAuY2lyY2xlOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDE1MG1zICogMik7XHJcbn1cclxuXHJcbi5jaXJjbGVzLXRvLXJob21idXNlcy1zcGlubmVyIC5jaXJjbGU6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoMTUwbXMgKiAzKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjaXJjbGVzLXRvLXJob21idXNlcy1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIDE3LjUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIDkzLjUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaXJjbGVzLXRvLXJob21idXNlcy1iYWNrZ3JvdW5kLWFuaW1hdGlvbiB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "N/qJ":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
  \**********************************************************************/
/*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule, ɵangular_material_src_cdk_accordion_accordion_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_accordion_accordion_a", function() { return CDK_ACCORDION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each accordion. */


let nextId = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /** Emits when the state of the accordion changes */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** Stream that emits true/false when openAll/closeAll is triggered. */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** A readonly id value to use for unique selection coordination. */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
    get multi() { return this._multi; }
    set multi(multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi); }
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    openAll() {
        this._openCloseAll(true);
    }
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    closeAll() {
        this._openCloseAll(false);
    }
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) { return new (t || CdkAccordion)(); };
CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordion, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: "multi" }, exportAs: ["cdkAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CdkAccordion.propDecorators = {
    multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion',
                providers: [{ provide: CDK_ACCORDION, useExisting: CdkAccordion }]
            }]
    }], function () { return []; }, { multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID for each accordion item. */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /** Subscription to openAll/closeAll events. */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /** Event emitted every time the AccordionItem is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Event emitted every time the AccordionItem is opened. */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Event emitted when the AccordionItem is destroyed. */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * @docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** The unique AccordionItem id. */
        this.id = `cdk-accordion-child-${nextId$1++}`;
        this._expanded = false;
        this._disabled = false;
        /** Unregister function for _expansionDispatcher. */
        this._removeUniqueSelectionListener = () => { };
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            });
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /** Whether the AccordionItem is expanded. */
    get expanded() { return this._expanded; }
    set expanded(expanded) {
        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Whether the AccordionItem is disabled. */
    get disabled() { return this._disabled; }
    set disabled(disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled); }
    /** Emits an event for the accordion item being destroyed. */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /** Toggles the expanded state of the accordion item. */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /** Sets the expanded state of the accordion item to false. */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /** Sets the expanded state of the accordion item to true. */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe(expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        });
    }
}
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) { return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"])); };
CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordionItem, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: "expanded", disabled: "disabled" }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            { provide: CDK_ACCORDION, useValue: ɵ0 },
        ])] });
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_ACCORDION,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
                    // registering to the same accordion.
                    { provide: CDK_ACCORDION, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: CdkAccordion, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_ACCORDION]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }]; }, { closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkAccordionModule {
}
CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkAccordionModule });
CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdkAccordionModule_Factory(t) { return new (t || CdkAccordionModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, { declarations: [CdkAccordion, CdkAccordionItem], exports: [CdkAccordion, CdkAccordionItem] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "PBVK":
/*!**************************************************************!*\
  !*** ./src/compare/compare-loads/compare-loads.component.ts ***!
  \**************************************************************/
/*! exports provided: CompareLoadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareLoadsComponent", function() { return CompareLoadsComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/compare.service */ "Czm6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");














const _c0 = ["chart"];
function CompareLoadsComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const load_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", load_r44.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", load_r44.name, " ");
} }
function CompareLoadsComponent_mat_slide_toggle_17_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareLoadsComponent_mat_slide_toggle_17_Template_mat_slide_toggle_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.checked1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Set as Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.checked1);
} }
function CompareLoadsComponent_mat_slide_toggle_18_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareLoadsComponent_mat_slide_toggle_18_Template_mat_slide_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r47.checked2 = false; ctx_r47.checked1 = true; return ctx_r47.loadRef = "load1"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Set as Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompareLoadsComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const load_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", load_r49.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", load_r49.name, " ");
} }
function CompareLoadsComponent_mat_slide_toggle_28_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareLoadsComponent_mat_slide_toggle_28_Template_mat_slide_toggle_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.checked2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Set as Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.checked2);
} }
function CompareLoadsComponent_mat_slide_toggle_29_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareLoadsComponent_mat_slide_toggle_29_Template_mat_slide_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r52.checked1 = false; ctx_r52.checked2 = true; return ctx_r52.loadRef = "load2"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Set as Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompareLoadsComponent_mat_card_title_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompareLoadsComponent_mat_card_title_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.loadName1);
} }
function CompareLoadsComponent_h3_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.currentLoad1.toFixed(2));
} }
function CompareLoadsComponent_h3_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.voltageLoad1.toFixed(2));
} }
function CompareLoadsComponent_h3_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.frequencyLoad1.toFixed(2));
} }
function CompareLoadsComponent_h3_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.pfLoad1.toFixed(2));
} }
function CompareLoadsComponent_h3_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.apLoad1.toFixed(2));
} }
function CompareLoadsComponent_mat_card_title_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Load 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompareLoadsComponent_mat_card_title_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-title", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.loadName2);
} }
function CompareLoadsComponent_h3_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.currentLoad2.toFixed(2));
} }
function CompareLoadsComponent_h3_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.voltageLoad2.toFixed(2));
} }
function CompareLoadsComponent_h3_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.frequencyLoad2.toFixed(2));
} }
function CompareLoadsComponent_h3_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.pfLoad2.toFixed(2));
} }
function CompareLoadsComponent_h3_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r19.apLoad2.toFixed(2));
} }
function CompareLoadsComponent_h3_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r20.currentLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r21.currentLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r22.currentLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r23.currentLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r24.voltageLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r25.voltageLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r26.voltageLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r27.voltageLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r28.frequencyLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r29.frequencyLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r30.frequencyLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r31.frequencyLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r32.pfLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r33.pfLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r34.pfLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r35.pfLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r36.apLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r37.apLoad1Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r38.apLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_h3_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r39.apLoad2Ref.toFixed(2), "");
} }
function CompareLoadsComponent_mat_card_137_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r54.current.series)("chart", ctx_r54.current.chart)("xaxis", ctx_r54.current.xaxis)("dataLabels", ctx_r54.current.dataLabels)("grid", ctx_r54.current.grid)("stroke", ctx_r54.current.stroke)("title", ctx_r54.current.title);
} }
function CompareLoadsComponent_mat_card_137_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function CompareLoadsComponent_mat_card_137_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CompareLoadsComponent_mat_card_137_div_10_Template, 2, 7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.dagta != null);
} }
function CompareLoadsComponent_mat_card_138_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Voltage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function CompareLoadsComponent_mat_card_138_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r41.voltage.series)("chart", ctx_r41.voltage.chart)("xaxis", ctx_r41.voltage.xaxis)("dataLabels", ctx_r41.voltage.dataLabels)("grid", ctx_r41.voltage.grid)("stroke", ctx_r41.voltage.stroke)("title", ctx_r41.voltage.title);
} }
function CompareLoadsComponent_mat_card_139_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Voltage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function CompareLoadsComponent_mat_card_139_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r42.frequency.series)("chart", ctx_r42.frequency.chart)("xaxis", ctx_r42.frequency.xaxis)("dataLabels", ctx_r42.frequency.dataLabels)("grid", ctx_r42.frequency.grid)("stroke", ctx_r42.frequency.stroke)("title", ctx_r42.frequency.title);
} }
function CompareLoadsComponent_mat_card_140_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Voltage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab-group", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function CompareLoadsComponent_mat_card_140_Template_mat_tab_group_selectedTabChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.changeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-tab", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "apx-chart", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r43.pf.series)("chart", ctx_r43.pf.chart)("xaxis", ctx_r43.pf.xaxis)("dataLabels", ctx_r43.pf.dataLabels)("grid", ctx_r43.pf.grid)("stroke", ctx_r43.pf.stroke)("title", ctx_r43.pf.title);
} }
class CompareLoadsComponent {
    constructor(compareService, http) {
        this.compareService = compareService;
        this.http = http;
        this.lineChartVisiable = true;
        this.tableVisisable = false;
        this.functionRender = false;
        this.factoryRender = false;
        this.loadRender = false;
        this.currentRender = true;
        this.voltageRender = false;
        this.frequencyRender = false;
        this.pfRender = false;
        this.apparentRender = false;
        this.loads = [];
        this.loadId1 = '';
        this.loadId2 = '';
        this.loadName1 = '';
        this.loadName2 = '';
        this.currentLoad1 = 0;
        this.voltageLoad1 = 0;
        this.frequencyLoad1 = 0;
        this.pfLoad1 = 0;
        this.apLoad1 = 0;
        this.currentLoad2 = 0;
        this.voltageLoad2 = 0;
        this.frequencyLoad2 = 0;
        this.pfLoad2 = 0;
        this.apLoad2 = 0;
        this.currentLoad1Ref = 0;
        this.voltageLoad1Ref = 0;
        this.frequencyLoad1Ref = 0;
        this.pfLoad1Ref = 0;
        this.apLoad1Ref = 0;
        this.currentLoad2Ref = 0;
        this.voltageLoad2Ref = 0;
        this.frequencyLoad2Ref = 0;
        this.pfLoad2Ref = 0;
        this.apLoad2Ref = 0;
        this.checked1 = true;
        this.checked2 = false;
        this.loadRef = 'load1';
        this.current = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.voltage = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.frequency = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.pf = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.ap = {
            series: [
                {
                    name: "Load1",
                    data: []
                },
                {
                    name: "Load2",
                    data: []
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: []
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
    }
    ngOnInit() {
        this.getAllLoads();
    }
    getAllLoads() {
        this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].servicesUrl}/Loads`)
            .subscribe((Response) => {
            this.loads = JSON.parse(JSON.stringify(Response));
            // this.routeSummary = data.routeSummary;
            //this.processesSummaryList = data.processesSummaryList;
        });
    }
    ;
    changeParaTab(tab) {
        if (tab.index == 0) {
            this.currentRender = true;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = false;
        }
        else if (tab.index == 1) {
            this.currentRender = false;
            this.voltageRender = true;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = false;
        }
        else if (tab.index == 2) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = true;
            this.pfRender = false;
            this.apparentRender = false;
        }
        else if (tab.index == 3) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = true;
            this.apparentRender = false;
        }
        else if (tab.index == 4) {
            this.currentRender = false;
            this.voltageRender = false;
            this.frequencyRender = false;
            this.pfRender = false;
            this.apparentRender = true;
        }
    }
    changeTab(tab) {
        if (tab.index == 0) {
            this.lineChartVisiable = true;
            this.tableVisisable = false;
        }
        else if (tab.index == 1) {
            this.lineChartVisiable = false;
            this.tableVisisable = true;
        }
    }
    changeChecked() {
        if (this.checked2 == true) {
            this.loadRef = 'load2';
        }
        else {
            this.loadRef = '';
        }
    }
    log() {
        console.log(this.checked2);
    }
    getCompareDefault() {
        this.compareService.getCompareValues(this.loadId1, this.loadId2)
            .subscribe((res) => {
            this.load1 = JSON.parse(JSON.stringify(res)).load1;
            this.load2 = JSON.parse(JSON.stringify(res)).load2;
            this.currentLoad1 = (this.load1.current1Load1 + this.load1.current2Load1 + this.load1.current3Load1) / 3;
            this.voltageLoad1 = (this.load1.voltage1Load1 + this.load1.voltage2Load1 + this.load1.voltage3Load1) / 3;
            this.frequencyLoad1 = (this.load1.frequency1Load1 + this.load1.frequency2Load1 + this.load1.frequency3Load1) / 3;
            this.pfLoad1 = (this.load1.pf1Load1 + this.load1.pf2Load1 + this.load1.pf3Load1) / 3;
            this.apLoad1 = (((this.load1.current1Load1 + this.load1.current2Load1 + this.load1.current3Load1) / 3) * ((this.load1.voltage1Load1 + this.load1.voltage2Load1 + this.load1.voltage3Load1) / 3)) / 1000;
            this.currentLoad2 = (this.load2.current1Load2 + this.load2.current2Load2 + this.load2.current3Load2) / 3;
            this.voltageLoad2 = (this.load2.voltage1Load2 + this.load2.voltage2Load2 + this.load2.voltage3Load2) / 3;
            this.frequencyLoad2 = (this.load2.frequency1Load2 + this.load2.frequency2Load2 + this.load2.frequency3Load2) / 3;
            this.pfLoad2 = (this.load2.pf1Load2 + this.load2.pf2Load2 + this.load2.pf3Load2) / 3;
            this.apLoad2 = (((this.load2.current1Load2 + this.load2.current2Load2 + this.load2.current3Load2) / 3) * ((this.load2.voltage1Load2 + this.load2.voltage2Load2 + this.load2.voltage3Load2) / 3)) / 1000;
            this.loadName1 = this.loads.find(el => el.code == this.loadId1).name;
            this.loadName2 = this.loads.find(el => el.code == this.loadId2).name;
            this.currentLoad1Ref = this.currentLoad1 - this.currentLoad2;
            this.voltageLoad1Ref = this.voltageLoad1 - this.voltageLoad2;
            this.frequencyLoad1Ref = this.frequencyLoad1 - this.frequencyLoad2;
            this.pfLoad1Ref = this.pfLoad1 - this.pfLoad2;
            this.apLoad1Ref = this.apLoad1 - this.apLoad2;
            this.currentLoad2Ref = this.currentLoad2 - this.currentLoad1;
            this.voltageLoad2Ref = this.voltageLoad2 - this.voltageLoad1;
            this.frequencyLoad2Ref = this.frequencyLoad2 - this.frequencyLoad1;
            this.pfLoad2Ref = this.pfLoad2 - this.pfLoad1;
            this.apLoad2Ref = this.apLoad2 - this.apLoad1;
            console.log(this.load1);
        }, (err) => {
            console.log("Test: ", err);
        });
    }
    ;
    getCompareCharts() {
        this.dagta = null;
        this.compareService.getCompareChart(this.loadId1, this.loadId2, 1)
            .subscribe((res) => {
            this.load1Chart = JSON.parse(JSON.stringify(res)).load1;
            this.load2Chart = JSON.parse(JSON.stringify(res)).load2;
            console.log(this.load1Chart.avgCurrent1);
            this.load1Chart.avgCurrent1.forEach(element => {
                this.current.series[0].data.push(element.current1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgVoltage1.forEach(element => {
                this.voltage.series[0].data.push(element.voltage1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgFrequency1.forEach(element => {
                this.frequency.series[0].data.push(element.frequency1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load1Chart.avgPowerFactor1.forEach(element => {
                this.pf.series[0].data.push(element.powerFactor1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgCurrent2.forEach(element => {
                this.current.series[1].data.push(element.current1);
                this.current.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgVoltage2.forEach(element => {
                this.voltage.series[1].data.push(element.voltage1);
                this.voltage.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgFrequency2.forEach(element => {
                this.frequency.series[1].data.push(element.frequency1);
                this.frequency.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            this.load2Chart.avgPowerFactor2.forEach(element => {
                this.pf.series[1].data.push(element.powerFactor1);
                this.pf.xaxis.categories.push(new Date(element.timeStamp).toLocaleString());
            });
            console.log(this.voltage.series[0]);
            this.dagta = this.current.series;
        }, (err) => {
            console.log("Test: ", err);
        });
    }
}
CompareLoadsComponent.ɵfac = function CompareLoadsComponent_Factory(t) { return new (t || CompareLoadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CompareLoadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompareLoadsComponent, selectors: [["app-compare-loads"]], viewQuery: function CompareLoadsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 141, vars: 46, consts: [["mat-stretch-tabs", "", 3, "selectedTabChange"], ["label", "CURRENT", 1, "font-weight-bold"], ["label", "VOLTAGE", 1, "font-weight-bold"], ["label", "FREQUENCY", 1, "font-weight-bold"], ["label", "POWER FACTOR", 1, "font-weight-bold"], ["label", "APPARENT POWER", 1, "font-weight-bold"], [1, "container-fluid", 2, "background-color", "rgb(235, 245, 235)", "padding-top", "50px"], [1, "row", "justify-content-around", "mt-5"], [1, "col-4"], ["appearance", "outline", 2, "width", "430px"], [1, "mr-3", 2, "font-size", "20px"], ["name", "load1", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "click", 4, "ngIf"], ["name", "load2", 3, "ngModel", "ngModelChange"], [1, "col-4", "mt-2"], [1, "btn", "btn-outline-warning", "mr-4", 2, "width", "200px"], [1, "btn", "btn-warning", "text-white", 2, "width", "170px", 3, "click"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded"], ["class", "text-muted", 4, "ngIf"], [1, "col", "justify-content-center"], [1, "row", "justify-content-around"], [1, "font-weight-bold", "text-muted"], ["class", "font-weight-bold", 4, "ngIf"], [1, "text-muted"], [1, "font-weight-bold"], ["class", "font-weight-bold", "style", "color: skyblue;", 4, "ngIf"], ["class", "font-weight-bold", "style", "color: red;", 4, "ngIf"], [1, "col-12"], ["class", "example-card shadow p-3 mb-5 bg-white rounded", 4, "ngIf"], [3, "value"], [3, "ngModel", "ngModelChange"], [3, "click"], [1, "mr-4"], [1, "font-weight-bold", 2, "color", "skyblue"], [1, "font-weight-bold", 2, "color", "red"], [1, "row"], [1, "col-8"], [1, "mt-4"], ["label", "LINE CHART"], ["id", "chart", 4, "ngIf"], ["id", "chart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"]], template: function CompareLoadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function CompareLoadsComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.changeParaTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "precision_manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Load 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareLoadsComponent_Template_mat_select_ngModelChange_14_listener($event) { return ctx.loadId1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CompareLoadsComponent_mat_option_15_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CompareLoadsComponent_mat_slide_toggle_17_Template, 2, 1, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CompareLoadsComponent_mat_slide_toggle_18_Template, 2, 0, "mat-slide-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "precision_manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Load 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompareLoadsComponent_Template_mat_select_ngModelChange_25_listener($event) { return ctx.loadId2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CompareLoadsComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CompareLoadsComponent_mat_slide_toggle_28_Template, 2, 1, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CompareLoadsComponent_mat_slide_toggle_29_Template, 2, 0, "mat-slide-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Save Config Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompareLoadsComponent_Template_button_click_33_listener() { ctx.getCompareDefault(); return ctx.getCompareCharts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CompareLoadsComponent_mat_card_title_39_Template, 2, 0, "mat-card-title", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CompareLoadsComponent_mat_card_title_40_Template, 4, 1, "mat-card-title", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Current (AMP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CompareLoadsComponent_h3_47_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Voltage (VOLT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, CompareLoadsComponent_h3_51_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Frequency (HZ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, CompareLoadsComponent_h3_55_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Power Factor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CompareLoadsComponent_h3_59_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Apparent Power ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, CompareLoadsComponent_h3_63_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CompareLoadsComponent_mat_card_title_67_Template, 2, 0, "mat-card-title", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, CompareLoadsComponent_mat_card_title_68_Template, 2, 1, "mat-card-title", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Current (AMP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, CompareLoadsComponent_h3_75_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Voltage (VOLT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, CompareLoadsComponent_h3_79_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Frequency (HZ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CompareLoadsComponent_h3_83_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Power Factor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, CompareLoadsComponent_h3_87_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Apparent Power ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, CompareLoadsComponent_h3_91_Template, 2, 1, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-card-title", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " DIFF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Current (AMP)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, CompareLoadsComponent_h3_103_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, CompareLoadsComponent_h3_104_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, CompareLoadsComponent_h3_105_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, CompareLoadsComponent_h3_106_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Voltage (VOLT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, CompareLoadsComponent_h3_110_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, CompareLoadsComponent_h3_111_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, CompareLoadsComponent_h3_112_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, CompareLoadsComponent_h3_113_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Frequency (HZ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, CompareLoadsComponent_h3_117_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CompareLoadsComponent_h3_118_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, CompareLoadsComponent_h3_119_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, CompareLoadsComponent_h3_120_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Power Factor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, CompareLoadsComponent_h3_124_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, CompareLoadsComponent_h3_125_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, CompareLoadsComponent_h3_126_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, CompareLoadsComponent_h3_127_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Apparent Power ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, CompareLoadsComponent_h3_131_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, CompareLoadsComponent_h3_132_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, CompareLoadsComponent_h3_133_Template, 2, 1, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, CompareLoadsComponent_h3_134_Template, 2, 1, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, CompareLoadsComponent_mat_card_137_Template, 11, 1, "mat-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, CompareLoadsComponent_mat_card_138_Template, 12, 7, "mat-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, CompareLoadsComponent_mat_card_139_Template, 12, 7, "mat-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, CompareLoadsComponent_mat_card_140_Template, 12, 7, "mat-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loadId1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checked1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checked1 == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loadId2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loads);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checked2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checked2 == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loadName2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadName2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.load2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.currentLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.currentLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.currentLoad2Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.currentLoad2Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.voltageLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.voltageLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.voltageLoad2Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.voltageLoad2Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.frequencyLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.frequencyLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.frequencyLoad2Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.frequencyLoad2Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.pfLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.pfLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.pfLoad2Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.pfLoad2Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.apLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load1" && ctx.apLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.apLoad1Ref > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadRef == "load2" && ctx.apLoad1Ref < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentRender == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.voltageRender == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frequencyRender == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pfRender == true);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYXJlLWxvYWRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "a0bu":
/*!***********************************************!*\
  !*** ./src/compare/compare-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alertthreshold_alertthreshold_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertthreshold/alertthreshold.component */ "e3bX");
/* harmony import */ var _compare_loads_compare_loads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare-loads/compare-loads.component */ "PBVK");
/* harmony import */ var _comapre_historical_comapre_historical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comapre-historical/comapre-historical.component */ "Fs0V");
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare.component */ "FI+a");
/* harmony import */ var _iotstatus_iotstatus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iotstatus/iotstatus.component */ "xSUe");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.component */ "+KRh");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ "1MAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'compares', component: _compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"] },
    { path: 'compare-loads', component: _compare_loads_compare_loads_component__WEBPACK_IMPORTED_MODULE_2__["CompareLoadsComponent"] },
    { path: 'compare-historical', component: _comapre_historical_comapre_historical_component__WEBPACK_IMPORTED_MODULE_3__["ComapreHistoricalComponent"] },
    { path: 'iotstatus', component: _iotstatus_iotstatus_component__WEBPACK_IMPORTED_MODULE_5__["IotstatusComponent"] },
    { path: 'alertthreshold', component: _alertthreshold_alertthreshold_component__WEBPACK_IMPORTED_MODULE_1__["AlertthresholdComponent"] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"] },
    { path: 'summary-report', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "aNDj":
/*!*******************************************!*\
  !*** ./src/services/iotstatus.service.ts ***!
  \*******************************************/
/*! exports provided: IotstatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotstatusService", function() { return IotstatusService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class IotstatusService {
    constructor(http) {
        this.http = http;
    }
    factoryLoads(id) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Loads/GetLoadsFactory/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    LoadStatus() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Dashboard/DeviceStatus')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    DeviceActivity(code, time) {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL +
            '/Dashboard/DeviceTimeActivity/' +
            code +
            '/' +
            time)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(err) {
        console.log(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err.status || 'Server Error');
    }
}
IotstatusService.ɵfac = function IotstatusService_Factory(t) { return new (t || IotstatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
IotstatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IotstatusService, factory: IotstatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "e3bX":
/*!****************************************************************!*\
  !*** ./src/compare/alertthreshold/alertthreshold.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertthresholdComponent, NewAlertDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertthresholdComponent", function() { return AlertthresholdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlertDialog", function() { return NewAlertDialog; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_alertthreshold_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alertthreshold.service */ "rplS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var src_services_activepower_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/activepower.service */ "dd3p");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















function AlertthresholdComponent_mat_card_1_mat_card_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r2.alertType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r2.timeStamp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r2.sourceId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](l_r2.alertCondition);
} }
function AlertthresholdComponent_mat_card_1_mat_card_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", l_r2.sourceId, " | ", l_r2.flag ? "On" : "off", " ");
} }
function AlertthresholdComponent_mat_card_1_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertthresholdComponent_mat_card_1_mat_card_9_div_1_Template, 9, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlertthresholdComponent_mat_card_1_mat_card_9_div_2_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selected == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selected == 1);
} }
function AlertthresholdComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function AlertthresholdComponent_mat_card_1_Template_mat_tab_group_selectedTabChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onTabChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AlertthresholdComponent_mat_card_1_mat_card_9_Template, 3, 2, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertthresholdComponent_mat_card_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.openAddDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
} }
function NewAlertDialog_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fact_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fact_r1.name);
} }
class AlertthresholdComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.selected = 0;
    }
    ngOnInit() {
        this.service.getalerts().subscribe((res) => {
            console.log('hh');
            this.alerts = res;
        });
    }
    onTabChanged(e) {
        this.selected = e.index;
    }
    openAddDialog() {
        const dialogRef = this.dialog.open(NewAlertDialog, {
            width: '50%',
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
}
AlertthresholdComponent.ɵfac = function AlertthresholdComponent_Factory(t) { return new (t || AlertthresholdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_alertthreshold_service__WEBPACK_IMPORTED_MODULE_2__["AlertthresholdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
AlertthresholdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertthresholdComponent, selectors: [["app-alertthreshold"]], decls: 2, vars: 1, consts: [[1, "container-fluid", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh"], ["class", "example-card shadow p-3 mb-5 bg-white rounded col-sm-10", "style", "height: 50vh; width: 100%", 4, "ngIf"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded", "col-sm-10", 2, "height", "50vh", "width", "100%"], [1, "text-muted"], ["mat-align-tabs", "end", 1, "col-11", 3, "selectedTabChange"], ["label", "THRESHOLD"], ["label", "ON/OFF"], [1, "matcontent", 2, "overflow-y", "scroll", "overflow-x", "hidden", "height", "42vh"], ["style", "background-color: lightgrey; margin-top: 10px", 4, "ngFor", "ngForOf"], [1, "example-button-container", "d-flex", "justify-content-end", 2, "position", "relative", "bottom", "15px", "right", "10px"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a home icon", 3, "click"], [2, "background-color", "lightgrey", "margin-top", "10px"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col", "col-3", 2, "border-right", "2px solid black"], [1, "col", "col-3"], [1, "col", "col-6", 2, "border-right", "2px solid black"], [1, "col", "col-6"]], template: function AlertthresholdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertthresholdComponent_mat_card_1_Template, 15, 1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHRocmVzaG9sZC5jb21wb25lbnQuY3NzIn0= */"] });
class NewAlertDialog {
    constructor(dialogRef, service, service2) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.service2 = service2;
        this.alertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            threshValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            sourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    ngOnInit() {
        this.service2.getFunctions().subscribe((res) => {
            this.loads = res;
        });
    }
    onSubmit() {
        this.service.addAlert(this.alertForm.value).subscribe((res) => {
            console.log('Added alert');
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
NewAlertDialog.ɵfac = function NewAlertDialog_Factory(t) { return new (t || NewAlertDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_alertthreshold_service__WEBPACK_IMPORTED_MODULE_2__["AlertthresholdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_activepower_service__WEBPACK_IMPORTED_MODULE_9__["ActivepowerService"])); };
NewAlertDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewAlertDialog, selectors: [["new-Alert-dialog"]], decls: 38, vars: 2, consts: [[1, "example-form", 3, "formGroup", "ngSubmit"], [1, "row"], ["appearance", "fill", 1, "example-full-width", "col-6"], ["formControlName", "condition"], ["value", "&gt"], ["value", "&lt"], ["formControlName", "type"], ["value", "current"], ["value", "power"], [1, "example-full-width", "col-6"], ["matInput", "", "formControlName", "threshValue", "placeholder", "Threshold value"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["formControlName", "sourceId"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary"], [3, "value"]], template: function NewAlertDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewAlertDialog_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " &gt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " &lt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Alert Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Power");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Source ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, NewAlertDialog_mat_option_35_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Add Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.alertForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loads);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "rplS":
/*!************************************************!*\
  !*** ./src/services/alertthreshold.service.ts ***!
  \************************************************/
/*! exports provided: AlertthresholdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertthresholdService", function() { return AlertthresholdService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AlertthresholdService {
    constructor(http) {
        this.http = http;
    }
    getalerts() {
        return this.http
            .get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/AlertReads')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    addAlert(alert) {
        return this.http
            .post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sourceURL + '/Alerts', alert)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(err) {
        console.log(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err.status || 'Server Error');
    }
}
AlertthresholdService.ɵfac = function AlertthresholdService_Factory(t) { return new (t || AlertthresholdService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AlertthresholdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertthresholdService, factory: AlertthresholdService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vI8h":
/*!***************************************!*\
  !*** ./src/compare/compare.module.ts ***!
  \***************************************/
/*! exports provided: CompareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareModule", function() { return CompareModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _compare_loads_compare_loads_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-loads/compare-loads.component */ "PBVK");
/* harmony import */ var src_compare_compare_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/compare/compare-routing.module */ "a0bu");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular */ "YIDO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./compare.component */ "FI+a");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _iotstatus_iotstatus_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./iotstatus/iotstatus.component */ "xSUe");
/* harmony import */ var _alertthreshold_alertthreshold_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./alertthreshold/alertthreshold.component */ "e3bX");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _comapre_historical_comapre_historical_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comapre-historical/comapre-historical.component */ "Fs0V");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./report/report.component */ "+KRh");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-export-as */ "i4u0");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./summary/summary.component */ "1MAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ "fXoL");

































class CompareModule {
}
CompareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: CompareModule, bootstrap: [_compare_component__WEBPACK_IMPORTED_MODULE_20__["CompareComponent"]] });
CompareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ factory: function CompareModule_Factory(t) { return new (t || CompareModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_compare_compare_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__["NgxMatDatetimePickerModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 10,
                innerStrokeWidth: 0,
                outerStrokeColor: '#d63384',
                innerStrokeColor: '#C7E596',
                animationDuration: 300,
            }),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_29__["ExportAsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](CompareModule, { declarations: [_compare_loads_compare_loads_component__WEBPACK_IMPORTED_MODULE_1__["CompareLoadsComponent"],
        _compare_component__WEBPACK_IMPORTED_MODULE_20__["CompareComponent"],
        _iotstatus_iotstatus_component__WEBPACK_IMPORTED_MODULE_23__["IotstatusComponent"],
        _alertthreshold_alertthreshold_component__WEBPACK_IMPORTED_MODULE_24__["AlertthresholdComponent"],
        _iotstatus_iotstatus_component__WEBPACK_IMPORTED_MODULE_23__["chartDialog"],
        _alertthreshold_alertthreshold_component__WEBPACK_IMPORTED_MODULE_24__["NewAlertDialog"],
        _comapre_historical_comapre_historical_component__WEBPACK_IMPORTED_MODULE_26__["ComapreHistoricalComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_27__["ReportComponent"],
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_30__["SummaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_compare_compare_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__["NgxMatDatetimePickerModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_16__["NgCircleProgressModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"],
        ngx_export_as__WEBPACK_IMPORTED_MODULE_29__["ExportAsModule"]] }); })();


/***/ }),

/***/ "xSUe":
/*!******************************************************!*\
  !*** ./src/compare/iotstatus/iotstatus.component.ts ***!
  \******************************************************/
/*! exports provided: IotstatusComponent, chartDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotstatusComponent", function() { return IotstatusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartDialog", function() { return chartDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_iotstatus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/iotstatus.service */ "aNDj");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");











function IotstatusComponent_div_12_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IotstatusComponent_div_12_mat_card_7_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const l_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.openChart(l_r3.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "show_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", l_r3.name, "");
} }
function IotstatusComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-subtitle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loads");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, IotstatusComponent_div_12_mat_card_7_Template, 5, 1, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.loads);
} }
function IotstatusComponent_div_13_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IotstatusComponent_div_13_mat_card_9_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const on_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.openChart(on_r8.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "show_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const on_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", on_r8.name, "");
} }
function IotstatusComponent_div_13_mat_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IotstatusComponent_div_13_mat_card_17_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const off_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.openChart(off_r11.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const off_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](off_r11.name);
} }
function IotstatusComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IotstatusComponent_div_13_mat_card_9_Template, 5, 1, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-subtitle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IotstatusComponent_div_13_mat_card_17_Template, 5, 1, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Online Loads - (", ctx_r1.online.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.online);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Offline Loads - (", ctx_r1.offline.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.offline);
} }
const _c0 = ["chart"];
function chartDialog_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("fill", ctx_r0.chartOptions.fill)("grid", ctx_r0.chartOptions.grid)("dataLabels", ctx_r0.chartOptions.dataLabels)("plotOptions", ctx_r0.chartOptions.plotOptions)("xaxis", ctx_r0.chartOptions.xaxis)("yaxis", ctx_r0.chartOptions.yaxis);
} }
class IotstatusComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.display = 'single';
    }
    openChart(code) {
        let res;
        const dialogRef = this.dialog.open(chartDialog, {
            width: '50%',
            data: code,
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    ngOnInit() {
        this.service.factoryLoads(1).subscribe((res) => {
            this.loads = res;
        }, (err) => {
            console.log(err);
        });
        this.service.LoadStatus().subscribe((res) => {
            this.online = res['online']['online'];
            this.offline = res['offline']['offline'];
            console.log(this.online, this.offline);
        }, (err) => {
            console.log('res');
            console.log(err);
        });
    }
}
IotstatusComponent.ɵfac = function IotstatusComponent_Factory(t) { return new (t || IotstatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_iotstatus_service__WEBPACK_IMPORTED_MODULE_2__["IotstatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
IotstatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IotstatusComponent, selectors: [["app-iotstatus"]], decls: 14, vars: 3, consts: [[1, "row", "justify-content-md-center"], ["src", "../../assets/imgs/unnamed.png", "alt", "", 2, "width", "150px"], [1, "example-spacer"], ["aria-label", "Font Style", 2, "position", "fixed", "right", "10px", "overflow-x", "hidden", 3, "ngModel", "ngModelChange"], ["color", "primary", "value", "single"], ["color", "primary", "value", "split"], ["class", "container-fluid d-flex justify-content-center align-items-center", "style", "height: 100vh", 4, "ngIf"], ["class", "container-fluid d-flex justify-content-center align-items-center col-12", "style", "height: 100vh; position: relative; top: 60px", 4, "ngIf"], [1, "container-fluid", "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded", "col-sm-10", 2, "height", "50vh", "width", "100%"], [1, "text-muted"], [1, "matcontent", 2, "overflow-y", "scroll", "overflow-x", "hidden", "height", "42vh"], ["style", "background-color: lightgrey; padding: 5px; margin-top: 10px", 3, "click", 4, "ngFor", "ngForOf"], [2, "background-color", "lightgrey", "padding", "5px", "margin-top", "10px", 3, "click"], [2, "position", "relative", "top", "10px", "color", "orange"], [1, "mb-4"], [1, "container-fluid", "d-flex", "justify-content-center", "align-items-center", "col-12", 2, "height", "100vh", "position", "relative", "top", "60px"], [1, "row", "justify-content-center", "align-items-center", 2, "width", "100%"], [1, "col-11", "col-lg-5"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "height", "50vh", "width", "100%"], [1, "example-card", "shadow", "p-3", "mb-5", "bg-white", "rounded", 2, "height", "50vh"]], template: function IotstatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-button-toggle-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IotstatusComponent_Template_mat_button_toggle_group_ngModelChange_7_listener($event) { return ctx.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Single Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Split Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, IotstatusComponent_div_12_Template, 8, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, IotstatusComponent_div_13_Template, 18, 4, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.display == "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.display == "split");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%], mat-button-toggle[_ngcontent-%COMP%], mat-tab[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  font-family: Montserrat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvdHN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0VBVUUsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImlvdHN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIsXHJcbmgzLFxyXG5oNCxcclxubWF0LWNoaXAsXHJcbnNwYW4sXHJcbnAsXHJcbm1hdC1jYXJkLXN1YnRpdGxlLFxyXG5tYXQtYnV0dG9uLXRvZ2dsZSxcclxubWF0LXRhYixcclxuYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxufVxyXG4iXX0= */"] });
class chartDialog {
    constructor(dialogRef, service, data) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.data = data;
        this.obj = [];
        this.date = [];
        this.chartOptions = {
            series: [
                {
                    name: 'load status',
                    data: [],
                },
            ],
            chart: {
                type: 'line',
                height: 350,
            },
            stroke: {
                curve: 'stepline',
            },
            dataLabels: {
                enabled: false,
            },
            title: {
                text: 'Stepline Chart',
                align: 'left',
            },
            markers: {
                hover: {
                    sizeOffset: 4,
                },
            },
            xaxis: {
                categories: [],
            },
        };
    }
    ngOnInit() {
        this.service.DeviceActivity(this.data, 1).subscribe((resp) => {
            this.dat = resp;
            console.log(this.dat);
            this.dat['statuses'].forEach((element) => {
                // if (element['status'] == 1) {
                this.obj.push(element['status']);
                this.date.push(element['timeStamp']);
                // } else if (element['status'] == 0) {
                //   // console.log('this.obj[1]');
                //   this.obj[1]['y'].push(element['timeStamp']);
                // }
            });
            this.chartOptions.series[0].data = this.obj;
            this.chartOptions.xaxis.categories = this.date;
            console.log(this.dat);
        });
    }
    datechange($event) {
        console.log($event);
        if ($event.value === 'today') {
            this.service.DeviceActivity(this.data, 1).subscribe((resp) => {
                this.dat = resp;
                console.log(this.obj[0]);
                this.dat['statuses'].forEach((element) => {
                    // if (element['status'] == 1) {
                    this.obj.push(element['status']);
                    this.date.push(element['timeStamp']);
                    // } else if (element['status'] == 0) {
                    //   // console.log('this.obj[1]');
                    //   this.obj[1]['y'].push(element['timeStamp']);
                    // }
                });
                this.chartOptions.series[0].data = this.obj;
                this.chartOptions.xaxis.categories = this.date;
                console.log(this.dat);
            });
        }
        else if ($event.value === 'yesterday') {
            this.service.DeviceActivity(this.data, 2).subscribe((resp) => {
                this.dat = resp;
                console.log(this.obj[0]);
                this.dat['statuses'].forEach((element) => {
                    // if (element['status'] == 1) {
                    this.obj.push(element['status']);
                    // } else if (element['status'] == 0) {
                    //   // console.log('this.obj[1]');
                    //   this.obj[1]['y'].push(element['timeStamp']);
                    // }
                });
                this.chartOptions.series[0].data = this.obj;
                console.log(this.dat);
            });
        }
        else if ($event.value === 'lastweek') {
            console.log('last week');
            this.service.DeviceActivity(this.data, 3).subscribe((resp) => {
                this.dat = resp;
                console.log(this.obj[0]);
                this.dat['statuses'].forEach((element) => {
                    // if (element['status'] == 1) {
                    this.obj.push(element['status']);
                    // } else if (element['status'] == 0) {
                    //   // console.log('this.obj[1]');
                    //   this.obj[1]['y'].push(element['timeStamp']);
                    // }
                });
                this.chartOptions.series[0].data = this.obj;
                console.log(this.dat);
            });
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
chartDialog.ɵfac = function chartDialog_Factory(t) { return new (t || chartDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_iotstatus_service__WEBPACK_IMPORTED_MODULE_2__["IotstatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
chartDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: chartDialog, selectors: [["chart-dialog"]], viewQuery: function chartDialog_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 8, vars: 1, consts: [["value", "today", "name", "fontStyle", "aria-label", "Font Style"], ["color", "primary", "value", "today", 3, "change"], ["color", "primary", "value", "yesterday", 3, "change"], ["color", "primary", "value", "lastweek", 3, "change"], ["id", "chart", 4, "ngIf"], ["id", "chart"], [3, "series", "chart", "fill", "grid", "dataLabels", "plotOptions", "xaxis", "yaxis"]], template: function chartDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function chartDialog_Template_mat_button_toggle_change_1_listener($event) { return ctx.datechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function chartDialog_Template_mat_button_toggle_change_3_listener($event) { return ctx.datechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function chartDialog_Template_mat_button_toggle_change_5_listener($event) { return ctx.datechange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, chartDialog_div_7_Template, 2, 8, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dat);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=compare-compare-module.js.map