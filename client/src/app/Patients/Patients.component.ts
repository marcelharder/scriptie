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
  styleUrls: ['./Patients.component.css'],
})
export class PatientsComponent implements OnInit {
  genderOptions: Array<dropItem> = [];
  cas_title = '';
  gli_title = '';
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
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.genderOptions.push({ value: 0, description: 'Choose' });
    this.genderOptions.push({ value: 1, description: 'Male' });
    this.genderOptions.push({ value: 2, description: 'Female' });
    

    this.show = 0;
    this.help = this.route.snapshot.data;
    this.listOfPatients = this.help.patients;
   

  }
  clearTheResults() {
    
      this.selectedPatient.cas.bdR_perc_changed = 0;
      this.selectedPatient.cas.perc_Predicted = 0;
      this.selectedPatient.cas.measured = 0;
      this.selectedPatient.cas.predicted = 0;
      this.selectedPatient.cas.uln = 0;
      this.selectedPatient.cas.zscore = 0;
      this.selectedPatient.cas.lln = 0;

      this.selectedPatient.gli.bdR_perc_changed = 0;
      this.selectedPatient.gli.perc_Predicted = 0;
      this.selectedPatient.gli.measured = 0;
      this.selectedPatient.gli.predicted = 0;
      this.selectedPatient.gli.uln = 0;
      this.selectedPatient.gli.zscore = 0;
      this.selectedPatient.gli.lln = 0;
     

   
  }
  calcButton(id: number) {
    switch (id) {
      case 1:
        this.gli_title = 'FEV1';
        this.cas_title = 'FEV1';
        
        if (
          this.selectedPatient.feV1 === "" || this.selectedPatient.feV1 === null 
        ) {
          this.toast.error('FEV1 cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }
        break;
      case 2:
        this.gli_title = 'TLC';
        this.cas_title = 'TLC';
        if (
          this.selectedPatient.tlc === ""|| this.selectedPatient.tlc === null 
        ) {
          this.toast.error('TLC cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }

        break;
      case 3:
        this.gli_title = 'RV';
        this.cas_title = 'RV';
        if (
          this.selectedPatient.rv === "" || this.selectedPatient.rv === null 
        ) {
          this.toast.error('RV cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }

        break;
      case 4:
        this.gli_title = 'ERV';
        this.cas_title = 'ERV';
        if (
          this.selectedPatient.erv === "" || this.selectedPatient.erv === null 
        ) {
          this.toast.error('ERV cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }

        break;
      case 5:
        this.gli_title = 'IC';
        this.cas_title = 'IC';
        if (
          this.selectedPatient.ic === "" || this.selectedPatient.ic === null 
        ) {
          this.toast.error('IC cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }

        break;
      case 6:
        this.gli_title = 'VC';
        this.cas_title = 'VC';
        if (
          this.selectedPatient.vc === "" || this.selectedPatient.vc === null 
        ) {
          this.toast.error('VC cannot be empty ...');
          this.clearTheResults();
        } else {
          this.calculateGli(id);
          this.calculateCas(id);
        }

        break;
    }
  }

  calculateGli(id: number) {
    this.g.calculateGli(id).subscribe((next) => {
      this.selectedPatient.gli = next;
    });
  }

  calculateCas(id: number) {
    this.c.calculateCas(id).subscribe((next) => {
      this.selectedPatient.cas = next;
    });
  }

  goBack() {
    this.show = 0;
  }

  addPatient() {
    this.toast.success('Patient added ...');
    this.p.addPatient().subscribe((next) => {
      this.selectedPatient = next;
      this.show = 1;
    });
  }

  update() {
    this.p.updatePatient(this.selectedPatient).subscribe((next) => {
      // get the list again
      this.p.getListOfPatients().subscribe(
        (next) => {
          this.listOfPatients = next;
        },
        (error) => {},
        () => {
          this.show = 0;
        }
      );
    });
  }

  showList() {
    if (this.show == 0) {
      return true;
    } else {
      return false;
    }
  }

  showDetails(id: number) {
    this.p.getSpecificPatient(id).subscribe((next) => {
      this.selectedPatient = next;
      this.clearTheResults();

      if (this.selectedPatient.gender === null) {
        this.selectedPatient.gender = "1";
      }
      this.show = 1;
    });
  }
}
