const apiRanchiesUrl = "http://localhost:3000/ranchies";

// Fetch all ranchies
export async function getRanchies() {
  try {
    const response = await fetch(apiRanchiesUrl);
    if (!response.ok) {
      throw new Error("Ranchies could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create or Edit a ranchy
export async function createEditRanchy(newRanchy, ranch_name) {
  try {
   
    // A) CREATE
    if (!ranch_name) {

    //     const maxSerialNumber = existingRanchies.length > 0 
    //     ? Math.max(...existingRanchies.map(r => r.serial_number)) 
    //     : 0;
    //   newRanchy.serial_number = maxSerialNumber + 1;


      const response = await fetch(apiRanchiesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRanchy),
      });

      if (!response.ok) {
        throw new Error("Ranchy could not be created");
      }

      const data = await response.json();
      return data;
    }

    // B) EDIT
    if (ranch_name) {
      const response = await fetch(`${apiRanchiesUrl}/${ranch_name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRanchy),
      });

      if (!response.ok) {
        throw new Error(`Ranchy could not be updated: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete a ranchy
export async function deleteRanchy(ranch_name) {
  try {
    const response = await fetch(`${apiRanchiesUrl}/${ranch_name}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Ranchy could not be deleted");
    }

    return { message: "Ranchy deleted successfully" };
  } catch (error) {
    console.error("Error deleting ranchy:", error);
    throw error;
  }
}
