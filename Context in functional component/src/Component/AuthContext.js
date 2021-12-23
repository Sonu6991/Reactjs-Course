import React, { Component, createContext } from "react";

const AuthContext = createContext();
export const AuthCosumer = AuthContext.Consumer;

export class AuthCtxProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      username: "",
    };
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      username: this.state.username,
      login: this.login,
      logout: this.logout,
    };
  }

  login = () => {
    this.setState({
      isAuthenticated: true,
      username: "Sonu Chauhan",
    });
  };

  logout = () => {
    this.setState({
      isAuthenticated: false,
      username: "",
    });
  };

  render() {
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      username: this.state.username,
      login: this.login,
      logout: this.logout,
    };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
