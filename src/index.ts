//Go through slides

import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   //body, headers, query params, middlewares, connecting to a database
//   return c.text('Hello Hono!')
// })

async function authMiddleware (c: any, next: any)  {
  if (c.req.header("Authorization")) {
    // Do validation
    const timeBeforePostRequest = new Date().getTime();
    await next(); //when you do some logic or code after the request handler(here post request) then await here or else simply return next();
    const timeTaken = (new Date().getTime() - timeBeforePostRequest) / 1000; //calculating how much time the post request takes
    console.log(timeTaken)
  } else {
    return c.text("You dont have acces");
  }
}

//app.use(authMiddleware);

app.post("/", authMiddleware, async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("authorization"));
  console.log(c.req.query("param"));

  return c.json({
    message: "Hi there!"
  });

});

export default app
