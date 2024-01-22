function displayPosition(name, job, descrip) {
    return (" * " + job + " at " + name + " \- " + descrip + "\n");
}
function displaySkill(skill, funness) {
    if (funness == true)
        return (" * BAM: " + skill + "\n");
    else
        return (" * " + skill + "\n");
}
var job1 = "Math, Chemistry, Physics, Biology, and English tutor";
var name1 = "Some School";
var descrip1 = "Tutored students in those areas.";
var job2 = "Undergraduate Teaching Assistant";
var name2 = "University of Georgia";
var descrip2 = "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.";
console.log("Name: " + "austin russell".toUpperCase() + "\nPrevious experience: Math tutor." + "\nDescription: I am an aspiring full stack dev.\n\nMy Interests:\n * Walks in the woods \n * Playing osrs. \n * Watching youtube.\n\nName: Someone Else\nMy Previous Experience:\n" + displayPosition(name1, job1, descrip1) + displayPosition(name2, job2, descrip2) + "\nMy Skills:\n" + displaySkill("Java", true) + displaySkill("python", true) + displaySkill("taxes", false));
