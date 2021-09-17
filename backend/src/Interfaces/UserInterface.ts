export interface UserInterface {
  username: string;
  isAdmin: boolean;
  level: boolean;
  progression: number;
  feedBack: string;
  id: string;
  email: string;
  classe: string;
  prenom: string;
  nom: string;
  emailValidate: boolean;
}

export interface DatabaseUserInterface {
  username: string;
  password: string;
  isAdmin: boolean;
  emailValidate: boolean;
  prenom: string;
  nom: string;
  feedBack: string;
  email: string;
  classe: string;
  level: boolean;
  progression: number;
  _id: string;
}
