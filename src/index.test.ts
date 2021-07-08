import { helloWorld } from './index.ts';

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test('should return hello world', () => {
	assertEquals(helloWorld(), 'Hello world!')
});