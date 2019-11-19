import {ITemplateExampleRepo} from 'plugins/template/infra/example/exampleRepo';

interface IDeps {
    // Define your dependencies here
    'template.infra.example': ITemplateExampleRepo;
}

export interface ITemplateExampleDomain {
    myFunc: () => Promise<string>;
}

export default function({'template.infra.example': exempleRepo}: IDeps): ITemplateExampleDomain {
    return {
        myFunc: async (): Promise<string> => {
            await exempleRepo.myFunc();

            return 'It works!';
        }
    };
}
