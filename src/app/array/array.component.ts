import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
  exportAs: "array"
})
export class ArrayComponent {

  size:number=6;

  ngOnInit(){
    let array = document.getElementById('array');

    array!.innerHTML = "";

    for(var i=0; i<this.size; i++){
      let height = Math.floor((Math.random()*460)+25)
      let bar = document.createElement('bar');
      bar.id = i.toString();
      bar.className = 'bar';
      if(this.size<30){
        bar.innerHTML = height.toString();
        let indx = document.createElement('p');
        indx.id = 'indx'+i;
        indx.innerHTML = '';
        indx.className = 'indx'
        bar.appendChild(indx);
      }
      bar.style.height = height+'px';

      
      array?.appendChild(bar);
    }
  }

  @Input() set onSizeChange(value:string){
    this.size = parseInt(value);
    this.ngOnInit()
  }

}
