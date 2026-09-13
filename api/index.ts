// Vercel serverless entry point.
//
// Vercel builds every file under /api into its own serverless function.
// This file wraps the existing Express app (server/routes.ts) so it can run
// as a single serverless function instead of a long-lived `app.listen()`
// process (which is how it runs on Replit/locally via server/index.ts).
//
// vercel.json rewrites all /api paths to this function; Express's own
// router then dispatches based on req.url exactly as it does today.
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes once per warm serverless instance (registerRoutes is
// async but only does synchronous route registration internally today;
// awaiting it keeps this correct even if that ever changes).
let readyPromise: Promise<void> | null = null;
function ensureReady(): Promise<void> {
  if (!readyPromise) {
    readyPromise = registerRoutes(app).then(() => undefined);
  }
  return readyPromise;
}

// Same error-handling shape as server/index.ts, minus the `throw err`
// (that line would crash a long-lived process; in a serverless function
// each request is isolated, so we just make sure a response is sent).
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  if (!res.headersSent) {
    res.status(status).json({ message });
  }
});

export default async function handler(req: Request, res: Response) {
  await ensureReady();
  app(req, res);
}
