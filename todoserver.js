const http=require("http");
const port=5500;
const chacha =["hey","how","are you?"];
 //creating a server
http.createServer((req,res)=>{
    const {method,url}=req;
    if (url==="/todo"){
        if (method==="get")
        {
            console.log("todos route and its a get method ");
        }else
         if(url ==="/")
        {
        console.log("home page"); 
        }
    }

    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h6>hey gaurav this is for fun time </h6>");
    res.write(chacha.toString());

    res.end();

})
.listen(port,()=>{
    console.log(`connetion is bulid upon port ${port}`)
})