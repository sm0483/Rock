const { StatusCodes } = require('http-status-codes');
const asyncWrapper=require('../error/asyncWrapper');
const CustomError = require('../error/custom');
const Result = require('../models/model');
const { getResult, appendWithOld } = require('../utils/rocker');

// req.body={
//     game:{
//         player1:"Rock",
//         player2:"Rock",
//         player3:"Paper",
//         player4:"Scissor",
//     },
//     id:"1234"
// }


// const responseDb={
//     result:{
//         player1: { player1: 0, player2: 0, player3: 0, player4: 1 },
//         player2: { player1: 0, player2: 0, player3: 0, player4: 1 },
//         player3: { player1: 1, player2: 1, player3: 0, player4: 0 },
//         player4: { player1: 0, player2: 0, player3: 1, player4: 0 }
  
//     },
//     id:"1234",
//     count:1
// }


// Result.find({id}).sort({_id: -1}).limit(1).then((products) => {
//     console.log(products[0].result)
// })


const result=asyncWrapper(async(req,res)=>{
    const {game,id}=req.body;
    const {player1,player2,player3,player4} =game;
    if(!id || !player1 || !player2 || !player3 || !player4) throw new CustomError("Invalid request",StatusCodes.BAD_REQUEST);

    let old={};
    let count=1;
    const responseDb=await Result.findOne({id}).sort({_id:-1}).limit(1)



    if(responseDb){
        old=responseDb.result;
        count=responseDb.count+1;
    }
    const storeData={};
    const arr=Object.values(game);
    const map={};

    for(let i=0;i<arr.length;i++){
        if(map.hasOwnProperty(arr[i])){
            storeData[`player${i+1}`]=map[arr[i]];
        }
        else{
            const winner=getResult(arr[i],arr);
            storeData[`player${i+1}`]=winner;
            map[arr[i]]=winner;
        }


        if(responseDb){
            storeData[`player${i+1}`]=appendWithOld(old[`player${i+1}`],storeData[`player${i+1}`]);
        }
    }


    const saveDataFormat={
        result:storeData,
        count,
        id
    }

    let response=await Result.create(saveDataFormat);
    if(count===50) response =await Result.find({id})
    res.status(StatusCodes.OK).json(response)

})


module.exports=result;









