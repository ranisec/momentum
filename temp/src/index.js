const clockTitle = document.querySelector(".js-clock");

setInterval(() => {
  const today = new Date();
  const year = today.getFullYear();
  console.log(year);
  const cristmasDay = new Date(year, 11, 25);
  const timeDiff = cristmasDay - today;
  console.log(timeDiff);

  //const month = today.getMonth();
  //console.log(cristmasDay.getdate());
  //const dDay = `${cristmasDay.getdate - today.getMonth}`;

  const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  const hour = String(
    Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, 0);
  const minute = String(
    Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, 0);
  const second = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(
    2,
    0
  );
  const dDay = `${days}d ${hour}h ${minute}m ${second}s `;
  clockTitle.innerText = dDay;
}, 1000);
