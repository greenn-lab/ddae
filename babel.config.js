module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: {
          version: 3
        }
      }
    ],
    [
      "@babel/preset-typescript"
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
