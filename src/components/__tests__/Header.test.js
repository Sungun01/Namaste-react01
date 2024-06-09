import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should render Header component with a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // querying.
    const loginButton = screen.getByRole("button", { name: "Login" });
    // const loginButton = screen.getByText("Login");

    // Assertion.
    expect(loginButton).toBeInTheDocument();

});

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // querying
    const loginButton = screen.getByRole("button", { name: "Login" });
    
    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button", { name: "Logout" });

    // Assertion 
    expect(logoutButton).toBeInTheDocument();
})


it("should render Header component with a cart items 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // querying.
    const cartItems = screen.getByText("Cart - (0 items)");
    // const loginButton = screen.getByText("Login");

    // Assertion.
    expect(cartItems).toBeInTheDocument();

});


it("should render Header component with a cart item", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // querying.
    const cartItems = screen.getByText(/Cart/);
    // const loginButton = screen.getByText("Login");

    // Assertion.
    expect(cartItems).toBeInTheDocument();

});