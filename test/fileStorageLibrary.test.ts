import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { InvalidImageException } from "../src/invalidImageException";

describe('FileStorageLibrary test', () => {
    let fileStorageLibrary:FileStorageLibrary;

    beforeEach(() => {
        fileStorageLibrary = new FileStorageLibrary();
    })
    
    it('should throw InvalidImageException when image content is empty', async() => {
        const imageContent = '';
        const outputPath = '/tmp/out.jpg';
        const expectedError = new InvalidImageException('Invalid image content');

        await expect(async() => { await fileStorageLibrary.saveContentIntoFile(imageContent, outputPath)}).rejects.toThrow(expectedError);
    })
})