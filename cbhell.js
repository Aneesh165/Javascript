function startCoffee() {
    console.log("Starting coffee machine...");``
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee machine is ready.");
            resolve("Coffee machine is ready");
        }, 2000); 
    });
}

function grindCoffee() {
    console.log("Grinding coffee beans...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee beans are ground.");
            resolve("Coffee beans are ground");
        }, 1000);
    });
}

function boilWater() {
    console.log("Boiling water...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water is boiled.");
            resolve("Water is boiled");
        }, 1500);
    });
}

function pourBoilingIntoCup(boilWaterStatus) {
    console.log("Pouring boiling water...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Boiling water is poured.");
            resolve("Boiling water poured: " + boilWaterStatus);
        }, 500);
    });
}

function addCoffeeToCup(grindCoffeeStatus) {
    console.log("Adding ground coffee to the cup...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ground coffee is added to the cup.");
            resolve("Coffee added to cup: " + grindCoffeeStatus);
        }, 500);
    });
}

function stirCoffee(coffeeInCupStatus) {
    console.log("Stirring the coffee...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Coffee is stirred.");
            resolve("Coffee is stirred: " + coffeeInCupStatus);
        }, 300);
    });
}

function enjoyCoffee(finalCoffeeStatus) {
    console.log("Enjoying the coffee: " + finalCoffeeStatus);
}

// Promise chaining
startCoffee()
    .then((coffeeMachineStatus) => {
        console.log(coffeeMachineStatus);
        return grindCoffee();
    })
    .then((grindCoffeeStatus) => {
        console.log(grindCoffeeStatus);
        return boilWater();
    })
    .then((boilWaterStatus) => {
        console.log(boilWaterStatus);
        return pourBoilingIntoCup(boilWaterStatus);
    })
    .then((waterInCupStatus) => {
        console.log(waterInCupStatus);
        return addCoffeeToCup(waterInCupStatus);
    })
    .then((coffeeInCupStatus) => {
        console.log(coffeeInCupStatus);
        return stirCoffee(coffeeInCupStatus);
    })
    .then((finalCoffeeStatus) => {
        console.log(finalCoffeeStatus);
        enjoyCoffee(finalCoffeeStatus);
    })
    .catch((error) => {
        console.error("Error:", error);
    });