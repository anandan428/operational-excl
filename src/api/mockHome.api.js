import delay from './delay';

const competences = [
    {
        "id": 1,
        "name": "POC", 
        "competence": [
            {
                "id": 1,
                "name": "Machine Learning"
            },
            {
                "id": 2,
                "name": "IOT"
            },
            {
                "id": 3,
                "name": "Augumented Reality"
            },
            {
                "id": 4,
                "name": "RPA"
            },
            {
                "id": 5,
                "name": "UI/ UX"
            }
        ]
    },
    {
        "id": 2,
        "name": "Study Group",
        "competence": [
            {
                "id": 1,
                "name": "Machine Learning"
            },
            {
                "id": 2,
                "name": "IOT"
            },
            {
                "id": 3,
                "name": "Augumented Reality"
            },
            {
                "id": 4,
                "name": "RPA"
            },
            {
                "id": 5,
                "name": "UI/ UX"
            }
        ]
    }
];


class CompetenceApi {
    static getAllCompetence(){
        return new Promise((resolve, reject) => {
            fetch("http://localhost:53284/GetAllCompetence")
            .then((response) => response.json())
            .then(data => resolve(data));
        })
    }
}

export default CompetenceApi;