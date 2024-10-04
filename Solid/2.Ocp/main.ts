/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
export abstract class Shape {
  abstract calculateArea(): number;
}

export class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}

export class Triangle extends Shape {
  length: number;
  constructor(length: number) {
    super();
    this.length = length;
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}

export class ShapeCollection {
  shapes: Shape[];
  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  calculateTotalArea(): number {
    return this.shapes.reduce(
      (total, shape) => (total += shape.calculateArea()),
      0
    );
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 5), new Triangle(3)];

const shapeCollection = new ShapeCollection(shapes);
console.log(shapeCollection.calculateTotalArea());
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
export abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;
}

export class FullTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 5000;
  }
}

export class PartTimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 3000;
  }
}

export class InternEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 1000;
  }
}

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const internEmployee = new InternEmployee("Bob");
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`
);
/*=========== END PRACTICE 2 ===============*/
