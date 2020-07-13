// Deno.test
const { exit } = Deno;
import { assert, assertEquals } from "./asserts.ts";
import dogyears from './dogyears.js';
import dogyearsTs from './dogyears.ts';

Deno.test("JS Test", () => {
    const expresult: number = 72.5113613001637;
    const actresult = dogyears(12, 50);
    assert(actresult === expresult, 'Dogyears Passed');
    assertEquals(expresult, actresult, 'Dogyears Passed');
});

Deno.test("TS Test", () => {
    const expresult: number = 72.5113613001637;
    const actresult = dogyearsTs(12, 50);
    assert(actresult === expresult, 'Dogyears Passed');
    assertEquals(expresult, actresult, 'Dogyears Passed');
});
