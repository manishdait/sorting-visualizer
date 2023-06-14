import { AppComponent } from "../../app/app.component";
import { playSucess, playSwap } from "../audio/Sound";
import { wait } from "../../app/array/Timmer";

export class Bubble{

    

    public async sort(length:number){

        let detail = document.getElementById('details');

        for(var i=0; i<length-1; i++){
            for(var j=0; j<length-1-i; j++){

                if(length<19){
                    document.getElementById('indx'+j)!.innerHTML = 'j';
                    document.getElementById('indx'+(j+1))!.innerHTML = 'j+1';
                }

                
                document.getElementById(j.toString())!.style.backgroundColor="#0099ff"
                document.getElementById((j+1).toString())!.style.backgroundColor="#0099ff"
                await wait();

                if(parseInt(document.getElementById(j.toString())!.style.height)>parseInt(document.getElementById((j+1).toString())!.style.height)){
                    let temp = document.getElementById(j.toString())!.style.height;
                    document.getElementById(j.toString())!.style.height = document.getElementById((j+1).toString())!.style.height;
                    document.getElementById((j+1).toString())!.style.height = temp;

                    
                    
                    playSwap()

                   
                    
                    if(length<30 && length>=19){
                        document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString();
                        document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString();
                    }
                    else if(length<19){
                        detail!.innerHTML="arr[ j ] > arr[ j+1 ], <i><strong>Swap</strong></i>( arr[ j ], arr[ j+1 ] )";
                        document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString()+`<p id=indx${j} class="indx"></p>`;
                        document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString()+`<p id=indx${j+1} class="indx"></p>`;
                    }
                    await wait();

                    detail!.innerHTML = ''
                }
                if(length<30 && length>=19){
                    document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString();
                    document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString();
                }

                else if(length<19){
                    document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString()+`<p id=indx${j} class="indx"></p>`;
                    document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString()+`<p id=indx${j+1} class="indx"></p>`;
                }
                document.getElementById(j.toString())!.style.background="#ff339962";
                document.getElementById((j+1).toString())!.style.background="#ff339962";
            }
            document.getElementById((length-1-i).toString())!.style.background="#00cc00";
        }
        document.getElementById('0')!.style.background="#00cc00";
        await playSucess();
    }

}