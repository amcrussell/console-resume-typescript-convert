


function displayPosition(name: string, job: string, descrip: string): string {


return(" * " + job + " at " + name + " \- " + descrip + "\n");

}

function displaySkill(skill: string, funness: boolean): string{

    if(funness == true)
        return(" * BAM: " + skill + "\n");
    else
        return(" * " + skill + "\n");

}

let job1: string = "Math, Chemistry, Physics, Biology, and English tutor"
let name1: string = "Some School"
let descrip1: string = "Tutored students in those areas."

let job2: string = "Undergraduate Teaching Assistant"
let name2: string = "University of Georgia"
let descrip2: string = "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes."


console.log("Name: " + "austin russell".toUpperCase() + "\nPrevious experience: Math tutor." + "\nDescription: I am an aspiring full stack dev.\n\nMy Interests:\n * Walks in the woods \n * Playing osrs. \n * Watching youtube.\n\nName: Someone Else\nMy Previous Experience:\n" + displayPosition(name1, job1, descrip1) + displayPosition(name2, job2, descrip2) + "\nMy Skills:\n" + displaySkill("Java", true) + displaySkill("python",true) + displaySkill("taxes", false));