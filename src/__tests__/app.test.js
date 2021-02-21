import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Header from "../Header/index";

// imports for testing the calculations lib
import * as calc from "../../lib/calculations";

let container = null;

console.table(calc);

beforeEach(() => {
  container = document.createElement("div");
  document.appendChild(container);
});

test("Header's textContent is equal to: 'Video Carousel w/ Info'", async () => {
  const { getByTestId } = render(<Header />);
  // console.log(getByTestId("header-test-id"));
  const maybeHeader = getByTestId("header-test-id");
  expect(maybeHeader.textContent).toEqual("Video Carousel w/ Info");
});

test("getTotalThumbs f(n) works...", async () => {});

afterEach(() => {
  cleanup();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
