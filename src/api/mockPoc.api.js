import delay from './delay';

const POC = [
    {
        "id": 1,
        "name": "MAS", 
        "pocList": [
            {
                "id": 1,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 2,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 3,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 4,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 5,
                "technology": "RPA",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 6,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 7,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 8,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 9,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 10,
                "technology": "RPA",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            }
        ]
    },
    {
        "id": 2,
        "name": "DCL",
        "pocList": [
            {
                "id": 1,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 2,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 3,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 4,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 5,
                "technology": "RPA",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 6,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 7,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 8,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 9,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            }
        ]
    },
    {
        "id": 3,
        "name": "DVP",
        "pocList": [
            {
                "id": 1,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 2,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 3,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 4,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 5,
                "technology": "RPA",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 6,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 7,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 8,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            }
        ]
    },
    {
        "id": 4,
        "name": "PRD",
        "pocList": [
            {
                "id": 1,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 2,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 3,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 4,
                "technology": "Agumented Reality",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 5,
                "technology": "RPA",
                "name": "Somename",
                "description": "Something",
                "implemented": true
            },
            {
                "id": 6,
                "technology": "Machine Learning",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            },
            {
                "id": 7,
                "technology": "IOT",
                "name": "Somename",
                "description": "Something",
                "implemented": false
            }
        ]
    }
];


class POCApi {
    static getAllPOC(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], POC))
            }, delay);
        });
    }
}

export default POCApi;