const http=require("http");
const port=5500;
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h6>hey gaurav this is for fun time </h6>");
    res.end();

})
.listen(port,()=>{
    console.log(`connetion is bulid upon port ${port}`)
})