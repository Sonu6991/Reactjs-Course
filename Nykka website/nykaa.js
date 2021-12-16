import { dummy_Products } from "./data.js";

$(document).ready(function () {
  console.log("executed");
  const cardContainrer = $("#card-container");

  dummy_Products.map((product) => {
    let title;
    if (product.title.length > 60) {
      title = product.title.slice(0, 59) + "...";
    } else {
      title = product.title;
    }

    cardContainrer.append(`
        <div class="card col-3 p-0 ms-3 mb-3 flex-grow-1">
              <div class="card-body d-flex justify-content-center flex-column align-items-center ">
                    <img src=${product.img} alt="">
                          <div class=" text-center  font-size mt-3">
                          ${title}
                    </div>
                    <div class="font-size mt-3 text-center">
                          <span class="opacity-50 ">MRP:</span>
                          <span class="text-decoration-line-through opacity-50 ">₹ ${product.cutoff}</span>
                          <span class="border-end border-1 pe-1" style="font-weight: 500;"> ₹ ${product.price}</span>
                          <span style="color: #fc2779; font-weight: 500;">${product.offer}% Off</span>
                    </div>
              </div>
              <div class="card-footer bg-white p-0  d-flex justify-content-center align-items-center">
                    <span class="far fa-heart fs-3 col-3 text-center "  style="color: #fc2779;"></span>
                    <span class="text-white fw-bold py-3 px-2 col-9 text-center" style="background-color: #fc2779;">ADD TO BAG</span>
              </div>
        </div>
    `);
  });

  $("#price input").on("checked", function () {
    console.log("clicked");
    //     e.prevetDefault();
    //     e.stopPropagation();
  });
});
