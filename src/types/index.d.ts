enum PublicationStatusEnum {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
};

type IRole = {
  id: string;
  roleName: string;
  createdAt: Date;
};

type IDonation = {
  name: string;
  email: string;
  amount: string;
  currency: 'USD' | 'BRL';
  date?: Date;
}

type IUser = {
  id: string;
  role: IRole;
  fullName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  publications: IPublication[];
  suggestions: ISuggestion[];
}

type IPublication = {
  id: string;
  user: IUser;
  title: string;
  description: string;
  status: IPublicationStatus;
  suggestions: ISuggestion[];
  createdAt: Date;
  updatedAt: Date;
}

type ISuggestion = {
  id: string;
  publication: string;
  user: IUser;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  suggestedPrice: number;
}
