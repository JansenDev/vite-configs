import App from "App";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

describe('Name of the group', () => {
    test('should ', () => {
        const { container } = render(<App />)
        console.log(prettyDOM(container));

        fireEvent.click(screen.getByText(/count is/i))
        expect(1 + 1).toEqual(2);
        expect(screen.getByText("Vite + React")).toBeInTheDocument()
    });
});