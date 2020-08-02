import React from "react";
import { someFn, anotherFn, createObj } from "./Util";
import renderer from "react-test-renderer";
import TestComponent from "./TestComponent";
import { shallow } from "enzyme";

describe("Test Comp 1", () => {
    it("Test Component H1", () => {
        let wrapper = shallow(<TestComponent />);
        expect(wrapper.find("h1").text()).toBe("Test Component 2");
    });

    it("Test Component Button", () => {
        let wrapper = shallow(<TestComponent />);
        expect(wrapper.find("button").text()).toBe("Test Btn");

        let btnFn = jest.fn();
        let wrapper2 = shallow(<TestComponent onBtnClicked={btnFn} />);
        wrapper2.find("button").first().simulate("click");
        expect(btnFn).toBeCalled();
    });

    it("Test Options", () => {
        let wrapper = shallow(<TestComponent />);
        let count = 0;
        wrapper
            .find("div")
            .first()
            .find("select")
            .first()
            .find("option")
            .forEach((item) => {
                expect(item.text()).toBe("Option " + ++count);
            });

        count = 0;
        wrapper
            .find("div")
            .first()
            .find("select")
            .first()
            .find("option")
            .forEach((item) => {
                expect(item.prop("value")).toBe("hi" + ++count);
            });
    });

    it("Testing some Fn", () => {
        let output = someFn("Sathish");
        expect(output).toBe("Hi SomethingSathish");
    });

    it("Test Snapshot", () => {
        let testCompJS = renderer
            .create(<TestComponent propText={"Coming from Props"} />)
            .toJSON();
        expect(testCompJS).toMatchSnapshot();
    });

    it("Test Obj Snapshot", () => {
        expect(createObj("sampleData")).toMatchSnapshot();
    });

    describe("Testing anotherFn", () => {
        it("Testing for ADD", () => {
            let a = 10;
            let b = 20;
            let output = anotherFn("SUM", a, b);
            expect(output).toBe(a + b);
        });

        it("Testing for SUB", () => {
            let a = 10;
            let b = 20;
            let output = anotherFn("MIN", a, b);
            expect(output).toBe(a - b);
        });

        it("Testing for MUL", () => {
            let a = 10;
            let b = 20;
            let output = anotherFn("MUL", a, b);
            expect(output).toBe(a * b);
        });

        it("Testing for DIV", () => {
            let a = 10;
            let b = 20;
            let output = anotherFn("DIV", a, b);
            expect(output).toBe(a / b);
        });

        it("Testing for Default", () => {
            let a = 10;
            let b = 20;
            let output = anotherFn("Default", a, b);
            expect(output).toBe(-1);
        });
    });
});
