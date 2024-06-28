///  <reference path="Teacher.ts"/>

namespace Subjects {
    export class Subject{
        teacher: Teacher
        set setTeacer(teacher: Teacher){
            this.teacher = teacher
        }
    }
}

