/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export interface PaymentProcessor {
  processPayment(amount: number): void;
  canProcessOnline(): boolean;
}

export class CreditCardPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log("Validating credit card details...");
    console.log("Charging the credit card...");
  }

  canProcessOnline(): boolean {
    return true;
  }
}

export class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }

  canProcessOnline(): boolean {
    return true;
  }
}

export class CashPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    console.log(
      "Please visit a physical store to complete the cash transaction."
    );
  }

  canProcessOnline(): boolean {
    return false;
  }
}

export function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  if (!paymentProcessor.canProcessOnline()) {
    console.error("This payment cannot be processed online.");
    return;
  }
  paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Credit card payment processing steps

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: PayPal payment processing steps

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50); // Output: Error: This payment cannot be processed online.
