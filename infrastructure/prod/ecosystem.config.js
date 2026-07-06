module.exports = {
  apps: [
    {
      name: "app",
      script: "./node_modules/.bin/next",
      args: "start -p 3001",
      max_memory_restart: "500M",
      cwd: "./packages/app",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "server",
      cwd: "./packages/server",
      script: "dist/main.js",
      node_args: "--max-old-space-size=4096",
      max_memory_restart: "1G",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
