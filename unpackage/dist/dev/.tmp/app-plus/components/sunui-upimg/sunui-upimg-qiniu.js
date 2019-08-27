(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sunui-upimg/sunui-upimg-qiniu"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var qiniuUploader = __webpack_require__(/*! ./qiniu/qiniuUploader.js */ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\qiniu\\qiniuUploader.js");var _default =

{
  data: function data() {
    return {
      upload_after_list: [],
      upload_picture_list: [] };

  },
  name: 'sunui-upimg',
  props: {
    upImgConfig: {
      type: Object } },


  onLoad: function onLoad() {

  },
  created: function created() {},
  methods: {
    chooseImage: function chooseImage(count) {
      cImage(this, parseInt(count), this.upImgConfig);
    },
    uploadimage: function uploadimage(e) {
      uImage(this, e);
    },
    deleteImg: function deleteImg(e) {
      dImage(e, this);
    },
    previewImg: function previewImg(e) {
      pImage(e, this);
    },
    previewImgs: function previewImgs(e) {
      puImage(e, this);
    } }


  // 上传文件
};exports.default = _default;var upload_file_server = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(_this, configs, upload_picture_list, j) {var qiniuConfig;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            qiniuConfig = {
              region: configs.qiniuConfig.region,
              uptokenURL: configs.qiniuConfig.uptokenURL,
              uptoken: configs.qiniuConfig.uptoken,
              domain: configs.qiniuConfig.domain,
              shouldUseQiniuFileName: configs.qiniuConfig.shouldUseQiniuFileName || false,
              fileHead: configs.qiniuConfig.fileHead || 'file',
              key: configs.qiniuConfig.key || new Date().getTime() };_context2.next = 3;return (

              initQiniu(qiniuConfig));case 3:
            qiniuUploader.upload(upload_picture_list[j]['path'], /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
                        res.error == "expired token")) {_context.next = 6;break;}
                        uni.showToast({
                          title: "token\u672A\u83B7\u53D6\u5230,".concat(res.error),
                          icon: 'none' });

                        _this.upload_picture_list = [];
                        _this.upload_after_list = [];
                        console.warn('七牛云上传图片失败,错误信息:', res.error, " at components\\sunui-upimg\\sunui-upimg-qiniu.vue:92");return _context.abrupt("return");case 6:


                        upload_picture_list[j]['path_server'] = "http://".concat(res.fileUrl);
                        console.log("%c \u4E03\u725B\u4E91\u4E0A\u4F20(\u6210\u529F\u8FD4\u56DE\u5730\u5740):http://".concat(res.fileUrl), 'color:#1AAD19', " at components\\sunui-upimg\\sunui-upimg-qiniu.vue:96");
                        _this.upload_picture_list = upload_picture_list;_context.next = 11;return (
                          _this.$emit('onUpImg', _this.upload_picture_list));case 11:case "end":return _context.stop();}}}, _callee, this);}));return function (_x5) {return _ref2.apply(this, arguments);};}(),
            function (error) {
              console.error('error: ' + JSON.stringify(error), " at components\\sunui-upimg\\sunui-upimg-qiniu.vue:100");
            },
            null,
            function (progress) {
              for (var i = 0, len = _this.upload_picture_list.length; i < len; i++) {
                upload_picture_list[i]['upload_percent'] = progress.progress;
              }
              _this.upload_picture_list = upload_picture_list;
              // 				console.log('上传进度', progress.progress)
              // 				console.log('已经上传的数据长度', progress.totalBytesSent)
              // 				console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend)
            });case 4:case "end":return _context2.stop();}}}, _callee2, this);}));return function upload_file_server(_x, _x2, _x3, _x4) {return _ref.apply(this, arguments);};}();


var initQiniu = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(qiniuConfig) {var timestamp, options;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            timestamp = new Date().getTime();
            options = {
              region: qiniuConfig.region || 'NCN', // 华北区
              uptokenURL: qiniuConfig.uptokenURL || 'https://[yourserver.com]/api/uptoken',
              uptoken: qiniuConfig.uptoken || 'xxxx=',
              domain: qiniuConfig.domain || 'http://[yourBucketId].bkt.clouddn.com',
              shouldUseQiniuFileName: qiniuConfig.shouldUseQiniuFileName || false,
              fileHead: qiniuConfig.fileHead || 'file',
              key: qiniuConfig.key || timestamp };_context3.next = 4;return (

              qiniuUploader.init(options));case 4:case "end":return _context3.stop();}}}, _callee3, this);}));return function initQiniu(_x6) {return _ref3.apply(this, arguments);};}();



// 上传图片(通用)
var uImage = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(_this, config) {var j, len;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            j = 0, len = _this.upload_picture_list.length;case 1:if (!(j < len)) {_context4.next = 8;break;}if (!(
            _this.upload_picture_list[j]['upload_percent'] == 0)) {_context4.next = 5;break;}_context4.next = 5;return (
              upload_file_server(_this, config, _this.upload_picture_list, j));case 5:j++;_context4.next = 1;break;case 8:case "end":return _context4.stop();}}}, _callee4, this);}));return function uImage(_x7, _x8) {return _ref4.apply(this, arguments);};}();




// 删除图片(通用)
var dImage = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(e, _this) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
              _this.$emit('onImgDel', {
                url: e.currentTarget.dataset.url,
                index: e.currentTarget.dataset.index }));case 2:

            _this.upload_picture_list.splice(e.currentTarget.dataset.index, 1);
            _this.upload_after_list.splice(e.currentTarget.dataset.index, 1);
            _this.upload_picture_list = _this.upload_picture_list;case 5:case "end":return _context5.stop();}}}, _callee5, this);}));return function dImage(_x9, _x10) {return _ref5.apply(this, arguments);};}();



// 选择图片(通用)
var cImage = function cImage(_this, count, configs) {
  var config = {
    qiniuConfig: {
      region: configs.qiniuConfig.region,
      uptokenURL: configs.qiniuConfig.uptokenURL,
      uptoken: configs.qiniuConfig.uptoken,
      domain: configs.qiniuConfig.domain,
      shouldUseQiniuFileName: configs.qiniuConfig.shouldUseQiniuFileName,
      fileHead: 'file',
      key: configs.qiniuConfig.key || new Date().getTime(),
      qiniu: configs.qiniuConfig.qiniu },

    count: count,
    tips: configs.tips || false,
    notli: configs.notli,
    sourceType: configs.sourceType,
    sizeType: configs.sizeType };

  uni.chooseImage({
    count: config.notli ? config.count = 9 : _this.upload_after_list.length == 0 ? config.count : config.count -
    _this.upload_after_list.length,
    sizeType: config.sizeType == "" || config.sizeType == undefined || config.sizeType == true ? ['compressed'] : [
    'original'],

    sourceType: config.sourceType == "" || config.sourceType == undefined ? ['album', 'camera'] : config.sourceType ==
    'camera' ? ['camera'] : config.sourceType == 'album' ? ['album'] : ['album', 'camera'],
    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(res) {var i, len;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                for (i = 0, len = res.tempFiles.length; i < len; i++) {
                  res.tempFiles[i]['upload_percent'] = 0;
                  res.tempFiles[i]['path_server'] = '';
                  _this.upload_picture_list.push(res.tempFiles[i]);
                  _this.upload_picture_list.length > config.count ? _this.upload_picture_list = _this.upload_picture_list.slice(
                  0,
                  config.count) : '';
                }
                // 过滤多出的预览图片
                _context6.next = 3;return fImage(_this, res, config);case 3:case "end":return _context6.stop();}}}, _callee6, this);}));function success(_x11) {return _success.apply(this, arguments);}return success;}() });


};


// 过滤超出的预览图片以及上传(通用)
var fImage = function fImage(_this, res, config) {
  !config.notli && config.count == _this.upload_picture_list.length ? uImage(_this, config) : '';
  config.notli && config.count == 9 ? uImage(_this, config) : '';
  _this.upload_after_list = _this.upload_after_list.concat(res.tempFilePaths).slice(0, config.count);
  _this.upload_picture_list = _this.upload_picture_list.slice(0, config.count);
};

// 上传前预览图片(通用)
var pImage = function pImage(e, _this) {
  uni.previewImage({
    current: _this.upload_after_list[e.currentTarget.dataset.index],
    urls: _this.upload_after_list });

};

// 上传后预览(通用)
var puImage = /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, _this) {var cacheImg, i, len;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
            console.log('up lii', _this.upload_picture_list, " at components\\sunui-upimg\\sunui-upimg-qiniu.vue:211");
            cacheImg = [];
            for (i = 0, len = _this.upload_picture_list.length; i < len; i++) {
              cacheImg.push(_this.upload_picture_list[i].path);
            }
            uni.previewImage({
              current: cacheImg[e.currentTarget.dataset.idx],
              urls: cacheImg });case 4:case "end":return _context7.stop();}}}, _callee7, this);}));return function puImage(_x12, _x13) {return _ref6.apply(this, arguments);};}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue":
/*!*******************************************************************************!*\
  !*** E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg& */ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg&");
/* harmony import */ var _sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunui-upimg-qiniu.vue?vue&type=script&lang=js& */ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css& */ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css&");
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b39e155",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./sunui-upimg-qiniu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=style&index=0&id=7b39e155&scoped=true&lang=css&");
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_style_index_0_id_7b39e155_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg&":
/*!*******************************************************************************************************************************************!*\
  !*** E:/HBuilderProjects/examSK/components/sunui-upimg/sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue?vue&type=template&id=7b39e155&scoped=true&name=sunui-upimg&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_BasicSoftware_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_sunui_upimg_qiniu_vue_vue_type_template_id_7b39e155_scoped_true_name_sunui_upimg___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sunui-upimg/sunui-upimg-qiniu-create-component',
    {
        'components/sunui-upimg/sunui-upimg-qiniu-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("E:\\HBuilderProjects\\examSK\\components\\sunui-upimg\\sunui-upimg-qiniu.vue"))
        })
    },
    [['components/sunui-upimg/sunui-upimg-qiniu-create-component']]
]);                
