const fs = require('fs');

let userResponsePage1 = JSON.parse(fs.readFileSync(`./resources/usersGetResponsePage1.json`, 'utf8')); 
//let userResponsePage25 = JSON.parse(fs.readFileSync(`./resources/usersGetResponsePage51.json`, 'utf8')); 
let users = userResponsePage1.Resources;
//users = users.concat(userResponsePage25.Resources);

var nextUserId = 0;

function getUsers(params) {
    var startIndex = 1;
    var count = 50;

    if ('startIndex' in params) {
        startIndex = params.startIndex;
    }

    if ('count' in params) {
        count = params.count;
    }

    var pageOfUsers = users.slice(startIndex - 1, count);

    var response = {
        "totalResults": users.length,
        "startIndex": startIndex,
        "itemsPerPage": params.count,
        "schemas": [
            "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ],
        "Resources": pageOfUsers
    }

    return response;
}

function getUser(id) {
    var retVal = null;

    for (var idx in users) {
        if(users[idx].id == id) {
            retVal = users[idx];
            break;
        }
    }

    return retVal;
}

function createUser(user) {
    console.log('createUser: ' + user);

    nextUserId++;
    user.id = nextUserId;

    users.push(user);

    // TODO must be updated (id, urls, etc.)
    return user;
}

function updateUser(id, user) {
    console.log('updateUser: ' + user);

    var user = getUser(id);

    return user;
}

function patchUser(user) {
    console.log('patchUser: ' + user);

    return { "status": 200, "message": "user updated" };

}

function deleteUser(user) {
    console.log('deleteUser: ' + user);

    return { "status": 200, "message": "user deleted" };

}
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    patchUser,
    deleteUser
}