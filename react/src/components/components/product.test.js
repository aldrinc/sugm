import React from 'react';
import Product, { fetchAllProducts } from './product';
import renderer from 'react-test-renderer';


test('the products are fetched successfully', () => {
    expect.assertions(1);
    return expect(fetchAllProducts()).resolves.toBe('')
})

test('the products fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchAllProducts()).rejects.toMatch('')
})

