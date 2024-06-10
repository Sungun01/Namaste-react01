import { act } from "react";
import { fireEvent, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("should load restaurant Menu component", async () => {
    
    await act( async () => 
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header /> 
                <RestaurantMenu /> 
                <Cart />
            </Provider>
            </BrowserRouter>
        )
    );

    const accordionheader = screen.getByText("Biryani (5)");
    fireEvent.click(accordionheader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    
    fireEvent.click(addBtns[1]);
    
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button", { name: "Clear cart" })); 

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText(" Cart is empty")).toBeInTheDocument();

});