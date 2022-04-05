export {}

const {format} = require('date-fns')
exports.handler = async function (event: any) {
  try{
    if(event.httpMethod == "GET"){
      let dt = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
      return {
        body: {
          message: "This is Function! " + dt
        }
      }
    }

    if(event.httpMethod == "POST"){
      if(!event.body){
        return {
          statusCode: 400,
          headers: {},
          body: "body has no content"
        }
      }

      let letter = JSON.stringify(event.body)
      return {
        body: letter
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