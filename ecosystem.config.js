module.exports = {
  apps: [
    {
      name: "nagumo-hortifruti",
      script: "npm",
      args: "start",
      cwd: "/var/www/html/nuxtjs/nagumo-hortifruti",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
