import {
  ProductGrid_default
} from "/build/_shared/chunk-YRVJTRP2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-AASYCUHN.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Carousel.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Carousel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Carousel.tsx"
  );
}
var carouselItems = [{
  id: 1,
  image: "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set",
  link: "#"
}, {
  id: 2,
  image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  title: "Real Bamboo Wall Clock",
  link: "#"
}, {
  id: 3,
  image: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  title: "Brown and Blue Hardbound Book",
  link: "#"
}];
var Carousel = () => {
  _s();
  const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5e3);
    return () => clearInterval(interval);
  }, [selectedIndex]);
  const handlePrev = () => {
    setSelectedIndex((prevIndex) => prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1);
  };
  const handleNext = () => {
    setSelectedIndex((prevIndex) => prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full", style: {
    height: "530px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden w-full", style: {
      height: "530px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex transition-transform duration-700 ease-in-out h-full", style: {
      transform: `translateX(-${selectedIndex * 100}%)`
    }, children: carouselItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex-shrink-0 h-full relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full bg-cover bg-center flex items-center pl-16 text-white", style: {
      backgroundImage: `url(${item.image})`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-black bg-opacity-50 p-6 rounded-lg max-w-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-4xl font-bold", children: item.title }, void 0, false, {
        fileName: "app/components/Carousel.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.link, className: "mt-4 inline-block text-white underline hover:text-gray-300 transition", children: "Learn More" }, void 0, false, {
        fileName: "app/components/Carousel.tsx",
        lineNumber: 74,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 68,
      columnNumber: 15
    }, this) }, item.id, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 67,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute left-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 ", onClick: handlePrev, children: "\u2039" }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "absolute right-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 ", onClick: handleNext, children: "\u203A" }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2", children: carouselItems.map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-black" : "bg-gray-300"}`, onClick: () => setSelectedIndex(index) }, index, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 96,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/Carousel.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Carousel.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(Carousel, "D4YQCQY2pZ6fGhoc4JfJZCPfwwU=");
_c = Carousel;
var Carousel_default = Carousel;
var _c;
$RefreshReg$(_c, "Carousel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Deliver.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Deliver.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Deliver.tsx"
  );
  import.meta.hot.lastModified = "1738394752345.753";
}
var PromoCard = ({
  iconSrc,
  title,
  description
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-12 h-12 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: iconSrc, alt: title, className: "w-full h-full object-contain" }, void 0, false, {
    fileName: "app/components/Deliver.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Deliver.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold text-gray-900", children: title }, void 0, false, {
      fileName: "app/components/Deliver.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs text-gray-600", children: description }, void 0, false, {
      fileName: "app/components/Deliver.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Deliver.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/Deliver.tsx",
  lineNumber: 26,
  columnNumber: 7
}, this);
_c2 = PromoCard;
var PromoCardsSection = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-50 py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PromoCard, { iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/camera.svg", title: "The BD's No. 1 bestselling brand", description: "of friendly bacteria supplements^" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PromoCard, { iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg", title: "Rated 'Excellent' on User Reviews", description: "4.8 stars (based on Reviews)" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PromoCard, { iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg", title: "Scientifically proven to reach ", description: "& complement the natural microbiome" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PromoCard, { iconSrc: "https://i.ibb.co/hFR4t2S5/535239.png", title: "All over the country Bangladesh", description: "and 14-day hassle-free returns" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Deliver.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "md:hidden flex items-center space-x-1 mt-4 ml-auto text-gray-600 hover:text-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-5 h-5", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("use", { xlinkHref: "/assets/img/icons.svg#flag-uk" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-3 h-3", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("use", { xlinkHref: "/assets/img/icons.svg#down-arrow" }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Deliver.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Deliver.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Deliver.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Deliver.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c22 = PromoCardsSection;
var Deliver_default = PromoCardsSection;
var _c2;
var _c22;
$RefreshReg$(_c2, "PromoCard");
$RefreshReg$(_c22, "PromoCardsSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Category.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Category.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Category.tsx"
  );
  import.meta.hot.lastModified = "1739562978094.4558";
}
var CategoryGrid = () => {
  const categories = [{
    title: "Digestive",
    imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/4c/4cf73959-a1f9-4829-8f0f-eae4d5fd1475.638724424360000000.jpg",
    link: "#"
  }, {
    title: "Daily & Immunity",
    imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/5c/5c551dfd-b9a7-4bf7-a84f-83d75e79f646.638724424360000000.jpg",
    link: "#"
  }, {
    title: "Women's Intimate",
    imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/56/56de93e8-b22b-4440-b075-459d54a3fcb0.638724424390000000.jpg",
    link: "#"
  }, {
    title: "Babies & Children",
    imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/ad/ad7270d6-c824-438f-8c58-8a4396ff0935.638724424450000000.jpg",
    link: "#"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col md:flex-row gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:w-1/2 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-tight", children: "High quality live cultures, backed by credible science" }, void 0, false, {
        fileName: "app/components/Category.tsx",
        lineNumber: 45,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-lg text-gray-600", children: "At Optibac we specialise entirely in live cultures and have many different supplements for different life stages and individual needs." }, void 0, false, {
        fileName: "app/components/Category.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.tsx",
      lineNumber: 44,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "md:w-1/2 grid grid-cols-2 gap-4", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "group relative overflow-hidden rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: category.link, className: "block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: category.imageUrl, alt: `${category.title} probiotics`, className: "w-full h-48 object-cover transition-opacity group-hover:opacity-90" }, void 0, false, {
        fileName: "app/components/Category.tsx",
        lineNumber: 58,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-0 bg-black/30 flex items-center justify-between p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white text-xl font-semibold", children: category.title }, void 0, false, {
          fileName: "app/components/Category.tsx",
          lineNumber: 60,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }, void 0, false, {
          fileName: "app/components/Category.tsx",
          lineNumber: 62,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/Category.tsx",
          lineNumber: 61,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Category.tsx",
        lineNumber: 59,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.tsx",
      lineNumber: 57,
      columnNumber: 33
    }, this) }, index, false, {
      fileName: "app/components/Category.tsx",
      lineNumber: 56,
      columnNumber: 62
    }, this)) }, void 0, false, {
      fileName: "app/components/Category.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Category.tsx",
    lineNumber: 42,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/Category.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Category.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_c3 = CategoryGrid;
var Category_default = CategoryGrid;
var _c3;
$RefreshReg$(_c3, "CategoryGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1739561437531.1235";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Carousel_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Deliver_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProductGrid_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Category_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c4 = Index;
var _c4;
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-WKRKKWDU.js.map
