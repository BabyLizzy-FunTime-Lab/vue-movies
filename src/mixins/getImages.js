export default {
    methods: {
        // Require() won't with a Vite build. That works fine in a Vue Cli build.
        // Check the third edition of the book for the correct way.
        getImgUrl(img) {
            console.log("Getting img: " + img);
            // let imgUrl = new URL('/src/assets/images/' + img, import.meta.url).href;
            let imgUrl = new URL('/images/' + img, import.meta.url).href;

            console.log(imgUrl);
            return imgUrl;
        },
        getIconUrl(img) {
            console.log("Getting icon: " + img);
            // This url points to the assets folder.
            // let imgUrl = new URL('/src/assets/icons/' + img, import.meta.url).href;
            // This url points to the public folder. The dist deploy dir does not contain the images in the
            // assets folder, only the images in the public folder.
            let imgUrl = new URL('/images/' + img, import.meta.url).href;
            console.log(imgUrl);
            return imgUrl;
        },
        checkPoster(imgUrl) {
            console.log(imgUrl);
            if (imgUrl === 'N/A') {
                // If no poster is available we return a default img.
                return this.getImgUrl('no-image.jpg');
            } else {
                return imgUrl;
            }
        },
    }
}
