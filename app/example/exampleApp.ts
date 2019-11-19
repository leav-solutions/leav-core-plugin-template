import {ITemplateExampleDomain} from 'plugins/template/domain/example/exampleDomain';

interface IDeps {
    // Define your dependencies here
    'template.domain.example': ITemplateExampleDomain;
}

export interface ITemplateExampleApp {
    myFunc: () => Promise<string>;
}

export default function({'template.domain.example': exampleDomain}: IDeps): ITemplateExampleApp {
    return {
        myFunc: (): Promise<string> => {
            return exampleDomain.myFunc();
        }
    };
}
