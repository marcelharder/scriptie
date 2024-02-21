import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/patient';
import { PatientService } from '../_services/Patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Patients',
  templateUrl: './Patients.component.html',
  styleUrls: ['./Patients.component.css']
})
export class PatientsComponent implements OnInit {
  show = 0;
  listOfPatients: Array<Patient> = [];
  help: any;
  selectedPatient: Patient;
 

  constructor(private route: ActivatedRoute, private p: PatientService, private toast:ToastrService) { }

  ngOnInit() {
    this.show = 0;
    this.help = this.route.snapshot.data;
    this.listOfPatients = this.help.patients;
  }
  goBack(){this.show = 0;}

  addPatient(){
    this.toast.success("Patient added ...");
    this.p.addPatient().subscribe((next)=>{
        this.selectedPatient = next;
        this.show = 1;
        
        
    })
  }

  update(){this.p.updatePatient(this.selectedPatient).subscribe((next)=>{
    // get the list again
    this.p.getListOfPatients().subscribe((next)=>{this.listOfPatients = next},error => {}, () =>{
      this.show = 0;
    })
    
  })}

  showList(){if(this.show == 0){return true;} else {return false;}}

  showDetails(id: number){
   this.p.getSpecificPatient(id).subscribe((next)=>{
    this.selectedPatient = next;
    this.show = 1;
   })
  }

}
