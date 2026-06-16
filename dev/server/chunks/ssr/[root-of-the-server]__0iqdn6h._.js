module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/components/Breadcrumb.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function Breadcrumb({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Ruta de navegación",
        className: "mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex flex-wrap items-center gap-1.5 text-sm",
            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center gap-1.5",
                    children: [
                        item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "text-slate-400 transition-colors hover:text-brand",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumb.tsx",
                            lineNumber: 11,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-700",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumb.tsx",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this),
                        i < items.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-3.5 w-3.5 text-slate-300",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2.5,
                            stroke: "currentColor",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5"
                            }, void 0, false, {
                                fileName: "[project]/components/Breadcrumb.tsx",
                                lineNumber: 29,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Breadcrumb.tsx",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this)
                    ]
                }, `${item.label}-${i}`, true, {
                    fileName: "[project]/components/Breadcrumb.tsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Breadcrumb.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Breadcrumb.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function getMainPrice(product) {
    const priceLine = product.lines.find((l)=>l.label.toLowerCase().includes("precio"));
    return priceLine?.value ?? null;
}
function ProductCard({ product, onClick }) {
    const mainPrice = getMainPrice(product);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "card-lift group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onClick,
                className: "relative block aspect-[4/3] w-full overflow-hidden bg-slate-50",
                "aria-label": `Ver detalles de ${product.title}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image,
                        alt: product.title,
                        fill: true,
                        className: "object-contain p-4 transition-transform duration-500 group-hover:scale-105",
                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-2.5 top-2.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700 ring-1 ring-amber-200",
                        children: "Imagen referencial"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-colors duration-200 group-hover:bg-slate-900/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "translate-y-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-700 opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100",
                            children: "Ver detalles"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1 text-sm font-semibold text-slate-700",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    mainPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-lg font-bold text-brand",
                        children: mainPrice
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClick,
                            className: "flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white",
                            children: [
                                "Ver detalles",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-3.5 w-3.5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 2.5,
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "m8.25 4.5 7.5 7.5-7.5 7.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/StoreInfo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreInfo",
    ()=>StoreInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-rsc] (ecmascript)");
;
;
const boxes = [
    {
        icon: "fas fa-phone-alt",
        title: "Teléfonos",
        lines: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE"].phones,
        color: "bg-teal-50 text-teal-700"
    },
    {
        icon: "fas fa-map-marker-alt",
        title: "Dirección",
        lines: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE"].address
        ],
        color: "bg-sky-50 text-sky-700"
    },
    {
        icon: "fas fa-clock",
        title: "Horarios",
        lines: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE"].hours,
        color: "bg-violet-50 text-violet-700"
    },
    {
        icon: "fas fa-envelope",
        title: "Correo",
        lines: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE"].email
        ],
        color: "bg-rose-50 text-rose-700"
    }
];
function StoreInfo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-slate-100 bg-white py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
                children: boxes.map((box)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4 rounded-2xl bg-slate-50 p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${box.color}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: box.icon
                                }, void 0, false, {
                                    fileName: "[project]/components/StoreInfo.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/StoreInfo.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-1 text-sm font-bold text-slate-800",
                                        children: box.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/StoreInfo.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    box.lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed text-slate-500",
                                            children: line
                                        }, line, false, {
                                            fileName: "[project]/components/StoreInfo.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StoreInfo.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, box.title, true, {
                        fileName: "[project]/components/StoreInfo.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/StoreInfo.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/StoreInfo.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StoreInfo.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductsBySlug",
    ()=>getProductsBySlug,
    "productsByCollege",
    ()=>productsByCollege
]);
const L = (items)=>items.map(([label, value])=>({
            label,
            value
        }));
const productsByCollege = {
    "colegio-las-condes": [
        {
            title: "Polera deportiva",
            image: "/img/productos/Colegio_lascondes/CLC-B1_v2.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.900"
                ],
                [
                    "Material",
                    "Jersey"
                ],
                [
                    "Tipo",
                    "Manga Larga"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Polera Deportiva",
            image: "/img/productos/Colegio_lascondes/CLC-B4_v2.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Material",
                    "Jersey"
                ],
                [
                    "Tipo",
                    "Manga Corta"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_lascondes/CLC-M1.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Material",
                    "Casimir Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Polera Institucional",
            image: "/img/productos/Colegio_lascondes/CLC-M4.webp",
            lines: L([
                [
                    "Precio polera",
                    "Desde $13.500"
                ],
                [
                    "Tipo",
                    "Manga Corta"
                ],
                [
                    "Material",
                    "Piqué"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        }
    ],
    "colegio-coyancura": [
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_Coyancura/CC_BZ1.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Tipo",
                    "Jersey"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.200"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_Coyancura/CC_BZ2.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.200"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Coyancura/CC_M1.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $13.500"
                ],
                [
                    "Material",
                    "Piqué"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Casimir Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Coyancura/CC_M2.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Casimir Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        }
    ],
    "colegio-leonardo-da-vinci": [
        {
            title: "Vestimenta deportiva",
            image: "/img/productos/Colegio_Leonardo_da_vinci/CLD-B1.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.200"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Polera deportiva",
            image: "/img/productos/Colegio_Leonardo_da_vinci/CLD-B3.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Tipo",
                    "Jersey"
                ],
                [
                    "Material",
                    "Jersey"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Leonardo_da_vinci/CLD-H1.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Pantalón",
                    "Desde $15.900"
                ],
                [
                    "Material",
                    "Tradicional"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Leonardo_da_vinci/CLD-H5.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $13.500"
                ],
                [
                    "Material",
                    "Pique"
                ],
                [
                    "Precio Falda",
                    "Desde $17.900"
                ],
                [
                    "Tipo",
                    "Gris"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Leonardo_da_vinci/CLD-M2.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Material",
                    "Casimir Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        }
    ],
    "colegio-san-francisco": [
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_san_francisco/CSFTP-POL.jpeg",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Tipo",
                    "Jersey"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_san_francisco/CSFTP-B3.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.200"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_san_francisco/SFTPPOL2.jpeg",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $13.500"
                ],
                [
                    "Tipo",
                    "Pique"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_san_francisco/CSFTP-M3.webp",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Algodón"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Falda Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        }
    ],
    "colegio-simon-bolivar": [
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Simon_bolivar/CSB_UM.webp",
            lines: L([
                [
                    "Precio polera",
                    "Desde $13.500"
                ],
                [
                    "Material",
                    "Piqué"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Falda Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Simon_bolivar/CSB_UM2.webp",
            lines: L([
                [
                    "Precio polerón",
                    "Desde $19.500"
                ],
                [
                    "Material",
                    "Franela Fantasía"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Falda Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Simon_bolivar/CSB_UM3.webp",
            lines: L([
                [
                    "Precio corbata",
                    "$8.900"
                ],
                [
                    "Material",
                    "Franela Fantasía"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Falda Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Institucional",
            image: "/img/productos/Colegio_Simon_bolivar/CSB_UM4.webp",
            lines: L([
                [
                    "Precio camisa",
                    "Desde $11.500"
                ],
                [
                    "Material",
                    "Genérica"
                ],
                [
                    "Precio Falda",
                    "Desde $21.500"
                ],
                [
                    "Tipo",
                    "Falda Escocés"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Polera Deportiva",
            image: "/img/productos/Colegio_Simon_bolivar/SB_POL1.webp",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Material",
                    "Gamuza"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_Simon_bolivar/SIM-BOL2.png",
            lines: L([
                [
                    "Precio Polerón",
                    "Desde $14.300"
                ],
                [
                    "Material",
                    "Franela Fantasía"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.500"
                ],
                [
                    "Material",
                    "Franela algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        },
        {
            title: "Vestimenta Deportiva",
            image: "/img/productos/Colegio_Simon_bolivar/SIM-BOL.png",
            lines: L([
                [
                    "Precio Polera",
                    "Desde $11.500"
                ],
                [
                    "Material",
                    "Gamuza"
                ],
                [
                    "Precio Buzo",
                    "Desde $14.500"
                ],
                [
                    "Material",
                    "Franela algodón"
                ],
                [
                    "Tallas disponibles",
                    "4 a XXL"
                ]
            ])
        }
    ]
};
// Rosario y San Francisco del Alba: rutas con espacios en carpetas del sitio original
productsByCollege["colegio-nuestra-senora-del-rosario"] = [
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-H01-1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.900"
            ],
            [
                "Material",
                "Pique"
            ],
            [
                "Precio Pantalón",
                "Desde $15.900"
            ],
            [
                "Material",
                "Tradicional"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-H01-2.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.500"
            ],
            [
                "Material",
                "Pique"
            ],
            [
                "Precio Pantalón",
                "Desde $15.900"
            ],
            [
                "Material",
                "Tradicional"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-H02-1.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Pantalón",
                "Desde $15.900"
            ],
            [
                "Material",
                "Tradicional"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-B01-4.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $11.500"
            ],
            [
                "Tipo",
                "Jersey"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-B01-1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $11.500"
            ],
            [
                "Tipo",
                "Jersey"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Tallas disponibles",
                "10 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-B01-3.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-B01-5.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-M01-1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.900"
            ],
            [
                "Tipo",
                "Pique"
            ],
            [
                "Precio Falda",
                "Desde $17.900"
            ],
            [
                "Tipo",
                "Tablas Azul"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-M01-2.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.500"
            ],
            [
                "Material",
                "Piquen"
            ],
            [
                "Precio Falda",
                "Desde $17.900"
            ],
            [
                "Tipo",
                "Tablas Azul"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR-M02-1.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Falda",
                "Desde $17.900"
            ],
            [
                "Tipo",
                "Tablas Azul"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    }
];
productsByCollege["colegio-san-francisco-del-alba"] = [
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-M4.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Falda",
                "Desde $21.500"
            ],
            [
                "Material",
                "Casimir Escocés"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-M5.webp",
        lines: L([
            [
                "Precio camisa",
                "Desde $11.500"
            ],
            [
                "Material",
                "Genérica"
            ],
            [
                "Precio Falda",
                "Desde $21.500"
            ],
            [
                "Material",
                "Casimir Escocés"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta deportiva",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-B1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $11.500"
            ],
            [
                "Material",
                "Gamuza"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Algodón"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta deportiva",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-B2.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Buzo",
                "Desde $14.200"
            ],
            [
                "Material",
                "Algodón"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-H1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.500"
            ],
            [
                "Material",
                "Pique"
            ],
            [
                "Precio Pantalón",
                "Desde $15.900"
            ],
            [
                "Material",
                "Tradicional"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-H2.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Pantalón",
                "Desde $15.900"
            ],
            [
                "Material",
                "Tradicional"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-M1.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $13.500"
            ],
            [
                "Material",
                "Pique"
            ],
            [
                "Precio Falda",
                "Desde $21.500"
            ],
            [
                "Material",
                "Casimir Escocés"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Institucional",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-M2.webp",
        lines: L([
            [
                "Precio Polerón",
                "Desde $19.500"
            ],
            [
                "Material",
                "Franela Algodón"
            ],
            [
                "Precio Falda",
                "Desde $21.500"
            ],
            [
                "Material",
                "Casimir Escocés"
            ],
            [
                "Tallas disponibles",
                "4 a XXL"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_san-francisco-del-alba/SFA-MANGA-CORTA.png",
        lines: L([
            [
                "Precio Polera",
                "Desde $11.500"
            ],
            [
                "Tipo",
                "Manga Corta"
            ],
            [
                "Detalle",
                "Deportiva"
            ]
        ])
    },
    {
        title: "Vestimenta Deportiva",
        image: "/img/productos/Colegio_san-francisco-del-alba/CSDA-M6.webp",
        lines: L([
            [
                "Precio Polera",
                "Desde $11.900"
            ],
            [
                "Tipo",
                "Manga Larga"
            ],
            [
                "Detalle",
                "Deportiva"
            ]
        ])
    }
];
function getProductsBySlug(slug) {
    return productsByCollege[slug] ?? [];
}
}),
"[project]/app/colegios/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollegePage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Breadcrumb.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoreInfo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colleges"].map((c)=>({
            slug: c.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const college = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollegeBySlug"])(slug);
    if (!college) return {
        title: "Colegio no encontrado"
    };
    return {
        title: `Uniformes ${college.name}`,
        description: `Encuentra el uniforme que necesitas para ${college.name}.`
    };
}
async function CollegePage({ params }) {
    const { slug } = await params;
    const college = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollegeBySlug"])(slug);
    if (!college) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsBySlug"])(slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                        items: [
                            {
                                label: "Inicio",
                                href: "/"
                            },
                            {
                                label: "Colegios",
                                href: "/colegios"
                            },
                            {
                                label: college.name
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/app/colegios/[slug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-10 text-center text-3xl font-bold text-brand",
                        children: college.name
                    }, void 0, false, {
                        fileName: "[project]/app/colegios/[slug]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-6",
                        children: products.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: product
                            }, `${product.image}-${i}`, false, {
                                fileName: "[project]/app/colegios/[slug]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/colegios/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/colegios/[slug]/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreInfo"], {}, void 0, false, {
                fileName: "[project]/app/colegios/[slug]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/colegios/[slug]/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/colegios/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/colegios/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0iqdn6h._.js.map