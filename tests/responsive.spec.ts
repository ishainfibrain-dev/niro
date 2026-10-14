import { expect, test, type Locator, type Page } from "@playwright/test";

const viewportWidths = [320, 360, 375, 390, 414, 430, 480, 640, 768, 820, 1024, 1280, 1366, 1440, 1536, 1600, 1920, 2560] as const;
const viewportFor = (width: number) => ({ width, height: width < 640 ? 900 : 1000 });

type PageDefinition = {
  name: string;
  path: string;
  sections: readonly { name: string; selector: string }[];
  hasInquiryForm?: boolean;
  hasLegalToc?: boolean;
};

const pages: readonly PageDefinition[] = [
  {
    name: "Home",
    path: "/",
    hasInquiryForm: true,
    sections: [
      { name: "Hero", selector: "#hero" },
      { name: "Why Niro carousel", selector: "#why-niro" },
      { name: "Live updates", selector: "#live-map" },
      { name: "Promotions", selector: "#promotions" },
      { name: "For people", selector: "#for-people" },
      { name: "For business", selector: "#for-business" },
      { name: "Mobile business", selector: "#mobile-business" },
      { name: "How it works", selector: "#how-it-works" },
    ],
  },
  {
    name: "Terms",
    path: "/terms",
    hasLegalToc: true,
    sections: [
      { name: "Legal hero and table of contents", selector: ".niro-legal-hero" },
      { name: "Nature of service", selector: "#nature-of-service" },
      { name: "User accounts", selector: "#user-accounts" },
      { name: "Merchant terms", selector: "#merchant-terms" },
      { name: "Ratings and reviews", selector: "#ratings-reviews" },
      { name: "External links", selector: "#external-links" },
    ],
  },
  {
    name: "Privacy",
    path: "/privacy",
    hasLegalToc: true,
    sections: [
      { name: "Legal hero and table of contents", selector: ".niro-legal-hero" },
      { name: "Information collection", selector: "#information-collection" },
      { name: "Use of information", selector: "#use-of-information" },
      { name: "Information sharing", selector: "#information-sharing" },
      { name: "User controls", selector: "#user-controls" },
      { name: "Security", selector: "#security" },
    ],
  },
];

async function waitForPageToSettle(page: Page, path: string) {
  await page.goto(path, { waitUntil: "networkidle" });
  await expect(page.locator("main")).toBeVisible();
  await page.evaluate(() => document.fonts.ready.then(() => undefined));
}

async function expectNoHorizontalOverflow(page: Page) {
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

async function expectSectionLayoutIsSound(locator: Locator, sectionName: string) {
  await expect(locator, `${sectionName} is rendered`).toBeVisible();
  await locator.scrollIntoViewIfNeeded();

  const violations = await locator.evaluate((section) => {
    const isClippedByAncestor = (element: HTMLElement) => {
      let ancestor = element.parentElement;
      while (ancestor && ancestor !== section.parentElement) {
        const style = window.getComputedStyle(ancestor);
        if (style.overflowX === "hidden" || style.overflowX === "clip") return true;
        ancestor = ancestor.parentElement;
      }
      return false;
    };

    const elements = section.querySelectorAll<HTMLElement>("h1, h2, h3, p, a, button, input, textarea, img, .heading-line");
    return [...elements]
      .filter((element) => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element: element.tagName.toLowerCase(),
          text: element.textContent?.trim().replace(/\s+/g, " ").slice(0, 70),
          left: Math.round(rect.left), right: Math.round(rect.right),
          scrollWidth: element.scrollWidth, clientWidth: element.clientWidth,
          clippedByAncestor: isClippedByAncestor(element),
        };
      })
      .filter(({ left, right, scrollWidth, clientWidth, clippedByAncestor }) => {
        const isOffscreen = left < -1 || right > window.innerWidth + 1;
        return scrollWidth > clientWidth + 1 || (isOffscreen && !clippedByAncestor);
      });
  });
  expect(violations, `${sectionName} has clipped or horizontally offscreen content`).toEqual([]);

  const metrics = await locator.evaluate((section) => ({
    clientWidth: section.clientWidth,
    scrollWidth: section.scrollWidth,
    overflowX: window.getComputedStyle(section).overflowX,
    overflowSources: [...section.querySelectorAll<HTMLElement>("*")]
      .filter((element) => element.scrollWidth > element.clientWidth + 1)
      .slice(0, 5)
      .map((element) => ({
        className: element.className,
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
      })),
  }));
  // Decorative artwork may intentionally extend beyond a section that clips it.
  // The page-wide check above still fails any visible horizontal overflow.
  if (metrics.overflowX === "visible") {
    expect(metrics.scrollWidth, `${sectionName} does not overflow its container: ${JSON.stringify(metrics.overflowSources)}`).toBeLessThanOrEqual(metrics.clientWidth + 1);
  }
}

async function verifySharedChrome(page: Page) {
  await test.step("section: sticky header and navigation", async () => {
    const header = page.locator("header.niro-navbar");
    await expectSectionLayoutIsSound(header, "Header");
    await expect(header.locator('a[href="/"]')).toBeVisible();

    const menuToggle = page.getByRole("button", { name: "Toggle Menu" });
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      await expect(page.locator('.niro-mobile-menu a[href*="live-map"]')).toBeVisible();
      await menuToggle.click();
    } else {
      await expect(page.locator('.niro-desktop-nav a[href*="live-map"]')).toBeVisible();
    }

    const languageToggle = page.locator("header button[aria-expanded]:visible").first();
    await languageToggle.click();
    await expect(languageToggle).toHaveAttribute("aria-expanded", "true");
    await languageToggle.click();
    await expect(languageToggle).toHaveAttribute("aria-expanded", "false");
  });

  await test.step("section: footer", async () => {
    const footer = page.locator("footer.niro-footer");
    await expectSectionLayoutIsSound(footer, "Footer");
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
    await expect(footer.locator('a[href="/privacy"]')).toBeVisible();
  });
}

async function verifyHomeInteractions(page: Page) {
  await test.step("interaction: carousel controls", async () => {
    const secondSlide = page.getByRole("button", { name: "Go to slide 2" });
    await secondSlide.scrollIntoViewIfNeeded();
    await secondSlide.click();
    await expect(secondSlide).toHaveClass(/active/);
  });
  await test.step("interaction: anchor navigation", async () => {
    await page.locator('a[href="#live-map"]:visible').first().click();
    await expect.poll(() => new URL(page.url()).hash).toBe("#live-map");
    await expect(page.locator("#live-map")).toBeInViewport();
  });
  await test.step("interaction: inquiry form modal", async () => {
    await page.getByRole("button", { name: "Promote Your Business on Niro" }).first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('input:not([aria-hidden="true"])')).toHaveCount(6);
    await expect(dialog.locator("textarea")).toBeVisible();
    await dialog.getByRole("button", { name: "Submit" }).click();
    await expect(dialog.locator(".text-red-400")).toHaveCount(4);
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });
}

async function verifyLegalInteractions(page: Page) {
  await test.step("interaction: legal table of contents", async () => {
    const tocLink = page.locator(".niro-legal-toc a").first();
    const target = await tocLink.getAttribute("href");
    await tocLink.click();
    await expect.poll(() => new URL(page.url()).hash).toBe(target);
    await expect(page.locator(target ?? "")).toBeInViewport();
  });
}

for (const pageDefinition of pages) {
  test.describe(`Page: ${pageDefinition.name}`, () => {
    for (const width of viewportWidths) {
      test(`Viewport: ${width}px`, async ({ page }, testInfo) => {
        test.setTimeout(90_000);
        await page.setViewportSize(viewportFor(width));
        await waitForPageToSettle(page, pageDefinition.path);

        await test.step("check: page-wide horizontal overflow", async () => expectNoHorizontalOverflow(page));
        await verifySharedChrome(page);
        for (const section of pageDefinition.sections) {
          await test.step(`section: ${section.name}`, async () => expectSectionLayoutIsSound(page.locator(section.selector), section.name));
        }
        await test.step("check: images are loaded", async () => {
          await expect.poll(() => page.locator("main img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
        });
        if (pageDefinition.hasInquiryForm) await verifyHomeInteractions(page);
        if (pageDefinition.hasLegalToc) await verifyLegalInteractions(page);

        const screenshotPath = testInfo.outputPath(`screenshots/${pageDefinition.name.toLowerCase()}-${width}px.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        await testInfo.attach(`${pageDefinition.name}-${width}px`, { path: screenshotPath, contentType: "image/png" });
      });
    }
  });
}
