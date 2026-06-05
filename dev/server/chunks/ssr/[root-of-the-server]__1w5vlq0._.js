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
"[project]/components/ProductGrid.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductGrid() from the server but ProductGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProductGrid.tsx <module evaluation>", "ProductGrid");
}),
"[project]/components/ProductGrid.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductGrid() from the server but ProductGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProductGrid.tsx", "ProductGrid");
}),
"[project]/components/ProductGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ProductGrid.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ProductGrid.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
            image: "/img/productos/Colegio_Leonardo_ da_vinci/CLD-B1.webp",
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
            image: "/img/productos/Colegio_Leonardo_ da_vinci/CLD-B3.webp",
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
            image: "/img/productos/Colegio_Leonardo_ da_vinci/CLD-H1.webp",
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
            image: "/img/productos/Colegio_Leonardo_ da_vinci/CLD-H5.webp",
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
            image: "/img/productos/Colegio_Leonardo_ da_vinci/CLD-M2.webp",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoreInfo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
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
        description: `Encuentra el uniforme que necesitas para ${college.name}. Ver precios y disponibilidad.`
    };
}
async function CollegePage({ params }) {
    const { slug } = await params;
    const college = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollegeBySlug"])(slug);
    if (!college) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsBySlug"])(slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white py-10 md:py-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumb"], {
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
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-6 text-center md:flex-row md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:h-32 md:w-32",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: college.image,
                                        alt: college.name,
                                        fill: true,
                                        className: "object-contain p-3",
                                        sizes: "128px",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/colegios/[slug]/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-1 text-xs font-bold uppercase tracking-widest text-brand",
                                            children: "Uniformes escolares"
                                        }, void 0, false, {
                                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-slate-800 md:text-4xl",
                                            children: college.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-500",
                                            children: [
                                                products.length,
                                                " producto",
                                                products.length !== 1 ? "s" : "",
                                                " disponible",
                                                products.length !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/colegios/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-slate-800",
                                    children: "Catálogo de uniformes"
                                }, void 0, false, {
                                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-400",
                                    children: "Haz clic en un producto para ver sus detalles"
                                }, void 0, false, {
                                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductGrid"], {
                            products: products,
                            collegeName: college.name
                        }, void 0, false, {
                            fileName: "[project]/app/colegios/[slug]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/colegios/[slug]/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/colegios/[slug]/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreInfo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StoreInfo"], {}, void 0, false, {
                fileName: "[project]/app/colegios/[slug]/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/colegios/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/colegios/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1w5vlq0._.js.map