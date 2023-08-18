let queue = [];
let option = "";

do {
  let patients = "";
  for (let i = 0; i < queue.length; i++) {
    patients += i + 1 + "° - " + queue[i] + "\n";
  }

  option = prompt(
    "Patients:\n" +
      patients +
      "\nChoose an action:\n1. New Patient\n2. Consult Patient\n3. Quit"
  );

  switch (option) {
    case "1":
      const newPatient = prompt("What's the patient's name?");
      queue.push(newPatient);
      break;
    case "2":
      const consultedPatient = queue.shift();
      alert(consultedPatient + " was removed from the queue");
      break;
    case "3":
      alert("Finishing...");
      break;
    default:
      alert("Invalid Option!");
  }
} while (option !== "3");
