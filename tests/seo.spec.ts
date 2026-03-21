import { expect, test } from "@playwright/test";

test("homepage exposes the core keyword and descriptive internal links", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "DLSS 5 Guide, Release Date, Supported Games, and FAQ"
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "DLSS 5 guide: release date, games, and what NVIDIA announced.",
    })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Read what DLSS 5 is" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "See supported DLSS 5 games" })
  ).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://dlss5.lol"
  );
  await expect(page.getByText("Open page")).toHaveCount(0);
});

test("key pages keep shorter titles and descriptive related links", async ({
  page,
}) => {
  const routes = [
    "/what-is-dlss-5",
    "/dlss-5-release-date",
    "/dlss-5-features",
    "/dlss-5-supported-games",
    "/dlss-5-faq",
  ];

  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://dlss5.lol${route}`
    );

    const title = await page.title();
    expect(title.length).toBeLessThanOrEqual(60);
  }

  await page.goto("/what-is-dlss-5");
  await expect(page.getByText("Read Features")).toBeVisible();
  await expect(page.getByText("Read Neural Rendering")).toBeVisible();
  await expect(page.getByText("Open page")).toHaveCount(0);
});
