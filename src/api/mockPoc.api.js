import delay from './delay';
import pocService from '../services/poc.service';

const POC = [
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":1,
          "technology":"IOT",
          "name":"Jira Mobile",
          "description":"A26067",
          "implemented":false
       }
    },
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":2,
          "technology":"IOT",
          "name":"test1",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":3,
          "technology":"Azure",
          "name":"test2",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":4,
          "technology":"Azure",
          "name":"test3",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":5,
          "technology":"ML",
          "name":"test4",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":3,
       "name":"Solution Delivery DVP",
       "pocList":{
          "id":6,
          "technology":"AR",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":7,
          "technology":"VR",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":8,
          "technology":"IOT",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":9,
          "technology":"ML",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":10,
          "technology":"AR",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":11,
          "technology":"AR",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":12,
          "technology":"DOT NET CORE",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":13,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":4,
       "name":"Solution Delivery MAS/DCL",
       "pocList":{
          "id":14,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":15,
          "technology":"DOT NET CORE",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":16,
          "technology":"UI/UX",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":17,
          "technology":"ML",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":18,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":19,
          "technology":"AR",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":20,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":5,
       "name":"Solution Delivery PRD",
       "pocList":{
          "id":21,
          "technology":"VR",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":6,
       "name":"TD/BA/CF",
       "pocList":{
          "id":22,
          "technology":"UI/UX",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":6,
       "name":"TD/BA/CF",
       "pocList":{
          "id":23,
          "technology":"Angular",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    },
    {
       "id":6,
       "name":"TD/BA/CF",
       "pocList":{
          "id":24,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    },
    {
       "id":6,
       "name":"TD/BA/CF",
       "pocList":{
          "id":25,
          "technology":"IOT",
          "name":"test5",
          "description":"test5",
          "implemented":true
       }
    }
 ];


class POCApi {
    static getAllPOC(){
        return new Promise((resolve, reject) => {
            fetch("http://131.97.188.99:83/GetResourcePocDetails")
            .then(response => response.json())
            .then(data => resolve(pocService.convertPOCtoMap(data)))
        });
    }
}

export default POCApi;