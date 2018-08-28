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
    static implementedPOCList(list) {
        if (list.length > 0) {
            return list.filter(data => data.implemented)
        }
    }
}

export default pocService;