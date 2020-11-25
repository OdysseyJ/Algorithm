//내풀이
const canGoBridge = (bridge_length, weight, bridge, truckWeight)=>{
    let totalWeight = 0;
    bridge.map((car)=> totalWeight+=car);
    return totalWeight + truckWeight <= weight;
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let waiting = truck_weights;
    let bridge = Array.from({length: bridge_length}, ()=>0);
    while(true){
        if (waiting.length === 0 && bridge.filter((carWeight)=> carWeight!==0).length === 0){
            break;
        }
        time+=1;
        bridge.shift();
        if  (canGoBridge(bridge_length, weight, bridge, waiting[0])){
            bridge.push(waiting[0]);
            waiting.shift();
        }
        else{
            bridge.push(0);
        }
        
    }
    return time;
}

// 다른사람
const solution = (bridgeLength, weight, truckWeights) => {
  const progress = [];
  let i = 1;
  while(true) {
    progress.map((item, j) => {
      if(item.end === i) progress.splice(j, 1);
    });

    if (progress.reduce((p, c) => p + c.weight, 0) + truckWeights[0] <= weight) {
      progress.push({ end: i + bridgeLength, weight: truckWeights.shift() });
    }

    if(!progress.length && !truckWeights.length) break;
    i += 1;
  }

  return i;
};
