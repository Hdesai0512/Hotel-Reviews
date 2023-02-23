const React= require('react')

function Default(html) {
    return (
        <html>
            <head>
                <title>Default</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossOrigin="anonymous"></link>
                  <link rel="stylesheet" href='/main.css' />
            </head>
            <body>
                <h1>Hotel Reviews!</h1>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}



module.exports = Default