type User = {
    id: string;
    name: string;
    email: string;
    password: string;

    created_at: Date;
    updated_at: Date;
};

const user: User = {
    id: '1a',
    name: 'John',
    email: 'john@gmail.com',
    password: '123abc',
    created_at: new Date(),
    updated_at: new Date(),
}

//usuario parcial - sem a necessidade de ter todos os dados
type PartialUser = Partial<User>

//user sem id, created_at e updated_at
type NewUser = Omit<User, 'id' | 'created_at' | 'updated_at'>

//user precisa ter id, name e password
type SearchUser = Pick<User, 'id' | 'name' | 'password'>

const searchUser: SearchUser = {
    id: '1a',
    name: 'John',
    password: '123abc',
}