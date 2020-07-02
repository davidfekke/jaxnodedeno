import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import dogYears from './dogYears.ts'

const app = new Application();

const router = new Router();

router.get('/age/:age/weight/:weight', (ctx) => {
    if (ctx.params && ctx.params.age && ctx.params.weight) {
        const dAge: number = ctx.params.age as any as number;
        const dWeight = ctx.params.weight as any as number;
        ctx.response.body = dogYears(dAge, dWeight);
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
