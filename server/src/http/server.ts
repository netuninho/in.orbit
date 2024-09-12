import z from "zod";
import fastify from "fastify";
import { createGoalRoute } from "./routes/create-goal";
import { getPendingGoalRoute } from "./routes/get-pending-goals";
import { createCOmpletionRoute } from "./routes/create-completion";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(getPendingGoalRoute);
app.register(createCOmpletionRoute);

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server running!");  
})