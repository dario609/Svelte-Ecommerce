import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $houdini: resolve('./$houdini'),
      $components: resolve('./src/lib/components'),
      $lib: resolve('./src/lib'),
      $stores: resolve('./src/stores'),
    },
  },
}

export default config
