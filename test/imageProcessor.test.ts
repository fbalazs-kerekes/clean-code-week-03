import { FileStorageLibrary } from "../src/fileStorageLibrary";
import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";
import { ImageProcessor } from "../src/imageProcessor";
import { mock, mockReset } from 'jest-mock-extended';
import { ProcessingErrorException } from "../src/processingErrorException";
import { InvalidImageException } from "../src/invalidImageException";

const mockedImageProcessorLibrary = mock<ImageProcessingLibrary>();
const mockedFileStorageLibrary = mock<FileStorageLibrary>();

describe('ImageProcessor test', () => {
    const invalidInputPath = '/tmp/file.png';
    const inputPath = '/tmp/file.jpg';
    const outputPath = '/tmp/processed.jpg';

    let imageProcessor: ImageProcessor;
    
    beforeEach(() => {
        imageProcessor = new ImageProcessor(mockedImageProcessorLibrary, mockedFileStorageLibrary);
        mockReset(mockedFileStorageLibrary);
        mockReset(mockedImageProcessorLibrary);
    })

    it('should throw an error when input path filename extension is not a jpg', async() => {
        const expectedError = new Error('Invalid filename extension!');
        
        expect(async() => {await imageProcessor.processAndSaveImage(invalidInputPath, outputPath)}).rejects.toThrow(expectedError);
    })

    it('should throw a ProcessingErrorException', async() => {
        const expectedError = new ProcessingErrorException('Image processing error');
        mockedImageProcessorLibrary.processImage.mockImplementation(() => { throw expectedError });

        expect(async() => {await imageProcessor.processAndSaveImage(inputPath, outputPath)}).rejects.toThrow(expectedError);
    })

    it('should throw an InvalidImageException', async() => {
        const expectedError = new InvalidImageException('Invalid image');
        mockedFileStorageLibrary.saveContentIntoFile.mockImplementation(() => { throw expectedError });

        expect(async() => {await imageProcessor.processAndSaveImage(inputPath, outputPath)}).rejects.toThrow(expectedError);
    })

})