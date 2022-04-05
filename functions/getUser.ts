export {}

const {format} = require('date-fns')
exports.handler = async function (event: any) {
  try{
    if(event.httpMethod == "GET"){
      let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
      return {
        body: {
          message: "Hello from root! " + dt
        }
      }
    }

    return {
      statusCode: 400,
      headers: {},
      body: "Not found"
    }
  }catch (e){
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(e.stack || JSON.stringify(e, null, 2))
    }
  }
};