 const timer = (ms: number | undefined) => new Promise(res=>setTimeout(res,ms));
 let speed = 0;
 export async function wait(){
    await timer(1000-speed);
}

export function currentSpeed(change:string){
    speed = parseInt(change);
}