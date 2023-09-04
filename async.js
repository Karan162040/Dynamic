console.log("Person 1: Shows A Ticket");
console.log("Person 2: Shows A Ticket");

/*const wifeBringsTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 2000);
});
const getPopcorn = wifeBringsTickets.then((t) => {
  console.log("Husband: We Should Go in");
  console.log("Wife: I am Hungry");
  return new Promise((resolve, reject) => resolve(`${t} Popcorn`));
});
const getButter = getPopcorn.then((t) => {
  console.log("Husband:I got Butter");
  console.log("Wife: let's Go");
  return new Promise((resolve, reject) => resolve(`${t} Butter`));
});
const getColdDrinks = getButter.then((t) => {
  console.log("Husband:I Want Cold Drinks");
  console.log("Wife: We'll Be Late For The Movie!");
  return new Promise((resolve, reject) => resolve(`${t} Cold Drinks`));
});
getColdDrinks.then((m) => console.log(m));
console.log("Person 4: Shows A Ticket");
console.log("Person 5: Shows A Ticket");
*/
/////////////////////////////////////////////////
// async await
////////////////////////////////////////////////
const preMovie = async () => {
  const wifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ticket");
    }, 2000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));
  const getButter = new Promise((resolve, reject) => resolve(`Butter`));
  const getColdDrinks = new Promise((resolve, reject) =>
    resolve(`Cold Drinks`)
  );
  let ticket = await wifeBringsTickets;
  let [p, b, c] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
  console.log(`${p}, ${b}, ${c}`);

  return ticket;
};
preMovie().then((m) => console.log(m));
// //////////////////////////////////////////
// Previous Task Using async await
////////////////////////////////////////////
const posts = [
  { title: "post1", body: "this is post1 body" },
  { title: "post2", body: "this is post2 body" },
];
let lastActivity = new Date();
console.log("Last Activity", lastActivity);

const taskUsingAsyncAwait = async (post) => {
  try {
    const createPost = await new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve(posts);
      }, 1000);
    });

    console.log("post after creation", [...createPost]);

    const updateLastUserActivityTime = await new Promise((resolve, reject) => {
      setTimeout(() => {
        lastActivity = new Date();
        resolve(lastActivity);
      }, 1000);
    });
    console.log("updated time", updateLastUserActivityTime);

    const deletePost = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          posts.pop();
          resolve(posts);
        } else {
          reject(new Error("No posts to delete."));
        }
      }, 1000);
    });
    console.log("Posts after deletion:", deletePost);
  } catch (err) {
    console.log(err);
  }
};
taskUsingAsyncAwait({ title: "post3", body: "this is post3 body" });
///////
// function createPost1(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//     }, 1000);
//   });
// }
// const updateLastUserActivityTime1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     lastActivity = new Date();
//     resolve(lastActivity);
//   }, 1000);
// });
// const deletePost1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (posts.length > 0) {
//       posts.pop();
//       resolve(posts);
//     } else {
//       reject(new Error("No posts to delete."));
//     }
//   }, 1000);
// });
// let results;
// const asyncFunction = async function () {
//   results = await Promise.all([
//     createPost1({ title: "post3", body: "this is post3 body" }),
//     updateLastUserActivityTime1,
//     deletePost1,
//   ]);
//   console.log("post after creation", [...posts]);
//   console.log("Last Activity", results[1]);
//   console.log("Posts after deletion:", results[2]);
// };
// asyncFunction();
