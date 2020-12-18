module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "run prod:start",
      cwd: "./packages/app",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "server",
      cwd: "./packages/server",
      script: "dist/main.js",
      node_args: "--max-old-space-size=8192",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    staging: {
      user: "ubuntu",
      host: "128.31.24.252",
      ref: "origin/dist",
      repo: "https://github.com/sandboxnu/office-hours.git",
      path: "/var/www",
      "pre-deploy-local": "",
      "post-deploy": "yarn && yarn typeorm migration:run && yarn prod:start",
      "pre-setup": "",
    },
    production: {
      user: "dajinchu",
      host: "amato.ccs.neu.edu",
      ssh_options: "ProxyJump=dajinchu@login.ccs.neu.edu",
      ref: "origin/dist",
      repo: "https://github.com/sandboxnu/office-hours.git",
      path: "/var/www",
      "pre-deploy-local": "",
      "post-deploy": "yarn && yarn typeorm migration:run && yarn prod:start",
      "pre-setup": "",
    },
  },
};
