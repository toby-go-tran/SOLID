import {
  ShapeCollection,
  Circle,
  Rectangle,
  Triangle,
  Shape,
  FullTimeEmployee,
  PartTimeEmployee,
  InternEmployee,
} from "../../Solid/2.Ocp/main";

describe("Shape Collection Tests", () => {
  test("should calculate total area of shapes", () => {
    const shapes: Shape[] = [
      new Circle(5),
      new Rectangle(4, 5),
      new Triangle(3),
    ];
    const shapeCollection = new ShapeCollection(shapes);

    const totalArea = shapeCollection.calculateTotalArea();
    expect(totalArea).toBeCloseTo(103.03981633974483);
  });

  test("should calculate area of Circle", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.53981633974483);
  });

  test("should calculate area of Rectangle", () => {
    const rectangle = new Rectangle(4, 5);
    expect(rectangle.calculateArea()).toBe(20);
  });

  test("should calculate area of Triangle", () => {
    const triangle = new Triangle(3);
    expect(triangle.calculateArea()).toBe(4.5);
  });
});

describe("Employee Tests", () => {
  test("should calculate salary of FullTimeEmployee", () => {
    const fullTimeEmployee = new FullTimeEmployee("Alice");
    expect(fullTimeEmployee.calculateSalary()).toBe(5000);
  });

  test("should calculate salary of PartTimeEmployee", () => {
    const partTimeEmployee = new PartTimeEmployee("Charlie");
    expect(partTimeEmployee.calculateSalary()).toBe(3000);
  });

  test("should calculate salary of InternEmployee", () => {
    const internEmployee = new InternEmployee("Bob");
    expect(internEmployee.calculateSalary()).toBe(1000);
  });
});
