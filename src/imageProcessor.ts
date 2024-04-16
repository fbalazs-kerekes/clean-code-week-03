import { FileStorageLibrary } from "./fileStorageLibrary";
import { ImageProcessingLibrary } from "./imageProcessingLibrary";

export class ImageProcessor {

    constructor(private imageProcessingLibrary:ImageProcessingLibrary, private fileStorageLibrary:FileStorageLibrary) {};

    public async processAndSaveImage(inputPath: string, outputPath: string): Promise<void> {
        const dummyImageContent = '<IMAGE_CONTENT>';

        this.validatePath(inputPath);

        const processedContent = await this.imageProcessingLibrary.processImage(dummyImageContent);
        await this.fileStorageLibrary.saveContentIntoFile(processedContent, outputPath);
    }

    private validatePath(inputPath: string) {
        if ( ! /\.jpg$/.test(inputPath)) {
            throw new Error('Invalid filename extension!');
        }
    }

}