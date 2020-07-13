// Deno.test
const { exit } = Deno;
import { assert } from "./asserts.ts";
import dogyears from './dogyears.js';
import dogyearsTs from './dogyears.ts';

Deno.test("JS Test", () => {
    const expresult = 72.5113613001637;
    const actresult = dogyears(12, 50);
    assert(actresult === expresult, 'Dogyears Passed');
});

Deno.test("TS Test", () => {
    const expresult = 72.5113613001637;
    const actresult = dogyearsTs(12, 50);
    assert(actresult === expresult, 'Dogyears Passed');
});

// const result = dogyears(12, 50);
// console.log(`JS result: ${result}`);

// const result2 = dogyearsTs(12, 50);
// console.log(`TS result: ${result2}`);
