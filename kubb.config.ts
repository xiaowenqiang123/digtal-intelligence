import { defineConfig } from 'kubb';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/plugin-ts';
import { pluginZod } from '@kubb/plugin-zod';

export default defineConfig({
  input: {
    path: 'openapi/openapi.yaml',
  },
  output: {
    path: 'src/api/client',
    clean: true,
  },
  plugins: [pluginOas(), pluginTs(), pluginZod()],
});
