import { Component } from '@angular/core';
import { Merge } from 'src/assets/algorithms/Merge';
import { Quick } from 'src/assets/algorithms/Quick';
import { Bubble } from '../assets/algorithms/Bubble';
import { Insertion } from '../assets/algorithms/Insertion';
import { Selection } from '../assets/algorithms/Selection';
import { currentSpeed } from './array/Timmer';
import { setMute } from 'src/assets/audio/Sound';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SortingVisualizer';
  change:string = '6';
  speed:string = '0';
  disable!:boolean;
  visualMsg = "Visualize!";

  bubble:Bubble = new Bubble();
  selection:Selection = new Selection();
  insertion:Insertion = new Insertion(); 
  quick:Quick = new Quick();
  merge:Merge = new Merge();

  dropdownClick:boolean = false;

  selectedAlgo!:string;

  onSelected(value:string){
    this.selectedAlgo = value;
    this.dropdownClick = false;
  }

  async onVisualize(){
    switch(this.selectedAlgo){
      case 'Bubble Sort':
        this.onDisable();
        await this.bubble.sort(parseInt(this.change));
        this.onEnable();
        break;
        
      case 'Selection Sort':
        this.onDisable();
        await this.selection.sort(parseInt(this.change));
        this.onEnable();
        break;
        
      case 'Insertion Sort':
        this.onDisable();
        await this.insertion.sort(parseInt(this.change));
        this.onEnable();
        break;  

      case 'Quick Sort':
        this.onDisable();
        await this.quick.sort(parseInt(this.change));
        this.onEnable();
        break; 

      case 'Merge Sort':
        this.onDisable();
        await this.merge.sort(parseInt(this.change));
        this.onEnable();
        break; 

      default:
        this.visualMsg = "Pick an Algorithm!";
        break;
    }
  }

  public onSpeedChange(change:string){
    this.speed = change;
    currentSpeed(this.speed)
  }

  public onDisable():boolean{
    this.disable = true;
    return this.disable;
  }

  async onEnable(){
    this.disable = false;
  }

  public onMute(){
    let ele = document.getElementById('mute');

    if (ele!.innerHTML == 'volume_up') {
      setMute(true);
      ele!.innerHTML = 'volume_off';
    } else {
      ele!.innerHTML = 'volume_up';
      setMute(false);
    }
    
  }

}
