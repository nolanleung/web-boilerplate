import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { PageLayout } from "./page";

test("renders name", async () => {
  const { getByText } = render(
    <PageLayout>
      <span>I am a child</span>
    </PageLayout>,
  );

  await expect.element(getByText("I am a child")).toBeInTheDocument();
});
