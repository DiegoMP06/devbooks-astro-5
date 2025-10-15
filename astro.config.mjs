// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';


import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ access: 'public', context: 'server', default: false }),
      SCORE_API_ENDPOINT: envField.string({ access: 'public', context: 'server', default: '' }),
      // SCORE_API_ENDPOINT: envField.string({access: 'public', context: 'client', default: ''}),
    }
  },

  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
});