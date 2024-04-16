import { ImageProcessingLibrary } from "../src/imageProcessingLibrary";


describe('ImageProcessorLibrary test', () => {
    let imageProcessingLibrary:ImageProcessingLibrary;

    beforeEach(() => {
        imageProcessingLibrary = new ImageProcessingLibrary();
    })

    it('should return the processed image', async() => {
        const imageContent:string = "<INPUT_IMAGE>";
        const expectedProcessedImage:string = "<PROCESSED_IMAGE>";
        
        const result = await imageProcessingLibrary.processImage(imageContent);
        expect(result).toBe(expectedProcessedImage);
    })
})