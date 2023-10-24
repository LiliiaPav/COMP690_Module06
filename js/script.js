let fmEmpl = document.getElementById("empForm");
const obj       = (id) => document.getElementById(id)
let valEmplId   = obj("id");
let valEmplName = obj("name");
let valEmplExt  = obj("ext");
let valEmplEmail= obj("email");
let valEmplDep  = obj("department");

fmEmpl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(valEmplId.value);
    console.log(valEmplName.value);
    console.log(valEmplExt.value);
    console.log(valEmplEmail.value);
    console.log(valEmplDep.value);
    fmEmpl.reset();
})
