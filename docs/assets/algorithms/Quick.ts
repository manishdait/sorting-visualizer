import { playFind, playSucess, playSwap } from "src/assets/audio/Sound";
import { wait } from "src/app/array/Timmer";



export class Quick{
    size!: number;
    public async sort(length:number){
        this.size = length;
        await this.quickSort(length-1,0)
        playSucess();
    }   

    async quickSort(high:number, low:number){
        if(low<high){
            let pivotIndx = await this.partition(high,low);
            document.getElementById(pivotIndx.toString())!.style.backgroundColor = "#00cc00";
            
            await this.quickSort(pivotIndx-1,low);
            await this.quickSort(high,pivotIndx+1);
        }

        else{
            if(low>=0 && high>=0 && low < this.size && high < this.size){
                document.getElementById(low.toString())!.style.backgroundColor = "#00cc00";
                document.getElementById(high.toString())!.style.backgroundColor = "#00cc00";
            }
        }
    }

    async partition(high:number, low:number){
        let detail = document.getElementById('details');

        let pivot = parseInt(document.getElementById(low.toString())!.style.height);
        let i = low;
        let j = high;
    
        document.getElementById(low.toString())!.style.backgroundColor = "red";
        document.getElementById(j.toString())!.style.backgroundColor = "#0099ffb4";
        if(this.size<19){
            document.getElementById('indx'+(low))!.innerHTML = 'i, pivot';
            document.getElementById('indx'+(j))!.innerHTML = 'j';
        }
        await wait()
    
        while(i<j){
            while(parseInt(document.getElementById(i.toString())!.style.height)<=pivot && i<high){
                if(this.size<19){
                    if(i == low){
                        document.getElementById('indx'+(i))!.innerHTML = 'pivot';
                    }

                    else if(i==j){
                        document.getElementById('indx'+(i))!.innerHTML = 'j';
                        }
                    else{
                        document.getElementById('indx'+(i))!.innerHTML = '';
                    }

                }

                if(i != low){
                    document.getElementById(i.toString())!.style.backgroundColor = "#ccccff";
                }
                i++;
                document.getElementById(i.toString())!.style.backgroundColor = "#0099ff";
                if(this.size<19){
                    detail!.innerHTML = 'arr[ i ] <= pivot, <i><strong>i</strong> ++</i>';
                    if(j==i){
                        document.getElementById('indx'+(i))!.innerHTML = 'j, i'
                    }
                    else{
                    document.getElementById('indx'+(i))!.innerHTML = 'i';
                    }
                }
                await wait()

                detail!.innerHTML = '';
            }
        
            while(parseInt(document.getElementById(j.toString())!.style.height)>pivot && j>low){
                document.getElementById(j.toString())!.style.backgroundColor = "#f39c12";
                if(this.size<19){
                    if(j==i){
                        document.getElementById('indx'+(j))!.innerHTML = 'i'
                    }
                    else{
                    document.getElementById('indx'+(j))!.innerHTML = '';
                    }
                }
                j--;
                document.getElementById(j.toString())!.style.backgroundColor = "#0099ffb4";
                if(this.size<19){
                    detail!.innerHTML = 'arr[ j ] <= pivot, <i><strong>j</strong> ++</i>';
                    if(j==i){
                        document.getElementById('indx'+(j))!.innerHTML = 'i, j'
                    }

                   else if(j == low){
                        document.getElementById('indx'+(j))!.innerHTML = 'pivot, j';
                    }
                    else{
                    document.getElementById('indx'+(j))!.innerHTML = 'j';
                    }
                }
                    
                await wait()

                detail!.innerHTML = '';
            }
        
            if(i<j){
                playFind();
                let temp = document.getElementById(i.toString())!.style.height;
                document.getElementById(i.toString())!.style.height = document.getElementById(j.toString())!.style.height;
                
                document.getElementById(i.toString())!.style.backgroundColor = "#ccccff";
                document.getElementById(j.toString())!.style.height = temp;
                document.getElementById(j.toString())!.style.backgroundColor = "#f39c12";

                if(this.size<30 && this.size>=19){
                    document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById((i).toString())!.style.height).toString();
                    document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString();  
                }
                else if(this.size<19){
                    detail!.innerHTML = 'arr[ i ] < a[ j ] <strong>and</strong> i < j, <i><strong>Swap</strong></i>( arr[ i ], arr[ j ] )';
                    document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById((i).toString())!.style.height).toString()+`<p id=indx${i} class="indx">i</p>`;
                    document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString()+`<p id=indx${j} class="indx">j</p>`;  
                }
                await wait();

                detail!.innerHTML = '';
            }
            await wait()

            
        }
    
        playSwap();
        let temp = document.getElementById(j.toString())!.style.height;
        document.getElementById(j.toString())!.style.height = document.getElementById(low.toString())!.style.height;
         document.getElementById(low.toString())!.style.height = temp;
        if(this.size<30 && this.size>=19){
            document.getElementById(low.toString())!.innerHTML = parseInt(document.getElementById((low).toString())!.style.height).toString()
            document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById((i).toString())!.style.height).toString()
            document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString();
        }
        else if(this.size<19){
            detail!.innerHTML = 'i !< j, <i><strong>Swap</strong></i>( arr[ j ], arr[ low ] )';
            document.getElementById(low.toString())!.innerHTML = parseInt(document.getElementById((low).toString())!.style.height).toString()+`<p id=indx${low} class="indx"></p>`
            document.getElementById(i.toString())!.innerHTML = parseInt(document.getElementById((i).toString())!.style.height).toString()+`<p id=indx${i} class="indx"></p>`
            document.getElementById(j.toString())!.innerHTML = parseInt(document.getElementById((j).toString())!.style.height).toString()+`<p id=indx${j} class="indx"></p>`;
        }
        document.getElementById(j.toString())!.style.backgroundColor = "#00cc00";
        document.getElementById(low.toString())!.style.backgroundColor = "#ff339962";
        await wait()
        detail!.innerHTML = '';
    
        for(var k=0; k<this.size; k++){
            console.log(document.getElementById(k.toString())!.style.backgroundColor);
            if(document.getElementById(k.toString())!.style.backgroundColor != "rgb(0, 204, 0)"){
                document.getElementById(k.toString())!.style.backgroundColor = "#ff339962";
            }
        }

        if(this.size<19){
                document.getElementById('indx'+(i))!.innerHTML = ''
                document.getElementById('indx'+(j))!.innerHTML = '';
                document.getElementById('indx'+(low))!.innerHTML = '';
        }

        return j;
    
    }

}



