// Requiring modules
var fs = require('fs');

// ----- Setting environment | Start | -----
try {
    // Read env file
    let envDataRaw = fs.readFileSync('.env', { encoding: 'utf8' });
    
    // parse the environment data to JSON
    envDataObject = JSON.parse(envDataRaw);
    console.log(envDataObject.environment);
    
    // Set the Environment variables
    process.env.ENV = envDataObject.environment;
    
} catch (ENVReadError) {
    // In case of error handle and show the error and add other condition as required
    console.log(ENVReadError);
}
// ----- Setting environment | End | -----

// Just Checking
console.log("ENV :", process.env.ENV);