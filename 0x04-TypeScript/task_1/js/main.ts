/* task 1 */

interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

/* task 2 */
interface Directors extends Teacher {
    numberOfReports: number
}

/* task 3 */

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.substring(0, 1)}. ${lastName}`
}
