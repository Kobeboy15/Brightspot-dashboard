import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  const userName = "John Doe";

  beforeEach(() => {
    render(<UserProfile user={userName} />);
  });

  test("renders the profile cover picture", () => {
    const coverPicture = screen.getByRole("img", {
      name: "information-profile_pic",
    });
    expect(coverPicture).toBeInTheDocument();
  });

  test("displays the user ID", () => {
    expect(screen.getByText("#000134")).toBeInTheDocument();
  });

  test("displays the user full name", () => {
    expect(screen.getByRole("heading", { name: userName })).toBeInTheDocument();
  });

  test("generates and displays the correct user email", () => {
    const expectedEmail = `${userName
      .replace(/\s/g, "")
      .toLowerCase()}@email.com`;
    expect(screen.getByText(expectedEmail)).toBeInTheDocument();
  });
});
