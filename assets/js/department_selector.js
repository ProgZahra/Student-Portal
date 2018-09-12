function show_selected_ag() {
    var selector = document.getElementById('agriculture-selector');
    var value = selector[selector.selectedIndex].value;

    if (value == 1) {
        window.location.href = "agriculture_plant_protection.html";
    } else if (value == 2) {
        window.location.href ="agriculture_garden_eng.html" ;
    } else if (value == 3){
        window.location.href = "agriculture_animal_protection.html";
    }else if (value == 4){
        window.location.href = "agriculture_field_crop.html";
    }
}

function show_selected_ams() {
    var selector = document.getElementById('ams-selector');
    var value = selector[selector.selectedIndex].value;

    if (value == 1) {
       window.location.href = "ams_path.html";
    } else if (value == 2) {
        window.location.href = "ams_health.html";
    }
}


function show_selected_pureScience() {
    var selector = document.getElementById('pureScience-selector');
    var value = selector[selector.selectedIndex].value;

    if (value == 1) {
        window.location.href = "pureScience_chemistry.html";
    } else if (value == 2) {
        window.location.href ="pureScience_life.html" ;
    } else if (value == 3){
        window.location.href = "pureScience_physics.html";
    }else if (value == 4){
        window.location.href = "pureScience_math.html";
    }
}


function show_selected_science() {
    var selector = document.getElementById('science-selector');
    var value = selector[selector.selectedIndex].value;

    if (value == 1) {
        window.location.href = "science_computer.html";
    } else if (value == 2) {
        window.location.href ="science_biology.html" ;
    } else if (value == 3){
        window.location.href = "science_physics.html";
    }else if (value == 4){
        window.location.href = "science_chemistry.html";
    }
}