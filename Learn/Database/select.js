const db = require("./db.js");

async function selectall(){
  const q =  await db.query("select name from student ");

  console.log(q);
}

selectall();