module.exports = {
  presets: [
    [
      "@babel/preset-typescript"
    ],
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: {
          version: 3
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3
        }
      }
    ]
  ]
}
