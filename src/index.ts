import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   //body, headers, query params, middlewares, connecting to a database
//   return c.text('Hello Hono!')
// })

app.post("/", async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("authorization"));
  console.log(c.req.query("param"));

  return c.json({
    message: "Hi there!"
  });

});

export default app
