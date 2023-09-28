import { Navbar } from "@/app/components/Navbar";
import React from "react";
import { render, screen } from "@testing-library/react";

describe('Navbar Component',() =>{
    beforeEach(() => {
        jest.clearAllMocks();        
      });
    
      it("should have Link element", () => {
        // Arrange
        render(<Navbar />, {});
        // Act
        const linkElement = screen.getByRole("link");
        // Assert
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href','/create');

      });
    
})