import Chart from "chart.js/auto";
import { success, error, info } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";

// Game
const keyRef = document.getElementById("key");
const gameRef = document.getElementById("newGame")

const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"];
let currentKeyIndex = Math.floor(Math.random() * keys.length);


keyRef.textContent = keys[currentKeyIndex];

window.addEventListener("keydown", (evt) => {
  if (evt.key === keys[currentKeyIndex]) {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyRef.textContent = keys[currentKeyIndex];
    success({
      text: "Молодець! Правильна клавіша.",
      delay: 1000,
    });
  } else {
    error({
      text: "Помилка! Спробуй ще.",
      delay: 1000,
    });
  }
});

window.addEventListener("keypress", (evt) => {
  evt.preventDefault();
});

gameRef.addEventListener("click", (evt) => {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyRef.textContent = keys[currentKeyIndex];
  info({
    text: "Нова гра почалася!",
    delay: 1000,
  });
});

// Graphic
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line", // тут можна змінити на "bar", "pie", "radar" тощо
  data: chartData, // було data, треба chartData
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Продажі за останній місяць" },
    },
  },
};

const salesChart = new Chart(document.getElementById("sales-chart"), config);
