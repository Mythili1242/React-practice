module.exports = function (api) {
  api.cache(true)
  return {
    //   {
    presets: ["babel-preset-expo"]
    // plugins: ["module:react-native-dotenv"]

    //     // plugins: [
    //     //   [
    //     //     'module:react-native-dotenv',
    //     //     {
    //     //       moduleName: '@env',
    //     //       path: '.env'
    //     //     }
    //     //   ]
    //     // ]

    //     plugins: [
    //       [
    //         'module:react-native-dotenv',
    //         { moduleName: 'react-native-dotenv', path: '.env' }
    //       ]
    //     ]
    //   }
    // }

    //     presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    //     plugins: [
    //       [
    //         "module:react-native-dotenv",
    //         {
    //           moduleName: "@env",
    //           path: ".env",
    //           blacklist: null,
    //           whitelist: null,
    //           safe: false,
    //           allowUndefined: false
    //         }
    //       ]
    //     ]
  }
}
