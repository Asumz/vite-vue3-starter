import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const root = process.cwd();

    const env = loadEnv(mode, root);

    const isBuild = command === 'build';

    return {
        base: './', // 设置打包路径
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                '#': resolve(__dirname, 'types'),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 4500, // 设置服务启动端口号
            open: false, // 设置服务启动时是否自动打开浏览器
            cors: true, // 允许跨域
            // proxy: {
            //   '/api': {
            //     target: 'http://xxx.xxx.xxx.xxx:x000',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
            // },
        },
        build: {
            target: 'es2015',
            outDir: 'dist',
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    drop_console: true,
                },
            },
            // Turning off brotliSize display can slightly reduce packaging time
            brotliSize: false,
            chunkSizeWarningLimit: 2000,
        },
        plugins: [
            vue(),
            styleImport({
                libs: [
                    {
                        libraryName: 'vant',
                        esModule: true,
                        resolveStyle: (name) => `vant/es/${name}/style`,
                    },
                ],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import 'src/style/main.less';`,
                },
            },
        },
    };
});
