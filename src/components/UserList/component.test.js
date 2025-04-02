import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "./component";

test("display default values", () => {
  const defaultProps = {
    id: 1,
    firstname: "dris",
    lastname: "foo",
    deleteUser: () => {},
    displayUser: () => {},
  };

  render(<UserList {...defaultProps} />);

  //test the display of the snapshot
  expect(screen.getAllByRole("button").length).toBe(3);
  expect(screen.getAllByRole("cell").length).toBe(5);

  expect(screen.getByRole("cell", { name: 1 })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "dris" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "foo" })).toBeInTheDocument();

  const cells = screen.getAllByRole("cell");
  expect(cells[0]).toBe("1");

  //test the actions
  
});
