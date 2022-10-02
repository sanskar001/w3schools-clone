// This is JavaScript file

"use script";

//////////////////////////////// JAVASCRIPT FOR HEADER /////////////////////////////////// 


// Javascript function for dropdown menu

const sampleFunction = function (dropdown_block, dropdown_button, index, displayType, btnBgColor, btnColor, btnMouseOverBgColor, btnMouseOverColor, btnMouseOutBgColor, btnMouseOutColor) {
    dropdown_block[index].style.display = displayType;
    dropdown_button[index].style.backgroundColor = btnBgColor;
    dropdown_button[index].style.color = btnColor;
    dropdown_button[index].addEventListener('mouseover', function () {
        dropdown_button[index].style.backgroundColor = btnMouseOverBgColor;
        dropdown_button[index].style.color = btnMouseOverColor;
    });
    dropdown_button[index].addEventListener('mouseout', function () {
        dropdown_button[index].style.backgroundColor = btnMouseOutBgColor;
        dropdown_button[index].style.color = btnMouseOutColor;
    });
}

// ----------------------------------------------------------------------

const caretDown = document.querySelectorAll('.fa-caret-down');

// ----------- FOR BIG SCREEN DROPDOWN MENU -------------

const bigScreenDropdownButton = document.querySelectorAll('.big-dropdown-btn');
const bigDropdownBlock = document.querySelectorAll('.big-dropdown-block');
const cross_btn = document.querySelectorAll('.cross');


for (let i = 0; i < bigScreenDropdownButton.length; i++) {
    bigScreenDropdownButton[i].addEventListener('click', function () {
        for (let j = 0; j < bigScreenDropdownButton.length; j++) {
            if (j !== i) {
                sampleFunction(bigDropdownBlock, bigScreenDropdownButton, j, 'none', '#fff', '#282a35', '#04aa6d', '#fff', '#fff', '#282a35');
                caretDown[j + 1].style.transform = "rotate(0deg)";
            }
        }
        if (bigDropdownBlock[i].style.display === "block") {
            sampleFunction(bigDropdownBlock, bigScreenDropdownButton, i, 'none', '#04aa6d', '#fff', '#04aa6d', '#fff', '#fff', '#282a35');
            caretDown[i + 1].style.transform = "rotate(0deg)";
        }
        else {
            sampleFunction(bigDropdownBlock, bigScreenDropdownButton, i, 'block', '#282a35', '#fff', '#282a35', '#fff', '#282a35', '#fff');
            caretDown[i + 1].style.transform = "rotate(180deg)";
        }
    });

    cross_btn[i].addEventListener('click', function () {
        sampleFunction(bigDropdownBlock, bigScreenDropdownButton, i, 'none', '#fff', '#282a35', '#04aa6d', '#fff', '#fff', '#282a35');
        caretDown[i + 1].style.transform = "rotate(0deg)";
    });
}


// ----------- FOR SMALL SCREEN DROPDOWN MENU -------------

const dropdownMenuButton = document.querySelector('.dropdown-menu-btn');
const smallScreenDropdownContainer = document.querySelector('.small-dropdown-menu-container');
const smallScreenDropdownButton = document.querySelectorAll('.small-dropdown-btn');
const smallDropdownBlock = document.querySelectorAll('.small-dropdown-block');
const dropdownCrossButton = document.querySelector('.dropdown-cross-btn');

dropdownMenuButton.addEventListener('click', function () {

    if (smallScreenDropdownContainer.style.display === "block") {
        smallScreenDropdownContainer.style.display = "none";
        dropdownMenuButton.style.backgroundColor = "#04aa6d";
        dropdownMenuButton.style.color = "#fff";
        dropdownMenuButton.addEventListener('mouseover', function () {
            dropdownMenuButton.style.backgroundColor = "#04aa6d";
            dropdownMenuButton.style.color = "#fff";
        });
        dropdownMenuButton.addEventListener('mouseout', function () {
            dropdownMenuButton.style.backgroundColor = "#fff";
            dropdownMenuButton.style.color = "#282a35";
        });
        caretDown[0].style.transform = "rotate(0deg)";
    }
    else {
        smallScreenDropdownContainer.style.display = "block";
        dropdownMenuButton.style.backgroundColor = "#04aa6d";
        dropdownMenuButton.style.color = "#fff";
        dropdownMenuButton.addEventListener('mouseover', function () {
            dropdownMenuButton.style.backgroundColor = "#04aa6d";
            dropdownMenuButton.style.color = "#fff";
        });
        dropdownMenuButton.addEventListener('mouseout', function () {
            dropdownMenuButton.style.backgroundColor = "#04aa6d";
            dropdownMenuButton.style.color = "#fff";
        });
        caretDown[0].style.transform = "rotate(180deg)";

        // ------------- CROSS BUTTON -----------------

        dropdownCrossButton.addEventListener('click', function () {
            smallScreenDropdownContainer.style.display = "none";
            dropdownMenuButton.style.backgroundColor = "#fff";
            dropdownMenuButton.style.color = "#282a35";
            dropdownMenuButton.addEventListener('mouseover', function () {
                dropdownMenuButton.style.backgroundColor = "#04aa6d";
                dropdownMenuButton.style.color = "#fff";
            });
            dropdownMenuButton.addEventListener('mouseout', function () {
                dropdownMenuButton.style.backgroundColor = "#fff";
                dropdownMenuButton.style.color = "#282a35";
            });
            caretDown[0].style.transform = "rotate(0deg)";
        });
    }
});

 //-------------------- Small screen dropdown menu -----------------------

 for (let i = 0; i < smallScreenDropdownButton.length; i++) {
    smallScreenDropdownButton[i].addEventListener('click', function () {
        for (let j = 0; j < smallScreenDropdownButton.length; j++) {
            if (j !== i) {
                sampleFunction(smallDropdownBlock, smallScreenDropdownButton, j, 'none', '#e7e9eb', '#000', '#cccccc', '#000', '#e7e9eb', '#000');
                caretDown[j + 1].style.transform = "rotate(0deg)";
            }
        }
        if (smallDropdownBlock[i].style.display === "block") {
            sampleFunction(smallDropdownBlock, smallScreenDropdownButton, i, 'none', '#cccccc', '#000', '#cccccc', '#000', '#e7e9eb', '#000');
            caretDown[i + 1].style.transform = "rotate(0deg)";
        }
        else {
            sampleFunction(smallDropdownBlock, smallScreenDropdownButton, i, 'block', '#cccccc', '#000', '#cccccc', '#000', '#e7e9eb', '#000');
            caretDown[i + 1].style.transform = "rotate(180deg)";
        }
    });
}

////// THIS IS JAVASCRIPT FOR SPACES, PAID COURSES AND LOGIN BUTTON IN RIGHT SIDE OF NAVBAR ///////

// const login_button = document.querySelector('.login-btn');
// const login_page = document.querySelector('.login-signup-page');

// login_button.addEventListener('click', function () {
//     login_page.style.display = 'block';
// });

// ---------------------------------------------------------------------