

const Blockchain = require('.blockchain')
const Block= require('.block')
const Template = require('.Template') 




let markCoin = new Blockchain();

var count = 1;
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');



var app = http.createServer(function (request, response) {
    var _url = request.url;
    var pathname = url.parse(_url, true).pathname;
    //var queryData = url.parse(_url, true).query;

    if (pathname === '/') {
        fs.readdir('D:/BlockChain/code', function (error, filelist) {
            var template = templateHTML()
            var body = '';
            request.on('data', function (data) {
                body = body + data;
            });
            request.on('end', function () {
                var post = qs.parse(body);
                if (post.title != null) {
                    //console.log(post);
                    // console.log('Mining block ' + i + '...');
                    markCoin.addBlock(new Block(count, post.title, { amount: post.description }));
                    console.log(JSON.stringify(markCoin, null, 4));
                    count = count + 1;
                    console.log('Is blockchain valid?' + markCoin.isChainValid());
                }

            });
            response.writeHead(200);
            response.end(template);
        });
    }

    else {
        response.writeHead(404);
        response.end('Not found');
    }

});
app.listen(3000);