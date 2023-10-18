export default {
    methods: {
        // Require() won't with a Vite build. That works fine in a Vue Cli build.
        // Check the third edition of the book for the correct way.
        getImgUrl(img) {
            console.log("Getting img: " + img);
            return new URL('@/images/' + img, import.meta.url).href;
        },
        getIconUrl(img) {
            console.log("Getting icon: " + img);
            return new URL('@/icons/' + img, import.meta.url).href;
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
