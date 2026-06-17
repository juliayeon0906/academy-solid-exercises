// =============================================================
// Exercise 4 – Interface Segregation Principle (ISP)
//
// YOUR TASK:
//   The Vehicle interface covers ALL possible vehicle behaviours.
//   Classes that implement it are forced to throw errors for
//   methods that don't apply to them (e.g. Bicycle.refuel()).
//
//   Split Vehicle into smaller, focused interfaces so each class
//   only implements what it actually supports.
//
// Run:  npm run exercise-4
// =============================================================

interface EngineController {
  startEngine(): void;
  stopEngine(): void;
}

interface FuelController {
  refuel(): void;
}

interface BatteryController {
  chargeBattery(): void;
}

interface PedalController {
  pedal(): void;
}


class PetrolCar implements EngineController, FuelController {
  startEngine() {
    console.log("Engine started");
  }
  stopEngine() {
    console.log("Engine stopped");
  }
  refuel() {
    console.log("Refueling with petrol");
  }
}

class ElectricCar implements EngineController, BatteryController {
  startEngine() {
    console.log("Electric motor started");
  }
  stopEngine() {
    console.log("Electric motor stopped");
  }
  chargeBattery() {
    console.log("Charging battery");
  }
}

class Bicycle implements PedalController {
  pedal() {
    console.log("Pedaling the bicycle");
  }
}

const petrol = new PetrolCar();
petrol.startEngine();
petrol.refuel();

const electric = new ElectricCar();
electric.startEngine();
electric.chargeBattery();

const bike = new Bicycle();
bike.pedal();
