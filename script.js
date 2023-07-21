// script.js

// Data from the database
const dataFromDatabase = [
  { id: 1, value: '78264683' },
  { id: 2, value: '770251335' },
  { id: 3, value: '78264683' },
  { id: 4, value: '770251335' },
  { id: 5, value: '78264683' },
];

// Function to generate the dropdown list options
function generateDropdownOptions() {
  const dropdown = document.getElementById('myDropdown');

  dataFromDatabase.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.id;
    option.text = item.value;
    dropdown.appendChild(option);
  });
}

// Function to handle the menu button click
function menu() {
  const selectedOption = document.getElementById('myDropdown').value;
  const dropdown = prompt(
    "---------------senmoey------------\n" +
    "tapez le numero du service choisit\n" +
    "1: solde de mon compte \n"+
    "2: Transfert d'argent\n"+
    "3: paiement de facture\n"+
    "4: options"
        );
  if (selectedOption === '1') {
    // Code to execute when option with value 221 is selected
    prompt(" le solde de votre Compte ");
  } else {
    // Code to execute for other options
    console.log('Option selected:', selectedOption);
  }
}

// Call the function to generate the dropdown options
generateDropdownOptions();

