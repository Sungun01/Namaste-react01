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

it("should render the body component with search", async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", { name: "search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "burger"} });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards).toBe(4);
});