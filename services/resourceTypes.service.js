const fs = require('fs');

let resourceTypesResponse = JSON.parse(fs.readFileSync(`./resources/resourceTypesResponse.json`, 'utf8')); 
let resourceTypes = resourceTypesResponse.Resources;


function getResourceTypes(params) {
    var startIndex = 1;
    var count = 50;

    if ('startIndex' in params) {
        startIndex = params.startIndex;
    }

    if ('count' in params) {
        count = params.count;
    }

    var pageOfResourceTypes = resourceTypes.slice(startIndex - 1, count);

    var response = {
        "totalResults": resourceTypes.length,
        "startIndex": startIndex,
        "itemsPerPage": count,
        "schemas": [
            "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ],
        "Resources": pageOfResourceTypes
    }

    return response;
}

function getResourceType(id) {
    var retVal = null;

    for (var idx in resourceTypes) {
        if(resourceTypes[idx].id == id) {
            retVal = resourceTypes[idx];
            break;
        }
    }

    return retVal;
}

module.exports = {
    getResourceTypes,
    getResourceType
}