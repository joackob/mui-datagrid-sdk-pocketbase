// __tests__/index.test.js

import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import App from "@/src/app/App";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a heading", async () => {
    render(
      <App>
        <Home />
      </App>
    );

    const icon = await waitFor(() => screen.getByText("DG"));
    expect(icon).toBeVisible();
  });
});
