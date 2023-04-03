import { multiply } from "../src";

describe("Test multiply", () => {
    it("Test 2*2", () => {
        expect(multiply(2, 2)).toEqual(4);
    });
    it("Test 2*2*2", () => {
        expect(multiply(2, 2, 2)).toEqual(8);
    });
});
