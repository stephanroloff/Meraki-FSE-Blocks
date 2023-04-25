import { applyMasonryLayout } from "./masonry-code.js";

setTimeout(() => {

    applyMasonryLayout({
        gridSelector: ".masonry-grid",
        itemSelector: ".masonry-item",
        contentSelector: ".masonry-content",
        rowHeight: 1,
        containsImages: true,
    });

}, 1000)
