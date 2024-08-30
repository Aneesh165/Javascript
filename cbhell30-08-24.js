// const userIds = ["1", "2", "3"];

// const fetchUserDetails = async (id) => ({ id, name: `User${id}` });
// const fetchUserPosts = async (user) => [
//   `Post1 by ${user.name}`,
//   `Post2 by ${user.name}`,
// ];

// const executeTasks = async () => {
//   for (const id of userIds) {
//     const user = await fetchUserDetails(id);
//     const posts = await fetchUserPosts(user);
//     console.log(posts);
//   }
// };

// executeTasks();


const checkWeather = async () => 'sunny';
const fetchActivity = async (weather) => (weather === 'sunny' ? 'go for a walk' : 'stay indoors');

const executeSimpleTask = async () => {
  const weather = await checkWeather();
  const activity = await fetchActivity(weather);
  console.log(`Based on the weather, you should ${activity}.`);
};

executeSimpleTask();
