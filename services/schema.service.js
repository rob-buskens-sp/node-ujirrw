const fs = require('fs');

var schemaResponse = JSON.parse(fs.readFileSync(`./resources/schemaResponse.json`, 'utf8')); 
var schemas = schemaResponse.Resources;

function getSchemas() {
    return schemaResponse;

}

// Find and return the requested schema
function getSchema(id) {
    var retVal = null;

    for (var idx in schemas) {
        if(schemas[idx].id == id) {
            retVal = schemas[idx];
            break;
        }
    }

    return retVal;

}


module.exports = {
    getSchemas,
    getSchema
}