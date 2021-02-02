import {Doctor,Patient,LabReview,BloodPressureReview,SugarOrCholesterolLevelReview} from './MedicalInstitutions.mjs'

var doctor;
var patient;
var reviewPressure;
var reviewSugar;

let createDoctor = new Promise((resolve,reject)=> {

    doctor = new Doctor("Milan","Markovic","internista");

    if(doctor != undefined) {
        resolve('Doktor je kreiran');
    }
    else {
        reject("Doktor nije uspjesno kreiran.");
    }
});

let createPatient = new Promise ((resolve,reject) => {

    patient = new Patient("Dragan", "Dragojlovic",1234567891234,876);

    if(patient != undefined) {
        resolve("Uspesno kreiran pacijent");
    } else {
        reject("Pacijent nije uspjesno kreiran.");
    }
});

Promise.all([createDoctor,createPatient]).then((message) => {

    console.log(message);
    console.log(doctor);
    patient.setDoctor(doctor);
    console.log(patient);

}).catch((message) => {

    console.log(message);
 
});

let createReviews = new Promise((resolve,reject) => {

        reviewPressure = new BloodPressureReview(Date.now,undefined,doctor,patient,undefined,undefined,undefined);
        reviewSugar = new SugarOrCholesterolLevelReview(Date.now,null,doctor,patient,undefined,undefined,"secer");

        if(reviewPressure != undefined & reviewSugar != undefined) {
            resolve("Pregledi su uspjesno zakazni");
        }
        else {
            reject("Pregledi nisu uspjesno zakazni");
        }
});

createReviews.then(message=> {
    console.log(message)
    console.log("----BEFORE REVIEW------")
    console.log(reviewPressure);
    console.log(reviewSugar);
    //simualicaija pregleda i unesene vrednosti i ispisane
    setTimeout(function(){},10000);
    reviewPressure.setUpperLimit(10);
    reviewPressure.setDownLimit(1);
    reviewPressure.setPulse(99);

    reviewSugar.setValue(10);
    reviewSugar.setTimeOfLastMeal("10:30 Ponedeljak");
    console.log("---AFTER REVIEW------")
    console.log(reviewPressure);
    console.log(reviewSugar);
}).catch(message => {
    console.log(message);
})