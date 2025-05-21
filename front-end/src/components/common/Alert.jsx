import Swal from "sweetalert2";

const currentTheme = {
  background: "#fff",
  titleColor: "#333",
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
};

const showAlert = (options) => {
  return Swal.fire({
    background: currentTheme.background,
    color: currentTheme.titleColor,
    confirmButtonColor: currentTheme.confirmButtonColor,
    cancelButtonColor: currentTheme.cancelButtonColor,
    ...options,
  });
};

export const showErrorAlert = (text = "Something went wrong!") => {
  showAlert({
    icon: "error",
    text: text,
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
    position: "top-right",
    toast: true,
  });
};

export const showSuccessAlert = (text = "Success") => {
  showAlert({
    icon: "success",
    text: text,
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
    position: "top-right",
    toast: true,
  });
};

export const showConfirmAlert = async (
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel"
) => {
  return await showAlert({
    text: "Are you sure?",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    height: "80px",
    width: "260px",
    padding: "10px",
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText,
  });
};