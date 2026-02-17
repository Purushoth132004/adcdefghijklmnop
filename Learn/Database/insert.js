const poll = require("./db.js");

async function insertUser(){
  const [result] = await poll.query("INSERT INTO student (id,name) values (?,?)",[3,"Magesh"]);

  console.log("Result",result);
}

insertUser();