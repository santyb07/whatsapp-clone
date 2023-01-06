import multer from "multer"
import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from "dotenv"

dotenv.config()

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-jamgjno-shard-00-00.43fkveh.mongodb.net:27017,ac-jamgjno-shard-00-01.43fkveh.mongodb.net:27017,ac-jamgjno-shard-00-02.43fkveh.mongodb.net:27017/?ssl=true&replicaSet=atlas-tdttou-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{useUnifiedTopology:true, useNewUrlParser:true,},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 