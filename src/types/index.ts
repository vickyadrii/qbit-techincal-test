export type UserData = {
  username: string;
  password: string;
};

export type OptionStatus = {
  label?: string;
  value?: string;
};

export type PostData = {
  title?: string;
  content?: string;
  posting?: string;
};

export type LoginContext = {
  username?: string;
  isAuthenticated?: boolean;
};
