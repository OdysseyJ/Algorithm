function solution(skill, skill_trees) {
    const skillArray = skill.split("");
    let result = 0;
    skill_trees.forEach((skillTree)=>{
        let converted = skillTree
        skillArray.map((skill, index)=>{
            converted = converted.split(skill).join(`${index}`);
        })
        let now = 0;
        let isValid = true;
        converted.split("").filter((item)=>!isNaN(item)).map((num)=>{
            if (Number(num)===now){
                now+=1;
            }
            else {
                isValid = false;
            }
        });
        if (isValid) result+=1;
    })
    return result;
}