import { Vacancy } from "src/core/entities";
import { golangId, javaId, mongodbId, nodeId, reactId, typescriptId } from "./skills";

export const vacanciesStore: Vacancy[] = [
    {
        id: "cba59868-e976-4f36-abea-ba0652953075",
        positionName: "MERN FullStack Developer",
        requiredSkills: [
            { skillId: typescriptId, years: 2 },
            { skillId: nodeId, years: 3 },
            { skillId: mongodbId, years: 2 },
            { skillId: reactId, years: 3 },
        ]
    },
    {
        id: "8ceb11b6-c1ec-436f-813c-47eb04d92fec",
        positionName: "Java FullStack Developer",
        requiredSkills: [
            { skillId: javaId, years: 2 },
            { skillId: mongodbId, years: 2 },
            { skillId: reactId, years: 3 },
        ]
    },
    {
        id: "5dfdc8a2-e09d-4a56-aed4-f95cf909d1c9",
        positionName: "Golang FullStack Developer",
        requiredSkills: [
            { skillId: golangId, years: 1 },
            { skillId: mongodbId, years: 2 },
            { skillId: reactId, years: 3 },
        ]
    },
]