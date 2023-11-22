import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import { routesList } from '@router'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Outlet />}>
                    {routesList.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
