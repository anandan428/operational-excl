class competenceService {
    static prepareDataForGraph(competence, details) {
        let record = {
            id: 0,
            name: '',
            competence: []
        };
        let finalCompetence = [];
        return new Promise((resolve, reject) => {
            for (const data of competence) {
                debugger;
                record.id = data.id;
                record.name = data.name;
                for (const row of data.competence) {
                    record.competence.push({
                        id: row.id,
                        name: row.name,
                        employees: this.getEmpDetails(data.id, row.id, details)
                    });
                }
                finalCompetence.push(Object.assign({}, record));
            }
            resolve(finalCompetence);
        });
    }

    static getEmpDetails(learningGroupID, techId, details) {
        return details.filter(data => data.LearningGroup === learningGroupID && data.TechID === techId);
    }
}


export default competenceService;