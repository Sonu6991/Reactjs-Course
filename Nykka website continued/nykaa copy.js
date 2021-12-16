$(document).ready(function () {
  const cardContainrer = $("#card-container");
  const filterContainer = $("#filter_container");

  ///////*****************Created a common function for map all products****************************//////////////

  const products = (product) => {
    let title;
    if (product.title.length > 60) {
      title = product.title.slice(0, 59) + "...";
    } else {
      title = product.title;
    }
    cardContainrer.append(`
              <div class="card col-xl-3 col-md-5 p-0 ms-md-3 mb-3 flex-grow-1">
                    <div class="card-body d-flex justify-content-center flex-column align-items-center ">
                          <img src=${product.img} alt="">
                                <div class=" text-center  font-size mt-3">
                                ${title}
                          </div>
                          <div class="font-size mt-3 text-center">
                                <span class="opacity-50 ">MRP:</span>
                                <span class="text-decoration-line-through opacity-50 ">₹ ${product.cutoff}</span>
                                <span class="border-end border-1 pe-1" style="font-weight: 500;"> ₹ ${product.price}</span>
                                <span style="color: #fc2779; font-weight: 500;">${product.discount}% Off</span>
                          </div>
                    </div>
                    <div class="card-footer bg-white p-0  d-flex justify-content-center align-items-center">
                          <span class="far fa-heart fs-3 col-3 text-center "  style="color: #fc2779;"></span>
                          <span class="text-white fw-bold py-3 px-2 col-9 text-center" style="background-color: #fc2779;">ADD TO BAG</span>
                    </div>
              </div>
          `);
  };

  ///////*****************fatched all data from json file****************************//////////////
  let Allproducts = [];
  $.ajax({
    type: "GET",
    url: "data.json",
  }).done(function (fetchedProducts) {
    Allproducts = fetchedProducts;
    $("#productCount").text(` (${Allproducts.length}) `);
    Allproducts.map(products);
  });
  filterContainer.empty();

  ///////*****************Cleated an object for selected filters****************************//////////////

  let filterValues = {
    price: [],
    discount: 0,
    color: [],
  };

  ///////*****************store selected price value in filter object****************************//////////////

  let priceChange = () => {};
  $("#price input").on("change", function () {
    priceChange = () => {
      filterValues.price = [];
      $("input[name='price']:checked").each(function () {
        let a = $(this).val().split("_");
        filterValues.price.push({
          min: a[0],
          max: a[1],
        });
      });
    };
    priceChange();
    const filterApplied = this.parentElement.parentElement.innerText;

    if ($(this).is(":checked")) {
      filterPaneAppend(filterApplied, $(this).val(), "filterRemove");
    } else {
      $("#" + $(this).val()).remove();
    }

    filtering();
  });

  ///////*****************store selected discount value in filter object****************************//////////////
  let discountChange = () => {};
  $("#discount input").on("change", function () {
    discountChange = () => {
      filterValues.discount = $('input[name="discount"]:checked').val();
    };
    discountChange();
    const filterApplied = this.parentElement.parentElement.innerText;
    if ($(this).is(":checked")) {
      $("#discountFilter").remove();
      filterPaneAppend(filterApplied, "discountFilter", "filterRemove");
    }

    filtering();
  });

  let colorChange = () => {};
  $("#color input").on("change", function () {
    colorChange = () => {
      filterValues.color = [];
      $("#color input:checked").each(function () {
        filterValues.color.push($(this).val());
      });
    };
    colorChange();
    const filterApplied = this.parentElement.parentElement.innerText;

    if ($(this).is(":checked")) {
      filterPaneAppend(filterApplied, $(this).val(), "filterRemove");
    } else {
      $("#" + $(this).val()).remove();
    }

    filtering();
  });
  $(document).on("click", ".filterRemove", function (e) {
    this.remove();
    $(`input[value="${$(this).attr("id")}"]`).prop("checked", false);
    if ($(this).attr("id") === "discountFilter") {
      $("input[value='none']").prop("checked", true);
      discountChange();
    }
    priceChange();
    colorChange();
    filtering();
  });
  ///////*****************Filtering Products****************************//////////////

  function filtering() {
    let filteredProducts = Allproducts;

    let priceArry = [];
    if (filterValues.price.length !== 0) {
      filterValues.price.forEach(function (value) {
        filteredProducts.forEach(function (product) {
          if (product.price >= +value.min && product.price <= +value.max) {
            priceArry.push(product);
          }
        });
      });
      filteredProducts = priceArry;
    }

    let discountArry = [];
    if (filterValues.discount != "none") {
      filteredProducts.forEach(function (product) {
        if (+product.discount >= +filterValues.discount) {
          discountArry.push(product);
        }
      });
      filteredProducts = discountArry;
    }

    let colorArry = [];
    if (filterValues.color.length !== 0) {
      filteredProducts.forEach(function (product) {
        if (filterValues.color.includes(product.color)) {
          colorArry.push(product);
        }
      });
      filteredProducts = colorArry;
    }

    cardContainrer.empty();
    $("#productCount").text(` (${filteredProducts.length}) `);
    filteredProducts.map(products);
  }

  ///////*****************common function for Appending in filterpane****************************//////////////
  const filterPaneAppend = function (data, id, className) {
    filterContainer.append(` <div id="${id}" class="${className} rounded-pill py-1 px-2 mt-2 d-flex  align-items-center "
  style="background-color:  rgba(252, 39, 121, 0.05); border:1px solid #fc2779; width:min-content;">
  <span style=" color: #fc2779; font-size: 14px; white-space: nowrap;">${data}</span>
  <span class="fas fa-times-circle ms-2" style="color: #fc2779" role="button"></span>
</div>`);
  };

  ///////*****************Clear Filterd Applied pane****************************//////////////
  $("#clearAll").on("click", function () {
    filterValues = {
      price: [],
      discount: 0,
      color: [],
    };
    $("#productCount").text(` (${Allproducts.length}) `);
    filterContainer.empty();
    cardContainrer.empty();
    Allproducts.map(products);
    $("input[name='price']:checked").prop("checked", false);
    $("input[name='discount']:checked").prop("checked", false);
    $("input[name='color']:checked").prop("checked", false);
  });
});
