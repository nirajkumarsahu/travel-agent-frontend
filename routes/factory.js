const fs = require('fs');
const files = fs.readdirSync(__dirname + '/modules/');
module.exports = (server, app) => {
    files.forEach(fileName => {
        const routesArr = require(`./modules/${fileName}`)
        routesArr.forEach(element => {
            server.get(element.apiEndPoint, (req, res) => {
                const actualPage = element.actualPage;
                const queryParams = { title: req.params.id };
                app.render(req, res, actualPage, queryParams);
            });
        });
    });

}



