// const path = require('path');
function getFilesFromDir(path) {
    console.log('path',path);
    const files = require.context('/src/assets/record',false,/\.*$/);

    // const fileName = {};
    // files.keys().forEach(key => {
    //     fileName[key.replace(/(\.\/|\.json)/g, '')] = files(key)
    // });
    return files
}
    


export {
    getFilesFromDir
};