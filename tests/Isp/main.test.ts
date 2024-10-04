import { OldFashionedPrinter, VipPrinter } from "../../Solid/4.Isp/main";

describe("Printer Tests", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should print document using OldFashionedPrinter", () => {
    const oldPrinter = new OldFashionedPrinter();
    oldPrinter.print("Document 1");

    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
  });

  test("should print, scan, and fax documents using VipPrinter", () => {
    const vipPrinter = new VipPrinter();

    vipPrinter.print("Document 2");
    expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 2");

    vipPrinter.scan("Document 3");
    expect(consoleSpy).toHaveBeenCalledWith("Scanning document: Document 3");

    vipPrinter.fax("Document 4");
    expect(consoleSpy).toHaveBeenCalledWith("Faxing document: Document 4");
  });
});
