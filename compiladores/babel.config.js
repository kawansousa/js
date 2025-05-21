const presets = [
    ["@babel/preset-env", {
        targets: {
            edge: "17",
            firefox: "20"
        }
    }]
]

module.exports = { presets }