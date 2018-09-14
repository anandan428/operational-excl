import delay from './delay';
import pocService from '../services/poc.service';

const events = [
    {
       "id":3,
       "name":"Hackathon",
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
       "name":"Hackathon",
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
       "name":"Hackathon",
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
       "name":"Hackathon",
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
       "name":"Hackathon",
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
       "name":"Hackathon",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
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
       "name":"V-Innovate",
       "pocList":{
          "id":14,
          "technology":"Azure",
          "name":"test5",
          "description":"test5",
          "implemented":false
       }
    }
 ];


class EventApi {
    static getAllEvents(){
        // return new Promise((resolve, reject) => {
        //     fetch("http://131.97.188.99:83/GetResourcePocDetails")
        //     .then(response => response.json())
        //     .then(data => resolve(pocService.convertPOCtoMap(data)))
        // });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(pocService.convertPOCtoMap(events))
            }, delay);
        });
    }
}

export default EventApi;