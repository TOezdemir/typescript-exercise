console.log("%c fetch-level-1_1", "color: green; background-color: white");
//*** *** *** *** FETCH LEVEL 1-1 *** *** *** ***
const link_PICSUM = "https://picsum.photos/v2/list";

type Picsum = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
};

fetch(link_PICSUM)
  .then((resp: Response) => {
    if (!resp.ok) {
      console.error("Where list?");
    }
    console.log(resp);
    return resp.json();
  })
  .then((posts: Picsum[]) => {
    console.log(posts);
    posts.forEach((post: Picsum) => {
      //   console.log(post);
    });
  })
  .catch((error: Error) => {
    console.error(error);
  })
  .finally(() => {
    // console.log("Look, got them pics fetched!");
  });

// console.log("\n");
// console.log("%c fetch-level-1_2", "color: green; background-color: white");
//*** *** *** *** FETCH LEVEL 1-2 *** *** *** ***

const postsAPI = "https://jsonplaceholder.typicode.com/posts";
const commentsAPI = "https://jsonplaceholder.typicode.com/posts/1/comments";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

fetch(commentsAPI)
  .then((resp: Response) => {
    if (!resp.ok) {
      console.error("No! Level 1.");
    }
    // console.log(resp);
    return resp.json();
  })
  .then((comments: Comments[]) => {
    // console.log(comments);
    comments.forEach((comments: Comments) => {
      console.log(comments.email);
    });
  });

fetch(postsAPI)
  .then((resp: Response) => {
    if (!resp.ok) {
      console.error("Failure! Level 1.");
    }
    console.log(resp);
    return resp.json();
  })
  .then((posts: Post[]) => {
    let highestId = 0;
    let shortestTitleLength = 400;
    let shortestTitle = "";
    let longestBody = "";
    let longestBodyLength = 0;
    posts.forEach((post: Post) => {
      if (post.id > highestId) {
        highestId = post.id;
      }
      if (post.title.length < shortestTitleLength) {
        shortestTitleLength = post.title.length;
        shortestTitle = post.title;
      }
      if (post.body.length > longestBodyLength) {
        longestBodyLength = post.body.length;
        longestBody = post.body;
      }
    });
    console.log({ highestId });
    console.log({ shortestTitle });
    console.log({ longestBody });
    //   })
    //   .catch((error: Error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     console.log("Comments loaded!");
  });

// ===========

// const jsonPlaceholderAPI: string =
//   "https://jsonplaceholder.typicode.com/posts/1/comments";
// const jsonPlaceholderPostsAPI: string =
//   "https://jsonplaceholder.typicode.com/posts";

// type Comment = {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// };

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// fetch(jsonPlaceholderAPI)
//   .then((resp) => {
//     if (!resp.ok) {
//       console.error("Response doesn't work");
//     }
//     return resp.json();
//   })
//   .then((comments: Comment[]) => {
//     comments.forEach((comment: Comment) => {
//       console.log(comment.email);
//     });
//   });

// fetch(jsonPlaceholderPostsAPI)
//   .then((resp) => {
//     if (!resp.ok) {
//       console.error("Response doesn't work");
//     }
//     return resp.json();
//   })
//   .then((posts: Post[]) => {
//     let highestId = 0;
//     let shortestTitleLength = 400;
//     let shortestTitle = "";
//     let longestBody = "";
//     let longestBodyLength = 0;
//     posts.forEach((post: Post) => {
//       if (post.id > highestId) {
//         highestId = post.id;
//       }
//       if (post.title.length < shortestTitleLength) {
//         shortestTitleLength = post.title.length;
//         shortestTitle = post.title;
//       }
//       if (post.body.length > longestBodyLength) {
//         longestBodyLength = post.body.length;
//         longestBody = post.body;
//       }
//     });
//     console.log({ highestId });
//     console.log({ shortestTitle });
//     console.log({ longestBody });
//   });
