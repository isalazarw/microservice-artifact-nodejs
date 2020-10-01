const { getEmployees, postEmployees, putEmployees, deleteEmployees  } = require('../service/employees');

const API = [
    {
        config: {
            METHOD: "GET",
            VERSION: 1
        },
        method: getEmployees
    },
    {
        config: {
            METHOD: "POST",
            VERSION: 1
        },
        method: postEmployees
    },
    {
        config: {
            METHOD: "PUT",
            VERSION: 1
        },
        method: putEmployees
    },
    {
        config: {
            METHOD: "DELETE",
            VERSION: 1
        },
        method: deleteEmployees
    }
];

module.exports = { API };