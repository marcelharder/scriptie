import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/patient';
import { PatientService } from '../_services/Patient.service';
import { ToastrService } from 'ngx-toastr';
import { dropItem } from '../_models/dropItem';
import { CasService } from '../_services/cas.service';
import { GliService } from '../_services/gli.service';
import { CAS } from '../_models/cas';
import { GLI } from '../_models/gli';


@Component({
  selector: 'app-Patients',
  templateUrl: './Patients.component.html',
  styleUrls: ['./Patients.component.css']
})
export class PatientsComponent implements OnInit {
  genderOptions:Array<dropItem> = [];
  show = 0;
  listOfPatients: Array<Patient> = [];
  help: any;
  selectedPatient: Patient;
  selectedCas: CAS;
  selectedGli: GLI;
  
 

  constructor(
    private route: ActivatedRoute, 
    private p: PatientService, 
    private c: CasService,
    private g: GliService,
    private toast:ToastrService) { }

  ngOnInit() {
    this.genderOptions.push({value:0, description:"Choose"});
    this.genderOptions.push({value:1, description:"Male"});
    this.genderOptions.push({value:2, description:"Female"});
   
    this.show = 0;
    this.help = this.route.snapshot.data;
    this.listOfPatients = this.help.patients;
  }
  goBack(){this.show = 0;}

  addPatient(){
    this.toast.success("Patient added ...");
    this.p.addPatient().subscribe((next)=>{ this.selectedPatient = next; this.show = 1; });
   // this.g.addGli().subscribe((next)=>{this.selectedGli = next;});
   // this.c.addCas().subscribe((next)=>{this.selectedCas = next;})
  }

  update(){this.p.updatePatient(this.selectedPatient).subscribe((next)=>{
    // update the cas data
   // this.c.updateCas(this.selectedCas).subscribe((next)=>{});
   // this.g.updateGli(this.selectedGli).subscribe((next)=>{});

    // update the gli data


    // get the list again
    this.p.getListOfPatients().subscribe((next)=>{this.listOfPatients = next},error => {}, () =>{
      this.show = 0;
    })
    
  })}

  showList(){if(this.show == 0){return true;} else {return false;}}

  showDetails(id: number){
   this.p.getSpecificPatient(id).subscribe((next)=>{
    debugger;
    this.selectedPatient = next;
    // get the cas data
   // this.c.getSpecificCas(id).subscribe((next)=>{this.selectedCas = next;})
    // get the gli data
   // this.g.getSpecificGli(id).subscribe((next)=>{this.selectedGli = next;})

    if(this.selectedPatient.gender === null){this.selectedPatient.gender = 0;}
    this.show = 1;
   })
  }

}
