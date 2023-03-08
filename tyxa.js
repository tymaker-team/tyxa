var sys = Application.currentApplication();
sys.includeStandardAdditions = true;

  var q1 = sys.displayDialog("Who are you writing to?", {
    defaultAnswer: "John Johnson",
    buttons: ["Cancel", "Next"],
    defaultButton: "Next"
  });
  var q2_ = sys.displayDialog("What gift did you get from " + q1.textReturned + "?", {
    defaultAnswer: "a piano",
    buttons: ["Cancel", "Next"],
    defaultButton: "Next"
  });
  var q2 = q2_.textReturned.replace(/a /, "").replace(/an /, "").replace(/my /, "");
  var q3_ = sys.displayDialog("What kind of party did you invite " + q1.textReturned + " to?", {
    defaultAnswer: "my birthday",
	buttons: ["Cancel", "Next"],
	defaultButton: "Next"
  });
  var q3 = q3_.textReturned.replace(/a /, "").replace(/an /, "").replace(/my /, "");
  var q4 = sys.displayDialog("What is your name?", {
    defaultAnswer: "Jack Jackson",
	buttons: ["Cancel", "Next"],
	defaultButton: "Next"
  });
  var q5 = sys.displayDialog("What is this " + q1.textReturned + "'s relationship with you?", {
    defaultAnswer: "friend",
	buttons: ["Cancel", "Next"],
	defaultButton: "Next"
  });
  var q6 = sys.displayDialog("How would you describe your " + q5.textReturned + " " + q1.textReturned + "?", {
    defaultAnswer: "ugly",
	buttons: ["Cancel", "Next"],
	defaultButton: "Next"
  });
  var q7 = sys.displayDialog("What do you like doing with " + q1.textReturned + "?", {
    defaultAnswer: "Eating corn",
	buttons: ["Cancel", "Finish"],
	defaultButton: "Finish"
  });
  var greet = sys.displayDialog("Closing", {
    defaultAnswer: "Sincerely",
	buttons: ["Cancel", "Continue"],
	defaultButton: "Continue"
  });
  sys.displayAlert("Here's your letter:", {
    message: "Dear " + q1.textReturned + ",\nThank you so much for getting me my " + q2 + "! Thank you for coming to my " + q3 + ". You are a " + q6.textReturned + " " + q5.textReturned + "!\n" + greet.textReturned + ",\n" + q4.textReturned
  });
