(function($) {
    $('#form').on('submit', function(){
        event.preventDefault();
        $form = $(this);
        var formdata = $form.serializeArray();
        var data = {};
        $(formdata ).each(function(index, obj){
            data[obj.name] = obj.value;
        });
        data = {
            customer: {
                name: data.customerName,
                firstname: data.customerFirstName,
                address: data.customerAddress,
                email:data.customerEmail,
                phonenumber:data.customerPhoneNumber
            },
            items : [
                {
                    product: {
                        name: "Test 3D",
                        price: 15,
                        category: "material"
                    },
                    discount: 0,
                    quantity: 1,
                    filamentType: "1",
                    filamentSize: 1
                }
            ]
        };

        // $.ajax({
        //     type: "POST", //$form.attr("method"),
        //     url: "https://app3d.probetech.be/product-app/api/public/orders", //$form.attr("action"),
        //     data: data, //JSON.stringify(data),
        //     contentType: "application/json",
        //     success: function(data){
        //         console.log(data);
        //     },
        //     error: function( jqXHR, textStatus, errorThrown ) {
        //         console.log(errorThrown);
        //     }
        // });

        (async () => {
            const raw = await fetch($form.attr("action"),
             {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const content = await raw.json();
            console.log(content);
          })();
    });
})(jQuery)