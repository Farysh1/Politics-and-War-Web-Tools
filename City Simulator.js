// Money Calculation

// function MoneyCalculation() {
//     var Population = parseInt(document.getElementById("Population").value)
//     var Subway = parseInt(document.getElementById("Subway").value);
//     var Supermarket = parseInt(document.getElementById("Supermarket").value);
//     var Bank = parseInt(document.getElementById("Bank").value);
//     var ShoppingMall = parseInt(document.getElementById("Shopping_Mall").value);
//     var Stadium = parseInt(document.getElementById("Stadium").value);
//     var Commerce = Supermarket * 3 + Bank * 5 + ShoppingMall * 9 + Stadium * 12 + Subway * 8;
//     var Minimum_Wage = 725 / (50 * 1000)
//     var Average_Income = ((Commerce / 50) * Minimum_Wage) + Minimum_Wage;

//     if (Commerce > 100) {
//         Commerce = 100
//     }
//     var MoneyPerDay = Population * Average_Income * Commerce / 10000;
//     var MoneyPerTurn = MoneyPerDay / 12;
//     document.getElementById("MoneyPerTurn").innerHTML = MoneyPerTurn.toFixed(2) + '<img src="../assets/money.png" alt="">';
//     document.getElementById("MoneyPerDay").innerHTML = MoneyPerDay.toFixed(2) + '<img src="../assets/money.png" alt="">';
// }

// Resource Production Calculation

// Food
function calculateFoodProduction() {
    var Farms = parseInt(document.getElementById("Farms").value);
    var Land = parseInt(document.getElementById("Land").value);
    var FoodPerDay = Farms * (Land / 75);

    if (Farms < 0 || Farms > 20) {
        return false;
    }

    var FoodModifier = 0;
    switch (Farms) {
        case 2:
            FoodModifier = 0.0263;
            break;
        case 3:
            FoodModifier = 0.0526;
            break;
        case 4:
            FoodModifier = 0.0789;
            break;
        case 5:
            FoodModifier = 0.1053;
            break;
        case 6:
            FoodModifier = 0.1316;
            break;
        case 7:
            FoodModifier = 0.1579;
            break;
        case 8:
            FoodModifier = 0.1842;
            break;
        case 9:
            FoodModifier = 0.2105;
            break;
        case 10:
            FoodModifier = 0.2368;
            break;
        case 11:
            FoodModifier = 0.2632;
            break;
        case 12:
            FoodModifier = 0.2895;
            break;
        case 13:
            FoodModifier = 0.3158;
            break;
        case 14:
            FoodModifier = 0.3421;
            break;
        case 15:
            FoodModifier = 0.3684;
            break;
        case 16:
            FoodModifier = 0.3947;
            break;
        case 17:
            FoodModifier = 0.4211;
            break;
        case 18:
            FoodModifier = 0.4474;
            break;
        case 19:
            FoodModifier = 0.4737;
            break;
        case 20:
            FoodModifier = 0.5;
            break;
        default:
            FoodModifier = 0;
    }

    FoodPerDay = FoodPerDay + (FoodPerDay * FoodModifier);
    var FoodPerTurn = FoodPerDay / 12;

    document.getElementById("FoodPerDay").innerHTML = FoodPerDay.toFixed(2) + '<img src="../assets/food.png" alt="">';
    document.getElementById("FoodPerTurn").innerHTML = FoodPerTurn.toFixed(2) + '<img src="../assets/food.png" alt="">';
}

// Raw
function calculateCoalProduction() {
    var CoalMines = parseInt(document.getElementById("Coal_Mines").value);
    var CoalPerDay = CoalMines * 3;
    var CoalPerTurn = CoalPerDay / 12;

    if (CoalMines < 0 || CoalMines > 10) {
        return false;
    }

    var CoalModifier = 0;
    switch (CoalMines) {
        case 2:
            CoalModifier = 0.0556;
            break;
        case 3:
            CoalModifier = 0.1111;
            break;
        case 4:
            CoalModifier = 0.1667;
            break;
        case 5:
            CoalModifier = 0.2222;
            break;
        case 6:
            CoalModifier = 0.2778;
            break;
        case 7:
            CoalModifier = 0.3333;
            break;
        case 8:
            CoalModifier = 0.3889;
            break;
        case 9:
            CoalModifier = 0.4444;
            break;
        case 10:
            CoalModifier = 0.5;
            break;
        default:
            CoalModifier = 0;
            break;
    }

    CoalPerDay = CoalPerDay + (CoalPerDay * CoalModifier);
    CoalPerTurn = CoalPerDay / 12;

    document.getElementById("CoalPerDay").innerHTML = CoalPerDay.toFixed(2) + '<img src="../assets/coal.png" alt="">';
    document.getElementById("CoalPerTurn").innerHTML = CoalPerTurn.toFixed(2) + '<img src="../assets/coal.png" alt="">';
}

function calculateBauxiteProduction() {
    var BauxiteMines = parseInt(document.getElementById("Bauxite_Mines").value);
    var BauxitePerDay = BauxiteMines * 3;
    var BauxitePerTurn = BauxitePerDay / 12;

    if (BauxiteMines < 0 || BauxiteMines > 10) {
        return false;
    }

    var BauxiteModifier = 0;
    switch (BauxiteMines) {
        case 2:
            BauxiteModifier = 0.0556;
            break;
        case 3:
            BauxiteModifier = 0.1111;
            break;
        case 4:
            BauxiteModifier = 0.1667;
            break;
        case 5:
            BauxiteModifier = 0.2222;
            break;
        case 6:
            BauxiteModifier = 0.2778;
            break;
        case 7:
            BauxiteModifier = 0.3333;
            break;
        case 8:
            BauxiteModifier = 0.3889;
            break;
        case 9:
            BauxiteModifier = 0.4444;
            break;
        case 10:
            BauxiteModifier = 0.5;
            break;
        default:
            BauxiteModifier = 0;
            break;
    }

    BauxitePerDay = BauxitePerDay + (BauxitePerDay * BauxiteModifier);
    BauxitePerTurn = BauxitePerDay / 12;

    document.getElementById("BauxitePerDay").innerHTML = BauxitePerDay.toFixed(2) + '<img src="../assets/bauxite.png" alt="">';
    document.getElementById("BauxitePerTurn").innerHTML = BauxitePerTurn.toFixed(2) + '<img src="../assets/bauxite.png" alt="">';
}

function calculateOilProduction() {
    var OilWells = parseInt(document.getElementById("Oil_Wells").value);
    var OilPerDay = OilWells * 3;
    var OilPerTurn = OilPerDay / 12;

    if (OilWells < 0 || OilWells > 10) {
        return false;
    }

    var OilModifier = 0;
    switch (OilWells) {
        case 2:
            OilModifier = 0.0556;
            break;
        case 3:
            OilModifier = 0.1111;
            break;
        case 4:
            OilModifier = 0.1667;
            break;
        case 5:
            OilModifier = 0.2222;
            break;
        case 6:
            OilModifier = 0.2778;
            break;
        case 7:
            OilModifier = 0.3333;
            break;
        case 8:
            OilModifier = 0.3889;
            break;
        case 9:
            OilModifier = 0.4444;
            break;
        case 10:
            OilModifier = 0.5;
            break;
        default:
            OilModifier = 0;
            break;
    }

    OilPerDay = OilPerDay + (OilPerDay * OilModifier);
    OilPerTurn = OilPerDay / 12;

    document.getElementById("OilPerDay").innerHTML = OilPerDay.toFixed(2) + '<img src="../assets/oil.png" alt="">';
    document.getElementById("OilPerTurn").innerHTML = OilPerTurn.toFixed(2) + '<img src="../assets/oil.png" alt="">';
}

function calculateIronProduction() {
    var IronMines = parseInt(document.getElementById("Iron_Mines").value);
    var IronPerDay = IronMines * 3;
    var IronPerTurn = IronPerDay / 12;

    if (IronMines < 0 || IronMines > 10) {
        return false;
    }

    var IronModifier = 0;
    switch (IronMines) {
        case 2:
            IronModifier = 0.0556;
            break;
        case 3:
            IronModifier = 0.1111;
            break;
        case 4:
            IronModifier = 0.1667;
            break;
        case 5:
            IronModifier = 0.2222;
            break;
        case 6:
            IronModifier = 0.2778;
            break;
        case 7:
            IronModifier = 0.3333;
            break;
        case 8:
            IronModifier = 0.3889;
            break;
        case 9:
            IronModifier = 0.4444;
            break;
        case 10:
            IronModifier = 0.5;
            break;
        default:
            IronModifier = 0;
            break;
    }

    IronPerDay = IronPerDay + (IronPerDay * IronModifier);
    IronPerTurn = IronPerDay / 12;

    document.getElementById("IronPerDay").innerHTML = IronPerDay.toFixed(2) + '<img src="../assets/iron.png" alt="">';
    document.getElementById("IronPerTurn").innerHTML = IronPerTurn.toFixed(2) + '<img src="../assets/iron.png" alt="">';
}

function calculateLeadProduction() {
    var LeadMines = parseInt(document.getElementById("Lead_Mines").value);
    var LeadPerDay = LeadMines * 3;
    var LeadPerTurn = LeadPerDay / 12;

    if (LeadMines < 0 || LeadMines > 10) {
        return false;
    }

    var leadModifier = 0;
    switch (LeadMines) {
        case 2:
            leadModifier = 0.0556;
            break;
        case 3:
            leadModifier = 0.1111;
            break;
        case 4:
            leadModifier = 0.1667;
            break;
        case 5:
            leadModifier = 0.2222;
            break;
        case 6:
            leadModifier = 0.2778;
            break;
        case 7:
            leadModifier = 0.3333;
            break;
        case 8:
            leadModifier = 0.3889;
            break;
        case 9:
            leadModifier = 0.4444;
            break;
        case 10:
            leadModifier = 0.5;
            break;
        default:
            leadModifier = 0;
            break;
    }

    LeadPerDay = LeadPerDay + (LeadPerDay * leadModifier);
    LeadPerTurn = LeadPerDay / 12;

    document.getElementById("LeadPerDay").innerHTML = LeadPerDay.toFixed(2) + '<img src="../assets/lead.png" alt="">';
    document.getElementById("LeadPerTurn").innerHTML = LeadPerTurn.toFixed(2) + '<img src="../assets/lead.png" alt="">';
}

function calculateUraniumProduction() {
    var UraniumMines = parseInt(document.getElementById("Uranium_Mines").value);
    var UraniumPerDay = UraniumMines * 3;
    var UraniumPerTurn = UraniumPerDay / 12;

    if (UraniumMines < 0 || UraniumMines > 5) {
        return false;
    }

    var modifier = 0;
    switch (UraniumMines) {
        case 1:
            modifier = 0;
            break;
        case 2:
            modifier = 0.125;
            break;
        case 3:
            modifier = 0.25;
            break;
        case 4:
            modifier = 0.375;
            break;
        case 5:
            modifier = 0.5;
            break;
    }

    UraniumPerDay += UraniumPerDay * modifier;
    UraniumPerTurn += UraniumPerTurn * modifier;

    document.getElementById("UraniumPerDay").innerHTML = UraniumPerDay.toFixed(2) + '<img src="../assets/uranium.png" alt="">';
    document.getElementById("UraniumPerTurn").innerHTML = UraniumPerTurn.toFixed(2) + '<img src="../assets/uranium.png" alt="">';
}

// Manuf

function calculateGasolineProduction() {
    var OilRefinery = parseInt(document.getElementById("Oil_Refinery").value);
    var GasolinePerDay = OilRefinery * 6;
    var GasolinePerTurn = GasolinePerDay / 12;

    if (OilRefinery < 0 || OilRefinery > 5) {
        return false;
    }

    var modifier = 0;
    switch (OilRefinery) {
        case 1:
            modifier = 0;
            break;
        case 2:
            modifier = 0.125;
            break;
        case 3:
            modifier = 0.25;
            break;
        case 4:
            modifier = 0.375;
            break;
        case 5:
            modifier = 0.5;
            break;
    }

    GasolinePerDay += GasolinePerDay * modifier;
    GasolinePerTurn += GasolinePerTurn * modifier;

    document.getElementById("GasolinePerDay").innerHTML = GasolinePerDay.toFixed(2) + '<img src="../assets/gasoline.png" alt="">';
    document.getElementById("GasolinePerTurn").innerHTML = GasolinePerTurn.toFixed(2) + '<img src="../assets/gasoline.png" alt="">';
}

function calculateSteelProduction() {
    var SteelMills = parseInt(document.getElementById("Steel_Mills").value);
    var SteelPerDay = SteelMills * 9;
    var SteelPerTurn = SteelPerDay / 12;

    if (SteelMills < 0 || SteelMills > 5) {
        return false;
    }

    var modifier = 0;
    switch (SteelMills) {
        case 1:
            modifier = 0;
            break;
        case 2:
            modifier = 0.125;
            break;
        case 3:
            modifier = 0.25;
            break;
        case 4:
            modifier = 0.375;
            break;
        case 5:
            modifier = 0.5;
            break;
    }

    SteelPerDay += SteelPerDay * modifier;
    SteelPerTurn += SteelPerTurn * modifier;

    document.getElementById("SteelPerDay").innerHTML = SteelPerDay.toFixed(2) + '<img src="../assets/steel.png" alt="">';
    document.getElementById("SteelPerTurn").innerHTML = SteelPerTurn.toFixed(2) + '<img src="../assets/steel.png" alt="">';
}

function calculateAluminumProduction() {
    var AluminumRefinery = parseInt(document.getElementById("Aluminum_Refinery").value);
    var AluminumPerDay = AluminumRefinery * 9;
    var AluminumPerTurn = AluminumPerDay / 12;

    if (AluminumRefinery < 0 || AluminumRefinery > 5) {
        return false;
    }

    var modifier = 0;
    switch (AluminumRefinery) {
        case 1:
            modifier = 0;
            break;
        case 2:
            modifier = 0.125;
            break;
        case 3:
            modifier = 0.25;
            break;
        case 4:
            modifier = 0.375;
            break;
        case 5:
            modifier = 0.5;
            break;
    }

    AluminumPerDay += AluminumPerDay * modifier;
    AluminumPerTurn += AluminumPerTurn * modifier;

    document.getElementById("AluminumPerDay").innerHTML = AluminumPerDay.toFixed(2) + '<img src="../assets/aluminum.png" alt="">';
    document.getElementById("AluminumPerTurn").innerHTML = AluminumPerTurn.toFixed(2) + '<img src="../assets/aluminum.png" alt="">';
}

function calculateMunitionsProduction() {
    var MunitionsFactory = parseInt(document.getElementById("Munitions_Factory").value);
    var MunitionsPerDay = MunitionsFactory * 18;
    var MunitionsPerTurn = MunitionsPerDay / 12;

    if (MunitionsFactory < 0 || MunitionsFactory > 5) {
        return false;
    }

    var modifier = 0;
    switch (MunitionsFactory) {
        case 1:
            modifier = 0;
            break;
        case 2:
            modifier = 0.125;
            break;
        case 3:
            modifier = 0.25;
            break;
        case 4:
            modifier = 0.375;
            break;
        case 5:
            modifier = 0.5;
            break;
    }

    MunitionsPerDay += MunitionsPerDay * modifier;
    MunitionsPerTurn += MunitionsPerTurn * modifier;

    document.getElementById("MunitionsPerDay").innerHTML = MunitionsPerDay.toFixed(2) + '<img src="../assets/munitions.png" alt="">';
    document.getElementById("MunitionsPerTurn").innerHTML = MunitionsPerTurn.toFixed(2) + '<img src="../assets/munitions.png" alt="">';
}

function CalculatePopulation() {
    var Infrastructure = document.getElementById("infra_needed").value;
    var CityAge = parseInt(document.getElementById("City_Age").value);
    var Land = parseInt(document.getElementById("Land").value)
    var Hospitals = document.getElementById("Hospital").value;
    var Farms = parseInt(document.getElementById("Farms").value);
    var CoalMines = parseInt(document.getElementById("Coal_Mines").value);
    var IronMines = parseInt(document.getElementById("Iron_Mines").value);
    var LeadMines = parseInt(document.getElementById("Lead_Mines").value);
    var OilWells = parseInt(document.getElementById("Oil_Wells").value);
    var BauxiteMines = parseInt(document.getElementById("Bauxite_Mines").value);
    var UraniumMines = parseInt(document.getElementById("Uranium_Mines").value);
    var OilRefinery = parseInt(document.getElementById("Oil_Refinery").value);
    var SteelMills = parseInt(document.getElementById("Steel_Mills").value);
    var AluminumRefinery = parseInt(document.getElementById("Aluminum_Refinery").value);
    var MunitionsFactory = parseInt(document.getElementById("Munitions_Factory").value);
    var PoliceStation = parseInt(document.getElementById("Police_Station").value);
    var Hospitals = document.getElementById("Hospital").value;
    var RecyclingCenter = parseInt(document.getElementById("Recycling_Center").value);
    var Subway = parseInt(document.getElementById("Subway").value);
    var Supermarket = parseInt(document.getElementById("Supermarket").value);
    var Bank = parseInt(document.getElementById("Bank").value);
    var ShoppingMall = parseInt(document.getElementById("Shopping_Mall").value);
    var Stadium = parseInt(document.getElementById("Stadium").value);
    var Barracks = parseInt(document.getElementById("Barracks").value);
    var Factory = parseInt(document.getElementById("Factory").value);
    var Hangar = parseInt(document.getElementById("Hangar").value);
    var Drydock = parseInt(document.getElementById("Drydock").value);
    var NuclearPlants = parseInt(document.getElementById("nuclear_plants_needed").value);

    var BasePopulation = Infrastructure * 100;
    var PopulationDensity = BasePopulation / Land
    var pollutionPoints = BauxiteMines * 12 +
        OilRefinery * 32 +
        PoliceStation * 1 +
        Supermarket * 0 +
        Barracks * 0 +
        CoalMines * 12 +
        SteelMills * 40 +
        Hospitals * 4 +
        Bank * 0 +
        Factory * 0 +
        NuclearPlants * 0 +
        Farms * 2 +
        AluminumRefinery * 40 +
        RecyclingCenter * -70 +
        ShoppingMall * 2 +
        Hangar * 0 +
        IronMines * 12 +
        MunitionsFactory * 32 +
        Subway * -45 +
        Stadium * 5 +
        Drydock * 0 +
        LeadMines * 12 +
        OilWells * 12 +
        UraniumMines * 20;

    var pollutionIndex = pollutionPoints;
    var diseaseIncrease = 0.05 * pollutionIndex;

    var Supermarket = parseInt(document.getElementById("Supermarket").value);
    var Bank = parseInt(document.getElementById("Bank").value);
    var ShoppingMall = parseInt(document.getElementById("Shopping_Mall").value);
    var Stadium = parseInt(document.getElementById("Stadium").value);
    var Subway = parseInt(document.getElementById("Subway").value);

    var Commerce = Supermarket * 3 + Bank * 5 + ShoppingMall * 9 + Stadium * 12 + Subway * 8;

    if (Commerce > 100) {
        Commerce = 100
    }

    var pollutionIndex = diseaseIncrease;
    var PollutionModifier = pollutionIndex * 0.05;
    var HospitalsModifier = Hospitals * 2.5;
    var DiseaseRate = (((PopulationDensity ** 2) * 0.01) - 25) / 100 + (BasePopulation / 100000) + PollutionModifier - HospitalsModifier;
    var policeModifier = (PoliceStation * 2.5);
    var CrimeRate = ((103 - Commerce) ** 2 + Infrastructure * 100) / 111111 - policeModifier;
    var ageBonus = 1 + Math.log(CityAge) / 15;
    var popDensity = BasePopulation / Land;
    var crimeDeaths = (CrimeRate / 10) * (Infrastructure * 100) - 25;
    var diseaseDeaths = DiseaseRate * BasePopulation;
    var diseaseRateWithPollution = DiseaseRate + diseaseIncrease;
    var popWithPollution = (BasePopulation - ((diseaseRateWithPollution * 100 * Infrastructure) / 100) - Math.max(((CrimeRate / 10) * (100 * Infrastructure) - 25), 0) * ageBonus) * ageBonus;

    document.getElementById("Disease_Rate").value = diseaseRateWithPollution.toFixed(2);
    document.getElementById("Pollution_Index").value = pollutionPoints.toFixed(2);
    document.getElementById("Crime_Rate").value = CrimeRate.toFixed(2);
    document.getElementById("Population").value = popWithPollution.toFixed(0);
    document.getElementById("Population_Density").value = PopulationDensity.toFixed(0);
    document.getElementById("Commerce").value = Commerce.toFixed(0);
}

function Basic_Change() {
    var InfraNeeded = parseFloat(document.getElementById("infra_needed").value);
    var Slots = parseInt(document.getElementById("slots").value);
    var NuclearPlantsNeeded = parseInt(document.getElementById("nuclear_plants_needed").value);
    var Land = parseInt(document.getElementById("Land").value);
    var CityAge = parseInt(document.getElementById("City_Age").value);

    var Farms = parseInt(document.getElementById("Farms").value);
    var CoalMines = parseInt(document.getElementById("Coal_Mines").value);
    var IronMines = parseInt(document.getElementById("Iron_Mines").value);
    var LeadMines = parseInt(document.getElementById("Lead_Mines").value);
    var OilWells = parseInt(document.getElementById("Oil_Wells").value);
    var BauxiteMines = parseInt(document.getElementById("Bauxite_Mines").value);
    var UraniumMines = parseInt(document.getElementById("Uranium_Mines").value);

    var OilRefinery = parseInt(document.getElementById("Oil_Refinery").value);
    var SteelMills = parseInt(document.getElementById("Steel_Mills").value);
    var AluminumRefinery = parseInt(document.getElementById("Aluminum_Refinery").value);
    var MunitionsFactory = parseInt(document.getElementById("Munitions_Factory").value);

    var PoliceStation = parseInt(document.getElementById("Police_Station").value);
    var Hospital = parseInt(document.getElementById("Hospital").value);
    var RecyclingCenter = parseInt(document.getElementById("Recycling_Center").value);
    var Subway = parseInt(document.getElementById("Subway").value);

    var Supermarket = parseInt(document.getElementById("Supermarket").value);
    var Bank = parseInt(document.getElementById("Bank").value);
    var ShoppingMall = parseInt(document.getElementById("Shopping_Mall").value);
    var Stadium = parseInt(document.getElementById("Stadium").value);

    var Barracks = parseInt(document.getElementById("Barracks").value);
    var Factory = parseInt(document.getElementById("Factory").value);
    var Hangar = parseInt(document.getElementById("Hangar").value);
    var Drydock = parseInt(document.getElementById("Drydock").value);

    // Basic Check
    if (InfraNeeded_new >= 5000) {
        alert("Something isn't right here check your input again");
        return false;
    }

    if (Land < 250 || Land > 10000) {
        alert("Land must be between 250 and 10000");
        return false;
    }

    if (CityAge < 1 || CityAge > 5000) {
        alert("City Age must be between 1 and 5000");
        return false;
    }

    // Raw Resources Check
    if (Farms < 0 || Farms > 20) {
        alert("Farms must be between 0 and 20");
        return false;
    }

    if (CoalMines < 0 || CoalMines > 10) {
        alert("Coal Mines must be between 0 and 10");
        return false;
    }

    if (IronMines < 0 || IronMines > 10) {
        alert("Iron Mines must be between 0 and 10");
        return false;
    }

    if (LeadMines < 0 || LeadMines > 10) {
        alert("Lead Mines must be between 0 and 10");
        return false;
    }

    if (OilWells < 0 || OilWells > 10) {
        alert("Oil Wells must be between 0 and 10");
        return false;
    }

    if (BauxiteMines < 0 || BauxiteMines > 10) {
        alert("Bauxite Mines must be between 0 and 10");
        return false;
    }

    if (UraniumMines < 0 || UraniumMines > 5) {
        alert("Uranium Mines must be between 0 and 5");
        return false;
    }

    // Manufacturing Check
    if (OilRefinery < 0 || OilRefinery > 5) {
        alert("Oil Refinery must be between 0 and 5");
        return false;
    }

    if (SteelMills < 0 || SteelMills > 5) {
        alert("Steel Mills must be between 0 and 5");
        return false;
    }

    if (AluminumRefinery < 0 || AluminumRefinery > 5) {
        alert("Aluminum Refinery must be between 0 and 5");
        return false;
    }

    if (MunitionsFactory < 0 || MunitionsFactory > 5) {
        alert("Munitions Factory must be between 0 and 5");
        return false;
    }

    // Civil Check
    if (PoliceStation < 0 || PoliceStation > 5) {
        alert("Police Station must be between 0 and 5");
        return false;
    }

    if (Hospital < 0 || Hospital > 5) {
        alert("Hospital must be between 0 and 5");
        return false;
    }

    if (RecyclingCenter < 0 || RecyclingCenter > 3) {
        alert("Recycling Center must be between 0 and 3");
        return false;
    }

    if (Subway < 0 || Subway > 1) {
        alert("Subway must be between 0 and 1");
        return false;
    }

    // Commerce Check
    if (Supermarket < 0 || Supermarket > 6) {
        alert("Supermarket must be between 0 and 6");
        return false;
    }

    if (Bank < 0 || Bank > 5) {
        alert("Bank must be between 0 and 5");
        return false;
    }

    if (ShoppingMall < 0 || ShoppingMall > 4) {
        alert("Shopping Mall must be between 0 and 4");
        return false;
    }

    if (Stadium < 0 || Stadium > 3) {
        alert("Stadium must be between 0 and 3");
        return false;
    }

    // Military Check
    if (Barracks < 0 || Barracks > 5) {
        alert("Barracks must be between 0 and 5");
        return false;
    }

    if (Factory < 0 || Factory > 5) {
        alert("Factory must be between 0 and 5");
        return false;
    }

    if (Hangar < 0 || Hangar > 5) {
        alert("Hangar must be between 0 and 5");
        return false;
    }

    if (Drydock < 0 || Drydock > 3) {
        alert("Drydock must be between 0 and 3");
        return false;
    }

    var Slots_new = Farms + CoalMines + IronMines + LeadMines + OilWells + BauxiteMines + UraniumMines + OilRefinery + SteelMills + AluminumRefinery + MunitionsFactory + PoliceStation + Hospital + RecyclingCenter + Subway + Supermarket + Bank + ShoppingMall + Stadium + Barracks + Factory + Hangar + Drydock;
    var InfraNeeded_new = Slots * 50;
    var NuclearPlantsNeeded_new = InfraNeeded_new / 2000;
    var NuclearPlantsNeeded_new_rounded = Math.ceil(NuclearPlantsNeeded_new);
    var Slots_new = Slots_new + NuclearPlantsNeeded_new_rounded

    document.getElementById("slots").value = Slots_new;
    document.getElementById("infra_needed").value = InfraNeeded_new;
    document.getElementById("nuclear_plants_needed").value = NuclearPlantsNeeded_new_rounded;

    var InfraNeeded_new = document.getElementById("slots").value * 50;

    document.getElementById("infra_needed").value = InfraNeeded_new;

    let data = {
        infra_needed: InfraNeeded_new,
        imp_total: Slots_new,
        imp_coalpower: 0,
        imp_oilpower: 0,
        imp_windpower: 0,
        imp_nuclearpower: NuclearPlantsNeeded_new_rounded,
        imp_coalmine: CoalMines,
        imp_oilwell: OilWells,
        imp_uramine: UraniumMines,
        imp_leadmine: LeadMines,
        imp_ironmine: IronMines,
        imp_bauxitemine: BauxiteMines,
        imp_farm: Farms,
        imp_gasrefinery: OilRefinery,
        imp_aluminumrefinery: AluminumRefinery,
        imp_munitionsfactory: MunitionsFactory,
        imp_steelmill: SteelMills,
        imp_policestation: PoliceStation,
        imp_hospital: Hospital,
        imp_recyclingcenter: RecyclingCenter,
        imp_subway: Subway,
        imp_supermarket: Supermarket,
        imp_bank: Bank,
        imp_mall: ShoppingMall,
        imp_stadium: Stadium,
        imp_barracks: Barracks,
        imp_factory: Factory,
        imp_hangars: Hangar,
        imp_drydock: Drydock
    };

    let jsonString = JSON.stringify(data, null, 4);

    jsonString = jsonString.replace('{', '{\n    ');
    jsonString = jsonString.replace(/,\n}/, '\n}');
    jsonString = jsonString.replace(/": /g, '": ');

    document.getElementById("OutPut_Export_City").innerHTML = jsonString;
}