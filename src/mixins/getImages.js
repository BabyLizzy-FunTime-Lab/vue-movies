export default {
    methods: {
        // Require() won't with a Vite build. That works fine in a Vue Cli build.
        // Check the third edition of the book for the correct way.
        getImgUrl(img) {
            console.log("Getting img: " + img);
            return new URL('../assets/images/' + img, import.meta.url).href;
        }
    }
}
