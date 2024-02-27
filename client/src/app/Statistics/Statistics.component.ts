import { Component, OnInit } from '@angular/core';
import { dropItem } from '../_models/dropItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Statistics',
  templateUrl: './Statistics.component.html',
  styleUrls: ['./Statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  graphSelector = 1;
  selectedGraph = 1;
  arrayOfGraphs:Array<dropItem> = [];

  constructor(private toast: ToastrService) { }

  ngOnInit() {

    this.arrayOfGraphs.push({value:1, description: "FEV1"})
    this.arrayOfGraphs.push({value:2, description: "TLC"})
    this.arrayOfGraphs.push({value:3, description: "RV"})
    this.arrayOfGraphs.push({value:4, description: "ERV"})
    this.arrayOfGraphs.push({value:5, description: "LLN"})
    this.arrayOfGraphs.push({value:6, description: "ULN"})
    this.arrayOfGraphs.push({value:7, description: "zscore"})

  }

  selectOne(){if(this.graphSelector === 1){return true;} else {return false;}}
  selectTwo(){if(this.graphSelector === 2){return true;} else {return false;}}
  selectThree(){if(this.graphSelector === 3){return true;} else {return false;}}
  selectFour(){if(this.graphSelector === 4){return true;} else {return false;}}
  selectFive(){if(this.graphSelector === 5){return true;} else {return false;}}
  selectSix(){if(this.graphSelector === 6){return true;} else {return false;}}
  selectSeven(){if(this.graphSelector === 7){return true;} else {return false;}}


  selectionChanged(){this.graphSelector = +this.selectedGraph;}

}
