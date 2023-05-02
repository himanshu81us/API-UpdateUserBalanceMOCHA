
const oracledb = require('oracledb');


describe('DATABASE CONNECTION AND UPDATE THE USER BALANCE' ,function(){
    it('Update user balance', function(){
  
  oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
  
  try {
      oracledb.initOracleClient({libDir: 'C:\\Users\\himanshu.patel\\Downloads\\instantclient_21_9'});
  
  } catch (err) {console.error('Whoops!'); console.error(err); process.exit(1); }
  
  const mypw = "AUTO_2320"// set password
  async function run() {
  let connection;
  try { connection = await
  oracledb.getConnection( { user: "AUTO_2320", password : mypw,
  
  connectString : "slodb02.slo.bingo.ptec/slodev2" });
      
  result = await connection.execute (`SELECT EXTERNAL_ACCOUNT_ID FROM GL_USER_REGISTRATIONS WHERE EXTERNAL_USER_NAME = 'himanshu81us'`)
  //await connection.commit();
  console.log(result);
  console.log(result.row);
     }
  
    catch (err) { console.error(err); } finally { if (connection) { 
    try { await connection.close(); } catch (err) { console.error(err); } } }}
    run();
  })
  });