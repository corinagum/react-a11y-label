module.exports = {
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "babel-plugin-transform-inline-environment-variables"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"]
        },
        modules: "commonjs"
      }
    ],
    "@babel/preset-react"
  ]
};
