class UploadService {
    constructor() {
        this.upload_name = process.env.REACT_APP_CLOUDINARY_NAME;
        this.upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    }

    async uploadImg(file) {
        const url = `https://api.cloudinary.com/v1_1/${this.upload_name}/image/upload`;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", this.upload_preset);
    
        console.log("formData: ", formData);
        const result = await fetch(url, {
            method: "POST",
            body: formData
        })
        return await result.json();
    }
}

export default UploadService;