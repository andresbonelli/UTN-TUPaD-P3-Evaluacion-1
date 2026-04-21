import type { ICategory, StoredUser } from "../types";
import type { IUser } from "../types/IUser";

export function saveUser(user: IUser) {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};
export function getUser() {
  return localStorage.getItem("userData");
};
export function removeUser() {
  localStorage.removeItem("userData");
  clearStoredCategory();
};

export function getUsers(): StoredUser[] {
  return localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : [];
}

export function storeCategory(category: ICategory): void {
  localStorage.setItem("selectedCategory", JSON.stringify(category));
}

export function getStoredCategory(): ICategory | null {
  const storedCategory = localStorage.getItem("selectedCategory");
  return storedCategory ? JSON.parse(storedCategory) : null;
}

export function clearStoredCategory(): void {
  localStorage.removeItem("selectedCategory");
}

export function cargarUsuariosDePrueba() {
  if(!getUsers().length) {
    localStorage.setItem("users", JSON.stringify([
          {
              "email":"admin@foodstore.com",
              "password":"1234",
              "role":"admin"
          },
          {
              "email":"cliente@foodstore.com",
              "password":"1234",
              "role":"client"
          }
    ]));
  }
}
