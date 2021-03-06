module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "color-hex-case": "lower",
    "no-descending-specificity": null,
    "property-no-unknown": [true, {
      "ignoreProperties": ["font-smoothing", "composes", "color-scheme"]
    }],
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["input-placeholder", "global"]
    }]
  },
  ignoreFiles: ["node_modules/**", "dist/**", "**/*.js"]
}
