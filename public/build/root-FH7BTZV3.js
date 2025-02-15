import {
  Link,
  Link2,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_dist
} from "/build/_shared/chunk-2PD44MSX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-AASYCUHN.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.tsx"
  );
}
var Navbar = () => {
  const categories = [{
    name: "Mendi",
    link: "/shop"
  }, {
    name: "Sports",
    link: "/shop"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "w-full z-50 top-0 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "menu-toggle", className: "cursor-pointer md:hidden block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "fill-current text-gray-900", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex space-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "text-gray-700 hover:text-black", to: "/", children: "Home" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "text-gray-700 hover:text-black", to: "/shop", children: "Shop" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-gray-700 hover:text-black focus:outline-none flex items-center", children: "Categories" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300", children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { to: category.link, className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: category.name }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 55,
            columnNumber: 21
          }, this) }, index, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 54,
            columnNumber: 54
          }, this)) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "flex items-center font-bold text-gray-800 text-xl", to: "/", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "fill-current text-gray-800 mr-2", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      "MMH"
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "text-gray-700 hover:text-black", to: "/profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "7", r: "3" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, { className: "text-gray-700 hover:text-black", to: "/cart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "10.5", cy: "18.5", r: "1.5" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "17.5", cy: "18.5", r: "1.5" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = Navbar;
var Navbar_default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
init_dist();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1739562871774.2966";
}
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-gray-800 text-white py-8 mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full md:w-1/4 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "order-1 md:order-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl", to: "#", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "svg",
            {
              className: "mr-2",
              xmlns: "http://www.w3.org/2000/svg",
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" }, void 0, false, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 40,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Footer.tsx",
              lineNumber: 36,
              columnNumber: 19
            },
            this
          ),
          "MMH"
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Follow Us" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.5 17h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5 7h-3v-9h3v9zm-1.5-10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm9 10h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 51,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15h-1.5v-4.5h-3v4.5h-1.5v-9h1.5v5h3v-5h1.5v9zm-5-7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M9 7h6v10h-6zm0-2c-.553 0-1 .447-1 1v12c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-12c0-.553-.447-1-1-1h-6z" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 63,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "order-1 md:order-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl", to: "#", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "svg",
            {
              className: "mr-2",
              xmlns: "http://www.w3.org/2000/svg",
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" }, void 0, false, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/Footer.tsx",
              lineNumber: 72,
              columnNumber: 19
            },
            this
          ),
          "MMH"
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full md:w-1/3 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "hover:text-gray-400", children: "Home" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "hover:text-gray-400", children: "Shop" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "hover:text-gray-400", children: "About Us" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "hover:text-gray-400", children: "Contact" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full md:w-1/3 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:info@example.com", className: "hover:text-gray-400", children: "info@example.com" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 98,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "tel:+123456789", className: "hover:text-gray-400", children: "+1 234 567 89" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 border-t pt-6 text-center text-sm text-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Your Company. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = Footer;
var Footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
}];
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "description", content: "Free open source Tailwind CSS Store template" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "keywords", content: "tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Nordic Shop" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c3 = Root;
var _c3;
$RefreshReg$(_c3, "Root");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Root as default,
  links
};
//# sourceMappingURL=/build/root-FH7BTZV3.js.map
