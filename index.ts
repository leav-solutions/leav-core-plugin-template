import {IPluginInitModule} from '_types/plugin';
import {ITemplateExampleApp} from './app/example/exampleApp';

interface IDeps {
    // Define your dependencies here
    'template.app.example': ITemplateExampleApp;
}

export default function({'template.app.example': exampleApp}: IDeps): IPluginInitModule {
    return {
        init(extensionPoints) {
            extensionPoints.registerGraphQLSchema({
                typeDefs: `
                extend type Query {
                    myTemplatePlugin: String
                }`,
                resolvers: {
                    Query: {
                        myTemplatePlugin: () => exampleApp.myFunc()
                    }
                }
            });
        }
    };
}
