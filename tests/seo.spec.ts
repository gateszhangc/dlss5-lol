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

test("homepage injects the updated Microsoft Clarity loader", async ({
  page,
}) => {
  const clarityScript = 'script[src="https://www.clarity.ms/tag/vz9jud8zfm"]';
  const oldClarityScript = 'script[src="https://www.clarity.ms/tag/vz0zembx9t"]';

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.locator(clarityScript)).toHaveCount(1);
  await expect(page.locator(oldClarityScript)).toHaveCount(0);
});

test("homepage exposes the new brand mark and icon assets", async ({
  page,
  request,
}) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const faviconLink = page.locator('link[rel="icon"][href^="/favicon.ico?"]');
  const iconLink = page.locator('link[rel="icon"][href^="/icon.png?"]');
  const appleIconLink = page.locator(
    'link[rel="apple-touch-icon"][href^="/apple-icon.png?"]'
  );

  await expect(page.locator('header img[src="/brand/dlss5-mark.svg"]')).toBeVisible();
  await expect(faviconLink).toHaveCount(1);
  await expect(iconLink).toHaveCount(1);
  await expect(appleIconLink).toHaveCount(1);

  const assetPaths = [
    "/brand/dlss5-mark.svg",
    await faviconLink.first().getAttribute("href"),
    await iconLink.first().getAttribute("href"),
    await appleIconLink.first().getAttribute("href"),
  ].filter((value): value is string => Boolean(value));

  for (const path of assetPaths) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should resolve`).toBeTruthy();
  }
});
