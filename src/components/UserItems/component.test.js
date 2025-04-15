import UserItems from "./component";
import { screen } from "@testing-library/react";
import { customRender } from "../../helpers/costumRender";

jest.mock("../../hooks/useUsers");

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
  useParams: jest.fn(() => ({})),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("UserList component", () => {
  it("renders user data correctly", () => {
    const userProps = {
      id: 1,
      name: "John Doe",
      username: "johnd",
      email: "john@example.com",
      address: { city: "New York" },
      phone: "123-456-7890",
    };

    customRender(<UserItems {...userProps} />);

    // expect(screen.getByText("id")).toBe("1");
    // expect(screen.getByText("name").value).toBe("John Doe");
    // expect(screen.getByText("username").value).toBe("johnd");
    // expect(screen.getByText("city").value).toBe("New York");
    // expect(screen.getByText("email").value).toBe("john@example.com");
    // expect(screen.getByText("phone").value).toBe("123-456-7890");
  });
});
