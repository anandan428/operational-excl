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
                record.id = data.id;
                record.name = data.name;
                record.competence = [];
                for (const row of data.competence) {
                    record.competence.push(Object.assign({}, {
                        id: row.id,
                        name: row.name,
                        employees: this.getEmpDetails(data.id, row.id, Object.assign([], details))
                    }));
                }
                finalCompetence.push(Object.assign({}, record));
            }
            resolve(finalCompetence);
        });
    }

    static getEmpDetails(learningGroupID, techId, details) {
        if(learningGroupID && techId && details.length > 0)
            return details.filter(data => data.LearningGroup === learningGroupID && data.TechID === techId);
    }
}


export default competenceService;