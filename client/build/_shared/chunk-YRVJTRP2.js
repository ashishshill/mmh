import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-AASYCUHN.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductGrid.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ProductGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ProductGrid.tsx"
  );
  import.meta.hot.lastModified = "1739561471951.5376";
}
var ProductGrid = () => {
  const products = [
    {
      name: "Product 1",
      image: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: "20%"
      // Discount added
    },
    {
      name: "Product 2",
      image: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: "15%"
      // Discount added
    },
    {
      name: "Product 3",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: null
      // No discount
    },
    {
      name: "Product 4",
      image: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: "30%"
      // Discount added
    },
    {
      name: "Product 3",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: null
      // No discount
    },
    {
      name: "Product 4",
      image: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: ""
      // Discount added
    },
    {
      name: "Product 3",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: null
      // No discount
    },
    {
      name: "Product 4",
      image: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      price: "\xA39.99",
      discount: ""
      // Discount added
    }
    // Add more products as needed
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex items-center flex-wrap pt-4 pb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap -mx-6", children: products.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/shop", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "hover:grow hover:shadow-lg", src: product.image, alt: product.name }, void 0, false, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 72,
        columnNumber: 19
      }, this),
      product.discount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-3 rounded-bl-lg", children: [
        product.discount,
        " OFF"
      ] }, void 0, true, {
        fileName: "app/components/ProductGrid.tsx",
        lineNumber: 75,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-3 flex text-gray-500 items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.name }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 80,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pt-1 text-gray-900", children: product.price }, void 0, false, {
      fileName: "app/components/ProductGrid.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 70,
    columnNumber: 15
  }, this) }, index, false, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 69,
    columnNumber: 45
  }, this)) }, void 0, false, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ProductGrid.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
};
_c = ProductGrid;
var ProductGrid_default = ProductGrid;
var _c;
$RefreshReg$(_c, "ProductGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductGrid_default
};
//# sourceMappingURL=/build/_shared/chunk-YRVJTRP2.js.map
