const fs = require('fs-extra');
async function err404(req, res) {
    res.setHeader('Content-Type', 'image/gif');
    res.statusCode = 200;
    const filePath = `${__dirname}/../404.gif`;
    const file = fs.readFileSync(filePath);
    res.send(file)
    res.end();
}
module.exports = err404;
