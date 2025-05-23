import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NavBar } from "~/lib/components/organisms";

describe("Navbar test", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  test("renders app name", async () => {
    await waitFor(() => {
      expect(screen.getByText("Museio")).toBeInTheDocument();
    });
  });
});
