import { useSelector } from "react-redux";
import useUsers from "../../hooks/useUsers";
import UserList from "./component";
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
  it("displays loading state", () => {
    useUsers.mockReturnValue([]);
    useSelector.mockReturnValue({ loading: true, error: null });

    const container = customRender(<UserList />);
    expect(container.asFragment()).toMatchSnapshot();
    expect(screen.getByText("Chargement...")).toBeInTheDocument();
  });

  it("displays erreur when error ", () => {
    useUsers.mockReturnValue([]);
    useSelector.mockReturnValue({
      loading: false,
      error: "lors du chargement des donnees",
    });

    customRender(<UserList />);
    expect(
      screen.getByText("Erreur : lors du chargement des donnees")
    ).toBeInTheDocument();
  });

  test("displays user list", () => {
    useUsers.mockReturnValue([
      {
        id: 1,
        name: "Driss",
        username: "driss123",
        email: "driss@example.com",
        address: { city: "Paris" },
        phone: "1234567890",
      },
    ]);

    useSelector.mockReturnValue({ loading: false, error: null });

    customRender(<UserList />);

    expect(screen.getByText("Users List")).toBeInTheDocument();
  });
});

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import UserItems from "./component";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { deleteUser } from "../../redux/UsersReducer/action";

// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
// }));

// jest.mock("../../redux/UsersReducer/action", () => ({
//   deleteUser: jest.fn(),
// }));

// describe("UserItems Component", () => {
//   const mockDispatch = jest.fn();
//   const mockNavigate = jest.fn();

//   beforeEach(() => {
//     useDispatch.mockReturnValue(mockDispatch);
//     useNavigate.mockReturnValue(mockNavigate);
//   });

//   it("calls handleDelete when delete button is clicked", () => {
//     const userProps = {
//       id: 1,
//       name: "John Doe",
//       username: "johnd",
//       email: "john@example.com",
//       address: { city: "New York" },
//       phone: "123-456-7890",
//     };

//     const container = render(<UserItems {...userProps} />);
//     console.log(container.log());

//     // const deleteButton = screen.getByLabelText(/delete/i);
//     // fireEvent.click(deleteButton);

//     expect(mockDispatch).toHaveBeenCalledWith(deleteUser(1)); // Check if deleteUser is called with correct id
//   });
// });
