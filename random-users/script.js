const userContainer = document.getElementById("user-container");
const userBtn = document.getElementById("user-btn");
const getUser = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];
    userContainer.innerHTML = `
        <div   class="card flex flex-col items-center justify-center p-4  text-center  ">
          <img src="${user.picture.large}" alt="User Picture" class="user-image rounded-full" />
          <h2 class="text-[18px] font-bold text-black font-semibold ">${user.name.first} ${user.name.last}</h2>
          <p class="text-blue-400">${user.email}</p>
          <p>${user.location.city}, ${user.location.country}</p>
        </div>
      `;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
userBtn.addEventListener("click", getUser);
