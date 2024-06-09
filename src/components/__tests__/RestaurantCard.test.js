import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
// import withPromotedLabel from "../RestaurantCard"



it("should render RestaurantCard component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});


// it("should render RestaurantCard component with promoted label", () => {

//     render(<withPromotedLabel/>);

//     const label = screen.getByText("Promoted");

//     expect(label).toBeInTheDocument();
// });