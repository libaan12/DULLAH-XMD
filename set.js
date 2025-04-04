const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VU2Y6rOBT8F78mfQlLWCK1NASSAFk6hGxkNA8GDDgBTLADTbfy7yN6Ud+R5t7p4ckydp1yVZ3zCgqCKZqjFoxeQVnhGjLULVlbIjAC41scowr0QQQZBCOQr+uEpSH/ctFXqe8KZ7M5pD7Z+nuNHFJJOBjejTvNjYtFHsG9D8pbkOHwN4B2zzpFPjHSerMU9407LVB60nbbuS0242373FyX8cmkIRnbj+DeIUJc4SKZlCnKUQWzOWrXEFffo687G46Ks8EeH/SEH0P5djXG+mXo1tqSyNsGS9uKxfFS39nfoz+v1fDkoGZAT+Ntoyip2l5i3nGPyl4Md15mLmaV9Ywmlam+06c4KVBkR6hgmLXf1n35pBUOTlfjKh5evIYmqlYvJYGbCTPZlxeSzzkSUUL3WjTfIx6Xq316lI+uOmkCredP09xKn7z2OVGQvh/sZducH8J0ouB/EF9Xn1m5/B/dZUNUfJMadjJJFL6YGr2d2+Ya3Co05zR3sAtyjRzG7ib7ZmwmF3RZE+u6J7OBpkyJOXS24XFHYsWZCLZ48Kx8btUzq5dIX/Qhu1W/YzlJ1CbTW84bnl37MhY5ebswpnKzhqROPNeBebzcITPNNv7mhQqRDPNFKygDb23RWc16e344naSL2XC+dAdOuT5Mi4PuPr696IJaOwIj/t4HFUowZRVkmBTdniAqfQCj2kNhhdibvMDxn8zhSRP9ieIRVlWr4621kgk35Rxis5y2qehUsXUqhskj6IOyIiGiFEUWpoxU7RJRChNEwejPv/qgQM/s3biunMj3QYwrynbFrcwIjD5d/fwJw5DcCua1RWh0C1SB0eBrGzGGi4R2Ot4KWIUprpGRQkbBKIYZRfc+iFCNQ9ThgYoIR12NrhsVBie2N5VmYK7djnJKivcjA0UIBDQYPgiqKD9IYsw/QC0SHiItkMNQEaOBhEAf4I+e6e780sLixC2IVZhzUWrLXa+3weJNX0vpLnTfbHjXHlUoAiNW3VAfBDC83MotuaDiN7grqBeboCIrIphFe9ocI2Odhot6urV/wn33FIxev+aUQaIO7yBOhMNEEkAf5G8RxN3LhaEg86KmCrwijHj+D/qj6YSEZfmjQAz0QQG702Cx7mp8GNDdjhCDOKNgBIyFN70qdDp5Cvg6UGczw010I9HBl2GfyX9PVhInxZiEvhcuzIXVrDDX4uAZ4RXH915O500gr1fqhdlqvnv8FxAwAmfHWxW3yf6iC0k6DSu4HGiZ1VLpvHXFeaaaOj4bu5yMeZG7iOupOzfwfLMqRInahxPnmFxcb2wr2ZvFjWwzm1zmkZk8dtXeg/NzsXAoqEvYUk2SUjtdS8F1O9z7Bc1MZ7i/nThP0fDmJTkuA5lV1rm49oTV+WkBpSacj5f1sHdrVegEHj1guVop0xeDKp89+TYTso9ZjN+65fUjZjFGb6Ptw4D/NOor8YN7/yeMj2H5i1SNfUtyGmjNJoXRtM+q6dcqydUjOcdaTAV/cOidX2Jn4a2dDNzvf/VBmUEWkyoHI0DzAII+yCBl+lfHbnGOKIN5CUa8IomKpKiC1gd5q5elxyD7bHSgd99T0AP3vwEDB/B3BAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "252613982172",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
