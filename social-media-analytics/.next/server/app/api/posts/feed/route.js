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
exports.id = "app/api/posts/feed/route";
exports.ids = ["app/api/posts/feed/route"];
exports.modules = {

/***/ "(rsc)/./app/api/posts/feed/route.js":
/*!*************************************!*\
  !*** ./app/api/posts/feed/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_mockData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mockData */ \"(rsc)/./lib/mockData.js\");\n// app/api/posts/feed/route.js\n\nasync function GET() {\n    const sorted = [\n        ..._lib_mockData__WEBPACK_IMPORTED_MODULE_0__.posts\n    ].sort((a, b)=>b.id - a.id) // newest first\n    ;\n    return Response.json(sorted);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL2ZlZWQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4QkFBOEI7QUFDUTtBQUUvQixlQUFlQztJQUNwQixNQUFNQyxTQUFTO1dBQUlGLGdEQUFLQTtLQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFQyxFQUFFLEdBQUdGLEVBQUVFLEVBQUUsRUFBRSxlQUFlOztJQUNyRSxPQUFPQyxTQUFTQyxJQUFJLENBQUNOO0FBQ3ZCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHl1dnJhXFxEb2N1bWVudHNcXEdpdEh1YlxcMjIxNTAwMjA2M1xcc29jaWFsLW1lZGlhLWFuYWx5dGljc1xcYXBwXFxhcGlcXHBvc3RzXFxmZWVkXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL3Bvc3RzL2ZlZWQvcm91dGUuanNcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tICdAL2xpYi9tb2NrRGF0YSdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3Qgc29ydGVkID0gWy4uLnBvc3RzXS5zb3J0KChhLCBiKSA9PiBiLmlkIC0gYS5pZCkgLy8gbmV3ZXN0IGZpcnN0XHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oc29ydGVkKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwb3N0cyIsIkdFVCIsInNvcnRlZCIsInNvcnQiLCJhIiwiYiIsImlkIiwiUmVzcG9uc2UiLCJqc29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/feed/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mockData.js":
/*!*************************!*\
  !*** ./lib/mockData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   users: () => (/* binding */ users)\n/* harmony export */ });\n// lib/mockData.js\nconst users = [\n    {\n        id: 1,\n        name: 'Alice',\n        posts: 23\n    },\n    {\n        id: 2,\n        name: 'Bob',\n        posts: 30\n    },\n    {\n        id: 3,\n        name: 'Charlie',\n        posts: 12\n    },\n    {\n        id: 4,\n        name: 'Diana',\n        posts: 45\n    },\n    {\n        id: 5,\n        name: 'Eve',\n        posts: 37\n    },\n    {\n        id: 6,\n        name: 'Frank',\n        posts: 18\n    }\n];\nconst posts = [\n    {\n        id: 101,\n        userId: 1,\n        username: 'Alice',\n        content: 'Check out this cool post!',\n        comments: 5\n    },\n    {\n        id: 102,\n        userId: 2,\n        username: 'Bob',\n        content: 'This is trending for sure!',\n        comments: 18\n    },\n    {\n        id: 103,\n        userId: 5,\n        username: 'Eve',\n        content: 'Good morning!',\n        comments: 18\n    },\n    {\n        id: 104,\n        userId: 4,\n        username: 'Diana',\n        content: 'Let’s build something amazing.',\n        comments: 8\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9ja0RhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0I7QUFFWCxNQUFNQSxRQUFRO0lBQ2pCO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxPQUFPO0lBQUc7SUFDbEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQU9DLE9BQU87SUFBRztJQUNoQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBV0MsT0FBTztJQUFHO0lBQ3BDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxPQUFPO0lBQUc7SUFDbEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQU9DLE9BQU87SUFBRztJQUNoQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBU0MsT0FBTztJQUFHO0NBQ25DO0FBRU0sTUFBTUEsUUFBUTtJQUNuQjtRQUNFRixJQUFJO1FBQ0pHLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBO1FBQ0VOLElBQUk7UUFDSkcsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFNBQVM7UUFDVEMsVUFBVTtJQUNaO0lBQ0E7UUFDRU4sSUFBSTtRQUNKRyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTixJQUFJO1FBQ0pHLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtDQUNEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHl1dnJhXFxEb2N1bWVudHNcXEdpdEh1YlxcMjIxNTAwMjA2M1xcc29jaWFsLW1lZGlhLWFuYWx5dGljc1xcbGliXFxtb2NrRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvbW9ja0RhdGEuanNcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VycyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGljZScsIHBvc3RzOiAyMyB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogJ0JvYicsIHBvc3RzOiAzMCB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ0NoYXJsaWUnLCBwb3N0czogMTIgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6ICdEaWFuYScsIHBvc3RzOiA0NSB9LFxyXG4gICAgeyBpZDogNSwgbmFtZTogJ0V2ZScsIHBvc3RzOiAzNyB9LFxyXG4gICAgeyBpZDogNiwgbmFtZTogJ0ZyYW5rJywgcG9zdHM6IDE4IH0sXHJcbiAgXVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEwMSxcclxuICAgICAgdXNlcklkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJ0FsaWNlJyxcclxuICAgICAgY29udGVudDogJ0NoZWNrIG91dCB0aGlzIGNvb2wgcG9zdCEnLFxyXG4gICAgICBjb21tZW50czogNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMDIsXHJcbiAgICAgIHVzZXJJZDogMixcclxuICAgICAgdXNlcm5hbWU6ICdCb2InLFxyXG4gICAgICBjb250ZW50OiAnVGhpcyBpcyB0cmVuZGluZyBmb3Igc3VyZSEnLFxyXG4gICAgICBjb21tZW50czogMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTAzLFxyXG4gICAgICB1c2VySWQ6IDUsXHJcbiAgICAgIHVzZXJuYW1lOiAnRXZlJyxcclxuICAgICAgY29udGVudDogJ0dvb2QgbW9ybmluZyEnLFxyXG4gICAgICBjb21tZW50czogMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMTA0LFxyXG4gICAgICB1c2VySWQ6IDQsXHJcbiAgICAgIHVzZXJuYW1lOiAnRGlhbmEnLFxyXG4gICAgICBjb250ZW50OiAnTGV04oCZcyBidWlsZCBzb21ldGhpbmcgYW1hemluZy4nLFxyXG4gICAgICBjb21tZW50czogOCxcclxuICAgIH0sXHJcbiAgXVxyXG4gICJdLCJuYW1lcyI6WyJ1c2VycyIsImlkIiwibmFtZSIsInBvc3RzIiwidXNlcklkIiwidXNlcm5hbWUiLCJjb250ZW50IiwiY29tbWVudHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mockData.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Ffeed%2Froute&page=%2Fapi%2Fposts%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Ffeed%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Ffeed%2Froute&page=%2Fapi%2Fposts%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Ffeed%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_yuvra_Documents_GitHub_2215002063_social_media_analytics_app_api_posts_feed_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/feed/route.js */ \"(rsc)/./app/api/posts/feed/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/feed/route\",\n        pathname: \"/api/posts/feed\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/feed/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\yuvra\\\\Documents\\\\GitHub\\\\2215002063\\\\social-media-analytics\\\\app\\\\api\\\\posts\\\\feed\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_yuvra_Documents_GitHub_2215002063_social_media_analytics_app_api_posts_feed_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRmZlZWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBvc3RzJTJGZmVlZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBvc3RzJTJGZmVlZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN5dXZyYSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1QzIyMTUwMDIwNjMlNUNzb2NpYWwtbWVkaWEtYW5hbHl0aWNzJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUN5dXZyYSU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1QzIyMTUwMDIwNjMlNUNzb2NpYWwtbWVkaWEtYW5hbHl0aWNzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3RDtBQUNySTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxceXV2cmFcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFwyMjE1MDAyMDYzXFxcXHNvY2lhbC1tZWRpYS1hbmFseXRpY3NcXFxcYXBwXFxcXGFwaVxcXFxwb3N0c1xcXFxmZWVkXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9mZWVkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcG9zdHMvZmVlZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcG9zdHMvZmVlZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHl1dnJhXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcMjIxNTAwMjA2M1xcXFxzb2NpYWwtbWVkaWEtYW5hbHl0aWNzXFxcXGFwcFxcXFxhcGlcXFxccG9zdHNcXFxcZmVlZFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Ffeed%2Froute&page=%2Fapi%2Fposts%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Ffeed%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Ffeed%2Froute&page=%2Fapi%2Fposts%2Ffeed%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Ffeed%2Froute.js&appDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cyuvra%5CDocuments%5CGitHub%5C2215002063%5Csocial-media-analytics&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();