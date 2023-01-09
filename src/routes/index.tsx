import React from 'react';
import Rendering from 'components/Rendering';
import { Home } from 'pages';
import Detail from 'pages/Detail';
import { Route, Routes as RoutesProvider } from 'react-router-dom';

const Routes = () => {
    return (
        <RoutesProvider>
            <Route path="/" element={
                <React.Suspense fallback={<><Rendering /></>}>
                    <Home />
                </React.Suspense>
            } />

            <Route path="/detail/:id" element={
                <React.Suspense fallback={<><Rendering /></>}>
                    <Detail />
                </React.Suspense>
            } />
        </RoutesProvider>
    )
}

export default Routes