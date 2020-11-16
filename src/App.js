import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/SidebarContainer";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import { Route } from "react-router-dom";
import "./css/style.css";

const App = ({ store }) => {
    return (
        <div className="container flex-wrapper">
            <Header />
            <Sidebar />
            <Route path="/profile">
                <Profile />
                <div></div>
            </Route>
            <Route path="/dialogs">
                <Dialogs />
            </Route>
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
        </div>
    );
};

export default App;
