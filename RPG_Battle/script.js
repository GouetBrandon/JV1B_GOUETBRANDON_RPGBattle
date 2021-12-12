var JamyHTML = document.getElementById("JamyPic");
var SkyHTML = document.getElementById("SkyPic");
var AntonioHTML = document.getElementById("AntonioPic");
var CharlotHTML = document.getElementById("CharlotPic");
var JamyPVHTML = document.getElementById("JamyPV");
var SkyPVHTML = document.getElementById("SkyPV");
var AntonioPVHTML = document.getElementById("AntonioPV");
var CharlotPVHTML = document.getElementById("CharlotPV");
var JamyPMHTML = document.getElementById("JamyPM");
var SkyPMHTML = document.getElementById("SkyPM");
var AntonioPMHTML = document.getElementById("AntonioPM");
var CharlotPMHTML = document.getElementById("CharlotPM");
var CommentaireHTML = document.getElementById("Text");
var BossHTML = document.getElementById("BossPic");
var BossPVHTML = document.getElementById("BossPV");
var Minion1HTML = document.getElementById("Minion1Pic");
var Minion2HTML = document.getElementById("Minion2Pic");
var Minion1PVHTML =  document.getElementById("Minion1PV");
var Minion2PVHTML = document.getElementById("Minion2PV");
var ActionsHTML = document.getElementsByClassName("actions")[0];
var AttaqueHTML = document.getElementById("Attaque");
var defenseHTML = document.getElementById("Defense");
var specialHTML = document.getElementById("Special");
var finTourHTML = document.getElementById("FinTour");
var suivant = document.getElementById("Suivant");

var BossPV = 150;
var BossATK = 20;
var Minion1ATK = 10;
var Minion2ATK = 10;
var Minion1PV = 100;
var Minion2PV = 100;
var Defense = 10;
var JamyPV = 100;
var JamyATK = 10;
var JamySpe = 15;
var JamyPM = 20;
var SkyPV = 150;
var SkySpe = 30;
var SkyATK = 15;
var SkyPM = 10;
var AntonioPV = 100;
var AntonioATK = 5;
var AntonioSpe = 20;
var AntonioPM = 50;
var CharlotPV = 100;
var CharlotSpe = 15;
var CharlotATK = 10;
var CharlotPM = 20;
var playerSelected = false;
var attackSelected = false;
var JamyPlayed = false;
var JamyDef = "none";
var JamySpecial = "none";
var SkyPlayed = false;
var SkyDef = "none";
var SkySpecial = "none";
var SkySpecialSelected = "none";
var AntonioPlayed = false;
var AntonioDef = "none";
var AntonioSpecial = "none";
var AntonioSpecialSelected = "none";
var CharlotPlayed = false;
var CharlotDef = "none";
var CharlotSpecial = "none";
var isPlaying = false;
var tourMonstres = false; 
var cible = "none";
var bossTurn = false;
var minion1Turn = false;
var minion2Turn = false;
var jamyAlive = true;
var skyAlive = true;
var antonioAlive = true;
var charlotAlive = true;
var bossAlive = true;
var minion1Alive = true;
var minion2Alive = true;

JamyHTML.onclick = function() {
        
    if (isPlaying == false) {
        isPlaying = true;
        if (JamyPlayed == false) {
            JamyHTML.style.transform = "translateX(100px)";
            playerSelected = true;
            CommentaireHTML.innerHTML = "Choisissez une action pour Jamy";
            ActionsHTML.style.visibility = "visible";
            finTourHTML.style.visibility = "hidden";
            JamyDef = false;
            JamySpecial = false;
            JamyPlayed = true;
            Atk = JamyATK;
            
        }
        else {
            CommentaireHTML.innerHTML = "Jamy a déjà joué son tour ! Choisissez un autre personnage ou fin du tour !";
            isPlaying = false;

        }
    }

    if (AntonioSpecialSelected == true) {
        AntonioSpecialSelected = false;
        
        if (JamyPV < 100) {
            JamyPV = JamyPV + 20;
            if (JamyPV > 100) {
                JamyPV = 100;
                CommentaireHTML.innerHTML = "Jamy a récupéré toute sa vie ! Sélectionnez un personnage";
                JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
            else {
                CommentaireHTML.innerHTML = "Jamy a récupéré 20 PV ! Sélectionnez un personnage";
                JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
        }
        else {
            CommentaireHTML.innerHTML = "Jamy a déjà toute sa vie ! Choisissez un autre personnage !";
        }
    }
}

SkyHTML.onclick = function() {
    if (isPlaying == false) {
        isPlaying = true;
        if (SkyPlayed == false) {
            playerSelected = true;
            CommentaireHTML.innerHTML = "Choisissez une action pour Sky";
            ActionsHTML.style.visibility = "visible";
            finTourHTML.style.visibility = "hidden";
            SkyHTML.style.transform = "translateX(100px)";
            SkyDef = false;
            SkySpecial = false;
            SkyPlayed = true;
            Atk = SkyATK;
        }
        else {
            CommentaireHTML.innerHTML = "Sky a déjà joué son tour ! Choisissez un autre personnage ou fin du tour !";
            isPlaying = false;

        }
    }

    if (AntonioSpecialSelected == true) {
        AntonioSpecialSelected = false;
        
        if (SkyPV < 150) {
            SkyPV = SkyPV + 20;
            if (SkyPV > 150) {
                SkyPV = 150;
                CommentaireHTML.innerHTML = "Sky a récupéré toute sa vie ! Sélectionnez un personnage";
                SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
            else {
                CommentaireHTML.innerHTML = "Sky a récupéré 20 PV ! Sélectionnez un personnage";
                SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
        }
        else {
            CommentaireHTML.innerHTML = "Sky a déjà toute sa vie ! Choisissez un autre personnage !";
        }
    }
}

AntonioHTML.onclick = function() {
    if (isPlaying == false) {
        isPlaying = true;
        if (AntonioPlayed == false) {
            playerSelected = true;
            CommentaireHTML.innerHTML = "Choisissez une action pour Antonio";
            ActionsHTML.style.visibility = "visible";
            finTourHTML.style.visibility = "hidden";
            AntonioHTML.style.transform = "translateX(200px)";
            AntonioDef = false;
            AntonioSpecial = false;
            AntonioPlayed = true;
            Atk = AntonioATK;
        }
        else {
            CommentaireHTML.innerHTML = "Antonio a déjà joué son tour ! Choisissez un autre personnage ou fin du tour !";
            isPlaying = false;

        }
    }

    if (AntonioSpecialSelected == true) {
        AntonioSpecialSelected = false;
        
        if (AntonioPV < 100) {
            AntonioPV = AntonioPV + 20;
            if (AntonioPV > 100) {
                AntonioPV = 100;
                CommentaireHTML.innerHTML = "Antonio a récupéré toute sa vie ! Sélectionnez un personnage";
                AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
            else {
                CommentaireHTML.innerHTML = "Antonio a récupéré 20 PV ! Sélectionnez un personnage";
                AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
        }
        else {
            CommentaireHTML.innerHTML = "Antonio a déjà toute sa vie ! Choisissez un autre personnage !";
        }
    }
}

CharlotHTML.onclick = function() {
    if (isPlaying == false) {
        isPlaying = true;
        if (CharlotPlayed == false) {
            playerSelected = true;
            CommentaireHTML.innerHTML = "Choisissez une action pour Charlot";
            ActionsHTML.style.visibility = "visible";
            finTourHTML.style.visibility = "hidden";
            CharlotHTML.style.transform = "translateX(200px)";
            CharlotDef = false;
            CharlotSpecial = false;
            CharlotPlayed = true;
            Atk = CharlotATK;
        }
        else {
            CommentaireHTML.innerHTML = "Charlot a déjà joué son tour ! Choisissez un autre personnage ou fin du tour !"
            isPlaying = false;

        }
    }
    if (AntonioSpecialSelected == true) {
        AntonioSpecialSelected = false;
        
        if (CharlotPV < 100) {
            CharlotPV = CharlotPV + 20;
            if (CharlotPV > 100) {
                CharlotPV = 100;
                CommentaireHTML.innerHTML = "Charlot a récupéré toute sa vie ! Sélectionnez un personnage";
                CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
            else {
                CommentaireHTML.innerHTML = "Charlot a récupéré 20 PV ! Sélectionnez un personnage";
                CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                ActionsHTML.style.visibility = "hidden";
                finTourHTML.style.visibility = "visible";
                AntonioHTML.style.transform = "translateX(0px)";
                isPlaying = false;
            }
        }
        else {
            CommentaireHTML.innerHTML = "Charlot a déjà toute sa vie ! Choisissez un autre personnage !";
        }
    }
}

AttaqueHTML.onclick = function() {
    if (playerSelected == true) {
        attackSelected = true;
        JamySpecial = true;
        SkySpecial = true;
        AntonioSpecial = true;
        CharlotSpecial = true;
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
        
    }
}

defenseHTML.onclick = function() {
    if (JamyDef == false) {
        JamyDef = true;
        JamySpecial = true;
        CommentaireHTML.innerHTML = "Jamy se prépare à défendre ! Choisissez un autre personnage";  
        JamyPlayed = true;
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        JamyHTML.style.transform = "translateX(0px)";
        isPlaying = false;
    }

    if (SkyDef == false) {
        SkyDef = true;
        SkySpecial = true;
        CommentaireHTML.innerHTML = "Sky se prépare à défendre ! Choisissez un autre personnage";  
        SkyPlayed = true;
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        SkyHTML.style.transform = "translateX(0px)";
        isPlaying = false;
    }

    if (AntonioDef == false) {
        AntonioDef = true;
        AntonioSpecial = true;
        CommentaireHTML.innerHTML = "Antonio se prépare à défendre ! Choisissez un autre personnage";  
        AntonioPlayed = true;
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        AntonioHTML.style.transform = "translateX(0px)";
        isPlaying = false;
    }

    if (CharlotDef == false) {
        CharlotDef = true;
        CharlotSpecial = true;
        CommentaireHTML.innerHTML = "Charlot se prépare à défendre ! Choisissez un autre personnage";  
        CharlotPlayed = true;
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        CharlotHTML.style.transform = "translateX(0px)";
        isPlaying = false;
    }
}

specialHTML.onclick = function() {
    if (JamySpecial == false && JamyPM >= 10) {
        JamySpecial = true;
        JamyPM = JamyPM - 10;
        JamyPMHTML.innerHTML = JamyPM + "/20 PM";
        BossPV = BossPV - JamySpe;
        BossPVHTML.innerHTML = BossPV + "/150 PV";
        Minion1PV = Minion1PV - JamySpe;
        Minion1PVHTML.innerHTML = Minion1PV + "/100 PV";
        Minion2PV = Minion2PV - JamySpe;
        Minion2PVHTML.innerHTML = Minion2PV + "/100 PV";
        CommentaireHTML.innerHTML = "Jamy lance Pluie de flèches !<br>Les ennemis prennent " + JamySpe + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        JamyHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (BossPV <= 0) {
            BossPV = 0;
            bossAlive = false;
            BossPVHTML.innerHTML= BossPV + "/150 PV"
            CommentaireHTML.innerHTML = "Le Boss est vaincu !";
            BossHTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        if (Minion1PV <= 0) {
            Minion1PV = 0;
            minion1Alive = false;
            Minion1PVHTML.innerHTML= Minion1PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 1 est vaincu !";
            Minion1HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        if (Minion2PV <= 0) {
            Minion2PV = 0;
            minion2Alive = false;
            Minion2PVHTML.innerHTML= Minion2PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 2 est vaincu !";
            Minion2HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        
    }
    if (JamySpecial == false && JamyPM < 10){
        JamySpecial = true;
        CommentaireHTML.innerHTML = " Jamy n'a pas assez de PM ! Choisissez une autre action !";
    }

    if (CharlotSpecial == false && CharlotPM >= 10) {
        CharlotSpecial = true;
        CharlotPM = CharlotPM - 10;
        CharlotPMHTML.innerHTML = CharlotPM + "/20 PM";
        BossPV = BossPV - CharlotSpe;
        BossPVHTML.innerHTML = BossPV + "/150 PV";
        Minion1PV = Minion1PV - CharlotSpe;
        Minion1PVHTML.innerHTML = Minion1PV + "/100 PV";
        Minion2PV = Minion2PV - CharlotSpe;
        Minion2PVHTML.innerHTML = Minion2PV + "/100 PV";
        CommentaireHTML.innerHTML = "Charlot lance Pluie de flèches !<br>Les ennemis prennent " + JamySpe + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        CharlotHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (BossPV <= 0) {
            BossPV = 0;
            bossAlive = false;
            BossPVHTML.innerHTML= BossPV + "/150 PV"
            CommentaireHTML.innerHTML = "Le Boss est vaincu !";
            BossHTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        if (Minion1PV <= 0) {
            Minion1PV = 0;
            minion1Alive = false;
            Minion1PVHTML.innerHTML= Minion1PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 1 est vaincu !";
            Minion1HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        if (Minion2PV <= 0) {
            Minion2PV = 0;
            minion2Alive = false;
            Minion2PVHTML.innerHTML= Minion2PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 2 est vaincu !";
            Minion2HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
        
    }
    if (CharlotSpecial == false && CharlotPM < 10){
        CharlotSpecial = true;
        CommentaireHTML.innerHTML = " Charlot n'a pas assez de PM ! Choisissez une autre action !";
    }

    if (SkySpecial == false && SkyPM >= 5) {
        SkySpecial = true;
        SkySpecialSelected = true;
        CommentaireHTML.innerHTML = "Choisissez un ennemi à attaquer";
    }
    if (SkySpecial == false && SkyPM < 5) {
        SkySpecial = true;
        CommentaireHTML.innerHTML = " Sky n'a pas assez de PM ! Choisissez une autre action !";
    }

    if (AntonioSpecial == false && AntonioPM >= 10) {
        AntonioSpecial = true;
        AntonioSpecialSelected = true;
        CommentaireHTML.innerHTML = "Choisissez un personnage à soigner";
    }
    if (AntonioSpecial == false && AntonioPM < 10) {
        AntonioSpecial = true;
        CommentaireHTML.innerHTML = "Antonio n'a pas assez de PM ! Choisissez une autre action !";
    }
}

BossHTML.onclick = function() {
    if (attackSelected == true) {
        attackSelected = false;
        BossPV = BossPV - Atk;
        BossPVHTML.innerHTML = BossPV + "/150 PV";
        CommentaireHTML.innerHTML = "Le Boss prend " + Atk + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        JamyHTML.style.transform = "translateX(0px)";
        SkyHTML.style.transform = "translateX(0px)";
        AntonioHTML.style.transform = "translateX(0px)";
        CharlotHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (BossPV <= 0) {
            BossPV = 0;
            bossAlive = false;
            BossPVHTML.innerHTML= BossPV + "/150 PV"
            CommentaireHTML.innerHTML = "Le Boss est vaincu !";
            BossHTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
    if (SkySpecialSelected == true) {
        SkySpecialSelected = false;
        SkyPM = SkyPM - 5;
        SkyPMHTML.innerHTML = SkyPM + "/10 PM";
        BossPV = BossPV - SkySpe;
        BossPVHTML.innerHTML = BossPV + "/150 PV";
        CommentaireHTML.innerHTML = "Sky lance Attaque Puissante !<br>Le Boss prend " + SkySpe + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        SkyHTML.style.transform = "translateX(0px)";
        isPlaying = false
        if (BossPV <= 0) {
            BossPV = 0;
            bossAlive = false;
            BossPVHTML.innerHTML= BossPV + "/150 PV"
            CommentaireHTML.innerHTML = "Le Boss est vaincu !";
            BossHTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
}

Minion1HTML.onclick = function() {
    if (attackSelected == true) {
        attackSelected = false;
        Minion1PV = Minion1PV - Atk;
        Minion1PVHTML.innerHTML = Minion1PV + "/100 PV";
        CommentaireHTML.innerHTML = "Le Minion 1 prend " + Atk + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        JamyHTML.style.transform = "translateX(0px)";
        SkyHTML.style.transform = "translateX(0px)";
        AntonioHTML.style.transform = "translateX(0px)";
        CharlotHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (Minion1PV <= 0) {
            Minion1PV = 0;
            minion1Alive = false;
            Minion1PVHTML.innerHTML= Minion1PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 1 est vaincu !";
            Minion1HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
    if (SkySpecialSelected == true) {
        SkySpecialSelected = false;
        SkyPM = SkyPM - 5;
        SkyPMHTML.innerHTML = SkyPM + "/10 PM";
        Minion1PV = Minion1PV - SkySpe;
        Minion1PVHTML.innerHTML = Minion1PV + "/100 PV";
        CommentaireHTML.innerHTML = "Sky lance Attaque Puissante !<br>Le Minion 1 prend " + SkySpe + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        SkyHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (Minion1PV <= 0) {
            Minion1PV = 0;
            minion1Alive = false;
            Minion1PVHTML.innerHTML= Minion1PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 1 est vaincu !";
            Minion1HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
}

Minion2HTML.onclick = function() {
    if (attackSelected == true) {
        attackSelected = false;
        Minion2PV = Minion2PV - Atk;
        Minion2PVHTML.innerHTML = Minion2PV + "/100 PV";
        CommentaireHTML.innerHTML = "Le Minion 2 prend " + Atk + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        JamyHTML.style.transform = "translateX(0px)";
        SkyHTML.style.transform = "translateX(0px)";
        AntonioHTML.style.transform = "translateX(0px)";
        CharlotHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (Minion2PV <= 0) {
            Minion2PV = 0;
            minion2Alive = false;
            Minion2PVHTML.innerHTML= Minion2PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 2 est vaincu !";
            Minion2HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
    if (SkySpecialSelected == true) {
        SkySpecialSelected = false;
        SkyPM = SkyPM - 5;
        SkyPMHTML.innerHTML = SkyPM + "/10 PM";
        Minion2PV = Minion2PV - SkySpe;
        Minion2PVHTML.innerHTML = Minion2PV + "/100 PV";
        CommentaireHTML.innerHTML = "Sky lance Attaque Puissante !<br>Le Minion 2 prend " + SkySpe + " de dégâts !<br> Sélectionnez un personnage";
        ActionsHTML.style.visibility = "hidden";
        finTourHTML.style.visibility = "visible";
        SkyHTML.style.transform = "translateX(0px)";
        isPlaying = false;
        if (Minion2PV <= 0) {
            Minion2PV = 0;
            minion2Alive = false;
            Minion2PVHTML.innerHTML= Minion2PV + "/100 PV"
            CommentaireHTML.innerHTML = "Le Minion 2 est vaincu !";
            Minion2HTML.style.visibility = "hidden";
            if (bossAlive == false && minion1Alive == false && minion2Alive == false){
                CommentaireHTML.innerHTML = "Félicitations ! Vous avez vaincu tous les monstres !";
                finTourHTML.style.visibility = "hidden";
                JamyHTML.onclick = "none";
                SkyHTML.onclick = "none";
                AntonioHTML.onclick = "none";
                CharlotHTML.onclick = "none";
            }
        }
    }
}


if (bossAlive == true || minion1Alive == true || minion2Alive == true){
    finTourHTML.onclick = function() {
        tourMonstres = true;
        CommentaireHTML.innerHTML = " Fin du tour ! C'est au tour des ennemis !";
        if (tourMonstres == true) {
            finTourHTML.style.visibility = "hidden";
            suivant.style.visibility = "visible";
        }   
    }        
            
    suivant.onclick = function() {
        console.log("vieboss"+bossAlive)
        console.log("vie minion " + minion1Turn)
        bossTurn = true;
        if (bossTurn == true && bossAlive == true) {
            CommentaireHTML.innerHTML = "Le Boss attaque !";
            BossHTML.style.transform = "translateX(300px)";
            suivant.onclick = function() {
                cible = Math.round((Math.random() * 3 ));

                if (bossTurn == true && cible == 0 && jamyAlive == true && bossAlive == true) {
                    if (JamyDef == true){
                        JamyPV = JamyPV - (BossATK - Defense);
                        JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Jamy se défend ! Jamy à perdu " + (BossATK - Defense) + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (JamyPV <= 0) {
                            JamyPV = 0;
                            jamyAlive = false;
                            CommentaireHTML.innerHTML = "Jamy est mort !";
                            JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                            JamyHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }

                        }

                    }
                    else {
                        JamyPV = JamyPV - BossATK
                        JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Jamy à perdu " + BossATK + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (JamyPV <= 0) {
                            JamyPV = 0;
                            jamyAlive = false;
                            CommentaireHTML.innerHTML = "Jamy est mort !";
                            JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                            JamyHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                }
                else {
                    suivant.onclick = function() {
                        cible = Math.round((Math.random() * 3 ));
                    }
                }
                if (bossTurn == true && cible == 1 && skyAlive == true && bossAlive == true) {
                    if (SkyDef == true) {
                        SkyPV = SkyPV - (BossATK - Defense);
                        SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                        CommentaireHTML.innerHTML = "Sky se défend ! Sky à perdu " + (BossATK - Defense) + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (SkyPV <= 0) {
                            SkyPV = 0;
                            skyAlive = false;
                            CommentaireHTML.innerHTML = "Sky est mort !";
                            SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                            SkyHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                    else {
                        SkyPV = SkyPV - BossATK;
                        SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                        CommentaireHTML.innerHTML = "Sky à perdu " + BossATK + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (SkyPV <= 0) {
                            SkyPV = 0;
                            skyAlive = false;
                            CommentaireHTML.innerHTML = "Sky est mort !";
                            SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                            SkyHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                }
                else {
                    suivant.onclick = function() {
                        cible = Math.round((Math.random() * 3 ));
                    }
                }
                if (bossTurn == true && cible == 2 && antonioAlive == true && bossAlive == true) {
                    if (AntonioDef == true) { 
                        AntonioPV = AntonioPV - (BossATK - Defense);
                        AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Antonio se défend !Antonio à perdu " + (BossATK - Defense) + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (AntonioPV <= 0) {
                            AntonioPV = 0;
                            antonioAlive = false;
                            CommentaireHTML.innerHTML = "Antonio est mort !";
                            AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                            AntonioHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                    else {
                        AntonioPV = AntonioPV - BossATK;
                        AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Antonio à perdu " + BossATK + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (AntonioPV <= 0) {
                            AntonioPV = 0;
                            antonioAlive = false;
                            CommentaireHTML.innerHTML = "Antonio est mort !";
                            AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                            AntonioHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                }
                else {
                    suivant.onclick = function() {
                        cible = Math.round((Math.random() * 3 ));
                    }
                }
                if (bossTurn == true && cible == 3 && charlotAlive == true && bossAlive == true) {
                    if (CharlotDef == true) {
                        CharlotPV = CharlotPV - (BossATK - Defense);
                        CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Charlot se défend ! Charlot à perdu " + (BossATK - Defense) + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (CharlotPV <= 0) {
                            CharlotPV = 0;
                            charlotAlive = false;
                            CommentaireHTML.innerHTML = "Charlot est mort !";
                            CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                            CharlotHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }
                    else {
                        CharlotPV = CharlotPV - BossATK;
                        CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                        CommentaireHTML.innerHTML = "Charlot à perdu " + BossATK + " PV !";
                        bossTurn = false;
                        minion1Turn = true;
                        BossHTML.style.transform = "translateX(0px)";
                        if (CharlotPV <= 0) {
                            CharlotPV = 0;
                            charlotAlive = false;
                            CommentaireHTML.innerHTML = "Charlot est mort !";
                            CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                            CharlotHTML.style.visibility = "hidden";
                            if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                finTourHTML.style.visibility = "hidden";
                                suivant.style.visibility = "hidden";
                            }
                        }
                    }        
                }
                else {
                    suivant.onclick = function() {
                        cible = Math.round((Math.random() * 3 ));
                    }
                }
            
            
        
                console.log("tour minion " + minion1Turn)
                if (minion1Alive == true && minion1Turn == true || bossAlive == false) {
                    suivant.onclick = function() {
                        CommentaireHTML.innerHTML = "Le Minion 1 attaque !";
                        Minion1HTML.style.transform = "translateX(100px)";
                        suivant.onclick = function() {
                            cible = Math.round((Math.random() * 3 ));

                            if (minion1Turn == true && cible == 0 && jamyAlive == true) {
                                if (JamyDef == true){
                                    JamyPV = JamyPV - (Minion1ATK - Defense);
                                    JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Jamy se défend ! Jamy à perdu " + (Minion1ATK - Defense) + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (JamyPV <= 0) {
                                        JamyPV = 0;
                                        jamyAlive = false;
                                        CommentaireHTML.innerHTML = "Jamy est mort !";
                                        JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                        JamyHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                                else {
                                    JamyPV = JamyPV - Minion1ATK;
                                    JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Jamy à perdu " + Minion1ATK + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (JamyPV <= 0) {
                                        JamyPV = 0;
                                        jamyAlive = false;
                                        CommentaireHTML.innerHTML = "Jamy est mort !";
                                        JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                        JamyHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                            }
                            if (minion1Turn == true && cible == 1 && skyAlive == true) {
                                if (SkyDef == true){
                                    SkyPV = SkyPV - (Minion1ATK - Defense);
                                    SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                                    CommentaireHTML.innerHTML = "Sky se défend ! Sky à perdu " + (Minion1ATK - Defense) + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (SkyPV <= 0) {
                                        SkyPV = 0;
                                        skyAlive = false;
                                        CommentaireHTML.innerHTML = "Sky est mort !";
                                        SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                                        SkyHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                                else{
                                    SkyPV = SkyPV - Minion1ATK;
                                    SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                                    CommentaireHTML.innerHTML = "Sky à perdu " + Minion1ATK + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (SkyPV <= 0) {
                                        SkyPV = 0;
                                        skyAlive = false;
                                        CommentaireHTML.innerHTML = "Sky est mort !";
                                        SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                                        SkyHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                            }
                            if (minion1Turn == true && cible == 2 && antonioAlive == true) {
                                if (AntonioDef == true){
                                    AntonioPV = AntonioPV - (Minion1ATK - Defense);
                                    AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Antonio se défend ! Antonio à perdu " + (Minion1ATK - Defense) + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (AntonioPV <= 0) {
                                        AntonioPV = 0;
                                        antonioAlive = false;
                                        CommentaireHTML.innerHTML = "Antonio est mort !";
                                        AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                        AntonioHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                                else{
                                    AntonioPV = AntonioPV - Minion1ATK;
                                    AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Antonio à perdu " + Minion1ATK + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (AntonioPV <= 0) {
                                        AntonioPV = 0;
                                        antonioAlive = false;
                                        CommentaireHTML.innerHTML = "Antonio est mort !";
                                        AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                        AntonioHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                            }
                            if (minion1Turn == true && cible == 3 && charlotAlive == true) {
                                if (CharlotDef == true){
                                    CharlotPV = CharlotPV - (Minion1ATK - Defense);
                                    CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Charlot se Défend ! Charlot à perdu " + (Minion1ATK - Defense) + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (CharlotPV <= 0) {
                                        CharlotPV = 0;
                                        charlotAlive = false;
                                        CommentaireHTML.innerHTML = "Charlot est mort !";
                                        CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                        CharlotHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                                else{
                                    CharlotPV = CharlotPV - Minion1ATK;
                                    CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                    CommentaireHTML.innerHTML = "Charlot à perdu " + Minion1ATK + " PV !";
                                    minion1Turn = false;
                                    minion2Turn = true;
                                    Minion1HTML.style.transform = "translateX(0px)";
                                    if (CharlotPV <= 0) {
                                        CharlotPV = 0;
                                        charlotAlive = false;
                                        CommentaireHTML.innerHTML = "Charlot est mort !";
                                        CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                        CharlotHTML.style.visibility = "hidden";
                                        if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                            CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                            finTourHTML.style.visibility = "hidden";
                                            suivant.style.visibility = "hidden";
                                        }
                                    }
                                }
                            }
                                            
                            if (minion2Turn == true) {
                                suivant.onclick = function() {
                                    CommentaireHTML.innerHTML = "Le Minion 2 attaque !";
                                    Minion2HTML.style.transform = "translateX(100px)";
                                    suivant.onclick = function() {
                                        cible = Math.round((Math.random() * 3 ));
                            
                                        if (minion2Turn = true && cible == 0 && jamyAlive == true) {
                                            if (JamyDef == true){
                                                JamyPV = JamyPV - (Minion2ATK - Defense);
                                                JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Jamy se défend ! Jamy à perdu " + (Minion2ATK - Defense) + " PV !";
                                                minion2Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (JamyPV <= 0) {
                                                    JamyPV = 0;
                                                    jamyAlive = false;
                                                    JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                                    CommentaireHTML.innerHTML = "Jamy est mort !";
                                                    JamyHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                            else{
                                                JamyPV = JamyPV - Minion2ATK;
                                                JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Jamy à perdu " + Minion2ATK + " PV !";
                                                minion2Turn = false;
                                                tourMonstres = false;
                                                Minion1HTML.style.transform = "translateX(0px)";
                                                if (JamyPV <= 0) {
                                                    JamyPV = 0;
                                                    jamyAlive = false;
                                                    CommentaireHTML.innerHTML = "Jamy est mort !";
                                                    JamyPVHTML.innerHTML = JamyPV + "/100 PV";
                                                    JamyHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                        }
                                        if (minion2Turn = true && cible == 1 && skyAlive == true) {
                                            if (SkyDef == true){
                                                SkyPV = SkyPV - (Minion2ATK - Defense);
                                                SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                                                CommentaireHTML.innerHTML = "Sky se défend ! Sky à perdu " + (Minion2ATK - Defense) + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (SkyPV <= 0) {
                                                    SkyPV = 0;
                                                    skyAlive = false;
                                                    CommentaireHTML.innerHTML = "Sky est mort !";
                                                    SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                                                    SkyHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                            else{
                                                SkyPV = SkyPV - Minion2ATK;
                                                SkyPVHTML.innerHTML = SkyPV + "/150 PV";
                                                CommentaireHTML.innerHTML = "Sky à perdu " + Minion2ATK + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (SkyPV <= 0) {
                                                    SkyPV = 0;
                                                    skyAlive = false;
                                                    CommentaireHTML.innerHTML = "Sky est mort !";
                                                    SkyPVHTML.innerHTML = SkyPV + "/100 PV";
                                                    SkyHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                        }
                                        if (minion2Turn = true && cible == 2 && antonioAlive == true) {
                                            if (AntonioDef == true){
                                                AntonioPV = AntonioPV - (Minion2ATK - Defense);
                                                AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Antonio se défend ! Antonio à perdu " + (Minion2ATK - Defense) + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (AntonioPV <= 0) {
                                                    AntonioPV = 0;
                                                    antonioAlive = false;
                                                    CommentaireHTML.innerHTML = "Antonio est mort !";
                                                    AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                                    AntonioHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                            else{
                                                AntonioPV = AntonioPV - Minion2ATK;
                                                AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Antonio à perdu " + Minion2ATK + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (AntonioPV <= 0) {
                                                    AntonioPV = 0;
                                                    antonioAlive = false;
                                                    CommentaireHTML.innerHTML = "Antonio est mort !";
                                                    AntonioPVHTML.innerHTML = AntonioPV + "/100 PV";
                                                    AntonioHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                        }
                                        if (minion2Turn = true && cible == 3 && charlotAlive == true) {
                                            if (CharlotDef == true){
                                                CharlotPV = CharlotPV - (Minion2ATK - Defense);
                                                CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Charlot se défend ! Charlot à perdu " + (Minion2ATK - Defense) + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (CharlotPV <= 0) {
                                                    CharlotPV = 0;
                                                    charlotAlive = false;
                                                    CommentaireHTML.innerHTML = "Charlot est mort !";
                                                    CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                                    CharlotHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                            else{
                                                CharlotPV = CharlotPV - Minion2ATK;
                                                CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                                CommentaireHTML.innerHTML = "Charlot à perdu " + Minion2ATK + " PV !";
                                                minion1Turn = false;
                                                tourMonstres = false;
                                                Minion2HTML.style.transform = "translateX(0px)";
                                                if (CharlotPV <= 0) {
                                                    CharlotPV = 0;
                                                    charlotAlive = false;
                                                    CommentaireHTML.innerHTML = "Charlot est mort !";
                                                    CharlotPVHTML.innerHTML = CharlotPV + "/100 PV";
                                                    CharlotHTML.style.visibility = "hidden";
                                                    if (jamyAlive == false && skyAlive == false && antonioAlive == false && charlotAlive == false){
                                                        CommentaireHTML.innerHTML = "Tous le monde est mort ! Vous avez perdu !";
                                                        finTourHTML.style.visibility = "hidden";
                                                        suivant.style.visibility = "hidden";
                                                    }
                                                }
                                            }
                                        }
                                        if (tourMonstres == false) {
                                            suivant.onclick = function(){
                                                CommentaireHTML.innerHTML = " Fin du tour des Monstres ! C'est à vous !"
                                                JamyPlayed = false;
                                                JamyDef ="none";
                                                JamySpecial = "none";
                                                SkyPlayed = false;
                                                SkyDef ="none";
                                                SkySpecial = "none";
                                                AntonioPlayed = false;
                                                AntonioDef ="none";
                                                AntonioSpecial = "none";
                                                CharlotPlayed = false;
                                                CharlotDef ="none";
                                                CharlotSpecial = "none";
                                                suivant.style.visibility = "hidden";
                                                finTourHTML.style.visibility = "visible";
                                            }
                                        }
                                    }       
                                }
                            }
                        }   
                    }
                }

            }    
        } 
    }        
}    


// tout marche quasiment mais je n'arrive pas à gérer le tour de mes monstres quand il y a un mort