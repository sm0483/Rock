const input={
    Rock:"Rock",
    Paper:"Paper",
    Scissor:"Scissor"
}

const getWinner=(input1,input2)=>{
    if(input1===input.Paper && input2===input.Rock) return 1;
    else if(input1===input.Scissor && input2===input.Paper) return 1;
    else if(input1===input.Rock && input2===input.Scissor) return 1;
    return 0;
}


const getResult=(input1,inputArr)=>{
    const res={}
    for(let i=0;i<inputArr.length;i++){
        res[`player${i+1}`]=getWinner(input1,inputArr[i]);
    }
    return res;

}

// { player1: 0, player2: 0, player3: 0, player4: 1 },
// { player1: 0, player2: 0, player3: 0, player4: 1 },


const appendWithOld=(old,current)=>{
    const tempOld={
        player1:old.player1,
        player2:old.player2,
        player3:old.player3,
        player4:old.player4
    }
    const res={};
    const oldArr=Object.values(tempOld);
    const currentArr=Object.values(current);
    for(let i=0;i<oldArr.length;i++){
        res[`player${i+1}`]=oldArr[i]+currentArr[i];
    }

    return res;

}



module.exports={getResult,appendWithOld}