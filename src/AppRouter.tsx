import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { DASHBOARD, HOME, ITEMS } from "./utils/routes"
import Home from './pages/home'
import Dashboard from './pages/dashboard'

const Items = lazy(() => import("./pages/items"))

const AppRouter = () => (
    <Routes>
        <Route path={DASHBOARD} element={<Dashboard />}>
            <Route path={HOME} element={<Home />} />
            <Route path={ITEMS} element={<Items />} />
        </Route>
    </Routes>
)

export default AppRouter