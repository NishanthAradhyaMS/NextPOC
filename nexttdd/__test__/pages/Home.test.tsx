import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import {HomeCOnstant} from '@/app/constants/HomeConstant'
import {UserList}  from '../fixtures/UserFixture.faker'

describe('Home Page',() =>{

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("Show no data when there is empty list", async () => {
        // Arrange
        global.fetch = jest.fn().mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue([]),
        });
        render(await Home());
        // Act
        const noUserData = screen.getByText(HomeCOnstant.noDatFound);
        // Assert
        expect(noUserData).toBeInTheDocument();
      });
    
    it("should show list", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(UserList),
    });
    render(await Home());
    // Act
    const list = screen.getByRole("list");
    // Assert
    expect(list).toBeInTheDocument();
    });

    it("should show list item", async () => {
        // Arrange
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(UserList),
        });
        
        render(await Home());
        // Act
        const listitems = screen.getAllByRole("listitem");
        // Assert
        expect(listitems).toHaveLength(2);
        });

    it('each list item element shold have a link element', async () =>{
        // Arrange
        render(await Home());
        // Act
        const listItems = screen.queryAllByRole("listitem");
        // Assert
        listItems.forEach((li) => {
            const { getByRole } = within(li);
            const linkElement = getByRole("link");
            expect(linkElement).toBeInTheDocument();            
            expect(linkElement).toHaveAttribute('href');
            });
        
    })

    it('each Link should contain href attribute', async () =>{
        // Arrange
        render(await Home());
        // Act
        const listItems = screen.queryAllByRole("listitem");
        // Assert
        listItems.forEach((li) => {
            const { getByRole } = within(li);
            const linkElement = getByRole("link");
            expect(linkElement).toHaveAttribute('href');
            });
        
    })
    
    

})