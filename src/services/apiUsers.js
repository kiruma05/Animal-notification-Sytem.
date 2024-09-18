const apiUrl = "http://localhost:3000/users"; 

export async function getUsers() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Users could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createEditUser(newUser, id) {
 

  try {
    // A) CREATE
    if (!id) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("User could not be created");
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
        body: JSON.stringify(newUser), // Only stringify newUser
      });

      if (!response.ok) {
        throw new Error(`User could not be updated: ${response.statusText}`);
      }

      const data = await response.json();
      return data; // Ensure updated user data is returned
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("User could not be deleted");
    }

    return { message: "User deleted successfully" }; // Return a success message or status
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Re-throw the error for handling elsewhere
  }
}
