/// <reference path='subjects/Subject.ts' />
///  <reference path="subjects/Teacher.ts"/>
/// <reference path='subjects/Cpp.ts' />
///  <reference path="subjects/React.ts"/>
///  <reference path="subjects/Java.ts"/>


export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

export const cTeacher: Subjects.Teacher = {
    firstName: 'MF',
    lastName: 'Doom',
    experienceTeachingC: 10
}

console.log('c++')
cpp.teacher = cTeacher
cpp.getRequirements()
cpp.getAvailableTeacher()

console.log('Java')
java.teacher = cTeacher
java.getRequirements()
java.getAvailableTeacher()

console.log('React')
react.teacher = cTeacher
react.getRequirements()
react.getAvailableTeacher()