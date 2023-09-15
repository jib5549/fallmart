/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./models/department.js":
/*!******************************!*\
  !*** ./models/department.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const Schema = mongoose.Schema;
const departmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  }]
});
module.exports = mongoose.model('Department', departmentSchema);

/***/ }),

/***/ "./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
__webpack_require__(/*! ./department */ "./models/department.js");
__webpack_require__(/*! ./subCategory */ "./models/subCategory.js");
const productSchema = __webpack_require__(/*! ./productSchema */ "./models/productSchema.js");
module.exports = mongoose.model('Product', productSchema);

/***/ }),

/***/ "./models/productSchema.js":
/*!*********************************!*\
  !*** ./models/productSchema.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  manufacturer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reviews: [{
    type: String
  }]
});
module.exports = productSchema;

/***/ }),

/***/ "./models/subCategory.js":
/*!*******************************!*\
  !*** ./models/subCategory.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const mongoose = __webpack_require__(/*! mongoose */ "./node_modules/mongoose/dist/browser.umd.js");
const department = __webpack_require__(/*! ./department */ "./models/department.js");
const Schema = mongoose.Schema;
const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
});
module.exports = mongoose.model('SubCategory', subcategorySchema);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_DepartmentList_DepartmentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DepartmentList/DepartmentList */ "./src/components/DepartmentList/DepartmentList.js");
/* harmony import */ var _components_HomeImage_HomeImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HomeImage/HomeImage */ "./src/components/HomeImage/HomeImage.js");
/* harmony import */ var _pages_SubcategoryPage_SubcategoryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/SubcategoryPage/SubcategoryPage */ "./src/pages/SubcategoryPage/SubcategoryPage.js");
/* harmony import */ var _utilities_dept_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/dept-api */ "./src/utilities/dept-api.js");
/* harmony import */ var _components_WishList_WishList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/WishList/WishList */ "./src/components/WishList/WishList.js");
/* harmony import */ var _pages_CheckOutPage_CheckoutOutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/CheckOutPage/CheckoutOutPage */ "./src/pages/CheckOutPage/CheckoutOutPage.js");
/* harmony import */ var _pages_ProductPage_ProductPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ProductPage/ProductPage */ "./src/pages/ProductPage/ProductPage.js");
/* harmony import */ var _pages_OrderHistoryPage_OrderHistoryPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/OrderHistoryPage/OrderHistoryPage */ "./src/pages/OrderHistoryPage/OrderHistoryPage.js");
/* harmony import */ var _components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/SearchResults/SearchResults */ "./src/components/SearchResults/SearchResults.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





// import './styles.scss';








function App() {
  const [departments, setDepartments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [favoriteCount, setFavoriteCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [itemCount, setItemCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [showWishList, setShowWishList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showFallMart, setShowFallmart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchDepartments = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        try {
          const response = yield _utilities_dept_api__WEBPACK_IMPORTED_MODULE_11__.listDept();
          setDepartments(response);
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchDepartments() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchDepartments();
  }, []);
  const handleChangeWishlist = () => {
    setShowWishList(!showWishList);
  };
  const handleChangeCart = () => {
    setShowCart(!showCart);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].App
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].sticky
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    favoriteCount: favoriteCount,
    setShowWishList: handleChangeWishlist,
    itemCount: itemCount,
    setShowCart: handleChangeCart,
    showFallMart: showFallMart,
    setShowFallMart: setShowFallmart,
    searchResults: searchResults,
    setSearchResults: setSearchResults
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DepartmentList_DepartmentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    departments: departments
  })), !showWishList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HomeImage_HomeImage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/product/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_ProductPage_ProductPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setFavoriteCount: setFavoriteCount,
      setItemCount: setItemCount
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/:name",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_SubcategoryPage_SubcategoryPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setFavoriteCount: setFavoriteCount,
      favoriteCount: favoriteCount,
      showWishList: showWishList,
      setShowWishList: handleChangeWishlist,
      setItemCount: setItemCount,
      itemCount: itemCount
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/checkout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CheckOutPage_CheckoutOutPage__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/history",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_OrderHistoryPage_OrderHistoryPage__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/search",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_10__["default"], {
      searchResults: searchResults,
      setFavoriteCount: setFavoriteCount,
      favoriteCount: favoriteCount,
      itemCount: itemCount,
      setItemCount: setItemCount
    })
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WishList_WishList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setShowWishList: handleChangeWishlist
  }));
}

/***/ }),

/***/ "./src/components/CartItem/CartItem.js":
/*!*********************************************!*\
  !*** ./src/components/CartItem/CartItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem.module.scss */ "./src/components/CartItem/CartItem.module.scss");


function CartItem(_ref) {
  let {
    cartItem,
    isPaid,
    handleChangeQty
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: cartItem.item.image,
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkoutImage,
    alt: cartItem.item.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, cartItem.item.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].name
  }, cartItem.item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description
  }, cartItem.item.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonPlusMinus
  }, !isPaid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonMinus,
    onClick: () => handleChangeQty(cartItem.item._id, cartItem.qty - 1)
  }, "\u2014"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].numberOfItems
  }, cartItem.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonPlus,
    onClick: () => handleChangeQty(cartItem.item._id, cartItem.qty + 1)
  }, "+")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].numberOfItems
  }, cartItem.qty))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice
  }, "$", cartItem.extPrice.toFixed(2)));
}

/***/ }),

/***/ "./src/components/DepartmentList/DepartmentList.js":
/*!*********************************************************!*\
  !*** ./src/components/DepartmentList/DepartmentList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DepartmentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepartmentList.module.scss */ "./src/components/DepartmentList/DepartmentList.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



function DepartmentList(_ref) {
  let {
    departments
  } = _ref;
  const [hoveredDept, setHoveredDept] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isModalActive, setIsModalActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth <= 810);
  const [showDropDown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth >= 810);
  const handleMouseEnter = dept => {
    setHoveredDept(dept);
    setIsModalActive(true);
    setTimeout(() => {
      const lines = document.querySelectorAll(".".concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].line));
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active);
        }, index * 200);
      });
    }, 100);
  };
  const handleMouseLeave = () => {
    setHoveredDept(null);
  };
  const handleButtonClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleResize = () => {
    setShowButton(window.innerWidth <= 810);
    setShowDropDown(window.innerWidth >= 810);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].DepartmentContent
  }, showButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleButtonClick,
    className: "".concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listButton, " ").concat(showDropDown ? _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "img/menu.png",
    alt: ""
  })), showDropDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].DepartmentList,
    onMouseLeave: handleMouseLeave
  }, departments.map(dept => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: dept._id,
    onMouseEnter: () => handleMouseEnter(dept),
    className: _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, dept.name, isModalActive && hoveredDept === dept ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modal, " ").concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active),
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].SubcategoryList
  }, hoveredDept.subcategories.map((subcategory, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: subcategory._id,
    className: "".concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalText, " ").concat(_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].line),
    style: {
      animationDelay: "".concat(index * 0.2, "s")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: subcategory.name.toLowerCase().replace(/\s+/g, '-')
  }, subcategory.name))))) : null))));
}

/***/ }),

/***/ "./src/components/FallPlus/FallPlus.js":
/*!*********************************************!*\
  !*** ./src/components/FallPlus/FallPlus.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FallPlus)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function FallPlus() {
  return /*#__PURE__*/React.createElement("form", {
    action: "/api/membership",
    method: "POST"
  }, /*#__PURE__*/React.createElement("input", {
    name: "phone",
    placeholder: "Enter Your phone number"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Sign Up"));
}

/***/ }),

/***/ "./src/components/HomeImage/HomeImage.js":
/*!***********************************************!*\
  !*** ./src/components/HomeImage/HomeImage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeImage.module.scss */ "./src/components/HomeImage/HomeImage.module.scss");


function HomeImage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/apotheke.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Apotheke Charcoal-Scented Candle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$30"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/Champagnes.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Champagne flutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$75"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/coffeemaker.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Melitta Vision White 12-Cup Drip Coffee Maker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$600+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$400"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/lanterns.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Les Jardins Blade Weathered Teak Lantern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$220+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$130"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/pillow.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Pillow Set"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$180+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$120"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "img/toster.jpg",
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].galleryImage,
    alt: "Image 6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTextContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageVeryTopText
  }, "Smeg Matte Jade Green 2-Slice Toaster"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageTopText
  }, "$600+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imageBottomText
  }, "$500"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeImage);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/product */ "./models/product.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_product__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FallPlus_FallPlus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FallPlus/FallPlus */ "./src/components/FallPlus/FallPlus.js");
/* harmony import */ var _utilities_products_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/products-api */ "./src/utilities/products-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









function NavBar(_ref) {
  let {
    favoriteCount,
    setShowWishList,
    showWishList,
    itemCount,
    setShowCart,
    showFallMart,
    setShowFallMart,
    searchResults,
    setSearchResults
  } = _ref;
  const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSignInModalOpen, setIsSignInModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // state to store search results

  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  const handleSearch = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (evt) {
      try {
        // Call your searchProducts function or API request here
        const response = yield _utilities_products_api__WEBPACK_IMPORTED_MODULE_6__.getAllProducts();
        const searchProducts = response.filter(product => product.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        setSearchResults(searchProducts);
        navigate('/search');
        setSearchValue('');
      } catch (error) {
        console.error('Error searching for products:', error);
      }
    });
    return function handleSearch(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const userIsLoggedIn = localStorage.getItem('authToken') !== null;
    setIsLoggedIn(userIsLoggedIn);
    console.log('isLoggedIn:', userIsLoggedIn);
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    console.log('Logged out');
  };
  const handleSignInClick = () => {
    setIsSignInModalOpen(true); // Open the modal when the button is clicked
  };

  const handleCloseModal = evt => {
    setIsSignInModalOpen(false); // Close the modal
  };

  const handleCartClick = () => {
    navigate('/checkout');
  };
  const handlePlusClick = () => {
    setShowFallMart(!showFallMart);
  };
  const handleUserInput = evt => {
    setSearchValue(evt.target.value);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search when Enter key is pressed
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_core
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo_core
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo_core
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://i.imgur.com/Hbvi85m.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].search_container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_searchInput,
    type: "text",
    placeholder: "Search everything at Fallmart online and in store",
    value: searchValue,
    onChange: handleUserInput,
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].search_button,
    onClick: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSearch, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].right_core
  }, isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].orders
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/history"
  }, " Orders "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " \xA0 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].humanicon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://i.imgur.com/l3cX5Ev.png",
    alt: "",
    width: "23",
    height: "23"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://i.imgur.com/gXCgwJG.jpg",
    alt: "",
    width: "30",
    height: "30"
  })), isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].favorites,
    onClick: () => {
      setShowWishList();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].favorite_icon_container
  }, favoriteCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].favorite_count
  }, favoriteCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://i.imgur.com/UpoCDeP.png",
    alt: "",
    width: "20",
    height: "20"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cart,
    onClick: handleCartClick
  }, itemCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item_count
  }, itemCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://i.imgur.com/TWI8Zuk.png",
    alt: "",
    width: "20",
    height: "20"
  })), isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].member,
    onClick: handlePlusClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaPlus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].account
  }, isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].signbutton,
    onClick: handleLogOut
  }, "Log Out") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].signbutton,
    onClick: handleSignInClick
  }, "Sign In"))), isSignInModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalOverlay
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close,
    onClick: handleCloseModal
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeModal: handleCloseModal,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn
  })))), showFallMart && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FallPlus_FallPlus__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/OrderDetail/OrderDetail.js":
/*!***************************************************!*\
  !*** ./src/components/OrderDetail/OrderDetail.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderDetail.module.scss */ "./src/components/OrderDetail/OrderDetail.module.scss");
/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CartItem/CartItem */ "./src/components/CartItem/CartItem.js");
/* harmony import */ var _utilities_coupons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/coupons */ "./src/utilities/coupons.js");
/* harmony import */ var _utilities_coupons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utilities_coupons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/orders-api */ "./src/utilities/orders-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function OrderDetail(_ref) {
  let {
    order,
    updateOrder,
    handleChangeQty,
    handleCheckout
  } = _ref;
  if (!order || !order.cartItems) return null;
  const cartItems = order.cartItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item._id,
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cartItem: item,
    isPaid: order.isPaid,
    handleChangeQty: handleChangeQty
  })));
  const [isMemberQuestionVisible, setIsQuestionVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInputFormVisible, setIsInputFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const showForm = () => {
    setIsInputFormVisible(true);
  };
  const showMemberQuestion = () => {
    setIsQuestionVisible(true);
  };
  const hideMemberQuestion = () => {
    setIsQuestionVisible(false);
    setIsInputFormVisible(false);
  };
  const handleChange = e => {
    setText(e.target.value);
  };
  const changeTotal = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__.applyCoupon();
    });
    return function changeTotal(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, order.isPaid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ORDER ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "smaller"
  }, order.orderId)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "NEW ORDER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", new Date(order.updatedAt).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, order.cartItems.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, cartItems, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wholeCheckout
  }, order.isPaid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkoutButton,
    onClick: handleCheckout,
    disabled: !order.cartItems.length
  }, "CHECKOUT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].estimatedTotal
  }, "Total (", order.totalQty, " items)", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].totalCost
  }, ' ', "$", order.orderTotal.toFixed(2)))), order.isPaid ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, isMemberQuestionVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainBox
  }, "Are you a Walmart Plus member?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkbox,
    onClick: showForm
  }), ' ', "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkbox,
    onClick: hideMemberQuestion
  }), ' ', "No"), isInputFormVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: changeTotal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "text",
    placeholder: "Enter your phone number",
    value: text,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].memberButton,
    onClick: showMemberQuestion
  }, "Are you a member?"))) : null));
}

/***/ }),

/***/ "./src/components/OrderListItem/OrderListItem.js":
/*!*******************************************************!*\
  !*** ./src/components/OrderListItem/OrderListItem.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderListItem)
/* harmony export */ });
/* harmony import */ var _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderListItem.module.scss */ "./src/components/OrderListItem/OrderListItem.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function OrderListItem(_ref) {
  let {
    order,
    isSelected,
    handleSelectOrder
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].OrderListItem, " ").concat(isSelected ? _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].selected : ''),
    onClick: () => handleSelectOrder(order)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Order Id: ", /*#__PURE__*/React.createElement("span", {
    className: "smaller"
  }, order.orderId)), /*#__PURE__*/React.createElement("div", {
    className: "smaller"
  }, new Date(order.updatedAt).toLocaleDateString())), /*#__PURE__*/React.createElement("div", {
    className: _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].alignrt
  }, /*#__PURE__*/React.createElement("div", null, "$", order.orderTotal.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: _OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smaller
  }, order.totalQty, " Item", order.totalQty > 1 ? 's' : ''))));
}

/***/ }),

/***/ "./src/components/OrderList/OrderList.js":
/*!***********************************************!*\
  !*** ./src/components/OrderList/OrderList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderList)
/* harmony export */ });
/* harmony import */ var _OrderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OrderListItem/OrderListItem */ "./src/components/OrderListItem/OrderListItem.js");
/* harmony import */ var _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderList.module.scss */ "./src/components/OrderList/OrderList.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function OrderList(_ref) {
  let {
    orders,
    activeOrder,
    handleSelectOrder
  } = _ref;
  const orderItems = orders.map(o => /*#__PURE__*/React.createElement(_OrderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
    order: o,
    isSelected: o === activeOrder,
    handleSelectOrder: handleSelectOrder,
    key: o._id
  }));
  return /*#__PURE__*/React.createElement("main", {
    className: _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].OrderList
  }, orderItems.length ? orderItems : /*#__PURE__*/React.createElement("span", {
    className: _OrderList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].noOrders
  }, "No Previous Orders"));
}

/***/ }),

/***/ "./src/components/ProductTile/ProductTile.js":
/*!***************************************************!*\
  !*** ./src/components/ProductTile/ProductTile.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTile.module.scss */ "./src/components/ProductTile/ProductTile.module.scss");
/* harmony import */ var _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/wishlists-api */ "./src/utilities/wishlists-api.js");
/* harmony import */ var _utilities_orders_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/orders-api */ "./src/utilities/orders-api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function ProductTile(_ref) {
  let {
    product,
    setFavoriteCount,
    favoriteCount,
    setItemCount,
    itemCount
  } = _ref;
  const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [wishlistId, setWishlistId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [itemId, setItemId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchWishlistId() {
      return _fetchWishlistId.apply(this, arguments);
    }
    function _fetchWishlistId() {
      _fetchWishlistId = _asyncToGenerator(function* () {
        try {
          const wishlist = yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_2__.createWishlist();
          setWishlistId(wishlist._id);
          setIsLoading(false);
        } catch (error) {
          console.log('Error creating wishlist', error);
          setIsLoading(false);
        }
      });
      return _fetchWishlistId.apply(this, arguments);
    }
    fetchWishlistId();
  }, []);
  const toggleFavorite = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (evt) {
      if (!wishlistId || isLoading) {
        return;
      }
      setIsFavorite(previousFavorite => !previousFavorite);
      if (!isFavorite) {
        setFavoriteCount(prevFavoriteCount => prevFavoriteCount + 1);
        yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_2__.addProductToWishlist(wishlistId, product._id);
      } else {
        setFavoriteCount(prevFavoriteCount => prevFavoriteCount - 1);
        yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_2__.removeProductFromWishlist(wishlistId, product._id);
      }
    });
    return function toggleFavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  const handleAddToCart = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        const cart = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_3__.getCart();
        const existingItem = cart.cartItems.find(item => {
          item.item._id === product._id;
        });
        if (existingItem) {
          yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_3__.setItemQtyInCart(product._id, existingItem.qty + 1);
        } else {
          yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_3__.addItemToCart(product._id);
        }
        setItemCount(itemCount + 1);
      } catch (error) {
        console.log('Error adding item to cart:', error);
      }
    });
    return function handleAddToCart() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_tile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].favorite_button,
    onClick: toggleFavorite
  }, isFavorite ? '❤️' : '🤍'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_name
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/product/".concat(product._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: product.image,
    height: '110px',
    width: '100px',
    alt: product.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_price
  }, "$", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].product_sold
  }, "Sold by: ", product.manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cart_button,
    onClick: handleAddToCart
  }, "ADD TO CART"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTile);

/***/ }),

/***/ "./src/components/SearchResults/SearchResults.js":
/*!*******************************************************!*\
  !*** ./src/components/SearchResults/SearchResults.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResults)
/* harmony export */ });
/* harmony import */ var _ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ProductTile/ProductTile */ "./src/components/ProductTile/ProductTile.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function SearchResults(_ref) {
  let {
    searchResults,
    setFavoriteCount,
    favoriteCount,
    itemCount,
    setItemCount
  } = _ref;
  const productTiles = searchResults.map(product => /*#__PURE__*/React.createElement(_ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: product._id,
    product: product,
    setFavoriteCount: setFavoriteCount,
    favoriteCount: favoriteCount,
    itemCount: itemCount,
    setItemCount: setItemCount
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, productTiles);
}

/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.module.scss */ "./src/components/SignUpForm/SignUpForm.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



class SignUpForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    var _this;
    super(...arguments);
    _this = this;
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      signInEmail: '',
      // Added for sign-in
      signInPassword: '',
      // Added for sign-in
      error: ''
    };
    this.handleChange = evt => {
      const {
        name,
        value
      } = evt.target;
      this.setState({
        [name]: value,
        error: ''
      });
    };
    this.handleSignUp = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (evt) {
        evt.preventDefault();
        const {
          name,
          email,
          password,
          confirmPassword
        } = _this.state;
        try {
          const formData = {
            name,
            email,
            password
          };
          const user = yield (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_2__.signUp)(formData);
          console.log(user);
          //this.props.setUser(user);
          _this.props.closeModal();
        } catch (error) {
          console.error(error); // Log the error for debugging
          _this.setState({
            error: 'Sign Up Failed - Try Again'
          });
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.handleSignIn = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (evt) {
        evt.preventDefault();
        const {
          signInEmail,
          signInPassword
        } = _this.state;
        try {
          const formData = {
            email: signInEmail,
            password: signInPassword
          };
          const user = yield (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_2__.signIn)(formData);

          // Assuming signIn sets the authentication token in localStorage
          localStorage.setItem('authToken', user.authToken);
          console.log(user); // Verify that user data is correctly logged
          _this.props.closeModal();

          // Update isLoggedIn state here
          console.log(_this.props);
          _this.props.setIsLoggedIn(true);
        } catch (error) {
          console.error(error); // Log the error for debugging
          _this.setState({
            error: 'Sign In Failed - Try Again'
          });
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    // switching windows when clicking signin
    this.handleSignInClick = () => {
      this.setState({
        confirmPassword: ''
      }); // Clear confirmPassword when switching panels
      const container = document.getElementById('container');
      container.classList.remove(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['right-panel-active']);
    };
    // switching windows when clicking signup
    this.handleSignUpClick = () => {
      this.setState({
        confirmPassword: ''
      }); // Clear confirmPassword when switching panels
      const container = document.getElementById('container');
      container.classList.add(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['right-panel-active']);
    };
  }
  componentDidMount() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }
  render() {
    const disable = this.state.password !== this.state.confirmPassword;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].main
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close,
      onClick: this.props.closeModal
    }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container,
      id: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['form-container'], " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['sign-up-container'])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      action: "#",
      onSubmit: this.handleSignUp
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['social-container']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-facebook-f fa-fw"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-google-plus-g fa-fw"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-linkedin-in fa-fw"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "or use your email for registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: "Name",
      value: this.state.name,
      name: "name",
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "email",
      placeholder: "Email",
      value: this.state.email,
      name: "email",
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "password",
      placeholder: "Password",
      name: "password",
      value: this.state.password,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
      value: this.state.confirmPassword,
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "submit",
      disabled: disable,
      onClick: this.handleSignUp,
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalButton
    }, "Create Account"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['form-container'], " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['sign-in-container'])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      action: "#",
      onSubmit: this.handleSignIn
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['social-container']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-facebook-f fa-fw"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-google-plus-g fa-fw"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "social"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fa-brands fa-linkedin-in fa-fw"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "or use your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "email",
      placeholder: "Email",
      value: this.state.signInEmail,
      name: "signInEmail",
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "password",
      placeholder: "Password",
      value: this.state.signInPassword,
      name: "signInPassword",
      onChange: this.handleChange,
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: ''
    }, "Forgot your password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleSignIn,
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalButton
    }, "Sign In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['overlay-container']
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].overlay
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['overlay-panel'], " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['overlay-left'])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome Back!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To keep connected with us please login with your personal info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalButton, " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghost),
      id: "signIn",
      onClick: this.handleSignInClick
    }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['overlay-panel'], " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['overlay-right'])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello, Friend!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Enter your personal details and start the journey with us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "".concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modalButton, " ").concat(_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghost),
      id: "signUp",
      onClick: this.handleSignUpClick
    }, "Sign Up"))))));
  }
}

/***/ }),

/***/ "./src/components/WishList/WishList.js":
/*!*********************************************!*\
  !*** ./src/components/WishList/WishList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/wishlists-api */ "./src/utilities/wishlists-api.js");
/* harmony import */ var _ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductTile/ProductTile */ "./src/components/ProductTile/ProductTile.js");
/* harmony import */ var _WishList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WishList.module.scss */ "./src/components/WishList/WishList.module.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function WishList(_ref) {
  let {
    setShowWishList
  } = _ref;
  const [favoriteProducts, setFavoriteProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchFavoriteProducts() {
      return _fetchFavoriteProducts.apply(this, arguments);
    }
    function _fetchFavoriteProducts() {
      _fetchFavoriteProducts = _asyncToGenerator(function* () {
        try {
          const favoriteProductsData = yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_3__.viewFavoriteProducts();
          setFavoriteProducts(favoriteProductsData);
          setIsLoading(false);
        } catch (error) {
          console.log('error', error);
        }
      });
      return _fetchFavoriteProducts.apply(this, arguments);
    }
    fetchFavoriteProducts();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _WishList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].wishlistcontainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "My Wishlist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setShowWishList();
    }
  }, "Exit"), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...") : favoriteProducts.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Your wishlist is empty.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _WishList_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].productList
  }, favoriteProducts.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: product._id,
    product: product
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const rootElement = document.getElementById('app');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/pages/CheckOutPage/CheckoutOutPage.js":
/*!***************************************************!*\
  !*** ./src/pages/CheckOutPage/CheckoutOutPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckoutOutPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckOutPage.module.scss */ "./src/pages/CheckOutPage/CheckOutPage.module.scss");
/* harmony import */ var _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/orders-api */ "./src/utilities/orders-api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/OrderDetail/OrderDetail */ "./src/components/OrderDetail/OrderDetail.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function CheckoutOutPage(props) {
  const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchCart = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        try {
          const cart = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__.getCart();
          //console.log(cart);
          setCart(cart);
        } catch (error) {
          console.log('Error getting your cart', error);
        }
      });
      return function fetchCart() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchCart();
  }, []);
  function handleAddToOrder(_x) {
    return _handleAddToOrder.apply(this, arguments);
  }
  function _handleAddToOrder() {
    _handleAddToOrder = _asyncToGenerator(function* (productId) {
      const updatedCart = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__.addItemToCart(productId);
      setCart(updatedCart);
    });
    return _handleAddToOrder.apply(this, arguments);
  }
  function handleChangeQty(_x2, _x3) {
    return _handleChangeQty.apply(this, arguments);
  }
  function _handleChangeQty() {
    _handleChangeQty = _asyncToGenerator(function* (productId, newQty) {
      const updatedCart = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__.setItemQtyInCart(productId, newQty);
      setCart(updatedCart);
    });
    return _handleChangeQty.apply(this, arguments);
  }
  function handleCheckout() {
    return _handleCheckout.apply(this, arguments);
  }
  function _handleCheckout() {
    _handleCheckout = _asyncToGenerator(function* () {
      yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_4__.checkout();
      navigate('/account/order-tracking');
    });
    return _handleCheckout.apply(this, arguments);
  }
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h2", null, "CHECKOUT"), /*#__PURE__*/React.createElement(_components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    order: cart,
    updateOrder: setCart,
    handleChangeQty: handleChangeQty,
    handleCheckout: handleCheckout
  }));
}

/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.js":
/*!********************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderHistoryPage.module.scss */ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/orders-api */ "./src/utilities/orders-api.js");
/* harmony import */ var _components_OrderList_OrderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/OrderList/OrderList */ "./src/components/OrderList/OrderList.js");
/* harmony import */ var _components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/OrderDetail/OrderDetail */ "./src/components/OrderDetail/OrderDetail.js");
/* harmony import */ var _CheckOutPage_CheckoutOutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CheckOutPage/CheckoutOutPage */ "./src/pages/CheckOutPage/CheckoutOutPage.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function OrderHistoryPage(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const [orders, setOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [activeOrder, setActiveOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Load previous orders (paid)
    function fetchOrderHistory() {
      return _fetchOrderHistory.apply(this, arguments);
    }
    function _fetchOrderHistory() {
      _fetchOrderHistory = _asyncToGenerator(function* () {
        const orders = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__.getOrderHistory();
        setOrders(orders);
        // If no orders, activeOrder will be set to null below
        setActiveOrder(orders[0] || null);
      });
      return _fetchOrderHistory.apply(this, arguments);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Your Order History"), /*#__PURE__*/React.createElement("main", {
    className: _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].OrderHistoryPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].orderList
  }, /*#__PURE__*/React.createElement(_components_OrderList_OrderList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    orders: orders,
    activeOrder: activeOrder,
    handleSelectOrder: handleSelectOrder
  })), /*#__PURE__*/React.createElement("div", {
    className: _OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].activeOrder
  }, /*#__PURE__*/React.createElement(_components_OrderDetail_OrderDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    order: activeOrder
  }))));
}

/***/ }),

/***/ "./src/pages/ProductPage/ProductPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProductPage/ProductPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPage.module.scss */ "./src/pages/ProductPage/ProductPage.module.scss");
/* harmony import */ var _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/orders-api */ "./src/utilities/orders-api.js");
/* harmony import */ var _utilities_products_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/products-api */ "./src/utilities/products-api.js");
/* harmony import */ var _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/wishlists-api */ "./src/utilities/wishlists-api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






function ProductPage(_ref) {
  let {
    setFavoriteCount
  } = _ref;
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isFavorite, setIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [wishlistId, setWishlistId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function getProduct() {
      return _getProduct.apply(this, arguments);
    }
    function _getProduct() {
      _getProduct = _asyncToGenerator(function* () {
        try {
          const data = yield _utilities_products_api__WEBPACK_IMPORTED_MODULE_3__.getProductById(id);
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
          setProduct(null);
        }
      });
      return _getProduct.apply(this, arguments);
    }
    function fetchWishlistId() {
      return _fetchWishlistId.apply(this, arguments);
    }
    function _fetchWishlistId() {
      _fetchWishlistId = _asyncToGenerator(function* () {
        try {
          const wishlist = yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_4__.createWishlist();
          setWishlistId(wishlist._id);
          setIsLoading(false);
        } catch (error) {
          console.log('Error creating wishlist', error);
          setIsLoading(false);
        }
      });
      return _fetchWishlistId.apply(this, arguments);
    }
    fetchWishlistId();
    getProduct();
  }, [id]);
  const toggleFavorite = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (evt) {
      if (!wishlistId || isLoading) {
        return;
      }
      setIsFavorite(previousFavorite => !previousFavorite);
      if (!isFavorite) {
        try {
          setFavoriteCount(prevFavoriteCount => prevFavoriteCount + 1);
          yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_4__.addProductToWishlist(wishlistId, product._id);
        } catch (error) {
          console.log(error);
        }
      } else {
        setFavoriteCount(prevFavoriteCount => prevFavoriteCount - 1);
        yield _utilities_wishlists_api__WEBPACK_IMPORTED_MODULE_4__.removeProductFromWishlist(wishlistId, product._id);
      }
    });
    return function toggleFavorite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  const handleAddToCart = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        const cart = yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__.getCart();
        const existingItem = cart.cartItems.find(item => {
          item.item._id === product._id;
        });
        if (existingItem) {
          console.log('attempting to add existing item');
          yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__.setItemQtyInCart(product._id, existingItem.qty + 1);
        } else {
          console.log('attempting to add new item ', product._id);
          yield _utilities_orders_api__WEBPACK_IMPORTED_MODULE_5__.addItemToCart(product._id);
        }
        setItemCount(itemCount + 1);
      } catch (error) {
        console.log('Error adding item to cart:', error);
      }
    });
    return function handleAddToCart() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productPage
  }, product ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productTile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: toggleFavorite
  }, isFavorite ? '❤️' : '🤍'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productImage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: product.image,
    alt: product.name,
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productImage
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productTitle
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productPrice
  }, "$", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productDescription
  }, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productManufacturer
  }, "By: ", product.manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cart_button,
    onClick: handleAddToCart
  }, "ADD TO CART"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productReviews
  }, "Reviews: ", product.reviews))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading..."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

/***/ }),

/***/ "./src/pages/SubcategoryPage/SubcategoryPage.js":
/*!******************************************************!*\
  !*** ./src/pages/SubcategoryPage/SubcategoryPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SubcategoryPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubcategoryPage.module.scss */ "./src/pages/SubcategoryPage/SubcategoryPage.module.scss");
/* harmony import */ var _utilities_products_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/products-api */ "./src/utilities/products-api.js");
/* harmony import */ var _utilities_subCategories_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/subCategories-api */ "./src/utilities/subCategories-api.js");
/* harmony import */ var _components_ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductTile/ProductTile */ "./src/components/ProductTile/ProductTile.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/**
 * Converts a string from a format like "living-room-furniture"
 * to "Living Room Furniture" to match the subcategory name.
 * @param {string} [s] - The string to convert
 */
function convertPathToSubcatgeoryName(s) {
  return s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function SubcategoryPage(_ref) {
  let {
    setFavoriteCount,
    favoriteCount,
    setShowWishList,
    setItemCount,
    itemCount
  } = _ref;
  const {
    name
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  console.log({
    name
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function getProducts() {
      return _getProducts.apply(this, arguments);
    }
    function _getProducts() {
      _getProducts = _asyncToGenerator(function* () {
        const subcategoryName = convertPathToSubcatgeoryName(name);
        const subcategories = yield _utilities_subCategories_api__WEBPACK_IMPORTED_MODULE_4__.listAllSubcategories();
        console.log('Subcategories:', subcategories);
        const subcategoryId = subcategories.find(e => e.name === subcategoryName)._id || 'unknown';
        const data = yield _utilities_products_api__WEBPACK_IMPORTED_MODULE_5__.getProductsBySubCategoryId(subcategoryId);
        console.log('Products', data);
        setProducts(data);
      });
      return _getProducts.apply(this, arguments);
    }
    getProducts();
  }, [name]);
  return /*#__PURE__*/React.createElement("div", {
    className: _SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].FurniturePage
  }, /*#__PURE__*/React.createElement("center", null, products.map(product => /*#__PURE__*/React.createElement(_components_ProductTile_ProductTile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: product._id,
    product: product,
    setFavoriteCount: setFavoriteCount,
    favoriteCount: favoriteCount,
    setItemCount: setItemCount,
    itemCount: itemCount
  }))));
}

/***/ }),

/***/ "./src/utilities/coupons.js":
/*!**********************************!*\
  !*** ./src/utilities/coupons.js ***!
  \**********************************/
/***/ ((module) => {

const coupons = [];
module.exports = coupons;

/***/ }),

/***/ "./src/utilities/dept-api.js":
/*!***********************************!*\
  !*** ./src/utilities/dept-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listDept: () => (/* binding */ listDept)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/departments';
function listDept() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/showdepts"), 'GET');
}

/***/ }),

/***/ "./src/utilities/orders-api.js":
/*!*************************************!*\
  !*** ./src/utilities/orders-api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToCart: () => (/* binding */ addItemToCart),
/* harmony export */   applyCoupon: () => (/* binding */ applyCoupon),
/* harmony export */   checkout: () => (/* binding */ checkout),
/* harmony export */   getCart: () => (/* binding */ getCart),
/* harmony export */   getOrderHistory: () => (/* binding */ getOrderHistory),
/* harmony export */   setItemQtyInCart: () => (/* binding */ setItemQtyInCart)
/* harmony export */ });
/* unused harmony export removeFromCart */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
function getCart() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart"));
}

// Add an item to the cart
function addItemToCart(itemId) {
  // Just send itemId for best security (no pricing)
  console.log({
    itemId
  });
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/items/").concat(itemId), 'POST');
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
function setItemQtyInCart(itemId, newQty) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/qty"), 'PUT', {
    itemId,
    newQty
  });
}

// Updates the order's (cart's) isPaid property to true
function checkout() {
  // Changing data on the server, so make it a POST request
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/checkout"), 'POST');
}

// Return all paid orders for the logged in user
function getOrderHistory() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/history"));
}

//
function applyCoupon() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/coupon"), 'PUT');
}
function removeFromCart(itemId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/cart/remove"), 'DELETE', {
    itemId
  });
}

/***/ }),

/***/ "./src/utilities/products-api.js":
/*!***************************************!*\
  !*** ./src/utilities/products-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllProducts: () => (/* binding */ getAllProducts),
/* harmony export */   getProductById: () => (/* binding */ getProductById),
/* harmony export */   getProductsBySubCategoryId: () => (/* binding */ getProductsBySubCategoryId)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/products';
function getProductsBySubCategoryId(subcategoryId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(subcategoryId));
}
function getProductById(productId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/product/").concat(productId));
}
function getAllProducts() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/"));
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function sendRequest(_x) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator(function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return function* () {
      // Fetch takes an optional options object as the 2nd argument
      // used to include a data payload, set headers, etc.
      console.log({
        url
      });
      const options = {
        method
      };
      if (payload) {
        options.headers = {
          'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(payload);
      }
      const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
      if (token) {
        // Ensure headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = "Bearer ".concat(token);
      }
      const res = yield fetch(url, options);
      // res.ok will be false if the status code set to 4xx in the controller action
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }();
  });
  return _sendRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/utilities/subCategories-api.js":
/*!********************************************!*\
  !*** ./src/utilities/subCategories-api.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listAllSubcategories: () => (/* binding */ listAllSubcategories)
/* harmony export */ });
/* unused harmony export listAllSubcategoriesByDeptId */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = 'api/subcategories';
function listAllSubcategoriesByDeptId(departmentId) {
  // TODO: broken, remove deparment/:
  //got it
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(departmentId), 'GET');
}
function listAllSubcategories() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'GET');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signIn: () => (/* binding */ signIn),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function signIn(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function update(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/update"), 'PUT', userData);
}

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   signIn: () => (/* binding */ signIn),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* unused harmony exports getUser, logOut, update */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function signUp(_x) {
  return _signUp.apply(this, arguments);
}
function _signUp() {
  _signUp = _asyncToGenerator(function* (userData) {
    // Delete the network request code to the
    // users-api.js module which will ultimately
    // return the JWT
    const token = yield _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getUser();
  });
  return _signUp.apply(this, arguments);
}
function signIn(_x2) {
  return _signIn.apply(this, arguments);
}
function _signIn() {
  _signIn = _asyncToGenerator(function* (credentials) {
    const token = yield _users_api__WEBPACK_IMPORTED_MODULE_0__.signIn(credentials);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getUser();
  });
  return _signIn.apply(this, arguments);
}
function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
function logOut() {
  localStorage.removeItem('token');
}
function update(_x3) {
  return _update.apply(this, arguments);
}
function _update() {
  _update = _asyncToGenerator(function* (userData) {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('User not authenticated');
      }
      yield _users_api__WEBPACK_IMPORTED_MODULE_0__.update(userData);
      return getUser();
    } catch (error) {
      throw new Error('Error updating user data');
    }
  });
  return _update.apply(this, arguments);
}

/***/ }),

/***/ "./src/utilities/wishlists-api.js":
/*!****************************************!*\
  !*** ./src/utilities/wishlists-api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProductToWishlist: () => (/* binding */ addProductToWishlist),
/* harmony export */   createWishlist: () => (/* binding */ createWishlist),
/* harmony export */   removeProductFromWishlist: () => (/* binding */ removeProductFromWishlist),
/* harmony export */   viewFavoriteProducts: () => (/* binding */ viewFavoriteProducts)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/wishlists';
function addProductToWishlist(wishlistId, productId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(wishlistId, "/add/").concat(productId), 'PUT');
}
function removeProductFromWishlist(wishlistId, productId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(wishlistId, "/remove/").concat(productId), 'DELETE');
}
function viewFavoriteProducts() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/favorites"));
}
function createWishlist() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/create"), 'POST');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IMqMrT2eGOGeFiLbCAGg {
  font-family: sans-serif;
  text-align: center;
}

body {
  margin: 0;
  height: 100vh;
}

.dKaLL8wUiJSHCggPi5rr {
  position: sticky;
  top: 0;
  z-index: 2000;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,SAAA;EACA,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,MAAA;EACA,aAAA;AACJ","sourcesContent":[".App {\r\n    font-family: sans-serif;\r\n    text-align: center;\r\n}\r\n  \r\nbody {\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n\r\n.sticky {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 2000;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`,
	"sticky": `dKaLL8wUiJSHCggPi5rr`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.NE9qwStvhzSPuybFf6Oi {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 2rem;
  background-color: white;
  border-top-style: solid;
  border-top-width: 1px;
  color: #f1f1f2;
}
.NE9qwStvhzSPuybFf6Oi .ZNNwr_CvdOwuRFvKPFXQ {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  margin-top: 2rem;
}
.NE9qwStvhzSPuybFf6Oi div {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.NE9qwStvhzSPuybFf6Oi div div {
  font-size: 16px;
  color: black;
}
.NE9qwStvhzSPuybFf6Oi .uEZLhAuEDxUboFHsCEVw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  transition: background-color 0.3s ease;
  font-size: 20px;
  border-radius: 9999px;
  border-style: solid;
  background-color: #fff;
  border-color: #babbbe;
  border-width: 1px;
  padding: 0.25rem;
  width: 15px;
}
.NE9qwStvhzSPuybFf6Oi .OKPQmjHc8zi_5Kx57NZ6 {
  background-color: white;
  color: black;
  font-size: 20px;
  padding-left: 30px;
}
.NE9qwStvhzSPuybFf6Oi .Y2RiCD5ETVUeqpV3fU5T {
  background-color: white;
  color: black;
  font-size: 14px;
  padding-right: 30px;
  padding-top: 4px;
}
.NE9qwStvhzSPuybFf6Oi .BqFkCBdkhZmDcUqWvblX {
  font-size: 16px;
  font-weight: 800;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  color: black;
}
.NE9qwStvhzSPuybFf6Oi .cRuujQ1qC26XLPJ1M6g1 {
  font-size: 17px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
}
.NE9qwStvhzSPuybFf6Oi .Wcz0gjIDyxr9X36ejqD4 {
  font-size: 20px;
  font-weight: 800;
  color: black;
}
.NE9qwStvhzSPuybFf6Oi .RHWKlTNfVQjjxjFZtzLm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}`, "",{"version":3,"sources":["webpack://./src/components/CartItem/CartItem.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,qBAAA;EACA,cAAA;AACF;AAEI;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AAAR;AAGI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AADN;AAIM;EACE,eAAA;EACA,YAAA;AAFR;AAMI;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,sCAAA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;AAJR;AAOI;EACI,uBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AALR;AAQI;EACI,uBAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;AANR;AASI;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,yBAAA;EACA,YAAA;AAPR;AAUI;EACI,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AARR;AAWI;EACI,eAAA;EACA,gBAAA;EACA,YAAA;AATR;AAYI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;AAVR","sourcesContent":[".item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-top: 2rem;\r\n  background-color: white;\r\n  border-top-style: solid;\r\n  border-top-width: 1px;\r\n  color: #f1f1f2;\r\n\r\n  \r\n    .checkoutImage {\r\n        width: 150px; \r\n        height: 150px; \r\n        margin-right: 10px;\r\n        margin-top: 2rem;\r\n      }\r\n  \r\n    div {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-grow: 1;\r\n\r\n\r\n      div {\r\n        font-size: 16px;\r\n        color: black;\r\n      }\r\n    }\r\n  \r\n    .buttonPlusMinus {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center; \r\n        justify-content: center; \r\n        color: black;\r\n        border: none;\r\n        cursor: pointer;\r\n        margin-right: 5px;\r\n        transition: background-color 0.3s ease;\r\n        font-size: 20px;\r\n        border-radius: 9999px;\r\n        border-style: solid;\r\n        background-color: #fff;\r\n        border-color: #babbbe;\r\n        border-width: 1px;\r\n        padding: 0.25rem;\r\n        width: 15px;\r\n      }\r\n\r\n    .buttonPlus {\r\n        background-color: white;\r\n        color: black;\r\n        font-size: 20px;\r\n        padding-left: 30px;\r\n    }\r\n\r\n    .buttonMinus {\r\n        background-color: white;\r\n        color: black;\r\n        font-size: 14px;\r\n        padding-right: 30px;\r\n        padding-top: 4px;\r\n    }\r\n  \r\n    .totalPrice {\r\n        font-size: 16px;\r\n        font-weight: 800;\r\n        margin-left: auto; \r\n        display: flex;\r\n        justify-content: flex-end;\r\n        color: black;\r\n      }\r\n\r\n    .numberOfItems {\r\n        font-size: 17px;\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n        font-weight: 600;\r\n    }\r\n    \r\n    .name {\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n        color: black;\r\n    }\r\n\r\n    .productInfo {\r\n        display: flex; \r\n        align-items: center;\r\n        justify-content: space-between;\r\n        flex-grow: 1;\r\n      }\r\n}\r\n\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"item": `NE9qwStvhzSPuybFf6Oi`,
	"checkoutImage": `ZNNwr_CvdOwuRFvKPFXQ`,
	"buttonPlusMinus": `uEZLhAuEDxUboFHsCEVw`,
	"buttonPlus": `OKPQmjHc8zi_5Kx57NZ6`,
	"buttonMinus": `Y2RiCD5ETVUeqpV3fU5T`,
	"totalPrice": `BqFkCBdkhZmDcUqWvblX`,
	"numberOfItems": `cRuujQ1qC26XLPJ1M6g1`,
	"name": `Wcz0gjIDyxr9X36ejqD4`,
	"productInfo": `RHWKlTNfVQjjxjFZtzLm`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/DepartmentList/DepartmentList.module.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/DepartmentList/DepartmentList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://db.onlinewebfonts.com/c/67415ab41a7350f81536b69763e6d031?family=Recoleta+Light);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.VkcCBeBQ4_7zJjxJblL6 {
  list-style-type: none;
  background-color: #222;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  border: 0;
  width: 100%;
  height: 3rem;
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  justify-content: space-around;
  font-family: "Recoleta Light";
  position: relative;
}

.qbWtpZWFlopufKeuPS4_ {
  padding: 0.5rem 1rem;
  justify-content: space-around;
  transition: color 0.3s;
  position: relative;
  /* Add this line */
  width: 100%;
}

.qbWtpZWFlopufKeuPS4_:hover {
  color: #bc4501;
  cursor: pointer;
}

.ZItsJyVhzdj9RTXDglfW {
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
  transform-origin: top;
  display: flex;
  top: 100%;
}

.VkcCBeBQ4_7zJjxJblL6 .qbWtpZWFlopufKeuPS4_:hover .ZItsJyVhzdj9RTXDglfW,
.ZItsJyVhzdj9RTXDglfW:hover {
  opacity: 80%;
  height: auto;
  pointer-events: auto;
  animation: u18kfNVesMPfyTmQrVhi 0.5s ease;
}

@keyframes u18kfNVesMPfyTmQrVhi {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
.yCHI6PqJDYmoGw0cVLz3 {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-inline-start: 0;
  margin: 0 2rem;
}

.yCHI6PqJDYmoGw0cVLz3 a {
  color: #fff;
  font-family: "Recoleta Light";
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  margin: 0.4;
}

.yCHI6PqJDYmoGw0cVLz3 a:hover {
  color: #bc4501;
}

.vSyTf4tpSg5cPojB2dTJ {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  text-align: center;
  padding: 0.3rem;
}

.poz1V4YcgTGdgRSvKmKm {
  transform: translateX(-100%);
}

.poz1V4YcgTGdgRSvKmKm.ZKyd1W9ga8925ISg7ZnG {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 810px) {
  .VkcCBeBQ4_7zJjxJblL6 {
    flex-direction: column;
    align-items: center;
  }
  .qbWtpZWFlopufKeuPS4_ {
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/DepartmentList/DepartmentList.module.scss"],"names":[],"mappings":"AAEA;EACE,qBAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,6BAAA;EACA,6BAAA;EACA,kBAAA;AAAF;;AAIA;EACE,oBAAA;EACA,6BAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;AADF;;AAIA;EACE,uBAAA;EACA,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,gBAAA;EACA,kDAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EAEA,SAAA;AAFF;;AAMA;;EAEE,YAAA;EACA,YAAA;EACA,oBAAA;EACA,yCAAA;AAHF;;AAMA;EACE;IACE,oBAAA;EAHF;EAMA;IACE,oBAAA;EAJF;AACF;AAOA;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,cAAA;AALF;;AAQA;EACE,WAAA;EACA,6BAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;AALF;;AAQA;EACE,cAAA;AALF;;AASA;EACE,UAAA;EACA,oCAAA;EACA,kBAAA;EACA,eAAA;AANF;;AAUA;EACE,4BAAA;AAPF;;AAUA;EACE,UAAA;EACA,wBAAA;AAPF;;AAUA;EACE;IACE,sBAAA;IACA,mBAAA;EAPF;EAUA;IACE,kBAAA;EARF;AACF","sourcesContent":["@import url(https://db.onlinewebfonts.com/c/67415ab41a7350f81536b69763e6d031?family=Recoleta+Light);\r\n\r\n.DepartmentList {\r\n  list-style-type: none;\r\n  background-color: #222;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  flex-direction: row;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 3rem;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  text-decoration: none;\r\n  justify-content: space-around;\r\n  font-family: \"Recoleta Light\";\r\n  position: relative;\r\n\r\n}\r\n\r\n.listItem {\r\n  padding: 0.5rem 1rem;\r\n  justify-content: space-around;\r\n  transition: color 0.3s;\r\n  position: relative;\r\n  /* Add this line */\r\n  width: 100%;\r\n}\r\n\r\n.listItem:hover {\r\n  color: #bc4501;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal {\r\n  justify-content: center;\r\n  z-index: 1000;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, opacity 0.3s ease;\r\n  pointer-events: none;\r\n  transform-origin: top;\r\n  display: flex;\r\n  \r\n  top: 100%;\r\n}\r\n\r\n\r\n.DepartmentList .listItem:hover .modal,\r\n.modal:hover {\r\n  opacity: 80%;\r\n  height: auto;\r\n  pointer-events: auto;\r\n  animation: rollOut 0.5s ease;\r\n}\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    transform: scaleY(0);\r\n  }\r\n\r\n  to {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.SubcategoryList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style-type: none;\r\n  padding-inline-start: 0;\r\n  margin: 0 2rem;\r\n}\r\n\r\n.SubcategoryList a {\r\n  color: #fff;\r\n  font-family: \"Recoleta Light\";\r\n  font-size: 1.3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0.4;\r\n}\r\n\r\n.SubcategoryList a:hover {\r\n  color: #bc4501;\r\n}\r\n\r\n\r\n.modalText {\r\n  opacity: 0;\r\n  transition: opacity 0.5s ease-in-out;\r\n  text-align: center;\r\n  padding: 0.3rem;\r\n}\r\n\r\n\r\n.line {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.line.active {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n\r\n@media (max-width: 810px) {\r\n  .DepartmentList {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .listItem {\r\n    text-align: center;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"DepartmentList": `VkcCBeBQ4_7zJjxJblL6`,
	"listItem": `qbWtpZWFlopufKeuPS4_`,
	"modal": `ZItsJyVhzdj9RTXDglfW`,
	"rollOut": `u18kfNVesMPfyTmQrVhi`,
	"SubcategoryList": `yCHI6PqJDYmoGw0cVLz3`,
	"modalText": `vSyTf4tpSg5cPojB2dTJ`,
	"line": `poz1V4YcgTGdgRSvKmKm`,
	"active": `ZKyd1W9ga8925ISg7ZnG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HomeImage/HomeImage.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HomeImage/HomeImage.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.HDwQ6BMvb7ZbSTVHiGm6 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;
  padding-bottom: 1.5vh;
}

.hvNG8ZVZCZ7yU7Xn1jIW {
  position: relative;
  max-width: 30%;
  max-height: 30%;
  border-radius: 40px;
  transition: transform 0.3s ease-in-out;
}

.FoDhhvNXsy0rHjuhuyOB {
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
}

.hvNG8ZVZCZ7yU7Xn1jIW:hover {
  transform: scale(1.05);
  filter: brightness(0.9);
}

.Sa8w7kNRvZgCdweD4BDN {
  position: absolute;
  width: 100%;
  background: linear-gradient(to top, rgb(121, 45, 2), rgba(154, 57, 1, 0)); /* Adjust gradient colors */
  bottom: 1vh;
  justify-content: space-around;
  color: white;
  margin: 0;
  padding: 1vh;
  background-color: rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column-reverse;
  align-items: baseline;
  flex-wrap: wrap;
  align-content: stretch;
}

.iDnUIR344Q8cPxARR3pO {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: flex-start;
  text-decoration: none;
}

.kSxd7BNCQIv2sn2sFV3x {
  font-size: 20px;
  align-self: flex-end;
  text-decoration: line-through;
}

.mhUW_0EIJj2wg1jmkDbb {
  font-size: 30px;
  align-self: flex-end;
  font-weight: bold;
  color: #bc4501;
}

@media screen and (max-width: 650px) and (min-width: 100px) {
  .hvNG8ZVZCZ7yU7Xn1jIW {
    max-width: 50%;
    max-height: 50%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/HomeImage/HomeImage.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,sCAAA;AAAF;;AAKA;EACE,eAAA;EACA,gBAAA;EACA,qBAAA;AAFF;;AAKA;EACE,sBAAA;EACA,uBAAA;AAFF;;AAKA;EACE,kBAAA;EACE,WAAA;EACA,yEAAA,EAAA,2BAAA;EACF,WAAA;EACE,6BAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,qCAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,eAAA;EACA,sBAAA;AAFJ;;AAKA;EACE,yBAAA;EACA,eAAA;EACA,sBAAA;EACA,qBAAA;AAFF;;AAKA;EACE,eAAA;EACA,oBAAA;EACA,6BAAA;AAFF;;AAKA;EACE,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,cAAA;AAFF;;AASA;EACE;IACE,cAAA;IACA,eAAA;EANF;AACF","sourcesContent":[".grid {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  margin-top: 15px;\r\n  padding-bottom: 1.5vh;\r\n\r\n}\r\n\r\n.imageContainer {\r\n  position: relative;\r\n  max-width: 30%;\r\n  max-height: 30%;\r\n  border-radius: 40px;\r\n  transition: transform 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n.galleryImage {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.imageContainer:hover {\r\n  transform: scale(1.05);\r\n  filter: brightness(0.9);\r\n}\r\n\r\n.imageTextContainer {\r\n  position: absolute;\r\n    width: 100%;\r\n    background: linear-gradient(to top, rgba(121, 45, 2, 1), rgba(154, 57, 1, 0)); /* Adjust gradient colors */\r\n  bottom: 1vh;\r\n    justify-content: space-around;\r\n    color: white;\r\n    margin: 0;\r\n    padding: 1vh;\r\n    background-color: rgba(0, 0, 0, 0.07);\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: baseline;\r\n    flex-wrap: wrap;\r\n    align-content: stretch;\r\n}\r\n\r\n.imageVeryTopText {\r\n  color: rgb(255, 255, 255);\r\n  font-size: 20px;\r\n  align-self: flex-start;\r\n  text-decoration: none;\r\n}\r\n\r\n.imageTopText {\r\n  font-size: 20px;\r\n  align-self: flex-end;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.imageBottomText {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  font-weight: bold;\r\n  color: #bc4501;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 650px) and (min-width: 100px) {\r\n  .imageContainer {\r\n    max-width: 50%;\r\n    max-height: 50%;\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid": `HDwQ6BMvb7ZbSTVHiGm6`,
	"imageContainer": `hvNG8ZVZCZ7yU7Xn1jIW`,
	"galleryImage": `FoDhhvNXsy0rHjuhuyOB`,
	"imageTextContainer": `Sa8w7kNRvZgCdweD4BDN`,
	"imageVeryTopText": `iDnUIR344Q8cPxARR3pO`,
	"imageTopText": `kSxd7BNCQIv2sn2sFV3x`,
	"imageBottomText": `mhUW_0EIJj2wg1jmkDbb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ZFkQ9ONSjUU0ZoTLCAcW {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: none;
  font-family: "Arimo", sans-serif;
  background-color: #fff;
}

.Fs9YiN2qqzSLH1CwpmGZ {
  display: flex;
  align-items: center;
}

.Fs9YiN2qqzSLH1CwpmGZ img {
  max-width: 100%;
  height: 11vmin;
  margin-left: 10px;
}

.txpz7dLZZPxJOEjqOfEq {
  display: flex;
  flex: 1;
  position: relative;
}

.ZWWPbhkPcUOgr4qAVpQf {
  background: #fff;
  color: #222;
  font-style: normal;
  font-weight: 400;
  height: 42px;
  padding: 5px 40px 5px 16px;
  font-size: 14px;
  border: 1px solid #666;
  border-radius: 9999px;
  width: 100%;
}

.IDc1B80diwDtQcXJb2Zy {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  padding-right: 6px;
  padding-top: 3px;
  cursor: pointer;
  color: #666;
  font-size: 23px;
}

.pWZZsuNPc60OhSskJBD7 {
  display: flex;
  align-items: center;
  padding-right: 70px;
  padding-left: 30px;
  font-size: 16px;
}

.lVlWLcZE2AAuDbqLJ2sX {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.eGGz8oqINibBoD5ryMIp a {
  background: 0 0;
  width: -moz-max-content;
  width: max-content;
  border: 0;
  padding: 0;
  color: #222;
  cursor: pointer;
  text-decoration: none;
}

.pNnp0qDDqtcVgDJY0WfQ {
  position: relative;
  display: inline-block;
  width: -moz-max-content;
  width: max-content;
  padding: 10px 20px;
  background: transparent;
  color: #222;
  border: 1px solid black;
  cursor: pointer;
  text-decoration: none;
  z-index: 1;
  overflow: hidden;
  transition: background 0.3s ease-in-out;
}

.pNnp0qDDqtcVgDJY0WfQ::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(270deg, #9a3901, orange);
  z-index: -1;
  opacity: 0;
  transition: width 0.3s ease-in-out;
}

.pNnp0qDDqtcVgDJY0WfQ:hover::before {
  width: 100%;
  opacity: 1;
  animation: InnyOtsDmigZ6plSSa8i 1s infinite linear;
}

@keyframes InnyOtsDmigZ6plSSa8i {
  0%, 100% {
    background-position: -200% 0;
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.8);
  }
  50% {
    background-position: 200% 0;
    box-shadow: none;
  }
}
.UD5b8_IW3HAhQPbbn98t {
  margin-left: 23px;
}

.h0630xVhQpc1HCRyf7oF {
  margin-left: 20px;
}

.fwibm5olmySnuRsVlpbv {
  margin-left: 20px;
}

.fwibm5olmySnuRsVlpbv:hover {
  cursor: pointer;
}

.VhhJDtbTFuoVbmqiRyKL {
  margin-left: 20px;
  margin-right: 20px;
}

.cbzjvZ0qwyKmMqwJsCrk {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.d8VCyMPZUahvEPiMJUi3 {
  max-width: 1400px;
}

.rDYLtMJ25JAoeuQU8Omw {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 28px;
  cursor: pointer;
}

.PCWWBV5mB3b0M6amSBn7 {
  position: relative;
}

.I3FllkGVEolhxZ6CZCDl {
  position: absolute;
  top: -15px;
  left: 10px;
  width: 20px;
  height: 20px;
  color: #ffffff;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.VhhJDtbTFuoVbmqiRyKL {
  position: relative;
  cursor: pointer;
}

.Ce14FJoozvOEAvzQ87LA {
  position: absolute;
  top: -15px;
  left: 10px;
  width: 20px;
  height: 20px;
  color: #ffffff;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uZczbgsGh5tpiCnrsdMh {
  margin-left: 5%;
  margin-right: 20px;
}

.uZczbgsGh5tpiCnrsdMh:hover {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gCAAA;EACA,sBAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;AAEF;;AAAA;EACE,eAAA;EACA,cAAA;EACA,iBAAA;AAGF;;AADA;EACE,aAAA;EACA,OAAA;EACA,kBAAA;AAIF;;AAFA;EACE,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,0BAAA;EACA,eAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;AAKF;;AAHA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;EACA,eAAA;AAMF;;AAJA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAOF;;AALA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AAQF;;AANA;EACE,eAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;AASF;;AAPA;EACE,kBAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;EACA,qBAAA;EACA,UAAA;EACA,gBAAA;EACA,uCAAA;AAUF;;AARA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,oDAAA;EACA,WAAA;EACA,UAAA;EACA,kCAAA;AAWF;;AARA;EACE,WAAA;EACA,UAAA;EACA,kDAAA;AAWF;;AANA;EACE;IACE,4BAAA;IACA,iDAAA;EASF;EAPA;IACE,2BAAA;IACA,gBAAA;EASF;AACF;AANA;EACE,iBAAA;AAQF;;AANA;EACE,iBAAA;AASF;;AAPA;EACE,iBAAA;AAUF;;AARA;EACE,eAAA;AAWF;;AATA;EACE,iBAAA;EACA,kBAAA;AAYF;;AATA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAYF;;AATA;EACE,iBAAA;AAYF;;AATA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AAYF;;AATA;EACE,kBAAA;AAYF;;AATA;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAYF;;AATA;EACE,kBAAA;EACA,eAAA;AAYF;;AATA;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAYF;;AATA;EACE,eAAA;EACA,kBAAA;AAYF;;AATA;EACE,eAAA;AAYF","sourcesContent":[".header_core {\r\n  display: flex;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  border-bottom: none;\r\n  font-family: 'Arimo', sans-serif;\r\n  background-color: #fff;\r\n}\r\n.logo_core {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.logo_core img {\r\n  max-width: 100%; \r\n  height: 11vmin; \r\n  margin-left: 10px;\r\n}\r\n.search_container {\r\n  display: flex;\r\n  flex: 1;\r\n  position: relative; \r\n}\r\n.header_searchInput {\r\n  background: #fff;\r\n  color: #222;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  height: 42px;\r\n  padding: 5px 40px 5px 16px; \r\n  font-size: 14px;\r\n  border: 1px solid #666;\r\n  border-radius: 9999px;\r\n  width: 100%;\r\n}\r\n.search_button {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n  padding: 0;\r\n  padding-right: 6px;\r\n  padding-top: 3px;\r\n  cursor: pointer;\r\n  color: #666;\r\n  font-size: 23px;\r\n}\r\n.right_core {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-right: 70px;\r\n  padding-left: 30px;\r\n  font-size: 16px;\r\n}\r\n.orders {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 16px;\r\n}\r\n.account a {\r\n  background: 0 0;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  border: 0;\r\n  padding: 0;\r\n  color: #222;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n.signbutton {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  padding: 10px 20px;\r\n  background: transparent;\r\n  color: #222;\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n  transition: background 0.3s ease-in-out; \r\n}\r\n.signbutton::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 0; \r\n  height: 100%;\r\n  background: linear-gradient(270deg, #9a3901, orange); \r\n  z-index: -1;\r\n  opacity: 0;\r\n  transition: width 0.3s ease-in-out; \r\n}\r\n\r\n.signbutton:hover::before {\r\n  width: 100%; \r\n  opacity: 1;\r\n  animation: shine 1s infinite linear; \r\n}\r\n\r\n\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    background-position: -200% 0; \r\n    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.8); \r\n  }\r\n  50% {\r\n    background-position: 200% 0; \r\n    box-shadow: none; \r\n  }\r\n}\r\n\r\n.humanicon {\r\n  margin-left: 23px;\r\n}\r\n.location {\r\n  margin-left: 20px;\r\n}\r\n.favorites {\r\n  margin-left: 20px;\r\n}\r\n.favorites:hover{\r\n  cursor: pointer;\r\n}\r\n.cart {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.modalOverlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 3;\r\n}\r\n\r\n.modalContent {\r\n  max-width: 1400px;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: -15px;\r\n  right: -15px;\r\n  font-size: 28px;\r\n  cursor: pointer;\r\n}\r\n\r\n.favorite_icon_container{\r\n  position: relative;\r\n}\r\n\r\n.favorite_count {\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 10px;\r\n  width: 20px; \r\n  height: 20px; \r\n  color: #ffffff;\r\n  border-radius: 50%; \r\n  background-color: red;\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: center; \r\n}\r\n\r\n.cart{\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.item_count{\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 10px;\r\n  width: 20px; \r\n  height: 20px; \r\n  color: #ffffff;\r\n  border-radius: 50%; \r\n  background-color: red;\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: center; \r\n}\r\n\r\n.member{\r\n  margin-left: 5%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.member:hover{\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header_core": `ZFkQ9ONSjUU0ZoTLCAcW`,
	"logo_core": `Fs9YiN2qqzSLH1CwpmGZ`,
	"search_container": `txpz7dLZZPxJOEjqOfEq`,
	"header_searchInput": `ZWWPbhkPcUOgr4qAVpQf`,
	"search_button": `IDc1B80diwDtQcXJb2Zy`,
	"right_core": `pWZZsuNPc60OhSskJBD7`,
	"orders": `lVlWLcZE2AAuDbqLJ2sX`,
	"account": `eGGz8oqINibBoD5ryMIp`,
	"signbutton": `pNnp0qDDqtcVgDJY0WfQ`,
	"shine": `InnyOtsDmigZ6plSSa8i`,
	"humanicon": `UD5b8_IW3HAhQPbbn98t`,
	"location": `h0630xVhQpc1HCRyf7oF`,
	"favorites": `fwibm5olmySnuRsVlpbv`,
	"cart": `VhhJDtbTFuoVbmqiRyKL`,
	"modalOverlay": `cbzjvZ0qwyKmMqwJsCrk`,
	"modalContent": `d8VCyMPZUahvEPiMJUi3`,
	"close": `rDYLtMJ25JAoeuQU8Omw`,
	"favorite_icon_container": `PCWWBV5mB3b0M6amSBn7`,
	"favorite_count": `I3FllkGVEolhxZ6CZCDl`,
	"item_count": `Ce14FJoozvOEAvzQ87LA`,
	"member": `uZczbgsGh5tpiCnrsdMh`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.NGnA31qCPVzXfiE9EEMk {
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.NGnA31qCPVzXfiE9EEMk div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.NGnA31qCPVzXfiE9EEMk span {
  font-size: 16px;
}

section {
  margin-top: 10px;
  margin-right: 5%;
}

button {
  background-color: #bc4501; /* Walmart's primary color */
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.YEx_kzU6w9MPhxMuOoz9 {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.YEx_kzU6w9MPhxMuOoz9 label {
  margin-top: 10px;
  font-size: 16px;
}
.YEx_kzU6w9MPhxMuOoz9 label input[type=checkbox] {
  margin-right: 5px;
}
.YEx_kzU6w9MPhxMuOoz9 form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.YEx_kzU6w9MPhxMuOoz9 form input[type=text] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
}
.YEx_kzU6w9MPhxMuOoz9 form button[type=submit] {
  background-color: #bc4501;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

/* Style for individual cart items */
.vWfT30yUfNgo44DwjBp6 {
  margin-bottom: 10px; /* Adjust this value for spacing between cart items */
}

.iQHAtiKMNt2bhkAE9i58 {
  margin-bottom: 10px;
  background-color: #bc4501;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 9999px;
  padding: 1rem;
}

.oYc5fH8YHohX8wVn2ehy {
  margin-bottom: 10px;
  background-color: #bc4501;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 9999px;
  padding: 1rem;
}

.BaHbB6X966UanxV_iJoQ {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.CgQ0WOuWnz32uFBLZ32a {
  font-size: 20px;
  font-weight: 800;
  margin-left: 20px;
}

.mFtZpJto9iPFZyDoGhze {
  font-size: 20px;
  font-weight: 800;
  margin-left: 13px;
}

.rVka4YRIcsOzjssF9IFN {
  color: #2a8703;
  font-size: 22px;
  font-weight: 800;
}

.fm3SVaWgOVnNG3T7rRIW {
  font-weight: 100;
  font-size: 20px;
}

.PpXo6f2cmAqhejUEZI_7 {
  font-size: 10px;
}`, "",{"version":3,"sources":["webpack://./src/components/OrderDetail/OrderDetail.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,sCAAA;AACJ;AACI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AACR;AACI;EACI,eAAA;AACR;;AAGI;EACE,gBAAA;EACA,gBAAA;AAAN;;AAGI;EACE,yBAAA,EAAA,4BAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AAAN;;AAGI;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;AAAN;AAEM;EACE,gBAAA;EACA,eAAA;AAAR;AAEQ;EACE,iBAAA;AAAV;AAIM;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AAFR;AAIQ;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AAFV;AAKQ;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AAHV;;AAQI,oCAAA;AACA;EACE,mBAAA,EAAA,qDAAA;AALN;;AAUE;EACE,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,aAAA;AAPJ;;AAUA;EACE,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;EACA,aAAA;AAPF;;AAUA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;AAPJ;;AAUA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;AAPF;;AAUA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;AAPF;;AAUA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;AAPF;;AAUA;EACE,gBAAA;EACA,eAAA;AAPF;;AAUA;EACE,eAAA;AAPF","sourcesContent":[".detail {\r\n    border: 1px solid black;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.2);\r\n\r\n    div{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        margin-bottom: 10px;\r\n    }\r\n    span{\r\n        font-size: 16px;\r\n      }\r\n    }\r\n  \r\n    section {\r\n      margin-top: 10px;\r\n      margin-right: 5%;\r\n    }\r\n  \r\n    button {\r\n      background-color: #bc4501; /* Walmart's primary color */\r\n      color: #fff;\r\n      border: none;\r\n      padding: 10px 20px;\r\n      cursor: pointer;\r\n      font-size: 16px;\r\n      border-radius: 5px;\r\n    }\r\n\r\n    .mainBox {\r\n      margin-top: 10px;\r\n      display: flex;\r\n      flex-direction: column;\r\n  \r\n      label {\r\n        margin-top: 10px;\r\n        font-size: 16px;\r\n  \r\n        input[type=\"checkbox\"] {\r\n          margin-right: 5px;\r\n        }\r\n      }\r\n  \r\n      form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin-top: 10px;\r\n  \r\n        input[type=\"text\"] {\r\n          padding: 10px;\r\n          border: 1px solid #ccc;\r\n          border-radius: 5px;\r\n          margin-bottom: 10px;\r\n          font-size: 16px;\r\n        }\r\n  \r\n        button[type=\"submit\"] {\r\n          background-color: #bc4501;\r\n          color: #fff;\r\n          border: none;\r\n          padding: 10px 20px;\r\n          cursor: pointer;\r\n          font-size: 16px;\r\n          border-radius: 5px;\r\n        }\r\n      }\r\n    }\r\n  \r\n    /* Style for individual cart items */\r\n    .cartItem {\r\n      margin-bottom: 10px; /* Adjust this value for spacing between cart items */\r\n    }\r\n    \r\n  \r\n\r\n  .memberButton {\r\n    margin-bottom: 10px;\r\n    background-color: #bc4501;\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n    border-radius: 9999px;\r\n    padding: 1rem;\r\n}\r\n\r\n.checkoutButton {\r\n  margin-bottom: 10px;\r\n  background-color: #bc4501;\r\n  margin-top: 20px;\r\n  font-size: 20px;\r\n  border-radius: 9999px;\r\n  padding: 1rem;\r\n}\r\n\r\n.wholeCheckout {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.subtotal {\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n  margin-left: 20px;\r\n}\r\n\r\n.estimatedTotal {\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n  margin-left: 13px;\r\n}\r\n\r\n.totalCost {\r\n  color: #2a8703;\r\n  font-size: 22px;\r\n  font-weight: 800;\r\n}\r\n\r\n.totalQuantity {\r\n  font-weight: 100;\r\n  font-size: 20px;\r\n}\r\n\r\n.smaller {\r\n  font-size: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"detail": `NGnA31qCPVzXfiE9EEMk`,
	"mainBox": `YEx_kzU6w9MPhxMuOoz9`,
	"cartItem": `vWfT30yUfNgo44DwjBp6`,
	"memberButton": `iQHAtiKMNt2bhkAE9i58`,
	"checkoutButton": `oYc5fH8YHohX8wVn2ehy`,
	"wholeCheckout": `BaHbB6X966UanxV_iJoQ`,
	"subtotal": `CgQ0WOuWnz32uFBLZ32a`,
	"estimatedTotal": `mFtZpJto9iPFZyDoGhze`,
	"totalCost": `rVka4YRIcsOzjssF9IFN`,
	"totalQuantity": `fm3SVaWgOVnNG3T7rRIW`,
	"smaller": `PpXo6f2cmAqhejUEZI_7`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SbDKL2bctOyC5ZgA0KfW {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 3vmin;
  color: var(--text-light);
  border: 0.2vmin solid var(--tan-3);
  border-radius: 1vmin;
  font-size: 2vmin;
  cursor: pointer;
  border-width: 0.9vmin;
}

.SbDKL2bctOyC5ZgA0KfW > div > div:first-child {
  margin-bottom: 0.5vmin;
  border-width: 0.2vmin;
}

.SbDKL2bctOyC5ZgA0KfW.mOA_Z5p05rn7VW_2oU68 {
  border-width: 0.2vmin;
  cursor: default;
  background-color: rgb(209, 205, 205);
}

.SbDKL2bctOyC5ZgA0KfW:not(.mOA_Z5p05rn7VW_2oU68):hover {
  border-width: 0.2vmin;
}`, "",{"version":3,"sources":["webpack://./src/components/OrderListItem/OrderListItem.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,oBAAA;EACA,wBAAA;EACA,kCAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEE;EACE,sBAAA;EACA,qBAAA;AACJ;;AAEE;EACE,qBAAA;EACA,eAAA;EACA,oCAAA;AACJ;;AAEE;EACE,qBAAA;AACJ","sourcesContent":[".OrderListItem {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: top;\r\n    margin-bottom: 3vmin;\r\n    color: var(--text-light);\r\n    border: .2vmin solid var(--tan-3);\r\n    border-radius: 1vmin;\r\n    font-size: 2vmin;\r\n    cursor: pointer;\r\n    border-width: .9vmin;\r\n  }\r\n  \r\n  .OrderListItem > div > div:first-child {\r\n    margin-bottom: .5vmin;\r\n    border-width: .2vmin;\r\n  }\r\n  \r\n  .OrderListItem.selected {\r\n    border-width: .2vmin;\r\n    cursor: default;\r\n    background-color: rgb(209, 205, 205);\r\n  }\r\n  \r\n  .OrderListItem:not(.selected):hover {\r\n    border-width: .2vmin;\r\n  }\r\n "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"OrderListItem": `SbDKL2bctOyC5ZgA0KfW`,
	"selected": `mOA_Z5p05rn7VW_2oU68`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.l6Ner7C7O5I4V69HVVgW {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0.1vmin solid var(--tan-3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.508);
}

.l6Ner7C7O5I4V69HVVgW .zqVYKU3SzotKremHzxQ_ {
  color: var(--text-light);
  font-size: 2vmin;
  position: absolute;
  top: 50vh;
}`, "",{"version":3,"sources":["webpack://./src/components/OrderList/OrderList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kCAAA;EACA,uCAAA;EACA,sCAAA;AACJ;;AAEI;EACA,wBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;AACJ","sourcesContent":[".OrderList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    border: .1vmin solid var(--tan-3);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n    background-color: rgba(0, 0, 0, 0.508);\r\n    }\r\n    \r\n    .OrderList .noOrders {\r\n    color: var(--text-light);\r\n    font-size: 2vmin;\r\n    position: absolute;\r\n    top: calc(50vh);\r\n    }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"OrderList": `l6Ner7C7O5I4V69HVVgW`,
	"noOrders": `zqVYKU3SzotKremHzxQ_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProductTile/ProductTile.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProductTile/ProductTile.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CAvGZ1GxrNC4PE1SpGQ2 {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 380px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  box-sizing: border-box;
}

.OpTehvrtvZ2Ed8dq94Qx {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
}

.jqPHs6QdvScYJLIFg2rr {
  width: 170px;
  height: 40px;
  background-color: #bc4501;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 9999px;
  color: aliceblue;
  border: 1px solid #ccc;
}

.jqPHs6QdvScYJLIFg2rr:hover {
  background-color: #fe5e02;
}

.jqPHs6QdvScYJLIFg2rr:active {
  transform: scale(0.9);
}

.XvCnBCAaT80LSSdr7vAZ {
  font-size: 25px;
}

.w79zFlfsUfhzg2_Iwuyf {
  font-size: 22px;
}

.TCWxfjxZbC0SO0QsI3Ct {
  font-weight: 300;
  font-size: 15px;
}`, "",{"version":3,"sources":["webpack://./src/components/ProductTile/ProductTile.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,sBAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,gBAAA;EACA,eAAA;AACF","sourcesContent":[".product_tile {\r\n  position: relative; \r\n  display: inline-block;\r\n  width: 250px;\r\n  height: 380px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.favorite_button {\r\n  position: absolute;\r\n  top: 10px; \r\n  right: 10px; \r\n  background: none;\r\n  border: none;\r\n  font-size: 24px; \r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.cart_button {\r\n  width: 170px;\r\n  height: 40px;\r\n  background-color: #bc4501;\r\n  cursor: pointer;\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  text-align: center; \r\n  display: inline-flex; \r\n  align-items: center; \r\n  justify-content: center; \r\n  vertical-align: middle; \r\n  white-space: nowrap;\r\n  border-radius: 9999px;\r\n  color: aliceblue;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.cart_button:hover {\r\n  background-color: #fe5e02;\r\n}\r\n\r\n.cart_button:active {\r\n  transform: scale(.9);\r\n}\r\n\r\n.product_name {\r\n  font-size: 25px;\r\n}\r\n\r\n.product_price {\r\n  font-size: 22px;\r\n}\r\n\r\n.product_sold {\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"product_tile": `CAvGZ1GxrNC4PE1SpGQ2`,
	"favorite_button": `OpTehvrtvZ2Ed8dq94Qx`,
	"cart_button": `jqPHs6QdvScYJLIFg2rr`,
	"product_name": `XvCnBCAaT80LSSdr7vAZ`,
	"product_price": `w79zFlfsUfhzg2_Iwuyf`,
	"product_sold": `TCWxfjxZbC0SO0QsI3Ct`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,800);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

main {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
}

h2 {
  font-family: "Libre Baskerville", serif;
  text-align: center;
}

p {
  font-family: "Libre Baskerville", serif;
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-family: "Libre Baskerville", serif;
  font-size: 24px;
}

a {
  color: #333; /* Set a default color */
  font-size: 16px;
  text-decoration: none;
  margin: 15px 5px 15px 5px;
  transition: color 0.3s; /* Add a color transition effect */
}

a:hover {
  color: #9a3901; /* Change the color on hover */
}

.WQBrK5cPSi5IM1p2_yz_ {
  border-radius: 20px;
  border: 1px solid #9a3901;
  background-color: #9a3901;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

.WQBrK5cPSi5IM1p2_yz_:active {
  transform: scale(0.95);
}

.WQBrK5cPSi5IM1p2_yz_:focus {
  outline: none;
}

.WQBrK5cPSi5IM1p2_yz_.cWzDRzyMIuvl4jI3rOmf {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.PcMHXN9U_jQxt50G8GsV {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.KZB1FmPM2HSb6cQYM8ki {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.MP5KlrEKloeeLQpFyJAU {
  left: 0;
  width: 50%;
  z-index: 2;
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .MP5KlrEKloeeLQpFyJAU {
  transform: translateX(100%);
}

.is8ZKUUfWAj78zLiHG6b {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .is8ZKUUfWAj78zLiHG6b {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: _DuaL1AbwsYirh_oF4OT 0.6s;
}

@keyframes _DuaL1AbwsYirh_oF4OT {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}
.Git3pACgA_HaZqwUNann {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .Git3pACgA_HaZqwUNann {
  transform: translateX(-100%);
}

.q2UzDW76nhRVU_B4WSk_ {
  background: #FF416C;
  background: linear-gradient(to right, #311e13, #9a3901);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .q2UzDW76nhRVU_B4WSk_ {
  transform: translateX(50%);
}

.H1l2q5v8fLZuHZOUWP1A {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.eCtaTrS47Fz4HvNNEnXd {
  transform: translateX(-20%);
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .eCtaTrS47Fz4HvNNEnXd {
  transform: translateX(0);
}

.rY5icAB9lArmfWOjLwvC {
  right: 0;
  transform: translateX(0);
}

.PcMHXN9U_jQxt50G8GsV.ntRBE_gGKJELHAH8VnDw .rY5icAB9lArmfWOjLwvC {
  transform: translateX(20%);
}

/* Style for Font Awesome icons */
.o_fajkqHL2vhsEf0AxKy {
  margin: 20px 0;
}
.o_fajkqHL2vhsEf0AxKy a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  /* Define font size and color for the icons */
}
.o_fajkqHL2vhsEf0AxKy a i {
  font-size: 20px;
  color: #333;
}

.Q5RK46AYcsru9BUe1OyI {
  font-size: 78px;
  /* Increase the font size for a larger symbol */
  color: rgb(255, 255, 255);
  /* Change the color of the symbol */
  position: absolute;
  /* Position the symbol absolutely within the relative parent */
  top: 2%;
  /* Adjust the top position relative to the parent overlay-panel */
  right: 2%;
  /* Adjust the right position relative to the parent overlay-panel */
  cursor: pointer;
  /* Change the cursor to a pointer when hovering over it */
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;AAAJ;;AAIA;EACI,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,oBAAA;AADJ;;AAIA;EACI,uCAAA;EACA,iBAAA;EACA,eAAA;EACA,SAAA;AADJ;;AAIA;EACI,uCAAA;EACA,kBAAA;AADJ;;AAIA;EACI,uCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,uCAAA;EACA,eAAA;AADJ;;AAIA;EACI,WAAA,EAAA,wBAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;EACA,sBAAA,EAAA,kCAAA;AADJ;;AAIA;EACQ,cAAA,EAAA,8BAAA;AADR;;AAIA;EACI,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kCAAA;EACA,eAAA;AADJ;;AAIA;EACI,sBAAA;AADJ;;AAIA;EACI,aAAA;AADJ;;AAIA;EACI,6BAAA;EACA,qBAAA;AADJ;;AAIA;EACI,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;AADJ;;AAIA;EACI,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;AADJ;;AAIA;EACI,sBAAA;EACA,mBAAA;EACA,4EAAA;EAEA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,MAAA;EACA,YAAA;EACA,gCAAA;AAFJ;;AAKA;EACI,OAAA;EACA,UAAA;EACA,UAAA;AAFJ;;AAKA;EACI,2BAAA;AAFJ;;AAKA;EACI,OAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;AAFJ;;AAKA;EACI,2BAAA;EACA,UAAA;EACA,UAAA;EACA,oCAAA;AAFJ;;AAKA;EAEI;IAEI,UAAA;IACA,UAAA;EAJN;EAOE;IAEI,UAAA;IACA,UAAA;EANN;AACF;AASA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sCAAA;EACA,YAAA;AAPJ;;AAUA;EACI,4BAAA;AAPJ;;AAUA;EACI,mBAAA;EACA,uDAAA;EACA,4BAAA;EACA,sBAAA;EACA,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;EACA,sCAAA;AAPJ;;AAUA;EACI,0BAAA;AAPJ;;AAUA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,wBAAA;EACA,sCAAA;AAPJ;;AAWA;EACI,2BAAA;AARJ;;AAWA;EACI,wBAAA;AARJ;;AAWA;EACI,QAAA;EACA,wBAAA;AARJ;;AAWA;EACI,0BAAA;AARJ;;AAWA,iCAAA;AACA;EACI,cAAA;AARJ;AAUI;EACI,yBAAA;EACA,kBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EAEA,6CAAA;AATR;AAUQ;EACI,eAAA;EACA,WAAA;AARZ;;AAcA;EACI,eAAA;EACA,+CAAA;EACA,yBAAA;EACA,mCAAA;EACA,kBAAA;EACA,8DAAA;EACA,OAAA;EACA,iEAAA;EACA,SAAA;EACA,mEAAA;EACA,eAAA;EACA,yDAAA;AAXJ","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');\r\n@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');\r\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\nmain {\r\n    background: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    height: 100vh;\r\n    margin: -20px 0 50px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Libre Baskerville', serif;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Libre Baskerville', serif;\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    font-family: 'Libre Baskerville', serif;\r\n    font-size: 14px;\r\n    font-weight: 100;\r\n    line-height: 20px;\r\n    letter-spacing: 0.5px;\r\n    margin: 20px 0 30px;\r\n}\r\n\r\nspan {\r\n    font-family: 'Libre Baskerville', serif;\r\n    font-size: 24px;\r\n}\r\n\r\na {\r\n    color: #333; /* Set a default color */\r\n    font-size: 16px;\r\n    text-decoration: none;\r\n    margin: 15px 5px 15px 5px;\r\n    transition: color 0.3s; /* Add a color transition effect */\r\n}\r\n\r\na:hover {\r\n        color: #9a3901; /* Change the color on hover */\r\n}\r\n\r\n.modalButton {\r\n    border-radius: 20px;\r\n    border: 1px solid #9a3901;\r\n    background-color: #9a3901;\r\n    color: #FFFFFF;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    padding: 12px 45px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    transition: transform 80ms ease-in;\r\n    cursor: pointer;\r\n}\r\n\r\n.modalButton:active {\r\n    transform: scale(0.95);\r\n}\r\n\r\n.modalButton:focus {\r\n    outline: none;\r\n}\r\n\r\n.modalButton.ghost {\r\n    background-color: transparent;\r\n    border-color: #FFFFFF;\r\n}\r\n\r\nform {\r\n    background-color: #FFFFFF;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 0 50px;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 12px 15px;\r\n    margin: 8px 0;\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\r\n        0 10px 10px rgba(0, 0, 0, 0.22);\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 768px;\r\n    max-width: 100%;\r\n    min-height: 480px;\r\n}\r\n\r\n.form-container {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n    transition: all 0.6s ease-in-out;\r\n}\r\n\r\n.sign-in-container {\r\n    left: 0;\r\n    width: 50%;\r\n    z-index: 2;\r\n}\r\n\r\n.container.right-panel-active .sign-in-container {\r\n    transform: translateX(100%);\r\n}\r\n\r\n.sign-up-container {\r\n    left: 0;\r\n    width: 50%;\r\n    opacity: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.container.right-panel-active .sign-up-container {\r\n    transform: translateX(100%);\r\n    opacity: 1;\r\n    z-index: 5;\r\n    animation: show 0.6s;\r\n}\r\n\r\n@keyframes show {\r\n\r\n    0%,\r\n    49.99% {\r\n        opacity: 0;\r\n        z-index: 1;\r\n    }\r\n\r\n    50%,\r\n    100% {\r\n        opacity: 1;\r\n        z-index: 5;\r\n    }\r\n}\r\n\r\n.overlay-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    transition: transform 0.6s ease-in-out;\r\n    z-index: 100;\r\n}\r\n\r\n.container.right-panel-active .overlay-container {\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.overlay {\r\n    background: #FF416C;\r\n    background: linear-gradient(to right, #311e13, #9a3901);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: 0 0;\r\n    color: #FFFFFF;\r\n    position: relative;\r\n    left: -100%;\r\n    height: 100%;\r\n    width: 200%;\r\n    transform: translateX(0);\r\n    transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.container.right-panel-active .overlay {\r\n    transform: translateX(50%);\r\n}\r\n\r\n.overlay-panel {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 0 40px;\r\n    text-align: center;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 50%;\r\n    transform: translateX(0);\r\n    transition: transform 0.6s ease-in-out;\r\n\r\n}\r\n\r\n.overlay-left {\r\n    transform: translateX(-20%);\r\n}\r\n\r\n.container.right-panel-active .overlay-left {\r\n    transform: translateX(0);\r\n}\r\n\r\n.overlay-right {\r\n    right: 0;\r\n    transform: translateX(0);\r\n}\r\n\r\n.container.right-panel-active .overlay-right {\r\n    transform: translateX(20%);\r\n}\r\n\r\n/* Style for Font Awesome icons */\r\n.social-container {\r\n    margin: 20px 0;\r\n\r\n    a {\r\n        border: 1px solid #DDDDDD;\r\n        border-radius: 50%;\r\n        display: inline-flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0 5px;\r\n        height: 40px;\r\n        width: 40px;\r\n\r\n        /* Define font size and color for the icons */\r\n        i {\r\n            font-size: 20px;\r\n            color: #333;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.close {\r\n    font-size: 78px;\r\n    /* Increase the font size for a larger symbol */\r\n    color: rgb(255, 255, 255);\r\n    /* Change the color of the symbol */\r\n    position: absolute;\r\n    /* Position the symbol absolutely within the relative parent */\r\n    top: 2%;\r\n    /* Adjust the top position relative to the parent overlay-panel */\r\n    right: 2%;\r\n    /* Adjust the right position relative to the parent overlay-panel */\r\n    cursor: pointer;\r\n    /* Change the cursor to a pointer when hovering over it */\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modalButton": `WQBrK5cPSi5IM1p2_yz_`,
	"ghost": `cWzDRzyMIuvl4jI3rOmf`,
	"container": `PcMHXN9U_jQxt50G8GsV`,
	"form-container": `KZB1FmPM2HSb6cQYM8ki`,
	"sign-in-container": `MP5KlrEKloeeLQpFyJAU`,
	"right-panel-active": `ntRBE_gGKJELHAH8VnDw`,
	"sign-up-container": `is8ZKUUfWAj78zLiHG6b`,
	"show": `_DuaL1AbwsYirh_oF4OT`,
	"overlay-container": `Git3pACgA_HaZqwUNann`,
	"overlay": `q2UzDW76nhRVU_B4WSk_`,
	"overlay-panel": `H1l2q5v8fLZuHZOUWP1A`,
	"overlay-left": `eCtaTrS47Fz4HvNNEnXd`,
	"overlay-right": `rY5icAB9lArmfWOjLwvC`,
	"social-container": `o_fajkqHL2vhsEf0AxKy`,
	"close": `Q5RK46AYcsru9BUe1OyI`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WishList/WishList.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WishList/WishList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cZYHiCDiogt8BLc8PSXB {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

p {
  font-size: 18px;
}

.umzBkSpUN3EoHDwSpx2W {
  margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/components/WishList/WishList.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;EACA,cAAA;AACJ;;AACA;EACI,eAAA;EACA,mBAAA;EACA,WAAA;AAEJ;;AACA;EACI,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;AAEJ;;AACA;EACI,eAAA;AAEJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".wishlistcontainer{\r\n    text-align: center;\r\n    padding: 20px;\r\n    border:1px solid #ccc;\r\n    border-radius:8px;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\r\n    margin: 0 auto;\r\n}\r\nh2{\r\n    font-size: 24px;\r\n    margin-bottom: 10px;\r\n    color: #333;\r\n}\r\n\r\nbutton{\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding:8px 16px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\np{\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n.productList{\r\n    margin-top: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wishlistcontainer": `cZYHiCDiogt8BLc8PSXB`,
	"productList": `umzBkSpUN3EoHDwSpx2W`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/CheckOutPage/CheckOutPage.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/CheckOutPage/CheckOutPage.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
  text-align: center;
  padding: 20px;
  display: block;
  margin-top: 3%;
  overflow-x: scroll;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}`, "",{"version":3,"sources":["webpack://./src/pages/CheckOutPage/CheckOutPage.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,aAAA;EACA,cAAA;EACA,cAAA;EACA,kBAAA;AACJ;;AAEA;EACI,eAAA;EACA,mBAAA;AACJ","sourcesContent":["main{\r\n    text-align: center;\r\n    padding: 20px;\r\n    display:block;\r\n    margin-top: 3%;\r\n    overflow-x: scroll;\r\n}\r\n\r\nh2{\r\n    font-size: 24px;\r\n    margin-bottom: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.U7F51i6q23MB43wS4GeC {
  position: fixed;
  top: 180px; /* Set the desired top position */
  width: 100%;
  display: flex; /* Use flexbox */
  justify-content: space-between; /* Split 50/50 */
  align-items: flex-start; /* Align items at the top */
}

.jcaOEHoKkKTmiEw1wPAA {
  top: 190px;
  width: 48%; /* Adjust the width as needed */
}

.BvVM3qjoYim3YZzDFzur {
  width: 48%; /* Adjust the width as needed */
}`, "",{"version":3,"sources":["webpack://./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,UAAA,EAAA,iCAAA;EACA,WAAA;EACA,aAAA,EAAA,gBAAA;EACA,8BAAA,EAAA,gBAAA;EACA,uBAAA,EAAA,2BAAA;AACF;;AAEA;EACE,UAAA;EACA,UAAA,EAAA,+BAAA;AACF;;AAEA;EACE,UAAA,EAAA,+BAAA;AACF","sourcesContent":[".OrderHistoryPage {\r\n  position: fixed;\r\n  top: 180px; /* Set the desired top position */\r\n  width: 100%;\r\n  display: flex; /* Use flexbox */\r\n  justify-content: space-between; /* Split 50/50 */\r\n  align-items: flex-start; /* Align items at the top */\r\n}\r\n\r\n.orderList {\r\n  top: 190px;\r\n  width: 48%; /* Adjust the width as needed */\r\n}\r\n\r\n.activeOrder {\r\n  width: 48%; /* Adjust the width as needed */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"OrderHistoryPage": `U7F51i6q23MB43wS4GeC`,
	"orderList": `jcaOEHoKkKTmiEw1wPAA`,
	"activeOrder": `BvVM3qjoYim3YZzDFzur`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProductPage/ProductPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProductPage/ProductPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ProductPage.module.scss */
.yKCAupoPbEz85VxoufgM {
  padding: 20px;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.v6PicTsKMefvoYnxGyQy {
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  width: 100%;
}

.ASIgUF4Ug1PbUnAFyJWQ {
  max-width: 200px;
  margin-right: 20px;
  flex: 0 0 auto;
  align-self: center; /* Center the image vertically */
}

.ASIgUF4Ug1PbUnAFyJWQ img {
  width: 100%;
  height: auto;
}

.kky9gIn2_5FPduQFHhUm {
  flex: 1;
}

.P3FeNsmT8ZsUYbXpZiL6 {
  font-size: 24px; /* Increase font size for the title */
  font-weight: bold;
  margin-bottom: 10px;
}

.AppRgZZyAfd3IZwCczcw {
  font-size: 18px; /* Increase font size for the price */
  color: #0073e6;
  margin-bottom: 10px;
}

.Zn0hryWxxon5M8w6Usf5 {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px; /* Add some spacing */
}

.Kdm1OFKERuKr4CnZaRH3 {
  font-size: 14px; /* Increase font size for reviews */
  color: lightslategray;
  margin-bottom: 14px;
}

.E923vN79tHD3Prdi6gO6 {
  font-size: 16px;
  line-height: 1.5;
}

.G6tC6DqL8ybdkGBQ0Kcu {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .v6PicTsKMefvoYnxGyQy {
    flex-direction: column;
  }
  .ASIgUF4Ug1PbUnAFyJWQ {
    max-width: 100%; /* Adjust image size for mobile */
    margin-right: 0;
    margin-bottom: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/ProductPage/ProductPage.module.scss"],"names":[],"mappings":"AAAA,4BAAA;AAEA;EACE,aAAA;EACA,yBAAA;EACA,8BAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,iBAAA;AAAF;;AAGA;EACE,sBAAA;EACA,sBAAA;EACA,wCAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;AAAF;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA,EAAA,gCAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;AAAF;;AAGA;EACE,OAAA;AAAF;;AAGA;EACE,eAAA,EAAA,qCAAA;EACA,iBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA,EAAA,qCAAA;EACA,cAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,qBAAA;AAAF;;AAGA;EACE,eAAA,EAAA,mCAAA;EACA,qBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,eAAA;EACA,gBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;AAAF;;AAGA,sBAAA;AACA;EACE;IACE,sBAAA;EAAF;EAGA;IACE,eAAA,EAAA,iCAAA;IACA,eAAA;IACA,mBAAA;EADF;AACF","sourcesContent":["/* ProductPage.module.scss */\r\n\r\n.productPage {\r\n  padding: 20px;\r\n  background-color: #f7f7f7;\r\n  font-family: Arial, sans-serif;\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: flex-start; \r\n  min-height: 100vh; \r\n}\r\n\r\n.productTile {\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  max-width: 800px; \r\n  width: 100%; \r\n}\r\n\r\n.productImage {\r\n  max-width: 200px;\r\n  margin-right: 20px;\r\n  flex: 0 0 auto;\r\n  align-self: center; /* Center the image vertically */\r\n}\r\n\r\n.productImage img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.productInfo {\r\n  flex: 1;\r\n}\r\n\r\n.productTitle {\r\n  font-size: 24px; /* Increase font size for the title */\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.productPrice {\r\n  font-size: 18px; /* Increase font size for the price */\r\n  color: #0073e6;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.productDescription {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  margin-bottom: 10px; /* Add some spacing */\r\n}\r\n\r\n.productReviews {\r\n  font-size: 14px; /* Increase font size for reviews */\r\n  color: lightslategray;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.productManufacturer {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.favoriteButton {\r\n  position: absolute;\r\n  top: 10px; \r\n  right: 10px; \r\n  background: none;\r\n  border: none;\r\n  font-size: 24px; \r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n/* Responsive design */\r\n@media (max-width: 768px) {\r\n  .productTile {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .productImage {\r\n    max-width: 100%; /* Adjust image size for mobile */\r\n    margin-right: 0;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"productPage": `yKCAupoPbEz85VxoufgM`,
	"productTile": `v6PicTsKMefvoYnxGyQy`,
	"productImage": `ASIgUF4Ug1PbUnAFyJWQ`,
	"productInfo": `kky9gIn2_5FPduQFHhUm`,
	"productTitle": `P3FeNsmT8ZsUYbXpZiL6`,
	"productPrice": `AppRgZZyAfd3IZwCczcw`,
	"productDescription": `Zn0hryWxxon5M8w6Usf5`,
	"productReviews": `Kdm1OFKERuKr4CnZaRH3`,
	"productManufacturer": `E923vN79tHD3Prdi6gO6`,
	"favoriteButton": `G6tC6DqL8ybdkGBQ0Kcu`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SubcategoryPage/SubcategoryPage.module.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SubcategoryPage/SubcategoryPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CartItem/CartItem.module.scss":
/*!******************************************************!*\
  !*** ./src/components/CartItem/CartItem.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CartItem.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/DepartmentList/DepartmentList.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/DepartmentList/DepartmentList.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./DepartmentList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/DepartmentList/DepartmentList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_DepartmentList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/HomeImage/HomeImage.module.scss":
/*!********************************************************!*\
  !*** ./src/components/HomeImage/HomeImage.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomeImage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HomeImage/HomeImage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderDetail/OrderDetail.module.scss":
/*!************************************************************!*\
  !*** ./src/components/OrderDetail/OrderDetail.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderDetail.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderDetail/OrderDetail.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderDetail_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderListItem/OrderListItem.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/OrderListItem/OrderListItem.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderListItem.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderListItem/OrderListItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderListItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/OrderList/OrderList.module.scss":
/*!********************************************************!*\
  !*** ./src/components/OrderList/OrderList.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/OrderList/OrderList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProductTile/ProductTile.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProductTile/ProductTile.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProductTile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProductTile/ProductTile.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductTile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SignUpForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/WishList/WishList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/WishList/WishList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WishList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./WishList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/WishList/WishList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WishList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WishList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WishList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_WishList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/CheckOutPage/CheckOutPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/CheckOutPage/CheckOutPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CheckOutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/CheckOutPage/CheckOutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CheckOutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./OrderHistoryPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/OrderHistoryPage/OrderHistoryPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_OrderHistoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProductPage/ProductPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProductPage/ProductPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProductPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProductPage/ProductPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProductPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/SubcategoryPage/SubcategoryPage.module.scss":
/*!***************************************************************!*\
  !*** ./src/pages/SubcategoryPage/SubcategoryPage.module.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SubcategoryPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SubcategoryPage/SubcategoryPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubcategoryPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-11535e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.js.map