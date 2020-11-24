// 내풀이
function solution(N, stages) {
    let leftUsers = stages.length;
    let result  = [];
    for (let i = 1; i <= N; i++){
        let nowStageUser = 0;
        stages.map((stage)=>{
            if(stage===i){
                nowStageUser += 1;
            }
        })
        result.push([i,nowStageUser/leftUsers]);
        leftUsers -= nowStageUser;
    }
    const sorted = result.sort((a,b)=> a[1]>b[1] ? -1 : 1);
    return sorted.map((array)=>array[0]); 
}

//다른사람 풀이
function solution(N, stages) {
    let ans = []

    for (let i = 1; i <= N; ++i) {
        let usersReachedCurrentStage   = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
        let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
        if (usersReachedCurrentStage === 0) {
            ans.push({ 'stage': i, 'failRate': 0 })
            continue
        }

        ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
    }

    return ans.sort((a, b) => {
        if (a.failRate > b.failRate) return -1
        if (a.failRate < b.failRate) return 1
        return a.stage - b.stage
    }).map(entry => entry.stage)
}
