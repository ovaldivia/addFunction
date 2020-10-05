/**
 * @jest-environment node
 */

import { addAlphaTwo } from '../index';

test('My addAlphaTwo', async () => {
    const start: Date = new Date('09/01/2020');
    const end:   Date = new Date('09/02/2020');
    const hours :number = Math.abs(end.getTime() - start.getTime())/36e5;
    const data = await addAlphaTwo(start, end);

    expect(data.args.alphatwo).toBe(hours.toString());
});