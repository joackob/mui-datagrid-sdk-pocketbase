// __tests__/index.test.js

import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import App from "@/src/app/App";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a heading", () => {
    render(
      <App>
        <Home />
      </App>
    );

    const icon = screen.getByText("DG");
    expect(icon).toBeVisible();
  });
});
