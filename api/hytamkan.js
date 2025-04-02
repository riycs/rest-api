const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const genAI = new GoogleGenerativeAI('AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0');

router.post('/', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'Gambar diperlukan' });

        const base64Image = req.file.buffer.toString('base64');
        const mimeType = req.file.mimetype;

        const contents = [
            { text: 'Ubahlah karakter dari gambar tersebut diubah kulitnya menjadi hitam' },
            {
                inlineData: {
                    mimeType,
                    data: base64Image
                }
            }
        ];

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp-image-generation',
            generationConfig: {
                responseModalities: ['Text', 'Image']
            }
        });

        const response = await model.generateContent(contents);
        let resultImage;

        for (const part of response.response.candidates[0].content.parts) {
            if (part.inlineData) {
                resultImage = part.inlineData.data;
                break;
            }
        }

        if (resultImage) return res.json({ image: resultImage });
        res.status(500).json({ error: 'Gagal mengubah gambar' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;