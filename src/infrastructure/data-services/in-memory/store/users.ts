import { User } from "src/core/entities/user";
import { javaId, nodeId, reactId, typescriptId, mongodbId } from "./skills";

export const usersStore: User[] = [
    {
        id: "b268a137-64da-4391-bc0c-9650cb142f45",
        name: "Pablo Ramírez",
        skills: [
            {
                skillId: typescriptId,
                years: 4,
            },
            {
                skillId: nodeId,
                years: 6
            },
            {
                skillId: reactId,
                years: 5
            },
            {
                skillId: mongodbId,
                years: 3
            }
        ]
    },
    {
        id: "2c09618b-15fa-49ee-8567-0188d53022bd",
        name: "Juan José",
        skills: [
            {
                skillId: reactId,
                years: 2,
            },
            {
                skillId: javaId,
                years: 3
            },
            {
                skillId: mongodbId,
                years: 5
            }
        ]
    },
]