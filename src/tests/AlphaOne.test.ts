import { addAlphaOne } from '../index';

test('My addAlphaOne', () => {
    expect(addAlphaOne(new Date('09/01/2020'), new Date('09/02/2020'))).toBe('Alpha one recorded 24 hours');
});