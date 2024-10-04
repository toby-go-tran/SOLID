/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */
export interface Printer {
  print(document: string): void;
}

export interface Scanner {
  scan(document: string): void;
}

export interface Fax {
  fax(document: string): void;
}

export class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}

export class VipPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}

const oldPrinter = new OldFashionedPrinter();
oldPrinter.print("Document 1");

const vipPrinter = new VipPrinter();
vipPrinter.print("Document 2");
vipPrinter.scan("Document 3");
vipPrinter.fax("Document 4");
