import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routesList } from '@/router'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routesList.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default App
