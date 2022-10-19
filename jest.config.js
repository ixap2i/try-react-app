// jest.config.js
module.exports = {
  verbose: true,
  "transformIgnorePatterns": ["/public/", "/build/", "<rootDir>/try-react-app/src/niconico/SVGs", "/node_modules/", "\\.pnp\\.[^\\\/]+$"],
  "moduleNameMapper": {
    "three/examples/jsm/loaders/SVGLoader.js": "<rootDir>/__mocks__/fileMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
    "assets/(.*)": [
      "<rootDir>/images/$1",
      "<rootDir>/photos/$1",
      "<rootDir>/recipes/$1"
    ],
    "src(.*)$": "<rootDir>/try-react-app/src/$1"
  },
  "moduleFileExtensions": ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.js'
  ]
};