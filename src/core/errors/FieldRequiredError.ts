export class FieldRequiredError extends Error {
    constructor(fieldName: string) {
        super(fieldName)
    }
}