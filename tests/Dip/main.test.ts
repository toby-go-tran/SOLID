import {
  EmailService,
  SMSService,
  SendNotification,
} from "../../Solid/5.Dip/main";

describe("Notification Tests", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should send email notification", () => {
    const emailService = new EmailService();
    const emailNotification = new SendNotification(emailService);

    emailNotification.sendNotification("Hello, this is an email notification!");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Sending email with message: Hello, this is an email notification!"
    );
  });

  test("should send SMS notification", () => {
    const smsService = new SMSService();
    const smsNotification = new SendNotification(smsService);

    smsNotification.sendNotification("Hello, this is an SMS notification!");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Sending SMS with message: Hello, this is an SMS notification!"
    );
  });
});
