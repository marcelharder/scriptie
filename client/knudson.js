      
		
		
        function rnddec(num, ndec)
        {
         var xs="";
         if (num > 0)
         {
          if (ndec == 2)
          {
           x=Math.round(100*num)/100;
           y=Math.floor(x);
           if ((x-y) == 0) {xs=x + ".00";}
           else {
            y2=Math.floor(10*x)/10;
            if ((x-y2) == 0) {xs=x + "0";}
            else {xs=x}}
          }
          else
          {
           x=Math.round(10*num)/10;
           y= Math.floor(x);
           if ((x-y) == 0) {xs=x + ".0%";}
           else {xs=x + "%";}
          }
         }
         else {xs="Blank";}
         return xs;
        }
        
        function GetCal()
        {
         var pfvc;
         var pfev;
         var pfef;
         var prat;
         var rat;
         var lfvc;
         var lfev;
         var lfef;
         var lrat;
         var age=CalForm.txAge.value;
         var ht=CalForm.txHt.value;
         var fvc=CalForm.txFVC.value;
         var fev=CalForm.txFEV.value;
         var fef=CalForm.txFEF.value;
         if (CalForm.lstHt.value=="one") {ht=2.54*ht;}
         if ((age < 12) || (age > 75)) {alert("An age of " + age + " is out of range!"); return};
         if ((ht < 50) || (ht > 220)) {alert("A height of " + ht + " cm is out of range!"); return};
         if (CalForm.lstSource.value=="one")
         {
          if (CalForm.lstSex.value=="one")
          {   // Males Knudson-1976
           if (age < 25)
           {
            pfvc=-5.508+0.05*ht+0.078*age;
            pfev=-4.808+0.046*ht+0.045*age;
            pfef=-5.334+0.059*ht;
            prat=103.64-0.087*ht-0.14*age;
           }
           else   // Knudson-males-age>= 25
           {
            pfvc=-5.459+0.065*ht-0.029*age;
            pfev=-4.203+0.052*ht-0.027*age;
            pfef=-1.864+0.045*ht-0.031*age;
            prat=103.64-0.087*ht-0.14*age;
           }
           if (age<36)
           {
            lfvc=0.815*pfvc;
            lfev=0.8175*pfev;
            lfef=0;
            lrat=0.8762*prat;
           }
           else
           {
            lfvc=0.7446*pfvc;
            lfev=0.7292*pfev;
            lfef=0;
            lrat=0.9188*prat;
           }
          }   // end Knudson males
          else
          {  // Females
           if (age < 20)
           {
            pfvc=-3.469+ht*0.033+age*0.092;
            pfev=-2.703+ht*0.027+age*0.085;
            prat=107.38+ht*-0.111+age*-0.109;
            pfef=-1.893+ht*0.025+age*0.121;
           }
           else
           {
            pfvc=-1.774+ht*0.037+age*-0.022;
            pfev=-0.794+ht*0.027+age*-0.021;
            pfef=1.171+ht*0.021+age*-0.024;
            prat=107.38+ht*-0.111+age*-0.109;
           }
           if (age<36)
           {
            lfvc=0.7575*pfvc;
            lfev=0.7138*pfev;
            lfef=0;
            lrat=0.8313*prat;
           }
           else
           {
            lfvc=0.6646*pfvc;
            lfev=0.694*pfev;
            lfef=0;
            lrat=0.8806*prat;
           }
          }
          if (CalForm.lstRace.value=="two")
          {
           pfvc=0.85*pfvc;
           pfev=0.85*pfev;
           pfef=0.85*pfef;
           lfvc=0.85*lfvc;
           lfev=0.85*lfev;
           CalForm.rfactor.value="* - A race correction factor of 0.85 has been applied to Caucasian values."
          }
          else {CalForm.rfactor.value="* - Caucasian predicted values are used -- no race factor needed."}
         }
         else
         {  // Hankinson-1999 begining
          if (CalForm.lstRace.value=="one")
          {      // Caucasians
           if (CalForm.lstSex.value=="one")
           {  // Hankinson-Caucasian-Males
            if (age < 20)
            {
             lfvc=-0.2584+ht*ht*0.00015695+age*-0.20415+age*age*0.010133;
             lrat=78.388+age*-0.2066;
             lfev=-0.7453+ht*ht*0.00011607+age*-0.04106+age*age*0.004477;
             prat=88.066+age*-0.2066;
             pfvc=-0.2584+ht*ht*0.00018642+age*-0.20415+age*age*0.010133;
             pfef=-1.0863+ht*ht*0.00010345+age*0.13939;
             pfev=-0.7453+ht*ht*0.00014098+age*-0.04106+age*age*0.004477;
             lfef=-1.0863+ht*ht*5.2939999E-5+age*0.13939;
            }
            else
            {  // Hankinson-Caucasian-Males- Age>= 20
             pfef=-1.864+ht*0.045+age*-0.031;
             lfvc=-0.1933+ht*ht*0.00015695+age*0.00064+age*age*-0.000269;
             pfef=2.7006+ht*ht*0.00010345+age*-0.04995;
             pfvc=-0.1933+ht*ht*0.00018642+age*0.00064+age*age*-0.000269;
             lfev=0.5536+ht*ht*0.00011607+age*-0.01303+age*age*-0.000172;
             pfev=0.5536+ht*ht*0.00014098+age*-0.01303+age*age*-0.000172;
             prat=88.066+age*-0.2066;
             lfef=2.7006+ht*ht*5.2939999E-5+age*-0.04995;
             lrat=78.388+age*-0.2066;
            }
           }
           else
           {  // Hankinson-Caucasian-Females
            if (age < 18)
            {
             pfev=-0.871+ht*ht*0.00011496+age*0.06537;
             prat=90.809+age*-0.2125;
             pfvc=-1.2082+ht*ht*0.00014814999+age*0.05916;
             lfev=-0.871+ht*ht*9.283E-5+age*0.06537;
             lrat=81.015+age*-0.2125;
             lfvc=-1.2082+ht*ht*0.00012198+age*0.05916;
             pfef=-2.5284+ht*ht*6.9820002E-5+age*0.5249+age*age*-0.015309;
             lfef=-2.5284+ht*ht*2.302E-5+age*0.5249+age*age*-0.015309;
             prat=90.809+age*-0.2125;
             lrat=81.015+age*-0.2125;
            }
            else
            {    // Hankinson-Caucasian-Females >= 18
             pfef=2.367+ht*ht*6.9820002E-5+age*-0.01904+age*age*-0.0002;
             pfev=0.4333+ht*ht*0.00011496+age*-0.00361+age*age*-0.000194;
             pfvc=-0.356+ht*ht*0.00014814999+age*0.0187+age*age*-0.000382;
             lfev=0.4333+ht*ht*9.283E-5+age*-0.00361+age*age*-0.000194;
             lfvc=-0.356+ht*ht*0.00012198+age*0.0187+age*age*-0.000382;
             pfef=2.367+ht*ht*6.9820002E-5+age*-0.01904+age*age*-0.0002;
             lfef=2.367+ht*ht*2.302E-5+age*-0.01904+age*age*-0.0002;
             prat=90.809+age*-0.2125;
             lrat=81.015+age*-0.2125;
            }
           }
           CalForm.rfactor.value="* - Predicted are for race selected above -- no race correction factor needed."
          }
          if (CalForm.lstRace.value=="two")
          {   // Blacks
           if (CalForm.lstSex.value=="one")
           { // Hankinson-Black-Males
            if (age < 20)
            {
             pfef=-1.1627+ht*ht*0.00010461+age*0.12314;
             pfev=-0.7048+ht*ht*0.00013194+age*-0.05711+age*age*0.004316;
             prat=89.239+age*-0.1828;
             pfvc=-0.4971+ht*ht*0.00016643001+age*-0.15497+age*age*0.007701;
             lfef=-1.1627+ht*ht*4.8189999E-5+age*0.12314;
             lfev=-0.7048+ht*ht*0.00010561+age*-0.05711+age*age*0.004316;
             lrat=78.822+age*-0.1828;
             lfvc=-0.4971+ht*ht*0.00013669999+age*-0.15497+age*age*0.007701;
            }
            else
            {   // Hankinson-Black-Males >= 20
             pfef=2.1477+ht*ht*0.00010461+age*-0.04238;
             pfev=0.3411+ht*ht*0.00013194+age*-0.02309;
             pfvc=-0.1517+ht*ht*0.00016643001+age*-0.01821;
             lfef=2.1477+ht*ht*4.8189999E-5+age*-0.04238;
             lfev=0.3411+ht*ht*0.00010561+age*-0.02309;
             lfvc=-0.1517+ht*ht*0.00013669999+age*-0.01821;
             prat=89.239+age*-0.1828;
             lrat=78.822+age*-0.1828;
            }
           }
           else
           {  // Hankinson-Black-Females
            if (age < 18)
            {
             pfef=-2.5379+ht*ht*8.5719999E-5+age*0.43755+age*age*-0.012154;
             pfev=-0.963+ht*ht*0.00010846+age*0.05799;
             prat=91.655+age*-0.2039;
             pfvc=-0.6166+ht*ht*0.00013606+age*-0.04687+age*age*0.003602;
             lfef=-2.5379+ht*ht*3.3799999E-5+age*0.43755+age*age*-0.012154;
             lfev=-0.963+ht*ht*8.546E-5+age*0.05799;
             lrat=80.978+age*-0.2039;
             lfvc=-0.6166+ht*ht*0.00010916+age*-0.04687+age*age*0.003602;
            }
            else
            {  // Hankinson-Black-Females-Age>18
             pfef=2.0828+ht*ht*8.5719999E-5+age*-0.03793;
             pfev=0.3433+ht*ht*0.00010846+age*-0.01283+age*age*-9.7E-5;
             pfvc=-0.3039+ht*ht*0.00013606+age*0.00536+age*age*-0.000265;
             lfef=2.0828+ht*ht*3.3799999E-5+age*-0.03793;
             lfev=0.3433+ht*ht*8.546E-5+age*-0.01283+age*age*-9.7E-5;
             lfvc=-0.3039+ht*ht*0.00010916+age*0.00536+age*age*-0.000265;
             prat=91.655+age*-0.2039;
             lrat=80.978+age*-0.2039;
            }
           }
           CalForm.rfactor.value="* - Predicted are for race selected above -- no race correction factor needed."
          }  // end Blacks
          if (CalForm.lstRace.value=="three")
          {  // Hispanic
           if (CalForm.lstSex.value=="one")
           {  // Hankinson-Hispanic-Males
            if (age < 20)
            {
             pfef=-1.3592+ht*ht*0.00014473+age*0.10529;
             pfev=-0.8218+ht*ht*0.00015104+age*-0.04248+age*age*0.004291;
             prat=90.024+age*-0.2186;
             pfvc=-0.7571+ht*ht*0.00017823+age*-0.0952+age*age*0.006619;
             lfef=-1.3592+ht*ht*9.0200003E-5+age*0.10529;
             lfev=-0.8218+ht*ht*0.0001267+age*-0.04248+age*age*0.004291;
             lrat=80.925+age*-0.2186;
             lfvc=-0.7571+ht*ht*0.00014947+age*-0.0952+age*age*0.006619;
            }
            else
            {   // Hankinson-Hispanic-Males >= 20
             pfef=1.7503+ht*ht*0.00014473+age*-0.05018;
             pfev=0.6306+ht*ht*0.00015104+age*-0.02928;
             pfvc=0.2376+ht*ht*0.00017823+age*-0.00891+age*age*-0.000182;
             lfef=1.7503+ht*ht*9.0200003E-5+age*-0.05018;
             lfev=0.6306+ht*ht*0.0001267+age*-0.02928;
             lfvc=0.2376+ht*ht*0.00014947+age*-0.00891+age*age*-0.000182;
             prat=90.024+age*-0.2186;
             lrat=80.925+age*-0.2186;
            }
           }
           else
           {  // Hankinson-Hispanic-Females
            if (age < 18)
            {
             pfef=-2.1825+ht*ht*9.6099997E-5+age*0.42451+age*age*-0.012415;
             pfev=-0.9641+ht*ht*0.00012154+age*0.0649;
             prat=92.36+age*-0.2248;
             pfvc=-1.2507+ht*ht*0.00014246001+age*0.07501;
             lfef=-2.1825+ht*ht*4.594E-5+age*0.42451+age*age*-0.012415;
             lfev=-0.9641+ht*ht*9.8899996E-5+age*0.0649;
             lrat=83.044+age*-0.2248;
             lfvc=-1.2507+ht*ht*0.0001157+age*0.07501;
            }
            else
            {  // Hankinson-Hispanic-Females-Age>18
             pfef=1.7456+ht*ht*9.6099997E-5+age*-0.01195+age*age*-0.000291;
             pfev=0.4529+ht*ht*0.00012154+age*-0.01178+age*age*-0.000113;
             pfvc=0.121+ht*ht*0.00014246001+age*0.00307+age*age*-0.000237;
             lfef=1.7456+ht*ht*4.594E-5+age*-0.01195+age*age*-0.000291;
             lfev=0.4529+ht*ht*9.8899996E-5+age*-0.01178+age*age*-0.000113;
             lfvc=0.121+ht*ht*0.0001157+age*0.00307+age*age*-0.000237;
             prat=92.36+age*-0.2248;
             lrat=83.044+age*-0.2248;
            }
           }
          }  // end of hispanic
          CalForm.rfactor.value="* - Predicted are for race selected above -- no race correction factor needed."
         }
         
		 document.getElementById("pfvc").innerHTML=rnddec(pfvc,2);
		
         
		 document.getElementById("pfev").innerHTML=rnddec(pfev,2);
		 
		 
        
		 document.getElementById("pfef").innerHTML=rnddec(pfef,2);
		 
         
		 document.getElementById("lfvc").innerHTML=rnddec(lfvc,2);
		 
        
		 document.getElementById("lfev").innerHTML=rnddec(lfev,2);
		 
         
		 document.getElementById("lfef").innerHTML=rnddec(lfef,2);
		 
         
		 document.getElementById("prat").innerHTML=rnddec(prat, 1);
		 
		 
         
		 document.getElementById("lrat").innerHTML=rnddec(lrat,1);
		 
		 
         if ((pfvc > 0) && (fvc > 0)) {
			
			document.getElementById("ppfvc").innerHTML=rnddec(100*fvc/pfvc,1);
		}
         else {
			
			document.getElementById("ppfvc").innerHTML="Blank"; 
		 }
		 
         if ((pfev > 0) && (fev > 0)) {
			
			document.getElementById("ppfev").innerHTML=rnddec(100*fev/pfev,1);
		 }
         else {
			
			document.getElementById("ppfev").innerHTML="Blank"; 
		 }
		 
         if ((pfef > 0) && (fef > 0)) {
		
			document.getElementById("ppfef").innerHTML=rnddec(100*fef/pfef,1);
		}
         else {
			
			document.getElementById("ppfef").innerHTML="Blank"; 
		}
		
         if (fvc > 0) {rat=100*fev/fvc;}
         else {rat=0;}
         if (rat > 0)
         {
          CalForm.rat.value=rnddec(rat,1);
          if (prat > 0) {
			
			document.getElementById("pprat").innerHTML=rnddec(100*rat/prat,1);
		  }
          else{
		  document.getElementById("pprat").innerHTML="Blank"; 
		  }
         }
         else
         {
          CalForm.rat.value="Blank";}
         if (fvc==0) {CalForm.txFVC.value="Blank";}
         else {CalForm.txFVC.value=rnddec(fvc, 2);}
         if (fev==0) {CalForm.txFEV.value="Blank";}
         else {CalForm.txFEV.value=rnddec(fev, 2);}
         if (fef==0) {CalForm.txFEF.value="Blank";}
         else {CalForm.txFEF.value=rnddec(fef, 2);}
        }
        
        
        
        
        
        
