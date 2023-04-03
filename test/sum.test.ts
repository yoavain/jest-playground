import { sum } from "../src";

describe("Test sum", () => {
    it("Test 1+1", () => {
        expect(sum(1, 1)).toEqual(2);
    });
    it("Test 1+1+1", () => {
        expect(sum(1, 1, 1)).toEqual(3);
    });
});
