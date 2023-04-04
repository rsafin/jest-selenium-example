const config = {
    verbose: true,
    testRunner : 'jest-circus',
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report"
        }]
    ]
};
  
module.exports = config;