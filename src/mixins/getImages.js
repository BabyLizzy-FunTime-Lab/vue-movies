export default {
    methods: {
        getImgUrl(img) {
            console.log(img);
            return require('../assets/images/' + img);
        },
        getIconUrl(img) {
            return require('../assets/icons' + img);
        }
    }
}
