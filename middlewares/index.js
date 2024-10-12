import fs from 'fs';

function LogReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
            (err, data) => {
                next();
            }
        )
    }
}

export {
    LogReqRes,
};