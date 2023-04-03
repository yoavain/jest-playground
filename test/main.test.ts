import { sum } from "../src/main";

describe("Test main", () => {
    it("Test 1+1", () => {
        expect(sum(1, 1)).toEqual(2);
    });
});
