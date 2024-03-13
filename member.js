function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueTrim = skillsMemberValue.trim();
    if (skillsMemberValueTrim === "") {
        skills.innerHTML = "Please enter your skills";
        return false;
    } else {
        skills.innerHTML = "";
        return true;
    }
}