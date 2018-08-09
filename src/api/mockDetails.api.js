import delay from './delay';

const resourses = [
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242231",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242232",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 2,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242233",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 2,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242234",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242235",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242236",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242237",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242238",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242239",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242240",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 1, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242241",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242231",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 1,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242232",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 2,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242233",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 2,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242234",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 2,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242250",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242235",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 3,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242236",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242237",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 4,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242230",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242238",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242239",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242240",
        "ResourseName": "Nandan A"
    },
    {
        "ActivityManagerID": "TIN2399",
        "ActivityManagerName": "John",
        "CompetenceLevel": 3,
        "LearningGroup": 2, 
        "TechID": 5,
        "ResourseManagerID": "TIN2399",
        "ResourseManagerName": "John",
        "Role": "SPOC",
        "ResourseID": "A242241",
        "ResourseName": "Nandan A"
    }
];

class Resourse {
    static getAllResourses(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], resourses))
            }, delay);
        })
    }
}

export default Resourse;