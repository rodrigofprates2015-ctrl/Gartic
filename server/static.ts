import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Determine the correct dist path - esbuild changes __dirname
  let distPath = __dirname;
  
  // If we're in dist/*, go up one level and check for dist
  if (!fs.existsSync(path.join(distPath, "index.html"))) {
    distPath = path.resolve(__dirname, "..");
  }
  
  if (!fs.existsSync(path.join(distPath, "index.html"))) {
    console.error(`Could not find index.html at: ${distPath}`);
    console.error(`__dirname: ${__dirname}`);
    throw new Error(`Build directory not found`);
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}
