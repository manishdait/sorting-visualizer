import { playSucess, playSwap } from "src/assets/audio/Sound";
import { wait } from "src/app/array/Timmer";

export class Merge{
    size!:number;
    public async sort(length:number){
        this.size = length;
       await this.divide(0,length-1);
    }

    public async divide(low:number, high:number){
       if(low>=high){
        return;
       }
       let mid:number = Math.floor((low+high)/2);
       await this.divide(low,mid)
       await this.divide(mid+1,high);
       await this.merge(low,high,mid);
    }

    public async merge(low:number, high:number, mid:number){
        let detail = document.getElementById('details');
        let temp = document.getElementById('temp');
        let len = (high-low+1);
        let merged = new Array(len);
        let i = low;
        let j = mid+1;
        let k=0;

        const n1 = mid - low + 1;
        const n2 = high - mid;

        if(this.size<19){
            temp!.innerHTML = `tempArray: [ ${merged} ]`
        }

        for(let start=i; start<=mid; start++){
            document.getElementById(start.toString())!.style.background = "#ccccff";
        }
        for(let start=j; start<=high; start++){
            document.getElementById(start.toString())!.style.background = "#f39c12";
        }
        if(this.size<19){
            document.getElementById('indx'+(low))!.innerHTML = 'low, i'
            if(high == j){
                document.getElementById('indx'+(high))!.innerHTML = 'high, j'
            }

            else{
                document.getElementById('indx'+(high))!.innerHTML = 'high'
            }
            
            if(mid == low && i == low){
                document.getElementById('indx'+(mid))!.innerHTML = 'low, mid, i'
            }

            else if(mid == low){
                document.getElementById('indx'+(mid))!.innerHTML = 'low, mid'
            }  

            else if(mid == high){
                document.getElementById('indx'+(mid))!.innerHTML = 'high, mid'
            }

            else if(mid == i){
                document.getElementById('indx'+(mid))!.innerHTML = 'mid, i'
            }

            

            else{
                document.getElementById('indx'+(mid))!.innerHTML = 'mid'
            }

            document.getElementById(i.toString())!.style.backgroundColor = '#0099ff';
            document.getElementById(j.toString())!.style.backgroundColor = '#0099ffb4';
        }

        await wait();

        console.log(i)
        while(i<=mid && j<=high){
            if(parseInt(document.getElementById((i).toString())!.style.height)<parseInt(document.getElementById((j).toString())!.style.height)){
                merged[k] = parseInt(document.getElementById((i).toString())!.style.height);
                if(this.size<19){
                    document.getElementById(i.toString())!.style.backgroundColor = '#ccccff';
                    if(i == low && i == mid){
                        document.getElementById('indx'+(i))!.innerHTML = 'low, mid';
                    }
                    else if(i == low){
                        document.getElementById('indx'+(i))!.innerHTML = 'low';
                    }
                    else if(i == mid){
                        document.getElementById('indx'+(i))!.innerHTML = 'mid';
                    }
                    else{
                        document.getElementById('indx'+(i))!.innerHTML = '';
                    }
                    temp!.innerHTML = `tempArray: [ ${merged} ]`;
                    detail!.innerHTML = 'arr[ i ] < arr[ j ] <strong>and</strong> (i <= mid, j< = high), <strong><i>tempArr</i></strong>[ k ] = arr [ i ]'

                    
                    
                }
                
                i++;
                k++;

                if(this.size<19 && i<=mid){
                    if(i == mid){
                        document.getElementById('indx'+(i))!.innerHTML = 'mid, i';
                    }
                    else if(i == low){
                        document.getElementById('indx'+(i))!.innerHTML = 'low, i';
                    }
                    else if(i == high){
                        document.getElementById('indx'+(i))!.innerHTML = 'high, i';
                    }
                    else{
                        document.getElementById('indx'+(i))!.innerHTML = 'i'
                    }
                    document.getElementById(i.toString())!.style.backgroundColor = '#0099ff';
                    await wait();
                    detail!.innerHTML = '';
                }
            }

            else{
                merged[k] = parseInt(document.getElementById((j).toString())!.style.height);
                if(this.size<19){
                    document.getElementById(j.toString())!.style.backgroundColor = '#f39c12';
                    temp!.innerHTML = `tempArray: [ ${merged} ]`;
                    if(j == low && j == mid){
                        document.getElementById('indx'+(j))!.innerHTML = 'low, mid';
                    }
                   else if(j == high){
                        document.getElementById('indx'+(j))!.innerHTML = 'high';
                    }
                   
                    else if(j == low){
                        document.getElementById('indx'+(j))!.innerHTML = 'low';
                    }
                    else{
                        document.getElementById('indx'+(j))!.innerHTML = '';
                    }
                    detail!.innerHTML = 'arr[ j ] < arr[ i ] <strong>and</strong> (i <= mid, j< = high) , <strong><i>tempArr</i></strong>[ k ] = arr [ j ]'
                    
                   
                }
                j++;
                k++;

                if(this.size<19 && j<=high){
                    if(j == mid){
                        document.getElementById('indx'+(j))!.innerHTML = 'mid, j';
                    }
                    else if(j == high){
                        document.getElementById('indx'+(j))!.innerHTML = 'high, j';
                    }
                    else{
                        document.getElementById('indx'+(j))!.innerHTML = 'j'
                    }
                    document.getElementById(j.toString())!.style.backgroundColor = '#0099ffb4';
                    await wait();
                    detail!.innerHTML = '';
                }
            }
        }

        while(i<=mid){
            merged[k] = parseInt(document.getElementById((i).toString())!.style.height);
            if(this.size<19){
                document.getElementById('indx'+(i))!.innerHTML = ''
                if(i == low && i == mid){
                    document.getElementById('indx'+(i))!.innerHTML = 'low, mid';
                }
                else if(i == low){
                    document.getElementById('indx'+(i))!.innerHTML = 'low';
                }
                else if(i == mid){
                    document.getElementById('indx'+(i))!.innerHTML = 'mid';
                }
                else{
                    document.getElementById('indx'+(i))!.innerHTML = '';
                }
                temp!.innerHTML = `tempArray: [ ${merged} ]`;
                detail!.innerHTML = 'j > high, <strong>and</strong> i <= mid, <strong><i>tempArr</i></strong>[ k ] = arr [ i ]'
                
               
                
            }
            i++;
            k++;
            if(this.size<19 && i<=mid){
                if(i == mid){
                    document.getElementById('indx'+(i))!.innerHTML = 'mid, i';
                }
                else if(i == high){
                    document.getElementById('indx'+(i))!.innerHTML = 'high, i';
                }
                else{
                    document.getElementById('indx'+(i))!.innerHTML = 'i'
                }
                document.getElementById(i.toString())!.style.backgroundColor = '#0099ff';
                await wait();
                document.getElementById(i.toString())!.style.backgroundColor = '#ccccff';
                detail!.innerHTML = '';
            }
        }

        while(j<=mid){
            merged[k] = parseInt(document.getElementById((j).toString())!.style.height);
            if(this.size<19){
                document.getElementById('indx'+(j))!.innerHTML = ''
                if(j == low && j == mid){
                    document.getElementById('indx'+(j))!.innerHTML = 'low, mid';
                }
               else if(j == high){
                    document.getElementById('indx'+(j))!.innerHTML = 'high';
                }
               
                else if(j == low){
                    document.getElementById('indx'+(j))!.innerHTML = 'low';
                }
                else{
                    document.getElementById('indx'+(j))!.innerHTML = '';
                }
                temp!.innerHTML = `tempArray: [ ${merged} ]`;
                detail!.innerHTML = 'i > mid, <strong>and</strong> j <= high, <strong><i>tempArr</i></strong>[ k ] = arr [ j ]'
                

            }
            j++;
            k++;

            if(this.size<19 && j<=high){
                if(j == mid){
                    document.getElementById('indx'+(j))!.innerHTML = 'mid, j';
                }
                else if(j == low){
                    document.getElementById('indx'+(j))!.innerHTML = 'low, j';
                }
                else if(j == high){
                    document.getElementById('indx'+(j))!.innerHTML = 'high, j';
                }
                else{
                    document.getElementById('indx'+(j))!.innerHTML = 'j'
                }

                document.getElementById(j.toString())!.style.backgroundColor = '#0099ffb4';
                await wait();
                document.getElementById(j.toString())!.style.backgroundColor = '#f39c12';
                detail!.innerHTML = '';
            }
        }

        await wait()

    

        if(this.size<19){
            document.getElementById('indx'+(mid))!.innerHTML = ''    
            document.getElementById('indx'+(low))!.innerHTML = ''
            document.getElementById('indx'+(high))!.innerHTML = ''
        }

        for(let mi=0, ai=low; mi<merged.length; mi++, ai++){
            
            document.getElementById((ai).toString())!.style.height = merged[mi]+'px';
            

            if(this.size<30 && this.size>=19){
                    document.getElementById(ai.toString())!.innerHTML = parseInt(document.getElementById((ai).toString())!.style.height).toString()+`<p id=indx${ai} class="indx"></p>`;
            }

            if(this.size<19){
                document.getElementById('indx'+(ai))!.innerHTML = '';
                temp!.innerHTML = `tempArray: [ ${merged} ]`;
                detail!.innerHTML = ' Copy tempArr to arr, <strong><i>tempArr</i></strong> [ ] =  <strong><i>arr</i></strong> [ ]'
            }

            if(n1+n2 == this.size){
                playSucess();
                document.getElementById(ai.toString())!.style.background = "#00cc00";
            }
            else{
                playSwap();
                document.getElementById(ai.toString())!.style.background = "#90ee90";
            }
            
        }

        
        await wait();
        temp!.innerHTML = '';
        detail!.innerHTML = '';
    }
}