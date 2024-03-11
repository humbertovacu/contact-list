interface ID {
  name: string;
  value: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Login {
  uuid: string;
}

export interface User {
  id: ID;
  name: Name;
  picture: Picture;
  login: Login;
  email: string;
  phone: string;
  //   website: string;
  //   company: {
  //     name: string;
  //   };
}
