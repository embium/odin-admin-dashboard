(function hideColumn(d) {
    "use strict";
  
    const wrapper = d.querySelector(".page-wrap");
    const toggle = d.querySelector("#toggle");
    toggle.addEventListener("click", showLeftColumn);
    function showLeftColumn() {
      wrapper.classList.toggle("open-panel");
    }
  })(document);
  