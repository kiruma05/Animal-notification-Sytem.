const apiUrl = "http://localhost:3000/subCategories";

// Get all categories
export async function getSubCat() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Sub Categories could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create or edit sub category
export async function createEditSubCat(newSubCat, id) {
  try {
    if (!id) {
      // CREATE
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSubCat),
      });

      if (!response.ok) {
        throw new Error("Sub Category could not be created");
      }

      const data = await response.json();
      return data;
    } else {
      // EDIT
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSubCat),
      });

      if (!response.ok) {
        throw new Error(`sub Category could not be updated: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete sub category
export async function deleteSubCat(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("sub Category could not be deleted");
    }

    return { message: "sub Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting sub category:", error);
    throw error;
  }
}
