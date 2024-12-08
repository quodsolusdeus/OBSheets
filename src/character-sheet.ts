// Define the structure of a character sheet
interface CharacterSheet {
    name: string;
    stats: { [key: string]: number | string };
    notes: string;
  }
  
  // Example character sheets
  const characterSheets: CharacterSheet[] = [
    { name: "Arden the Brave", stats: { STR: 15, DEX: 12, HP: 45 }, notes: "Loyal knight of the realm." },
    { name: "Lyra the Mystic", stats: { INT: 18, WIS: 14, MP: 30 }, notes: "Seeker of forbidden knowledge." },
  ];
  
  // Function to display character sheets in the browser
  function displayCharacterSheets() {
    // Create a container for the character sheets
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "10px";
    container.style.right = "10px";
    container.style.backgroundColor = "white";
    container.style.border = "1px solid black";
    container.style.padding = "10px";
    container.style.maxWidth = "300px";
    container.style.overflowY = "auto";
  
    // Add each character sheet to the container
    characterSheets.forEach((sheet) => {
      const card = document.createElement("div");
      card.style.marginBottom = "10px";
      card.style.borderBottom = "1px solid gray";
      card.style.paddingBottom = "10px";
  
      const name = document.createElement("h3");
      name.textContent = sheet.name;
  
      const stats = document.createElement("pre");
      stats.textContent = JSON.stringify(sheet.stats, null, 2);
  
      const notes = document.createElement("p");
      notes.textContent = sheet.notes;
  
      card.appendChild(name);
      card.appendChild(stats);
      card.appendChild(notes);
  
      container.appendChild(card);
    });
  
    // Add the container to the web page
    document.body.appendChild(container);
  }
  
  // Initialize the extension
  export function init() {
    displayCharacterSheets();
  }
  