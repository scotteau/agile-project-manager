import React, { useState } from "react";
import "./App.css";
import Drawer from "../Drawer/Drawer";
import Home from "../../pages/Home/Home";
import Navigation from "../Navigation/Navigation";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Project from "../../pages/Project/Project";
import Team from "../../pages/Team/Team";
import ContentHeader from "../ContentHeader/ContentHeader";
import { connect } from "react-redux";
import MenuBar from "../MenuBar/MenuBar";
import PopupMenu from "../PopupMenu/PopupMenu";
import ActionList from "../ActionList/ActionList";

const App = ({
  projectCard_popup,
  header_projectIcon_popup,
  header_projectInfo_popup,
  header_profile_popup,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <div className="App-Popup">
        {projectCard_popup.shouldShow && (
          <PopupMenu anchor={projectCard_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_projectIcon_popup.shouldShow && (
          <PopupMenu anchor={header_projectIcon_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_projectInfo_popup.shouldShow && (
          <PopupMenu anchor={header_projectInfo_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}

        {header_profile_popup.shouldShow && (
          <PopupMenu anchor={header_profile_popup.anchor}>
            <ActionList />
          </PopupMenu>
        )}
      </div>

      <Router>
        {isLoggedIn ? (
          <Switch>
            <Drawer nav={<Navigation />}>
              <Route exact path={"/"}>
                <Redirect to={"/home"} />
              </Route>

              <Route path={"/home"}>
                <ContentHeader />
                <Home />
              </Route>

              <Route path={"/tasks"}>{/*<MyTasks tasks={tasks} />*/}</Route>

              <Route path={"/project/:id"}>
                <MenuBar />
                <Project />
              </Route>

              <Route path={"/team"}>
                <Team />
              </Route>
            </Drawer>
          </Switch>
        ) : (
          <>
            <Route exact path={"/"}>
              <LoginForm handleLogin={setIsLoggedIn} />
            </Route>
          </>
        )}
      </Router>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projectCard_popup: {
      shouldShow: state.app.ui_projectCard_popup.shouldShow,
      anchor: state.app.ui_projectCard_popup.anchor,
    },
    header_projectIcon_popup: {
      shouldShow: state.app.ui_header_project_icon_popup.shouldShow,
      anchor: state.app.ui_header_project_icon_popup.anchor,
    },
    header_projectInfo_popup: {
      shouldShow: state.app.ui_header_project_info_popup.shouldShow,
      anchor: state.app.ui_header_project_info_popup.anchor,
    },
    header_profile_popup: {
      shouldShow: state.app.ui_header_profile_popup.shouldShow,
      anchor: state.app.ui_header_profile_popup.anchor,
    },
  };
};
export default connect(mapStateToProps, {})(App);
