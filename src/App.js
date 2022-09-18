import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import ProductDetails from "./Components/Product Details";
import Auth from "./Components/Auth";
import { useState } from "react";
import { getCookie } from "./api";
import { NotificationBannerContext } from "./Components/NotificationBanner/NotificationContext";
import "./App.css";
import NotificationBanner from "./Components/NotificationBanner";
import Appoinment from "./Components/Appoinment";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        getCookie("token") !== undefined
    );

    const [notify, setNotify] = useState(null);

    const setNotifyMessage = (message, type, time) => {
        setNotify({ message, type });
        setTimeout(() => {
            setNotify(null);
        }, time);
    };

    return (
        <>
            <NotificationBannerContext.Provider
                value={{ notify, setNotifyMessage: setNotifyMessage }}
            >
                {!isLoggedIn ? (
                    <Auth setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <>
                        <Router>
                            <NotificationBanner />
                            <Nav setIsLoggedIn={setIsLoggedIn} />
                            <Route exact path="/" component={Home} />
                             <Route
                                exact
                                path="/product-details/:id"
                                component={ProductDetails}
                            />
                             <Route exact path="/form" component={Appoinment} />
                             <Route exact path="/form/:id" component={Appoinment} />
                        </Router>
                    </>
                )}
            </NotificationBannerContext.Provider>
        </>
    );
};

export default App;
