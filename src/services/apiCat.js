const apiUrl = "http://localhost:3000/categories";

// Get all categories
export async function getCat() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Categories could not be loaded");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Create or edit category
export async function createEditCat(newCat, id) {
  try {
    if (!id) {
      // CREATE
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCat),
      });

      if (!response.ok) {
        throw new Error("Category could not be created");
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
        body: JSON.stringify(newCat),
      });

      if (!response.ok) {
        throw new Error(`Category could not be updated: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete category
export async function deleteCat(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Category could not be deleted");
    }

    return { message: "Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}
