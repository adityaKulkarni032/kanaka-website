let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

const isDarkMode = document.body;
if (
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  isDarkMode.classList.add("dark");
  
}else{
  isDarkMode.classList.remove("dark");

}

const desktop_logo = document.querySelector(".desklogo");
const mobile_logo = document.querySelector(".moblogo");
const footer_logos_linkedin = document.getElementById("footer_logos_linkedin");
if (document.getElementById("footer_logos_kanaka")) {
  const footer_logos_kanaka = document.getElementById("footer_logos_kanaka");
}
const mobile_footer_logo = document.getElementById("mobfooterlogo");




if (isDarkMode.classList[0] == "dark") {
  
  desktop_logo.src = "./assets/images/kanaka_logo_dark.png";
  mobile_logo.src = "./assets/images/kanaka_logo_dark.png";
  isDarkMode.classList.add("dark:bg-dark-bg-black");
  if (document.getElementById("footer_logos_kanaka")) {
    footer_logos_kanaka.src = "./assets/images/kanaka_logo_dark.png";
  }
  mobile_footer_logo.src = "./assets/images/kanaka_logo_dark.png";
}

const activePage = window.location.pathname;
const homelink = document.querySelectorAll("#homeLink");
const icons = document.querySelectorAll(".icon1");
const navLinks = document.querySelectorAll("#navlink");
const moblink = document.querySelectorAll("#moblink");
const bodyTheme = document.body.classList[0];

console.log(homelink);
for (let i = 0; i < navLinks.length; i++) {
  if (
    activePage == "/" ||
    activePage == "/index.html" ||
    activePage == "/beta"
  ) {
    if (bodyTheme == "dark") {
      homelink[0].style.color = "#FFFFFF";
      homelink[1].style.color = "#FFFFFF";
      homelink[2].style.color = "#FFFFFF";
      
    } else {
      homelink[0].style.color = "#202124";
      homelink[2].style.color = "#202124";
      homelink[1].style.color = "#202124";
    }
  } else if (
    navLinks[i].href.includes(`${activePage}`) ||
    moblink[i].href.includes(`${activePage}`)
  ) {
    navLinks[i].classList.add("text-dark-bg-black");
    navLinks[i].classList.add("dark:text-white");
    moblink[i].classList.add("text-dark-bg-black");
    moblink[i].classList.add("dark:text-white");
    if (bodyTheme == "dark") {
      icons[i].classList.add("text-white")
    } else {
      icons[i].classList.add("text-dark-bg-black")
    }
  }
}

const copiedDialog = document.getElementById("copiedDialog");
const handleCopy = async () => {
  var range = document.createRange();
  range.selectNode(document.getElementById("textForCopy"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copiedDialog.classList.remove("before:hidden");
  copiedDialog.classList.remove("after:hidden");
  // add again after 3 seconds
  setTimeout(() => {
    copiedDialog.classList.add("before:hidden");
    copiedDialog.classList.add("after:hidden");
    
  }, 1000);
};

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mainBody = document.getElementById("mainbody");
const footer = document.getElementById("footer");
let isSecondSVG = false;

menuToggle.addEventListener("click", () => {
  if (isSecondSVG) {
    document.getElementById("seperator").classList.remove("hidden");
    menuToggle.innerHTML = `<i class="fa-solid fa-bars text-orangeOne text-lg"></i>`;
  } else {
    document.getElementById("seperator").classList.add("hidden");
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark text-orangeOne text-lg"></i> `;
  }
  isSecondSVG = !isSecondSVG;
  mobileMenu.classList.toggle("hidden");
  mainBody.classList.toggle("hidden");
  if(document.getElementById("footer")){
    footer.classList.toggle("hidden");
  };

});

let txts;
let txtsLen;
if (document.querySelector(".animate-text")) {
  txts = document.querySelector(".animate-text").children;
  txtsLen = txts.length;
}
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

if (document.querySelector(".animate-text")) {
  window.onload = animateText;
}

if ($(".owl-carousel").length) {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: window.innerWidth > 765 ? true : false,
    navText: [
      '<i class="fa-regular fa-circle-left m-auto lg:block hidden text-orangeOne 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs"></i>',
      '<i class="fa-regular fa-circle-right m-auto lg:block hidden text-orangeOne 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}

if ($(".new-owl-carousel").length) {
  $(".new-owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: window.innerWidth > 765 ? true : false,
    navText: [
      '<i class="fa-regular fa-circle-left m-auto lg:block hidden text-orangeOne 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs"></i>',
      '<i class="fa-regular fa-circle-right m-auto lg:block hidden text-orangeOne 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}

const next_button = document.querySelector(".owl-carousel .owl-next");
const new_next_button = document.querySelector(".new-owl-carousel .owl-next");
const previous_button = document.querySelector(".owl-carousel .owl-prev");
const new_previous_button = document.querySelector(
  ".new-owl-carousel .owl-prev"
);
const owl_dot = document.querySelector(".owl-dot");

function toggle(divName) {
  const nodeList = document.querySelectorAll(".buttonOnImage");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.add("hidden");
  }
  if (divName == "firstMainDiv") {
    document
      .getElementById("firstMainDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        'hidden'
      );
    document.getElementById("firstMainDiv").classList.add("md:pr-5", "bg-[#F5F5F5]", "dark:bg-[#35363A]");
    document.getElementById("firstDivDisc").classList.add("show1");
    document.getElementById("firstDivDisc").classList.remove("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document.getElementById("secondMainDiv").classList.add("hidden");
    document.getElementById("thirdMainDiv").classList.add("hidden");
    document.getElementById("fourthMainDiv").classList.add("hidden");
  } else if (divName == "secondMainDiv") {
    document
      .getElementById("secondMainDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "hidden"
      );
    document.getElementById("secondMainDiv").classList.add("md:pr-5", "bg-[#F5F5F5]", "dark:bg-[#35363A]");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("show1");
    document.getElementById("secondDivDisc").classList.remove("hidden");
    document.getElementById("firstMainDiv").classList.add("hidden");
    document.getElementById("thirdMainDiv").classList.add("hidden");
    document.getElementById("fourthMainDiv").classList.add("hidden");
  } else if (divName == "thirdMainDiv") {
    document
      .getElementById("thirdMainDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "hidden"
      );
    document.getElementById("thirdMainDiv").classList.add("md:pr-5", "bg-[#F5F5F5]", "dark:bg-[#35363A]");
    document.getElementById("thirdDivDisc").classList.add("show1");
    document.getElementById("thirdDivDisc").classList.remove("hidden");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document.getElementById("secondMainDiv").classList.add("hidden");
    document.getElementById("firstMainDiv").classList.add("hidden");
    document.getElementById("fourthMainDiv").classList.add("hidden");
  } else {
    document
      .getElementById("fourthMainDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "hidden"
      );
    document.getElementById("fourthMainDiv").classList.add("md:pr-5", "bg-[#F5F5F5]", "dark:bg-[#35363A]");
    document.getElementById("fourthDivDisc").classList.add("show1");
    document.getElementById("fourthDivDisc").classList.remove("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document.getElementById("secondMainDiv").classList.add("hidden");
    document.getElementById("thirdMainDiv").classList.add("hidden");
    document.getElementById("firstMainDiv").classList.add("hidden");
  }
}

function handleCloseDiscription(closeDivName) {
  const nodeList = document.querySelectorAll(".buttonOnImage");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.remove("hidden");
  }
  if (closeDivName == "firstMainDiv") {
    document.getElementById("firstMainDiv").classList.remove("bg-[#F5F5F5]", "dark:bg-[#35363A]", "md:pr-5", "hidden", "show1");
    document.getElementById("firstMainDiv").classList.add("3xl:mr-5", "2xl:mr-[16px]", "xl:mr-[13.33px]", "lg:mr-[10.66px]");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document.getElementById("secondMainDiv").classList.remove("hidden", "show1");
    document.getElementById("thirdMainDiv").classList.remove("hidden", "show1");
    document.getElementById("fourthMainDiv").classList.remove("hidden", "show1");
  } else if (closeDivName == "secondMainDiv") {
    document.getElementById("secondMainDiv").classList.remove("bg-[#F5F5F5]", "dark:bg-[#35363A]", "md:pr-5", "hidden", "show1");
    document
      .getElementById("secondMainDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]"
      );
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document.getElementById("firstMainDiv").classList.remove("hidden", "show1");
    document.getElementById("thirdMainDiv").classList.remove("hidden", "show1");
    document
      .getElementById("fourthMainDiv")
      .classList.remove("hidden", "show1");
  } else if (closeDivName == "thirdMainDiv") {
    document.getElementById("thirdMainDiv").classList.remove("bg-[#F5F5F5]", "dark:bg-[#35363A]", "md:pr-5", "hidden", "show1");
    document
      .getElementById("thirdMainDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]"
      );
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document
      .getElementById("secondMainDiv")
      .classList.remove("hidden", "show1");
    document.getElementById("firstMainDiv").classList.remove("hidden", "show1");
    document
      .getElementById("fourthMainDiv")
      .classList.remove("hidden", "show1");
  } else {
    document.getElementById("fourthMainDiv").classList.remove("bg-[#F5F5F5]", "dark:bg-[#35363A]", "md:pr-5", "hidden", "show1");
    document
      .getElementById("fourthMainDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]"
      );
    document.getElementById("fourthDivDisc").classList.add("hidden");
    document.getElementById("thirdDivDisc").classList.add("hidden");
    document.getElementById("firstDivDisc").classList.add("hidden");
    document.getElementById("secondDivDisc").classList.add("hidden");
    document
      .getElementById("secondMainDiv")
      .classList.remove("hidden", "show1");
    document.getElementById("firstMainDiv").classList.remove("hidden", "show1");
    document
      .getElementById("thirdMainDiv")
      .classList.remove("hidden", "show1");
  }
}

function toggleService(divName) {
  const nodeList = document.querySelectorAll(".buttonOnServiceImage");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.add("hidden");
  }
  if (divName == "serviceOfferFirstCardDiv") {
    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "my-10",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]",
        "hidden"
      );

    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.add("md:pr-5", "bg-[white]");
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("show1");
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.remove("hidden");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.add("hidden");
    document.getElementById("serviceOfferThirdCardDiv").classList.add("hidden");
  } else if (divName == "serviceOfferSecondCardDiv") {
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "my-10",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]",
        "hidden"
      );
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.add("md:pr-5", "bg-[white]");
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("show1");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.remove("hidden");
    document.getElementById("serviceOfferFirstCardDiv").classList.add("hidden");
    document.getElementById("serviceOfferThirdCardDiv").classList.add("hidden");
  } else {
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.remove(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "my-10",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]",
        "hidden"
      );
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.add("md:pr-5", "bg-[white]");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("show1");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.remove("hidden");
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.add("hidden");
    document.getElementById("serviceOfferFirstCardDiv").classList.add("hidden");
  }
}
function handleCloseServiceDiscription(closeDivName) {
  const nodeList = document.querySelectorAll(".buttonOnServiceImage");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.remove("hidden");
  }
  if (closeDivName == "serviceOfferFirstCardDiv") {
    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.remove("md:pr-5", "hidden", "show1");
    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]"
      );
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.remove("hidden", "show1");
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.remove("hidden", "show1");
  } else if (closeDivName == "serviceOfferSecondCardDiv") {
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.remove("md:pr-5", "hidden", "show1");
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]"
      );
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.remove("hidden", "show1");
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.remove("hidden", "show1");
  } else {
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.remove("md:pr-5", "hidden", "show1");
    document
      .getElementById("serviceOfferThirdCardDiv")
      .classList.add(
        "3xl:mr-5",
        "2xl:mr-[16px]",
        "xl:mr-[13.33px]",
        "lg:mr-[10.66px]",
        "md:rounded-tr-xl",
        "md:rounded-br-xl",
        "rounded-b-xl",
        "border-[1px]"
      );
    document
      .getElementById("serviceOfferFirstDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferSecondDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferThirdDescriptionDiv")
      .classList.add("hidden");
    document
      .getElementById("serviceOfferFirstCardDiv")
      .classList.remove("hidden", "show1");
    document
      .getElementById("serviceOfferSecondCardDiv")
      .classList.remove("hidden", "show1");
  }
}

if(document.getElementById("privacyPolicy")){
  privacyPolicy.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("block");
    document.getElementById("modalContent").innerHTML = `
      
    <div class="flex justify-between">
    <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Privacy Policy</div>
    <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
      onclick="hideModal()"></i>
  </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] pt-5 dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  Kanaka Software Consulting Pvt. Ltd. ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website
                  <a href="https://www.kanakasoftware.com" class="font-bold">www.kanakasoftware.com</a>.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  We do not collect any personal information about you unless you voluntarily provide it to us. We do not share your personal information with third parties unless required by law or with your explicit consent.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  We do not use cookies to collect any information. The cookies may be used to run the website. You can manage your cookie preferences through your browser settings.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  If you have any questions about our Privacy Policy, you can contact us at <span class="font-bold">info@kanakasoftware.com.</span>.
              </div>
      `;
  });
}

mobprivacyPolicy.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("block");
  document.getElementById("modalContent").innerHTML = `
    
  <div class="flex justify-between">
  <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Privacy Policy</div>
  <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
    onclick="hideModal()"></i>
</div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] pt-5 dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                Kanaka Software Consulting Pvt. Ltd. ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website
                <a href="https://www.kanakasoftware.com" class="font-bold">www.kanakasoftware.com</a>.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                We do not collect any personal information about you unless you voluntarily provide it to us. We do not share your personal information with third parties unless required by law or with your explicit consent.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                We do not use cookies to collect any information. The cookies may be used to run the website. You can manage your cookie preferences through your browser settings.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                If you have any questions about our Privacy Policy, you can contact us at <span class="font-bold">info@kanakasoftware.com.</span>.
            </div>
    `;
});

if(document.getElementById("terms")){
  terms.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("block");
    document.getElementById("modalContent").innerHTML = `
    <div class="flex justify-between">
    <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Terms & Conditions</div>
    <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
      onclick="hideModal()"></i>
  </div>
      
      
          <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6 pt-5">
              You agree to use the Site for lawful purposes only and in a manner consistent with all applicable local, national, and international laws and regulations. All content on the Site, including text, graphics, logos, images, and software, is the property of Kanaka Software Consulting Pvt. Ltd. (Kanaka).
          </div>
          <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
              The Site is provided "as is" and "as available" without any warranties of any kind, either expressed or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. In no event shall Kanaka be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site.
          </div>
          <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Pune, India.
          </div>
          <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
              We reserve the right to modify or replace these terms and conditions at any time. Your continued use of the Site after any changes constitute acceptance of the modified terms.
          </div>
          <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
              If you have any questions about these terms and conditions, you can contact us at 
              <span class="font-bold">info@kanakasoftware.com</span>.
          </div>
  
      `;
  });
}

mobterms.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("block");
  document.getElementById("modalContent").innerHTML = `
    
  <div class="flex justify-between">
  <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Terms & Conditions</div>
  <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
    onclick="hideModal()"></i>
</div>
        <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] pt-5 dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6 pt-5">
            You agree to use the Site for lawful purposes only and in a manner consistent with all applicable local, national, and international laws and regulations. All content on the Site, including text, graphics, logos, images, and software, is the property of Kanaka Software Consulting Pvt. Ltd. (Kanaka).
        </div>
        <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
            The Site is provided "as is" and "as available" without any warranties of any kind, either expressed or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. In no event shall Kanaka be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site.
        </div>
        <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Pune, India.
        </div>
        <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
            We reserve the right to modify or replace these terms and conditions at any time. Your continued use of the Site after any changes constitute acceptance of the modified terms.
        </div>
        <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
            If you have any questions about these terms and conditions, you can contact us at 
            <span class="font-bold">info@kanakasoftware.com</span>.
        </div>

    `;
});

if(document.getElementById("cookie")) {
  cookie.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("block");
    document.getElementById("modalContent").innerHTML = `
    <div class="flex justify-between">
    <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Cookie Policy</div>
    <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
      onclick="hideModal()"></i>
  </div>
      
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] py-4 dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  We do not use any cookies that collect personal information. The only cookies we may use are
                  strictly necessary cookies, which are essential for the operation of the website or application.
                  As we do not use cookies that collect personal information, there is no option to manage cookies
                  on
                  our website or application. We do not use any third-party cookies on our website or application.
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with
                  an
                  updated effective date.
              </div>
              <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                  If you have any questions about our Cookie Policy, you can contact us at <span class="font-bold">info@kanakasoftware.com.</span>
              </div>
      `;
  });
}

mobcookie.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("block");
  document.getElementById("modalContent").innerHTML = `
  <div class="flex justify-between">
  <div class="3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xs text-sm mt-5">Cookie Policy</div>
  <i class=" fa-regular fa-circle-xmark 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[16px] text-[24px] text-orangeOne cursor-pointer"
    onclick="hideModal()"></i>
</div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] py-4 dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                We do not use any cookies that collect personal information. The only cookies we may use are
                strictly necessary cookies, which are essential for the operation of the website or application.
                As we do not use cookies that collect personal information, there is no option to manage cookies
                on
                our website or application. We do not use any third-party cookies on our website or application.
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with
                an
                updated effective date.
            </div>
            <div class="3xl:text-lg 2xl:text-base xl:text-sm lg:text-xs text-xs text-[#5F6368] dark:text-[#D9D9D9] 3xl:leading-10 2xl:leading-8 xl:leading-[26.66px] lg:leading-[21.33px] leading-6">
                If you have any questions about our Cookie Policy, you can contact us at <span class="font-bold">info@kanakasoftware.com.</span>
            </div>
    `;
});

function hideModal() {
  document.getElementById("modal").classList.remove("block");
  document.getElementById("modal").classList.add("hidden");
}

window.onclick = function (event) {
  if (event.target === modal) {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("block");
  }
};


const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

window.matchMedia("(prefers-color-scheme: dark)").onchange = () => {
  location.reload();
}




