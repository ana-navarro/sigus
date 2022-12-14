module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    "moduleNameMapper": {
        '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
        '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    globals: {
        "ts-jest": {
            tsConfigFile: "tsconfig.json"
        },
        TextEncoder: require("util").TextEncoder,
        TextDecoder: require("util").TextDecoder,
    },
    testEnvironment: 'jsdom',
};