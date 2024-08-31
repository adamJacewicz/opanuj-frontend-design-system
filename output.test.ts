import {describe, expect, test} from "vitest";
import {
	ButtonTextColor,
	ColorAliasForeground2,
	ColorGlobalGrey16
} from "./dist/js/tokens";

describe("Design system output", () => {
	test('should have a color.global.grey.16 token ', () => {
		expect(ColorGlobalGrey16).toBeDefined()
		expect(ColorGlobalGrey16).toBe("#292929")
	});

	test('should have a color.alias.foreground.2 token ', () => {
		expect(ColorAliasForeground2).toBeDefined()
		expect(ColorAliasForeground2).toBe("#424242")
	});

	test('should have a button.text.color token ', () => {
		expect(ButtonTextColor).toBeDefined()
		expect(ButtonTextColor).toBe("#242424")
	});

})