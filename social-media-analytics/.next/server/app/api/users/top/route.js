/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/top/route";
exports.ids = ["app/api/users/top/route"];
exports.modules = {

/***/ "(rsc)/./app/api/users/top/route.js":
/*!************************************!*\
  !*** ./app/api/users/top/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_mockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mockData */ \"(rsc)/./lib/mockData.js\");\n// app/api/users/top/route.js\n\nasync function GET() {\n    const sorted = [\n        ..._lib_mockData__WEBPACK_IMPORTED_MODULE_0__.users\n    ].sort((a, b)=>b.posts - a.posts).slice(0, 5);\n    return Response.json(sorted);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJzL3RvcC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZCQUE2QjtBQUNTO0FBRS9CLGVBQWVDO0lBQ3BCLE1BQU1DLFNBQVM7V0FBSUYsZ0RBQUtBO0tBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLEtBQUssR0FBR0YsRUFBRUUsS0FBSyxFQUFFQyxLQUFLLENBQUMsR0FBRztJQUNyRSxPQUFPQyxTQUFTQyxJQUFJLENBQUNQO0FBQ3ZCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHl1dnJhXFxEb2N1bWVudHNcXEdpdEh1YlxcMjIxNTAwMjA2M1xcc29jaWFsLW1lZGlhLWFuYWx5dGljc1xcYXBwXFxhcGlcXHVzZXJzXFx0b3BcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvdXNlcnMvdG9wL3JvdXRlLmpzXHJcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGNvbnN0IHNvcnRlZCA9IFsuLi51c2Vyc10uc29ydCgoYSwgYikgPT4gYi5wb3N0cyAtIGEucG9zdHMpLnNsaWNlKDAsIDUpXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oc29ydGVkKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VycyIsIkdFVCIsInNvcnRlZCIsInNvcnQiLCJhIiwiYiIsInBvc3RzIiwic2xpY2UiLCJSZXNwb25zZSIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/top/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mockData.js":
/*!*************************!*\
  !*** ./lib/mockData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   users: () => (/* binding */ users)\n/* harmony export */ });\n// lib/mockData.js\nconst users = [\n    {\n        id: 1,\n        name: 'Alice',\n        posts: 23\n    },\n    {\n        id: 2,\n        name: 'Bob',\n        posts: 30\n    },\n    {\n        id: 3,\n        name: 'Charlie',\n        posts: 12\n    },\n    {\n        id: 4,\n        name: 'Diana',\n        posts: 45\n    },\n    {\n        id: 5,\n        name: 'Eve',\n        posts: 37\n    },\n    {\n        id: 6,\n        name: 'Frank',\n        posts: 18\n    }\n];\nconst posts = [\n    {\n        id: 101,\n        userId: 1,\n        username: 'Alice',\n        content: 'Check out this cool post!',\n        comments: 5\n    },\n    {\n        id: 102,\n        userId: 2,\n        username: 'Bob',\n        content: 'This is trending for sure!',\n        comments: 18\n    },\n    {\n        id: 103,\n        userId: 5,\n        username: 'Eve',\n        content: 'Good morning!',\n        comments: 18\n    },\n    {\n        id: 104,\n        userId: 4,\n        username: 'Diana',\n        content: 'Let’s build something amazing.',\n        comments: 8\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9ja0RhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0I7QUFFWCxNQUFNQSxRQUFRO0lBQ2pCO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxPQUFPO0lBQUc7SUFDbEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQU9DLE9BQU87SUFBRztJQUNoQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBV0MsT0FBTztJQUFHO0lBQ3BDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxPQUFPO0lBQUc7SUFDbEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQU9DLE9BQU87SUFBRztJQUNoQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBU0MsT0FBTztJQUFHO0NBQ25DO0FBRU0sTUFBTUEsUUFBUTtJQUNuQjtRQUNFRixJQUFJO1FBQ0pHLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBO1FBQ0VOLElBQUk7UUFDSkcsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsVUFBVTtJQUNaO0lBQ0E7UUFDRU4sSUFBSTtRQUNKRyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTixJQUFJO1FBQ0pHLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtDQUNEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHl1dnJhXFxEb2N1bWVudHNcXEdpdEh1YlxcMjIxNTAwMjA2M1xcc29jaWFsLW1lZGlhLWFuYWx5dGljc1xcbGliXFxtb2NrRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvbW9ja0RhdGEuanNcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VycyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGljZScsIHBvc3RzOiAyMyB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogJ0JvYicsIHBvc3RzOiAzMCB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ0NoYXJsaWUnLCBwb3N0czogMTIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6ICdEaWFuYScsIHBvc3RzOiA0NSB9LFxyXG4gICAgeyBpZDogNSwgbmFtZTogJ0V2ZScsIHBvc3RzOiAzNyB9LFxyXG4gICAgeyBpZDogNiwgbmFtZTogJ0ZyYW5rJywgcG9zdHM6IDE4IH0sXHJcbiAgXVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEwMSxcclxuICAgICAgdXNlcklkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJ0FsaWNlJyxcclxuICAgICAgY29udGVudDogJ0NoZWNrIG91dCB0aGlzIGNvb2wgcG9zdCEnLFxyXG4gICAgICBjb21tZW50czogNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMDIsXHJcbiAgICAgIHVzZXJJZDogMixcclxuICAgICAgdXNlcm5hbWU6ICdCb2InLFxyXG4gICAgICBjb250ZW50OiAnVGhpcyBpcyB0cmVuZGluZyBmb3Igc3VyZSEnLFxyXG4gICAgICBjb21tZW50czogMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTAzLFxyXG4gICAgICB1c2VySWQ6IDUsXHJcbiAgICAgIHVzZXJuYW1lOiAnRXZlJyxcclxuICAgICAgY29udGVudDogJ0dvb2QgbW9ybmluZyEnLFxyXG4gICAgICBjb21tZW50czogMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTA0LFxyXG4gICAgICB1c2VySWQ6IDQsXHJcbiAgICAgIHVzZXJuYW1lOiAnRGlhbmEnLFxyXG4gICAgICBjb250ZW50OiAnTGV04oCZcyBidWlsZCBzb21ldGhpbmcgYW1hemluZy4nLFxyXG4gICAgICBjb21tZW50czogOCxcclxuICAgIH0sXHJcbiAgXVxyXG4gICJdLCJuYW1lcyI6WyJ1c2VycyIsImlkIiwibmFtZSIsInBvc3RzIiwidXNlcklkIiwidXNlcm5hbWUiLCJjb250ZW50IiwiY29tbWVudHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mockData.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Ftop%2Froute&page=%2Fapi%2Fusers%2Ftop%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Ftop%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Ftop%2Froute&page=%2Fapi%2Fusers%2Ftop%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Ftop%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_yuvra_Documents_GitHub_2215002063_social_media_analytics_app_api_users_top_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/top/route.js */ \"(rsc)/./app/api/users/top/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/top/route\",\n        pathname: \"/api/users/top\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/top/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\yuvra\\\\Documents\\\\GitHub\\\\2215002063\\\\social-media-analytics\\\\app\\\\api\\\\users\\\\top\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_yuvra_Documents_GitHub_2215002063_social_media_analytics_app_api_users_top_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnRvcCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZ0b3AlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnRvcCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN5dXZyYSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1QzIyMTUwMDIwNjMlNUNzb2NpYWwtbWVkaWEtYW5hbHl0aWNzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUN5dXZyYSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1QzIyMTUwMDIwNjMlNUNzb2NpYWwtbWVkaWEtYW5hbHl0aWNzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN1RDtBQUNwSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxceXV2cmFcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFwyMjE1MDAyMDYzXFxcXHNvY2lhbC1tZWRpYS1hbmFseXRpY3NcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFx0b3BcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3RvcC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL3RvcFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvdG9wL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxceXV2cmFcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFwyMjE1MDAyMDYzXFxcXHNvY2lhbC1tZWRpYS1hbmFseXRpY3NcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFx0b3BcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Ftop%2Froute&page=%2Fapi%2Fusers%2Ftop%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Ftop%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Ftop%2Froute&page=%2Fapi%2Fusers%2Ftop%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Ftop%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();