import multer from 'multer';
import path from 'path';

const config = {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'upload'),
        filename: (req, file, callback) => {
            const nameFile = `${Date.now()}-${file.originalname.trim()}`;
            callback(null, nameFile);
        }
    })
};

export default config;
