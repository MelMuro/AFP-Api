declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GITHUB_AUTH_TOKEN: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
        DB_CONN_STRING: string;
        DB_NAME: string;
        DB_MENUS_COLLECTION: string;
        DB_RESTAURANTS_COLLECTION: string;
      }
    }
  }
  
  export {}