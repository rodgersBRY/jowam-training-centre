import { describe, it, expect } from "vitest";
import { courses, getCourseBySlug } from "@/lib/data/courses";

describe("courses data", () => {
  it("has at least one course", () => {
    expect(courses.length).toBeGreaterThan(0);
  });

  it("has unique, non-empty slugs", () => {
    const slugs = courses.map((c) => c.slug);
    expect(slugs.every((s) => s.length > 0)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("looks up a course by slug", () => {
    const first = courses[0];
    expect(getCourseBySlug(first.slug)).toEqual(first);
    expect(getCourseBySlug("does-not-exist")).toBeUndefined();
  });

  it("slugs are URL-safe (lowercase letters, numbers, hyphens only)", () => {
    const urlSafePattern = /^[a-z0-9-]+$/;
    expect(courses.every((c) => urlSafePattern.test(c.slug))).toBe(true);
  });
});
