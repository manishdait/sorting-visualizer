import { playFind, playSucess, playSwap } from "../audio/Sound";
import { wait } from "../../app/array/Timmer";

export class Insertion{

    public async sort(length:number){

        let detail = document.getElementById('details');

        for(var i=1; i<length; i++){
            let current = parseInt(document.getElementById(i.toString())!.style.height);
            let j = i-1;
            document.getElementById(j.toString())!.style.backgroundColor="#00cc00";
            if(length<19){
                document.getElementById('indx'+(j+1))!.innerHTML = `i, curr=${current}`;
            }
            
            
            document.getElementById(i.toString())!.style.backgroundColor="#0099ff";
            await wait();
            while(j>=0 && current<parseInt(document.getElementById(j.toString())!.style.height)){
                playFind();
                document.getElementById((j+1).toString())!.style.height = document.getElementById(j.toString())!.style.height;
                if(length<30 && length>=19){
                    document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString();
                }
                else if(length<19){
                    document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString()+`<p id=indx${j+1} class="indx"></p>`;
                }
                
                document.getElementById(i.toString())!.style.backgroundColor="#00cc00"
                document.getElementById(j.toString())!.style.backgroundColor="#0099ff";
                if(length<19){
                    detail!.innerHTML = 'j >= 0 <strong>and</strong> curr < arr[ j+1 ], <strong><i></i>arr</strong>[ j+1 ] = <strong><i>arr</i></strong>[ j ]';
                    document.getElementById('indx'+j)!.innerHTML = `curr=${current}`
                    document.getElementById('indx'+(j+1))!.innerHTML = ``
                }
                await wait()
                j--;
                if(length<19){

                if(j>=0){
                    document.getElementById('indx'+(j))!.innerHTML = ``
                }
                    document.getElementById('indx'+(j+1))!.innerHTML = `curr=${current}`
                }
                document.getElementById((j+1).toString())!.style.backgroundColor="#00cc00"
                //await wait();

                detail!.innerHTML = '';
            }

            document.getElementById((j+1).toString())!.style.height = current+'px';

            playSwap()

            if(length<30 && length>=19){
                document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString();
            }
            else if(length<19){
                detail!.innerHTML = '<strong><i></i>arr</strong>[ j+1 ] = <strong><i>curr</i></strong>';
                document.getElementById((j+1).toString())!.innerHTML = parseInt(document.getElementById((j+1).toString())!.style.height).toString()+`<p id=indx${j+1} class="indx"></p>`;
            }
        }

        document.getElementById((length-1).toString())!.style.backgroundColor="#00cc00"

        await playSucess()

        detail!.innerHTML = '';

    }

}