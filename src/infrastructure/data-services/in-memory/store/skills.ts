import { Skill } from "src/core/entities"

export const typescriptId = "17c6ee1a-2a74-4ae2-b5fe-90a2a560894e"
export const javaId = "bba9202b-b6e0-40fc-99bc-2bcd755457fb"
export const golangId = "fe1b8051-5f1b-4ba0-b8fa-447383fa6e5f"
export const mongodbId = "50cc6946-e467-4915-b50c-23c065b83ba7"
export const nodeId = "f4ccf94c-7540-4ce1-8a9a-9bf533a80ba1"
export const reactId = "67d1c37b-a8ae-4de0-81af-ee61ba96ce72"

export const skillsStore: Skill[] = [
    { id: typescriptId, name: "Typescript" },
    { id: javaId, name: "Java" },
    { id: golangId, name: "Golang" },
    { id: mongodbId, name: "mongodb" },
    { id: reactId, name: "React" },
    { id: nodeId, name: "NodeJS" }
]