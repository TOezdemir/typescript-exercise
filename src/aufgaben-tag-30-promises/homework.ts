const exercise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 1 done...");
    console.log("Exercise 1 done...");
  }, 20000);
  setTimeout(() => {
    resolve("Exercise 2 done...");
    console.log("Exercise 2 done...");
  }, 30000);
  setTimeout(() => {
    resolve("Exercise 3 done...");
    console.log("Exercise 3 done...");
  }, 40000);
});

exercise;

const homeworkStatus = document.getElementById(
  "homework-status"
) as HTMLParagraphElement;
exercise;

exercise.then((result) => {
  homeworkStatus.textContent = result;
  return exercise;
});
