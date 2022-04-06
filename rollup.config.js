import esbuild from 'rollup-plugin-esbuild'
// import path from 'path'

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        name: 'BOT'
    },
    plugins: [
        esbuild({})
    ]
}
