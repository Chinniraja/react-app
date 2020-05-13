/*global expect*/
import React from "react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render,renderWithRouter } from "@testing-library/react";
import stores from '../../../stores';
import SignInForm from ".";

describe("SignInForm", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText } = render(
      <SignInForm userName={username} onChangeUsername={() => {}} isInputFieldEmpty={true}/>
    );

    const userNameField = getByPlaceholderText("Username");

    expect(userNameField.value).toBe(username);
  });

  it("should render typed password", () => {
    const password = "test-password";
    const { getByPlaceholderText } = render(
      <SignInForm password={password} onChangePassword={() => {}}/>
    );

    const passwordField = getByPlaceholderText("Password");

    expect(passwordField.value).toBe(password);
  });

  it("should render given error message", () => {
    const username="";
    const { getByText } = render(
      <SignInForm userName={username}  onChangeUsername={() => {}} isInputFieldEmpty={true}/>
    );
    getByText(/invalid username/i);
  });
  
  it("access_token should be defined and redirect to products page",() => {
    stores.authStore.getToken();
    const access_token = stores.authStore.access_token;
    const history = createMemoryHistory();
    const route = '/ecommerce-store/products';
    history.push(route);
    const { getByTestId } = render(
      <Router history={history}>
        <SignInForm access_token={access_token}/>
      </Router>
    );
  });
});