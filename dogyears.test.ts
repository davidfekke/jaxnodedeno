// Deno.test
const { exit } = Deno;
import dogyears from './dogyears.js';
import dogyearsTs from './dogyears.ts';

Deno.test("JS Test", () => {
    const expresult = 72.5113613001637;
    const actresult = dogyears(12, 50);
    if (actresult === expresult) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
        exit(0);
    }
});

Deno.test("TS Test", () => {
    const expresult = 72.5113613001637;
    const actresult = dogyearsTs(12, 50);
    if (actresult === expresult) {
        console.log("Test passed");
    } else {
        console.log("Test failed");
        exit(0);
    }
});

// const result = dogyears(12, 50);
// console.log(`JS result: ${result}`);

// const result2 = dogyearsTs(12, 50);
// console.log(`TS result: ${result2}`);
