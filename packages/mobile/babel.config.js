module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@routes': './src/pages'
        }
      }
    ]
  ]
}
