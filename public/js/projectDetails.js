
console.log("working in Project Details page")


const dataFromServer = document.getElementById("dataFromServer")

const dataParse = JSON.parse(dataFromServer.value);
// const dataParse = dataFromServer.value;

console.log(dataParse.issues)

