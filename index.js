var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root,
  links: () => links
});
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// app/components/Navbar.tsx
import { Link } from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Navbar = () => /* @__PURE__ */ jsx2("nav", { className: "w-full z-50 top-0 py-3", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center justify-between px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "menu-toggle", className: "cursor-pointer md:hidden block", children: [
      /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Open main menu" }),
      /* @__PURE__ */ jsx2(
        "svg",
        {
          className: "fill-current text-gray-900",
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx2("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex space-x-6", children: [
      /* @__PURE__ */ jsx2(Link, { className: "text-gray-700 hover:text-black", to: "/", children: "Home" }),
      /* @__PURE__ */ jsx2(Link, { className: "text-gray-700 hover:text-black", to: "/shop", children: "Shop" }),
      /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsx2("button", { className: "text-gray-700 hover:text-black focus:outline-none flex items-center", children: "Categories" }),
        /* @__PURE__ */ jsx2("ul", { className: "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300", children: [
          {
            name: "Mendi",
            link: "/shop"
          },
          {
            name: "Sports",
            link: "/shop"
          }
        ].map(
          (category, index) => /* @__PURE__ */ jsx2("li", { className: "relative group", children: /* @__PURE__ */ jsx2(
            Link,
            {
              to: category.link,
              className: "block px-4 py-2 text-gray-700 hover:bg-gray-100",
              children: category.name
            }
          ) }, index)
        ) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx2("div", { className: "absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsxs(Link, { className: "flex items-center font-bold text-gray-800 text-xl", to: "/", children: [
    /* @__PURE__ */ jsx2(
      "svg",
      {
        className: "fill-current text-gray-800 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ jsx2("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" })
      }
    ),
    "MMH"
  ] }) }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
    /* @__PURE__ */ jsx2(Link, { className: "text-gray-700 hover:text-black", to: "/profile", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "w-6 h-6",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: [
          /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "7", r: "3" }),
          /* @__PURE__ */ jsx2("path", { d: "M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx2(Link, { className: "text-gray-700 hover:text-black", to: "/cart", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "w-6 h-6",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: [
          /* @__PURE__ */ jsx2("path", { d: "M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" }),
          /* @__PURE__ */ jsx2("circle", { cx: "10.5", cy: "18.5", r: "1.5" }),
          /* @__PURE__ */ jsx2("circle", { cx: "17.5", cy: "18.5", r: "1.5" })
        ]
      }
    ) })
  ] })
] }) }), Navbar_default = Navbar;

// app/components/Footer.tsx
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => /* @__PURE__ */ jsx3("footer", { className: "bg-gray-800 text-white py-8 mt-12", children: /* @__PURE__ */ jsxs2("div", { className: "container mx-auto px-6", children: [
  /* @__PURE__ */ jsxs2("div", { className: "flex flex-wrap justify-between", children: [
    /* @__PURE__ */ jsx3("div", { className: "w-full md:w-1/4 mb-6", children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx3("div", { className: "order-1 md:order-2", children: /* @__PURE__ */ jsxs2(
        Link2,
        {
          className: "flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl",
          to: "#",
          children: [
            /* @__PURE__ */ jsx3(
              "svg",
              {
                className: "mr-2",
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx3("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" })
              }
            ),
            "MMH"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold mb-4", children: "Follow Us" }),
      /* @__PURE__ */ jsxs2("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ jsx3("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx3("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.5 17h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5 7h-3v-9h3v9zm-1.5-10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm9 10h-3v-6h3v6zm-1.5-7c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" }) }) }),
        /* @__PURE__ */ jsx3("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx3("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15h-1.5v-4.5h-3v4.5h-1.5v-9h1.5v5h3v-5h1.5v9zm-5-7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" }) }) }),
        /* @__PURE__ */ jsx3("a", { href: "#", className: "text-gray-400 hover:text-white", children: /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ jsx3("path", { d: "M9 7h6v10h-6zm0-2c-.553 0-1 .447-1 1v12c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-12c0-.553-.447-1-1-1h-6z" }) }) })
      ] }),
      /* @__PURE__ */ jsx3("div", { className: "order-1 md:order-2 mt-4", children: /* @__PURE__ */ jsxs2(
        Link2,
        {
          className: "flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl",
          to: "#",
          children: [
            /* @__PURE__ */ jsx3(
              "svg",
              {
                className: "mr-2",
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx3("path", { d: "M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" })
              }
            ),
            "MMH"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { className: "w-full md:w-1/3 mb-6", children: [
      /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }),
      /* @__PURE__ */ jsxs2("ul", { children: [
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "#", className: "hover:text-gray-400", children: "Home" }) }),
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "#", className: "hover:text-gray-400", children: "Shop" }) }),
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "#", className: "hover:text-gray-400", children: "About Us" }) }),
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "#", className: "hover:text-gray-400", children: "Contact" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "w-full md:w-1/3 mb-6", children: [
      /* @__PURE__ */ jsx3("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }),
      /* @__PURE__ */ jsxs2("ul", { children: [
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "mailto:info@example.com", className: "hover:text-gray-400", children: "info@example.com" }) }),
        /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3("a", { href: "tel:+123456789", className: "hover:text-gray-400", children: "+1 234 567 89" }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx3("div", { className: "mt-8 border-t pt-6 text-center text-sm text-gray-400", children: /* @__PURE__ */ jsxs2("p", { children: [
    "\xA9 ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Your Company. All rights reserved."
  ] }) })
] }) }), Footer_default = Footer;

// app/root.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
  }
];
function Root() {
  return /* @__PURE__ */ jsxs3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx4("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx4("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }),
      /* @__PURE__ */ jsx4("meta", { name: "description", content: "Free open source Tailwind CSS Store template" }),
      /* @__PURE__ */ jsx4("meta", { name: "keywords", content: "tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic" }),
      /* @__PURE__ */ jsx4("title", { children: "Nordic Shop" }),
      /* @__PURE__ */ jsx4(Meta, {}),
      /* @__PURE__ */ jsx4(Links, {})
    ] }),
    /* @__PURE__ */ jsxs3("body", { children: [
      /* @__PURE__ */ jsx4(Navbar_default, {}),
      " ",
      /* @__PURE__ */ jsxs3("main", { children: [
        /* @__PURE__ */ jsx4(Outlet, {}),
        " "
      ] }),
      /* @__PURE__ */ jsx4(Footer_default, {}),
      " ",
      /* @__PURE__ */ jsx4(ScrollRestoration, {}),
      /* @__PURE__ */ jsx4(Scripts, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/components/Carousel.tsx
import { useState, useEffect } from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set",
    link: "#"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Real Bamboo Wall Clock",
    link: "#"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Brown and Blue Hardbound Book",
    link: "#"
  }
], Carousel = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      handleNext();
    }, 5e3);
    return () => clearInterval(interval);
  }, [selectedIndex]);
  let handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, handleNext = () => {
    setSelectedIndex(
      (prevIndex) => prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  return /* @__PURE__ */ jsxs4("div", { className: "relative w-full", style: { height: "530px" }, children: [
    /* @__PURE__ */ jsx5("div", { className: "relative overflow-hidden w-full", style: { height: "530px" }, children: /* @__PURE__ */ jsx5(
      "div",
      {
        className: "flex transition-transform duration-700 ease-in-out h-full",
        style: { transform: `translateX(-${selectedIndex * 100}%)` },
        children: carouselItems.map(
          (item) => /* @__PURE__ */ jsx5("div", { className: "w-full flex-shrink-0 h-full relative", children: /* @__PURE__ */ jsx5(
            "div",
            {
              className: "h-full w-full bg-cover bg-center flex items-center pl-16 text-white",
              style: { backgroundImage: `url(${item.image})` },
              children: /* @__PURE__ */ jsxs4("div", { className: "bg-black bg-opacity-50 p-6 rounded-lg max-w-lg", children: [
                /* @__PURE__ */ jsx5("p", { className: "text-white text-4xl font-bold", children: item.title }),
                /* @__PURE__ */ jsx5(
                  "a",
                  {
                    href: item.link,
                    className: "mt-4 inline-block text-white underline hover:text-gray-300 transition",
                    children: "Learn More"
                  }
                )
              ] })
            }
          ) }, item.id)
        )
      }
    ) }),
    /* @__PURE__ */ jsx5(
      "button",
      {
        className: "absolute left-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 ",
        onClick: handlePrev,
        children: "\u2039"
      }
    ),
    /* @__PURE__ */ jsx5(
      "button",
      {
        className: "absolute right-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 ",
        onClick: handleNext,
        children: "\u203A"
      }
    ),
    /* @__PURE__ */ jsx5("div", { className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2", children: carouselItems.map(
      (_, index) => /* @__PURE__ */ jsx5(
        "button",
        {
          className: `w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-black" : "bg-gray-300"}`,
          onClick: () => setSelectedIndex(index)
        },
        index
      )
    ) })
  ] });
}, Carousel_default = Carousel;

// app/components/Deliver.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var PromoCard = ({ iconSrc, title, description }) => /* @__PURE__ */ jsxs5("div", { className: "flex items-center space-x-3", children: [
  /* @__PURE__ */ jsx6("div", { className: "w-12 h-12 flex-shrink-0", children: /* @__PURE__ */ jsx6("img", { src: iconSrc, alt: title, className: "w-full h-full object-contain" }) }),
  /* @__PURE__ */ jsxs5("div", { children: [
    /* @__PURE__ */ jsx6("p", { className: "text-sm font-semibold text-gray-900", children: title }),
    /* @__PURE__ */ jsx6("p", { className: "text-xs text-gray-600", children: description })
  ] })
] }), PromoCardsSection = () => /* @__PURE__ */ jsx6("div", { className: "bg-gray-50 py-2", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-7xl mx-auto px-4", children: [
  /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsx6(
      PromoCard,
      {
        iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/camera.svg",
        title: "The BD's No. 1 bestselling brand",
        description: "of friendly bacteria supplements^"
      }
    ),
    /* @__PURE__ */ jsx6(
      PromoCard,
      {
        iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg",
        title: "Rated 'Excellent' on User Reviews",
        description: "4.8 stars (based on Reviews)"
      }
    ),
    /* @__PURE__ */ jsx6(
      PromoCard,
      {
        iconSrc: "https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg",
        title: "Scientifically proven to reach ",
        description: "& complement the natural microbiome"
      }
    ),
    /* @__PURE__ */ jsx6(
      PromoCard,
      {
        iconSrc: "https://i.ibb.co/hFR4t2S5/535239.png",
        title: "All over the country Bangladesh",
        description: "and 14-day hassle-free returns"
      }
    )
  ] }),
  /* @__PURE__ */ jsxs5("button", { className: "md:hidden flex items-center space-x-1 mt-4 ml-auto text-gray-600 hover:text-gray-900", children: [
    /* @__PURE__ */ jsx6("svg", { className: "w-5 h-5", fill: "currentColor", children: /* @__PURE__ */ jsx6("use", { xlinkHref: "/assets/img/icons.svg#flag-uk" }) }),
    /* @__PURE__ */ jsx6("svg", { className: "w-3 h-3", fill: "currentColor", children: /* @__PURE__ */ jsx6("use", { xlinkHref: "/assets/img/icons.svg#down-arrow" }) })
  ] })
] }) }), Deliver_default = PromoCardsSection;

// app/components/ProductGrid.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var ProductGrid = () => /* @__PURE__ */ jsx7("section", { className: "bg-white py-8", children: /* @__PURE__ */ jsx7("div", { className: "container mx-auto flex items-center flex-wrap pt-4 pb-12", children: /* @__PURE__ */ jsx7("div", { className: "flex flex-wrap -mx-6", children: [
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
].map((product, index) => /* @__PURE__ */ jsx7(
  "div",
  {
    className: "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col",
    children: /* @__PURE__ */ jsxs6("a", { href: "/shop", children: [
      /* @__PURE__ */ jsxs6("div", { className: "relative", children: [
        /* @__PURE__ */ jsx7(
          "img",
          {
            className: "hover:grow hover:shadow-lg",
            src: product.image,
            alt: product.name
          }
        ),
        product.discount && /* @__PURE__ */ jsxs6("div", { className: "absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-3 rounded-bl-lg", children: [
          product.discount,
          " OFF"
        ] })
      ] }),
      /* @__PURE__ */ jsx7("div", { className: "pt-3 flex text-gray-500 items-center justify-between", children: /* @__PURE__ */ jsx7("p", { children: product.name }) }),
      /* @__PURE__ */ jsx7("p", { className: "pt-1 text-gray-900", children: product.price })
    ] })
  },
  index
)) }) }) }), ProductGrid_default = ProductGrid;

// app/components/Category.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var CategoryGrid = () => /* @__PURE__ */ jsx8("section", { className: "py-16", children: /* @__PURE__ */ jsx8("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs7("div", { className: "flex flex-col md:flex-row gap-8", children: [
  /* @__PURE__ */ jsxs7("div", { className: "md:w-1/2 space-y-6", children: [
    /* @__PURE__ */ jsx8("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-tight", children: "High quality live cultures, backed by credible science" }),
    /* @__PURE__ */ jsx8("p", { className: "text-lg text-gray-600", children: "At Optibac we specialise entirely in live cultures and have many different supplements for different life stages and individual needs." })
  ] }),
  /* @__PURE__ */ jsx8("ul", { className: "md:w-1/2 grid grid-cols-2 gap-4", children: [
    {
      title: "Digestive",
      imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/4c/4cf73959-a1f9-4829-8f0f-eae4d5fd1475.638724424360000000.jpg",
      link: "#"
    },
    {
      title: "Daily & Immunity",
      imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/5c/5c551dfd-b9a7-4bf7-a84f-83d75e79f646.638724424360000000.jpg",
      link: "#"
    },
    {
      title: "Women's Intimate",
      imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/56/56de93e8-b22b-4440-b075-459d54a3fcb0.638724424390000000.jpg",
      link: "#"
    },
    {
      title: "Babies & Children",
      imageUrl: "https://cdn.optibacprobiotics.com/uk/optibacuk/files/ad/ad7270d6-c824-438f-8c58-8a4396ff0935.638724424450000000.jpg",
      link: "#"
    }
  ].map((category, index) => /* @__PURE__ */ jsx8("li", { className: "group relative overflow-hidden rounded-lg", children: /* @__PURE__ */ jsxs7("a", { href: category.link, className: "block", children: [
    /* @__PURE__ */ jsx8(
      "img",
      {
        src: category.imageUrl,
        alt: `${category.title} probiotics`,
        className: "w-full h-48 object-cover transition-opacity group-hover:opacity-90"
      }
    ),
    /* @__PURE__ */ jsxs7("div", { className: "absolute inset-0 bg-black/30 flex items-center justify-between p-4", children: [
      /* @__PURE__ */ jsx8("h3", { className: "text-white text-xl font-semibold", children: category.title }),
      /* @__PURE__ */ jsx8("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
    ] })
  ] }) }, index)) })
] }) }) }), Category_default = CategoryGrid;

// app/routes/_index.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsxs8("main", { children: [
    /* @__PURE__ */ jsx9(Carousel_default, {}),
    /* @__PURE__ */ jsx9(Deliver_default, {}),
    /* @__PURE__ */ jsx9(ProductGrid_default, {}),
    /* @__PURE__ */ jsx9(Category_default, {})
  ] }) });
}

// app/routes/Shop.tsx
var Shop_exports = {};
__export(Shop_exports, {
  default: () => ProductsPage
});
import { jsx as jsx10 } from "react/jsx-runtime";
function ProductsPage() {
  return /* @__PURE__ */ jsx10(ProductGrid_default, {});
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7QQRCVII.js", imports: ["/build/_shared/chunk-NQXRBIHY.js", "/build/_shared/chunk-MFPRU5OA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VKX35K6D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Shop": { id: "routes/Shop", parentId: "root", path: "Shop", index: void 0, caseSensitive: void 0, module: "/build/routes/Shop-GDIIWS5G.js", imports: ["/build/_shared/chunk-WQHMSRVG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AKIMELMV.js", imports: ["/build/_shared/chunk-WQHMSRVG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e56e29c9", hmr: void 0, url: "/build/manifest-E56E29C9.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/Shop": {
    id: "routes/Shop",
    parentId: "root",
    path: "Shop",
    index: void 0,
    caseSensitive: void 0,
    module: Shop_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
