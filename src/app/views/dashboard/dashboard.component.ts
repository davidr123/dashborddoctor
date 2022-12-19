import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { FilterpatientsService } from '../services/filterpatients.service';

interface IUser {
  name: string;
  estado: string;
  registered: string;
  pais: string;
  // usage: number;
  // period: string;
  // payment: string;
  // activity: string;
  avatar: string;
  // status: string;
  // color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData, private filterService: FilterpatientsService) {
  }

  public users: IUser[] = [
    {
      name: 'Edison Villon',
      estado: 'Activo',
      registered: 'Octubre 22, 2022',
      pais: 'Ecuador',
      // usage: 50,
      // period: 'Jun 11, 2021 - Jul 10, 2021',
      // payment: 'Mastercard',
      // activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      // status: 'success',
      // color: 'success'
    },
    {
      name: 'Richard Asencio',
      estado: 'Activo ',
      registered: 'Noviembre 1, 2022',
      pais: 'Ecuador',
      // usage: 10,
      // period: 'Jun 11, 2021 - Jul 10, 2021',
      // payment: 'Visa',
      // activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      // status: 'danger',
      // color: 'info'
    },
    {
      name: 'DoctorAdmin',
      estado: 'Activo',
      registered: 'Noviembre 11, 2022',
      pais: 'Ecuador',
      // usage: 74,
      // period: 'Jun 11, 2021 - Jul 10, 2021',
      // payment: 'Stripe',
      // activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      // status: 'warning',
      // color: 'warning'
    },

  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  paises:string[]=[]
  cargando:boolean=false;
  cantones:string[]=[];
  paisselec:any;
  esmeraldaselec:boolean=false;


  personas_consultada!:string;
  mostrar_personas:boolean=false;

  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {

    this.initCharts();
    this.paises= this.filterService.provincias

      console.log(this.paises)
     




  }

  provinciaSeleccionada(){

    if(this.paises[0]=='Esmeralda'){
     return this.paises[0];
    }
    if(this.paises[1]=='Manabí'){
      return this.paises[1];
    }
    if(this.paises[2]=='Los Ríos'){
      return this.paises[2];
    }
    if(this.paises[3]=='Santa Elena'){
      return this.paises[3];
    }
    if(this.paises[4]=='Guayas'){
      this.paises[4];
    }

      return this.paises[5]
    

  }
  obtenervalorpais(event:any){

    if(event=='Esmeralda'){
    
        
        this.cargando= true;
   
      this.cantones= this.filterService.esmeralda;
      this.esmeraldaselec=true;
    }

    if(event=='Manabí'){
      
        
        this.cargando= true;
      
      this.cantones= this.filterService.manabi;
      this.cargando= false;

      this.esmeraldaselec=true;

    }

    if(event=='Los Ríos'){
     
        this.cargando= true;    
        this.cantones= this.filterService.losrios;
      this.cargando=false

      

      this.esmeraldaselec=true;

    }

    if(event=='Santa Elena'){
    
        
        this.cargando= true;
   
      this.cantones= this.filterService.santaelena;
      this.esmeraldaselec=true;

    }

    if(event=='Guayas'){
      
        
        this.cargando= true;
      
      this.cantones= this.filterService.guayas;
      this.esmeraldaselec=true;

    }



    this.cargando=false;
   

  }

  cantonseleccionado(event:any){
    console.log(event)
    if(event=='Atacames' || event=='Muisne' || event=='Rio Verde' || event=='San Lorenzo' ||event== 'Eloy Alfaro' ||event== 'Rio Verde' || event=='Quininde' || event=='Esmeraldas'){
this.mostrar_personas=true;
this. personas_consultada='600 Personas';

    }

    if(event=='Bolivar' || event=='Chone' || event=='El Carmen' || event=='Jama' || event=='Flavio Alfaro' || event== 'Jaramijó' || event== 'Jipijapa' || event== 'Junín' || event== 'Manta' || event=='Montecristi' || event=='Olmedo' ||event== 'Paján' || event== 'Pedernales' || event== 'Pichincha' || event== 'Portoviejo' || event== 'Puerto López' || event== 'Rocafuerte' || event== 'San Vicente' || event== 'Santa Ana' || event== 'Sucre' || event== 'Tosagua' || event== 'Veinticuatro de Mayo' ){
this.mostrar_personas=true;
this.personas_consultada='1600 Personas';

    }

    if(event=='Baba' || event=='Babahoyo' || event== 'Buena fe' || event== 'Mocache' ||event== 'Montalvo'){
this.mostrar_personas=true;
this.personas_consultada='3000 Personas';

    }

    if(event=='Santa Elena' || event=='Ballenita' || event== 'Ancón' ||event== 'Atahualpa' ||event== 'Chanduy'){
this.mostrar_personas=true;
this.personas_consultada='2000 Personas';

    }

    if(event=='Guayaquil' ||event== 'Alfredo Baquerizo Moreno' ||event== 'Balao' || event== 'Balzar' || event=='Duran'){
this.mostrar_personas=true;
this.personas_consultada='8000 Personas';

    }

  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
