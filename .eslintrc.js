module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: ["error", "never"],
        quotes: ["error", "single"],
        camelcase: "off",
        "linebreak-style": [0, "error", "windows"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};