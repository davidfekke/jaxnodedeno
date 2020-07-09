import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';
import dogYears from './dogyears.ts'

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const app = new Application();

const router = new Router();

router.get('/', (ctx) => {
    const dAge = 12;
    const dWeight = 50;
    const humanage = dogYears(dAge, dWeight);
    const result = { "humanage": `${humanage}` };
    ctx.response.body = result; 
});

router.get('/age/:age/weight/:weight', (ctx) => {
    if (ctx.params && ctx.params.age && ctx.params.weight) {
        const dAge: number = parseFloat(ctx.params.age) as number;
        const dWeight: number = parseFloat(ctx.params.weight) as number;
        const humanage = dogYears(dAge, dWeight);
        const result = { "humanage": `${humanage}` };
        ctx.response.body = result;
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
