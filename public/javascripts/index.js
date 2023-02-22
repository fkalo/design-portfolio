$(document).ready(function () {
  ///////////////////////////////////////////////////////////
  // Animated scrolling to sections on click:

  function scrollToSection(event) {
    event.preventDefault();

    const $section = $($(this).attr("href"));

    $("html, body").animate(
      {
        scrollTop: $section.offset().top,
      },
      600
    );
  }

  $("[data-scroll]").on("click", scrollToSection);

  ///////////////////////////////////////////////////////////
  // Make mobile navigation work

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  ///////////////////////////////////////////////////////////
  // Smooth scrolling animation

  const allLinks = document.querySelectorAll("smooth:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    });
  });

  ///////////////////////////////////////////////////////////
  // Diamond opening

  const gridDiamonds = document.querySelector(".grid-diamonds");
  const discover = document.querySelector("#discover");
  const define = document.querySelector("#define");
  const develop = document.querySelector("#develop");
  const deliver = document.querySelector("#deliver");

  const hiddenDiscover = document.querySelector("#hidden-discover");
  const hiddenDefine = document.querySelector("#hidden-define");
  const hiddenDevelop = document.querySelector("#hidden-develop");
  const hiddenDeliver = document.querySelector("#hidden-deliver");
  const activeDiamond = document.querySelector(".active");

  discover.addEventListener("click", function () {
    gridDiamonds.classList.toggle("active");
    if (
      gridDiamonds.style.gridTemplateColumns ===
      "min-content 2fr min-content min-content min-content"
    ) {
      gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
      hiddenDiscover.style.display = "none";
    } else {
      gridDiamonds.style.gridTemplateColumns =
        "min-content 2fr min-content min-content min-content";
      hiddenDiscover.style.display = "flex";
      hiddenDefine.style.display = "none";
      hiddenDevelop.style.display = "none";
      hiddenDeliver.style.display = "none";
    }
  });

  define.addEventListener("click", function () {
    gridDiamonds.classList.toggle("active");
    if (
      gridDiamonds.style.gridTemplateColumns ===
      "min-content min-content 2fr min-content min-content"
    ) {
      gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
      hiddenDefine.style.display = "none";
    } else {
      gridDiamonds.style.gridTemplateColumns =
        "min-content min-content 2fr min-content min-content";
      hiddenDiscover.style.display = "none";
      hiddenDefine.style.display = "flex";
      hiddenDevelop.style.display = "none";
      hiddenDeliver.style.display = "none";
    }
  });

  develop.addEventListener("click", function () {
    gridDiamonds.classList.toggle("active");
    if (
      gridDiamonds.style.gridTemplateColumns ===
      "min-content min-content min-content 2fr min-content"
    ) {
      gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
      hiddenDevelop.style.display = "none";
    } else {
      gridDiamonds.style.gridTemplateColumns =
        "min-content min-content min-content 2fr min-content";
      hiddenDiscover.style.display = "none";
      hiddenDefine.style.display = "none";
      hiddenDevelop.style.display = "flex";
      hiddenDeliver.style.display = "none";
    }
  });

  deliver.addEventListener("click", function () {
    gridDiamonds.classList.toggle("active");
    if (
      gridDiamonds.style.gridTemplateColumns ===
      "min-content min-content min-content min-content 2fr"
    ) {
      gridDiamonds.style.gridTemplateColumns = "repeat(4, 1fr)";
      hiddenDeliver.style.display = "none";
    } else {
      gridDiamonds.style.gridTemplateColumns =
        "min-content min-content min-content min-content 2fr";
      hiddenDiscover.style.display = "none";
      hiddenDefine.style.display = "none";
      hiddenDevelop.style.display = "none";
      hiddenDeliver.style.display = "flex";
    }
  });

  ///////////////////////////////////////////////////////////
  // Pretty navigation

  // let position = "absolute";
  // let navbarTop = 0;
  // let lastScrollPosition = 0;
  // const supportPageOffset = window.pageYOffset !== undefined;

  // function onScroll() {
  //   const navbar = document.getElementById("navbar");
  //   const currentScrollPosition = supportPageOffset
  //     ? window.pageYOffset
  //     : document.documentElement.scrollTop;
  //   if (currentScrollPosition <= 0) {
  //     position = "absolute";
  //     navbarTop = 0;
  //     lastScrollPosition = 0;
  //   } else {
  //     if (currentScrollPosition > lastScrollPosition) {
  //       position = "absolute";
  //       let { top, height } = navbar.getBoundingClientRect();
  //       if (top < -height) {
  //         top = -height;
  //       }
  //       navbarTop = currentScrollPosition + top;
  //     } else if (currentScrollPosition < lastScrollPosition) {
  //       const { top } = navbar.getBoundingClientRect();
  //       if (top >= 0) {
  //         navbarTop = 0;
  //         position = "fixed";
  //       }
  //     }
  //     lastScrollPosition = currentScrollPosition;
  //   }
  //   navbar.style = `position: ${position}; top: ${navbarTop}px;`;
  // }

  // window.addEventListener("scroll", onScroll, { passive: true });

  ///////////////////////////////////////////////////////////
  // Fixing flexbox gap property missing in some Safari versions

  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();

  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

  /*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }

  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }

  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }

  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }

  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }

  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }

  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */
});
