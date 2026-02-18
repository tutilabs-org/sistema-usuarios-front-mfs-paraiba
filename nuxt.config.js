export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MFS",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/iconMFS.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "vue-toastification/nuxt", "@nuxtjs/dotenv"], 
  env: {
    NUXT_ENV_URL_RELTRYOUT: process.env.NUXT_ENV_URL_RELTRYOUT || "http://localhost:5001", // Valor padrão local
    NUXT_ENV_URL_FIT: process.env.NUXT_ENV_URL_FIT || "http://localhost:5001", // Valor padrão local
    NUXT_ENV_URL_FTI: process.env.NUXT_ENV_URL_FTI || "http://localhost:5001", // Valor padrão local
    NUXT_ENV_URL_TRYOUT: process.env.NUXT_ENV_URL_TRYOUT || "http://localhost:5001", // Valor padrão local
    NUXT_ENV_URL_RRIM: process.env.NUXT_ENV_URL_RRIM || "http://rrimpb.tutilabs.com.br:5001", // Valor padrão local
    NUXT_ENV_URL_MATRIZ: process.env.NUXT_ENV_URL_MATRIZ || "http://localhost:5001"
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://apiengenhariajpa.tutilabs.com.br",
    // baseURL: "http://localhost:3333",
  },
  toast: {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token", // O caminho do token retornado pela API
          global: true,
          type: "Token",
          name: "Authorization", // Header onde será setado o token
        },
        endpoints: {
          login: { url: "/session", method: "post" },
          logout: false,
          user: false,
        },
        user: false,
      },
    },
    cookie: {
      options: {
        domain: ".tutilabs.com.br", // Define o domínio onde o cookie será válido
        path: "/", // Caminho do cookie
        secure: process.env.NODE_ENV === "production", // Apenas HTTPS em produção
        sameSite: "lax", // Política SameSite
      },
    },
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 3000,
    host: "0.0.0.0",
    timing: false,
  },
};
