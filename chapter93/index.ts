
type User = {
    name: string | null;
}

const User: User = { name: null };

if (User.name !== null) {
    console.log(User.name.toUpperCase());
}