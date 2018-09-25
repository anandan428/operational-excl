import store from '../store';

class pocService {
    static prepareDataForBar(pocList) {
        let record = {
            id: 0,
            name: '',
            totalPOC: 0,
            implementedPOC: 0
        }
        let finalPOC = [];
        for (const data of pocList) {
            record.id = data.id;
            record.name = data.name;
            record.totalPOC = data.pocList.length;
            let list = this.implementedPOCList(data.pocList);
            record.implementedPOC = list.length;
            finalPOC.push(Object.assign({}, record));
        }
        return (finalPOC);
    }

    static convertPOCtoMap(dataList){
        let list = new Map();
        for (const dataRow of dataList) {
            let row = {
                id: 0,
                name: '',
                pocList: []
            };
            if(list.has(dataRow.name)){
                row = list.get(dataRow.name);
                row.pocList.push(dataRow.pocList);
            } else {
                row.id = dataRow.id;
                row.name = dataRow.name;
                row.pocList.push(dataRow.pocList);
            }
            list.set(dataRow.name, Object.assign({}, row));
        }
        return list;

    }

    static implementedPOCList(list) {
        if (list.length > 0) {
            return list.filter(data => data.implemented)
        }
    }

    static getDataForName(name, list) {
        if(list.length > 0){
            return list.filter(data => data.name === name);
        }
    }
}

export default pocService;