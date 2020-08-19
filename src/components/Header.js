import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { CATEGORY_PAGE_TITLE } from "../content/categories";
import { LABEL_LOGIN, LABEL_WELCOME } from "../content/labels";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../redux/actions";
import Login from "./Login";
import Logout from "./Logout";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    color: "#5a4343",
    borderBottom: "1px solid #5a4343",
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    marginRight: 20,
  },
}));

function Header(props) {
  const classes = useStyles();
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  } 

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseLogout = () => {
    setIsLogoutOpen(false);
  }

  const handleLoginClick = () => {
    const { username, password } = form;

    if (username && password) {
      props.loginUser({ username });
    }
    setIsLoginOpen(false);
  };

  const handleLogoutClick = () => {
    props.logoutUser();
    setIsLogoutOpen(false);
  };

  const handleLoginChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {CATEGORY_PAGE_TITLE}
          </Typography>
        </Toolbar>
        {!props.status.isUserLoggedIn ? (
          <Button
            color="inherit"
            className={classes.loginButton}
            onClick={handleOpenLogin}
          >
            {LABEL_LOGIN}
          </Button>
        ) : (
          <Button
            onClick={handleOpenLogout}
            color="inherit"
            className={classes.loginButton}
          >
            {LABEL_WELCOME} {props.status.username}
          </Button>
        )}
        <Login
            isLoginOpen={isLoginOpen}
            onLoginClose={handleCloseLogin}
            onLoginChange={handleLoginChange}
            onLoginClick={handleLoginClick}
        />
        <Logout
            isLogoutOpen={isLogoutOpen}
            onLogoutClose={handleCloseLogout}
            onLogoutClick={handleLogoutClick}
        />
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username) => dispatch(loginUser(username)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
