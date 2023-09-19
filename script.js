import { imgCollections } from "./imgCollect.js"; // Image collections

$(document).ready(() => {
    // Function to display images based on the selected category
    function filtrImg(category) {
        $('.itemsList').empty();
        imgCollections.forEach((img) => {
            if (category === 'all' || img.category === category) {
                const listItem = $('<li class="list-group-item listItem">').html(`
                    <p><center id="itemName">${img.name}</center></p>
                    <img class="rounded-3 border border-dark border-3 itemImage" src="${img.url}" alt="No image found">`);
                $('.itemsList').append(listItem);
            }
        })
    }

    // Initially Display All Images
    filtrImg('all');

    // Event handlers for filter button based on the selected category
    $('.btnFilters').click(function () {
        const catgry = $(this).data('category');
        filtrImg(catgry);
    })
})