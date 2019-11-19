import {IDbService} from 'infra/db/dbService';
// import {aql} from 'arangojs';

interface IDeps {
    'core.infra.db.dbService': IDbService;
}

export interface ITemplateExampleRepo {
    myFunc: () => void;
}

export default function({'core.infra.db.dbService': dbService}: IDeps): ITemplateExampleRepo {
    return {
        myFunc: async () => {
            // Here you have access to the database and can run any query you like with no restrictions. Be careful!
            // await dbService.execute(aql`YOUR QUERY`);
        }
    };
}
