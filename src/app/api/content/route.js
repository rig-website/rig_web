import dbconnect from "@/lib/dbconnect";
import Content from "@/model/content.model.js";
import { uploadOnCloudinary } from "@/utils/cloudinary";
import nextconnect from 'next-connect';
import fs from 'fs';
import { upload } from "@/middlewares/multer.middleware";

const handler = nextconnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
    await dbconnect();
    try {
        const { text } = req.body;
        const { file } = req;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const localFilePath = file.path;
        const uploadresult = await uploadOnCloudinary(localFilePath);
        const imageurl = uploadresult.secure_url;

        fs.unlinkSync(localFilePath);
        const content = await Content.create({ text, imageurl });
        res.status(201).json({ success: true, data: content });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
    }
});

export const config = {
    api: {
        bodyParser: false
    },
};

export default handler;
