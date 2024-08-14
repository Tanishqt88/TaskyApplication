// json - javascript object notation | storing method like csv

// var state = {
//     taskList: [
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         }
//     ]
// };






const state = {
    taskList: [],
}

// DOM OPERATIONS
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

// console.log(taskContents);
// console.log(taskModal);

const htmlTaskContent = ({id, title, description, type, url }) => {};