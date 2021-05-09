function templateHTML() {
    return `
    <!doctype html>
    <html>
    <head>            
    <title>WEB1 - creat</title>         
    <meta charset="utf-8">           
    </head>           
    <body align = "center">
        <h1><a href = "/">WEB</a></h1>
        <form action="http://localhost:3000" method="post">
                    <p><input type="text" name="title" placeholder = "title"></p>
                    <p>
                      <textarea name="description" placeholder = "description"></textarea>
                    </p>
                    <p>
                      <input type="submit">
                    </p>
                  </form>
    </body>
    </html>
    `;
}