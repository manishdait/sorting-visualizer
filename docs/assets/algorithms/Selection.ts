import { playFind, playSucess, playSwap } from "../../app/array/Sound";
import { wait } from "../../app/array/Timmer";

export class Selection{

    public async sort(length:number){

        let detail = document.getElementById('details');

        for(var i=0; i<length-1; i++){
            let smallest = i;

            for(var j=i+1; j<length; j++){
                document.getElementById(i.toString())!.style.backgroundColor = "#0099ff";
                document.getElementById(j.toString())!.style.backgroundColor = "#0099ffb4";
                if(length<19){
                    document.getElementById('indx'+i)!.innerHTML = "i";
                    document.getElementById('indx'+j)!.innerHTML = "j";
                    if(i != smallest){
                        document.getElementById('indx'+smallest)!.innerHTML = "small";
                        document.getElementById(smallest.toString())!.style.backgroundColor="#ff6600";
                    }
                    else{
                    document.getElementById('indx'+smallest)!.innerHTML = "i, small"
                    }
                }

                if(i != smallest){
                    document.getElementById(smallest.toString())!.style.backgroundColor="#ff6600";
                }
                
                
                
                await wait()
                if(parseInt(document.getElementById(smallest.toString())!.style.height) > parseInt(document.getElementById(j.toString())!.style.height)){
                    playFind()
                    if(length<19){
                        if(smallest == i){
                            document.getElementById('indx'+smallest)!.innerHTML = "i"
                        }
                        else{
                            document.getElementById('indx'+smallest)!.innerHTML = ""
                        }
                        document.getElementById('indx'+j)!.innerHTML = "small"
                        detail!.innerHTML = "small > j, <i><strong>Swap</strong></i>( small, j )"
                    }

                    if(i != smallest){
                    document.getElementById(smallest.toString())!.style.backgroundColor="#ff339962";
                    }
                    await wait()
                    
                    document.getElementById(i.toString())!.style.backgroundColor = "#0099ff";
                    
                    smallest = j;
                }

                detail!.innerHTML = "";

               if(length<19){
                document.getElementById('indx'+smallest)!.innerHTML = "small"
                document.getElementById('indx'+j)!.innerHTML = ""
               }

                document.getElementById(smallest.toString())!.style.backgroundColor="#ff6600";
                document.getElementById(i.toString())!.style.backgroundColor = "#ff339962";
                document.getElementById(j.toString())!.style.backgroundColor = "#ff339962"; 
                
            }
            playSwap()
            let temp = document.getElementById(i.toString())!.style.height;
            document.getElementById(i.toString())!.style.height = document.getElementById(smallest.toString())!.style.height;
            document.getElementById(smallest.toString())!.style.height = temp;

            if(length<30 && length>=19){
                document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById(i.toString())!.style.height).toString();
                document.getElementById(smallest.toString())!.innerHTML = parseInt(document.getElementById(smallest.toString())!.style.height).toString();
            }

            else if(length<19){
                detail!.innerHTML="<i><strong>Swap</strong></i>( arr[ i ], arr[ small ] )";
                document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById(i.toString())!.style.height).toString()+`<p id=indx${i} class="indx"></p>`;
                document.getElementById(smallest.toString())!.innerHTML = parseInt(document.getElementById(smallest.toString())!.style.height).toString()+`<p id=indx${smallest} class="indx"></p>`;
            }



            document.getElementById(smallest.toString())!.style.backgroundColor="#ff339962"
            document.getElementById(i.toString())!.style.backgroundColor = "#00cc00"

            await wait()

            detail!.innerHTML = '';
        }
        document.getElementById((length-1).toString())!.style.backgroundColor = "#00cc00"

        await playSucess();
    }

}