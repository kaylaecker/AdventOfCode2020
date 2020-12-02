import { readFileSync } from 'fs';

const filereader = (filePath) => {
    try {
        return readFileSync(filePath, 'utf8').split('\r\n');
    } catch (e) {
        console.log("e", e);
    }
}

export default filereader