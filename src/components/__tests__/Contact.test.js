import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact us page Test cases', () => {

    test('Should load contact us component', () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test('Should load Button inside the contact us component', () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    
    test('Should load input inside the contact us component', () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    test('Should load all the input boxes inside the contact us component', () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes.length);
    
    
        // assertion
        expect(inputBoxes.length).toBe(2);
    });
    
});
