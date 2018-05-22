// Array of icons and detail boxes
let icons = document.getElementsByClassName('info');
let details = document.getElementsByClassName('details');

function iconClick(index) {
    // Change background of selected icon
    // Lower opacity of other icons
    lowerOtherAlphas(index);
    showDetail(index);
}

// Mouse over and mouse out functions
function mOver(icon) {
    icon.style.backgroundColor = '#DCE9BE';
}

function mOut(icon) {
    icon.style.backgroundColor = '#FFF';
}

// Lower the opacity of icons not clicked
function lowerOtherAlphas(index){
    for(let i = 0; i < icons.length; i++){
        if(index !== i+1){ // i+1 because icons in html start at 1
            icons[i].style.opacity = '0.5';
        }else{
            icons[i].style.opacity = '1';
        }
    }
}

function resetIcons(){
    for(let i=0;i<icons.length;i++){
        icons[i].style.opacity = '1';
    }
}

// Show the detail box of a clicked icon
function showDetail(index) {
    for(let i = 0; i < details.length; i++) {
        if(index !== i+1) { // i+1 because details in html start at 1
            details[i].style.display = 'none';
        }else{
            if(details[i].style.display === 'inline-block'){
                details[i].style.display = 'none'; // Reset if already active
                resetIcons();
            }else{
                details[i].style.display = 'inline-block';
            }
        }
    }
}
