module.exports = {
  apps: [
    {
      name: 'edemy-development',
      script: 'npm',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        PORT: 3020,
        NEXTAUTH_URL: 'http://localhost:3020',
        NEXT_PUBLIC_APP_URL: 'http://localhost:3020'
      },
      env_file: './env.domain1'
    },
    {
      name: 'edemy-production',
      script: 'npm',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: 3030,
        NEXTAUTH_URL: 'https://devcurso.impactoestrategicointernacional.com',
        NEXT_PUBLIC_APP_URL: 'https://devcurso.impactoestrategicointernacional.com'
      },
      env_file: './env.domain2'
    }
  ]
}; 