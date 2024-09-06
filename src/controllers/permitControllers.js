import api from "../index/api";

// Function to get categories
export const handleGetCategory = async () => {
  try {
    const response = await api("GET", "/user/categories");
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Function to get category by ID
export const handleGetCategoryByID = async (id) => {
  try {
    const response = await api("GET", `/user/categories/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // rethrow the error to handle it in the calling function
  }
};

// Function to get data by category and subcategory ID
export const handleGetDataByCategoryAndSubCategoryID = async (
  categoryID,
  subCategoryID
) => {
  try {
    const response = await api(
      "GET",
      `/user/categories/${categoryID}/${subCategoryID}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error; // rethrow the error to handle it in the calling function
  }
};
