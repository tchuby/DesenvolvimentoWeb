(function() {

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://dummyjson.com/products",
        success: function(products){
            console.log(products.products);
            $("#products_list").DataTable({
                data: products.products,
                columns: [
                    {'data': 'title'},
                    {'data': 'category'},
                    {'data': 'price'},
                    {'data': 'brand'},
                ]
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
})();