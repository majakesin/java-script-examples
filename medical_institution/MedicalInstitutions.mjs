export class Doctor {
    constructor(name,surname,specialisation) {
        this.name = name;
        this.surname = surname;
        this.specialisation = specialisation;
    }
} 


export class Patient {
    constructor(name,surname, id_num, cardboard_num) {
        this.name = name;
        this.surname = surname;
        this.id_num = id_num;
        this.cardboard_num = cardboard_num;
        this.doctor = undefined;
    }

    setDoctor(doctor) {
        this.doctor = doctor;
    }
} 

export class LabReview {
    constructor(date,time,doctor,patient) {
        this.date = date;
        this.time = time;
        this.doctor = doctor;
        this.patient = patient;

        if (this.constructor === LabReview) {
            throw new TypeError('Abstract class "LabReview" cannot be instantiated directly.');
        }
    }
} 

export class BloodPressureReview extends LabReview {
    constructor(date,time,doctor,patient,upper_limit, down_limit, pulse) {
        super(date,time,doctor,patient);
        this.upper_limit = upper_limit;
        this.down_limit = down_limit;
        this.pulse = pulse;
    }

    setUpperLimit(upper_limit) {
        this.upper_limit = upper_limit;
    }
    setDownLimit(down_limit) {
        this.down_limit = down_limit;
    }
    setPulse(pulse) {
        this.pulse = pulse;
    }
} 

export class SugarOrCholesterolLevelReview extends LabReview {
    constructor(date,time,doctor,patient,value,timeOfLastMeal,type) {
        super(date,time,doctor,patient);
        this.value = value;
        this.timeOfLestMeal = timeOfLastMeal;
        this.type= type;
    }

    setTimeOfLastMeal(timeOfLastMeal) {
        this.timeOfLestMeal = timeOfLastMeal;
    }
    setValue(value) {
        this.value = value;
    }
} 

