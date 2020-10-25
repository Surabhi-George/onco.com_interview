import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    message : any;
    submitted = false;
    pfSubmitted = false;

    constructor() { }

    ngOnInit(): void {
    }

    // form submit
    createAcForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        phone: new FormControl('',[Validators.required]),
        question : new FormControl('',[Validators.required]),
        isAccept : new FormControl(false, [Validators.requiredTrue])
    });

    get f() { return this.createAcForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.createAcForm.invalid) {
            return;
        }
        console.log(this.createAcForm.value);
    }

    // priliminary assessment form
    priliminaryForm = new FormGroup({
        type: new FormControl('', [Validators.required]),
        stage: new FormControl('', [Validators.required, Validators.required]),
        condition: new FormControl('',[Validators.required])
    });

    get pf() { return this.priliminaryForm.controls; }
    onSubmitPriliminaryForm(){
        this.pfSubmitted = true;
        // stop here if form is invalid
        if (this.priliminaryForm.invalid) {
            return;
        }
        console.log(this.priliminaryForm.value);
    }
    // Doctors array
    doctors = [
        {
            name: 'Dr Ramaswamy',
            image: 'dummy.jpg',
            role: 'Radiologist'
        },
        {
            name: 'Dr Knika Batra',
            image: 'dummy1.jpg',
            role: 'Oncologist'
        },
        {
            name: 'Dr Varindera',
            image: 'dummy.jpg',
            role: 'Surgical'
        },
        {
            name: 'Dr Kanchan Kaur',
            image: 'dummy1.jpg',
            role: 'Tropical'
        },
        {
            name: 'Dr Ravi Kumar',
            image: 'dummy.jpg',
            role: 'Medical Oncologist'
        },
        {
            name: 'Dr Raju Rajendran',
            image: 'dummy1.jpg',
            role: 'Radiation'
        },
        {
            name: 'Dr Navven Bhatta',
            image: 'dummy.jpg',
            role: 'Radiologist'
        },
        {
            name: 'Dr Nithya Menon',
            image: 'dummy1.jpg',
            role: 'Opthalmologist'
        },
        {
            name: 'Dr Rajeev Pillai',
            image: 'dummy.jpg',
            role: 'Medical Oncologist'
        },
        {
            name: 'Dr Geethalakshmi',
            image: 'dummy1.jpg',
            role: 'Radiation Oncologist'
        }
    ]
    leftSliderClick(){
        var last_item = this.doctors.slice(-1);
        this.doctors.splice(-1,1);
        this.doctors.unshift({ "name": last_item[0].name,"image":last_item[0].image,"role": last_item[0].role});
    }
    rightSliderClick(){
        var first_item = this.doctors[0];
        this.doctors.shift();
        this.doctors.push({"name":first_item.name, "image": first_item.image,"role": first_item.role});
    }
}
