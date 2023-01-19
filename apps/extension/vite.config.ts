import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import path, { resolve } from 'path'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import makeManifest from './utils/plugins/make-manifest'
import customDynamicImport from './utils/plugins/custom-dynamic-import'
import addHmr from './utils/plugins/add-hmr'
import manifest from './manifest'

const root = resolve(__dirname, 'src')
const pagesDir = resolve(root, 'pages')
const assetsDir = resolve(root, 'assets')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')

const isDev = process.env.__DEV__ === 'true'
const isProduction = !isDev

// ENABLE HMR IN BACKGROUND SCRIPT
const enableHmrInBackgroundScript = true

export default defineConfig({
  define: {
    global: 'globalThis',
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@src': root,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    makeManifest(manifest),
    customDynamicImport(),
    NodeGlobalsPolyfillPlugin({
      process: true,
      buffer: true,
    }),
    NodeModulesPolyfillPlugin(),
    addHmr({ background: enableHmrInBackgroundScript, view: true }),
  ],
  publicDir,
  build: {
    target: ['es2020'],
    outDir,
    /** Can slowDown build speed. */
    // sourcemap: isDev,
    minify: isProduction,
    reportCompressedSize: isProduction,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, 'devtools', 'index.html'),
        panel: resolve(pagesDir, 'panel', 'index.html'),
        content: resolve(pagesDir, 'content', 'index.ts'),
        contentEmbed: resolve(pagesDir, 'content', 'embed.ts'),
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        newtab: resolve(pagesDir, 'newtab', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      watch: {
        include: ['src/**', 'vite.config.ts'],
        exclude: ['node_modules/**', 'src/**/*.spec.ts'],
      },
      output: {
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: isDev
          ? 'assets/js/[name].js'
          : 'assets/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const { dir, name: _name } = path.parse(assetInfo.name)
          const assetFolder = dir.split('/').at(-1)
          const name = assetFolder + firstUpperCase(_name)
          return `assets/[ext]/${name}.chunk.[ext]`
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})

function firstUpperCase(str: string) {
  const firstAlphabet = new RegExp(/( |^)[a-z]/, 'g')
  return str.toLowerCase().replace(firstAlphabet, (L) => L.toUpperCase())
}
