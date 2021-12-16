$(document).ready(function () {
  $("#btn").on("click", () => {
    const inputVal = $("#input").val();
    //     console.log(inputVal);
    $("#list").append(` <li class="font1" > ${inputVal}
                              <button type=" button" class="close">
                                    <span class="fas fa-times "></span>
                              </button>
                        </li>`);
    $("#input").val("");
    $("#input").focus();
  });

  $(document).on("click", "li ", function (e) {
    $("#input").val(this.innerText);
    $("#btnSave").on("click", () => {
      const inputVal = $("#input").val();
      $(this).replaceWith(`<li class="font1" > ${inputVal}
             <button type=" button" class="close">
                    <span class="fas fa-times "></span>
             </button> 
      </li>`);
    });
  });

  $(document).on("click", ".close ", function (e) {
    e.stopPropagation();
    this.parentElement.remove();
  });
});
