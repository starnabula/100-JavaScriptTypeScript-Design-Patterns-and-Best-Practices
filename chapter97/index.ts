
// function getUser(id: string) {}
// function getPost(id: string) {}

// const userId = 'abc1234';

// getPost(userId);

type userId = string & { __brand: 'userId' };
type PostId = string & { __brand: 'postId' };

function getUser(id: userId) {}
function getPost(id: PostId) {}

function createUserId(id: string): userId {
    return id as userId;
}

const userId = createUserId('abc1234');

getUser(userId);