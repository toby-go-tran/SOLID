import {
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handlePayment,
} from "../../Solid/3.Lsp/main";

describe("Payment Processor Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should process credit card payment", () => {
    const creditCardPayment = new CreditCardPayment();
    const consoleSpy = jest.spyOn(console, "log");

    handlePayment(creditCardPayment, 100);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Processing credit card payment of $100"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Validating credit card details..."
    );
    expect(consoleSpy).toHaveBeenCalledWith("Charging the credit card...");

    consoleSpy.mockRestore();
  });

  test("should process PayPal payment", () => {
    const payPalPayment = new PayPalPayment();
    const consoleSpy = jest.spyOn(console, "log");

    handlePayment(payPalPayment, 200);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Processing PayPal payment of $200"
    );
    expect(consoleSpy).toHaveBeenCalledWith("Redirecting to PayPal...");
    expect(consoleSpy).toHaveBeenCalledWith("Completing PayPal transaction...");

    consoleSpy.mockRestore();
  });

  test("should not process cash payment online", () => {
    const cashPayment = new CashPayment();
    const consoleErrorSpy = jest.spyOn(console, "error");

    handlePayment(cashPayment, 50);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "This payment cannot be processed online."
    );

    consoleErrorSpy.mockRestore();
  });

  test("can process online should return true for CreditCardPayment", () => {
    const creditCardPayment = new CreditCardPayment();
    expect(creditCardPayment.canProcessOnline()).toBe(true);
  });

  test("can process online should return true for PayPalPayment", () => {
    const payPalPayment = new PayPalPayment();
    expect(payPalPayment.canProcessOnline()).toBe(true);
  });

  test("can process online should return false for CashPayment", () => {
    const cashPayment = new CashPayment();
    expect(cashPayment.canProcessOnline()).toBe(false);
  });
});
