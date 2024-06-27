
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Woriking from home'
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }

}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }
    workTeacherTasks(): string {
        return 'Getthing to work'
    }

}

function createEmployee(salary: number | string): Teacher | Director {
    if (Number(salary) < 500) {
        return new Teacher()
    } return new Director()
}
