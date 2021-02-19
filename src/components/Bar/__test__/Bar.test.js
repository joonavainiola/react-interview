import React from 'react';
import Bar from '../Bar';

import { render, fireEvent } from '@testing-library/react';

it("renders correctly", () => {
    const { queryByTestId, queryByPlaceholderText } = render(<Bar />);

    expect(queryByTestId("form-input")).toBeTruthy();
    expect(queryByPlaceholderText("Add new todo")).toBeTruthy();
})

describe("Todo input value", () => {
    it("updates on change", () => {
        const { queryByPlaceholderText } = render(<Bar />);

        const todoInput = queryByPlaceholderText('Add new todo');

        fireEvent.change(todoInput, { target: { value: "test" } });

        expect(todoInput.value).toBe("test");
    })
});