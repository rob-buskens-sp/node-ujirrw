const fs = require('fs');

//let userResponsePage1 = JSON.parse(fs.readFileSync(`./resources/usersGetResponsePage1.json`, 'utf8')); 
let groups = []; //userResponsePage1.Resources;

function getGroups(params) {
    var startIndex = 1;
    var count = 50;

    if ('startIndex' in params) {
        startIndex = params.startIndex;
    }

    if ('count' in params) {
        count = params.count;
    }

    var pageOfGroups = groups.slice(startIndex - 1, count);

    var response = {
        "totalResults": groups.length,
        "startIndex": startIndex,
        "itemsPerPage": params.count,
        "schemas": [
            "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ],
        "Resources": pageOfGroups
    }

    return response;
}

function getGroup(id) {
    var retVal = null;

    for (var idx in groups) {
        if(groups[idx].id == id) {
            retVal = groups[idx];
            break;
        }
    }

    return retVal;
}

module.exports = {
    getGroups,
    getGroup
}