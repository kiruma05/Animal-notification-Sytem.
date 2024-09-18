const apiUrl = "http://localhost:3000/cattle"; 

// Get all cattle
export async function getCattles() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Cattle could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create or edit cattle
export async function createEditCattle(newCattle, id) {
  try {
    // A) CREATE
    if (!id) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCattle),
      });

      if (!response.ok) {
        throw new Error("Cattle could not be created");
      }

      const data = await response.json();
      return data;
    }

    // B) EDIT
    if (id) {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCattle), // Only stringify newCattle
      });

      if (!response.ok) {
        throw new Error(`Cattle could not be updated: ${response.statusText}`);
      }

      const data = await response.json();
      return data; // Ensure updated cattle data is returned
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete cattle
export async function deleteCattle(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Cattle could not be deleted");
    }

    return { message: "Cattle deleted successfully" }; // Return a success message or status
  } catch (error) {
    console.error("Error deleting cattle:", error);
    throw error; // Re-throw the error for handling elsewhere
  }
}
