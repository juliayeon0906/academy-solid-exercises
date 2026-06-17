// =============================================================
// Exercise 3 – Liskov Substitution Principle (LSP)
//
// YOUR TASK:
//   Square extends Rectangle and overrides setWidth/setHeight to
//   keep sides equal. This breaks printArea() which expects a
//   Rectangle to behave predictably (w=5, h=10 → area=50).
//
//   Redesign the hierarchy so both shapes can be used safely
//   without unexpected side effects.
//
// Run:  npm run exercise-3
// =============================================================

// class Rectangle {
//   protected width: number = 0;
//   protected height: number = 0;

//   setWidth(w: number) {
//     this.width = w;
//   }

//   setHeight(h: number) {
//     this.height = h;
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   setWidth(w: number) {
//     this.width = w;
//     this.height = w; // forces equal sides
//   }

//   setHeight(h: number) {
//     this.width = h;
//     this.height = h; // forces equal sides
//   }
// }

interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(
    private width: number = 0, 
    private height: number = 0
  ) {}

  setWidth(w: number) {
    this.width = w;
  }

  setHeight(h: number) {
    this.height = h;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(
    private side: number = 0
  ){}

  setSide(s: number) {
    this.side = s;
  }
  
  area(): number {
    return this.side * this.side;
  }
}

function printArea(shape: Shape) {
  console.log(`Expected area: 50, Got: ${shape.area()}`);
}

const rect = new Rectangle();
rect.setWidth(5);
rect.setHeight(10);
printArea(rect); // ✅ Expected area: 50, Got: 50

const square = new Square();
square.setSide(5);
printArea(square); // ✅ Expected area: 25
