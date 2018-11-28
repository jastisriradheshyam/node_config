// Common configuration
var config = {
    // Some Setting
    someKey : "SomeValue"
};

// Configuration for QA Environment
var configQA = {
    // Some Setting
    someKeyQA : "someValueQA"
};

// Configuration for Producion environment
var configPROD = {
    // Some Setting
    someKeyPROD : "someValuePROD"
}

// Appeding the config with environment specific variables and values
switch (process.env.ENV) {
    case "QA": console.log('QA'); Object.assign(config, configQA); break;
    default: console.log('PROD1'); Object.assign(config, configPROD); break;
};

// Exporting the config
module.exports = config