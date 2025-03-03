import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"));
const ActivitySubPage = lazy(() => import("./Components/Activity"));
const OpportunitySubPage = lazy(() => import("./Components/Activity"));
const HomeRouting = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/home", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/activity", element: _jsx(ActivitySubPage, {}) }), _jsx(Route, { path: "/opportunity", element: _jsx(OpportunitySubPage, {}) })] }));
};
export default HomeRouting;
