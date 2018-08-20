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
                record.id = data.Id;
                record.name = data.Name;
                record.competence = [];
                for (const row of data.TechList) {
                    record.competence.push(Object.assign({}, {
                        id: row.Id,
                        name: row.Name,
                        employees: this.getEmpDetails(data.Id, row.Id, Object.assign([], details))
                    }));
                }
                finalCompetence.push(Object.assign({}, record));
            }
            resolve(finalCompetence);
        });
    }

    static getEmpDetails(learningGroupID, techId, details) {
        if(learningGroupID && techId && details.length > 0)
            return details.filter(data => data.LearningGroupID === learningGroupID && data.TechID === techId);
    }
}


export default competenceService;