import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});


it("should search Res List of burger text input", async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("redCard");\

    expect(cardsBeforeSearch.length).toBe(9);

    
    const searchBtn = screen.getByRole("button", { name: "search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "burger"} });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(4);
});

it("should filter Top Rated Restaurant", async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("redCard");

    expect(cardsBeforeFilter.length).toBe(9);

    
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(4);
});
