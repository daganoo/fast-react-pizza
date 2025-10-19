import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader"

function AppLayout() {

    const Navigation = useNavigation();
    const isLoading = Navigation.state === 'loading'
    return (
        <div className="layout">
            {isLoading && <Loader/>}
            <Header /> 
            <main>
                <p>content</p>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    );
}

export default AppLayout;
