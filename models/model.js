

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


const mongoose=require('mongoose');

const player=new mongoose.Schema({
    player1:Number,
    player2:Number,
    player3:Number,
    player4:Number,

},{_id:false})

  

const result=new mongoose.Schema({
    player1:player,
    player2:player,
    player3:player,
    player4:player
},{_id:false})


  


const resultSchema=new mongoose.Schema({
    result:result,
    count:Number,
    id:Number
},{timestamps:true});


const Result=mongoose.model("Result",resultSchema);

module.exports=Result;

