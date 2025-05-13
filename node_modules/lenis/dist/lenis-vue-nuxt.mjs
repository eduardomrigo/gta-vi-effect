// packages/vue/nuxt/module.ts
import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
export * from "lenis/vue";
var nuxtModule = defineNuxtModule({
  meta: {
    name: "lenis/nuxt",
    configKey: "lenis"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin({
      src: resolve("./nuxt/runtime/lenis.mjs"),
      name: "lenis"
    });
  }
});
var module_default = nuxtModule;
export {
  module_default as default
};
