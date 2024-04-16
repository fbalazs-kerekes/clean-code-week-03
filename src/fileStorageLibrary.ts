import { InvalidImageException } from "./invalidImageException";

export class FileStorageLibrary {
    public async saveContentIntoFile(imageContent: string, outputPath: string): Promise<void> {
        if(!imageContent) {
            throw new InvalidImageException('Invalid image content');
        }
    }
}