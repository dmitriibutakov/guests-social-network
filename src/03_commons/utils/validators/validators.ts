export const required = (value: string) => value ? undefined : "field is required"

export const maxLengthCreator = (maxLength: number) => (value: string) => (value.length > maxLength && value)
    ? "max length symbols was created" : undefined
export const minLengthCreator = (minLength: number) => (value: string) => (value.length < minLength && value)
    ? "min length symbols was created" : undefined
