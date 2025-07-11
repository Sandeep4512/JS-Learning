 const btn = document.getElementById("changeBtn");

    btn.addEventListener("click", () => {
      // Generate random color
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });


    // ============================================

    const fruitList = document.getElementById("fruitList");

    fruitList.addEventListener('click', (item) => {
      if (item.target.tagName === 'LI') {
        alert("clicked on : " + item.target.textContent)
      }
    })


    const addbtn = document.getElementById('addFruit')

    addbtn.addEventListener('click', function () {

      const fruitsName = prompt("Enter fruits Name");

      if (fruitsName && fruitsName.trim() !== "") {
        const newFruit = document.createElement('li');
        newFruit.textContent = `${fruitsName.trim()}`;
        fruitList.appendChild(newFruit);
      }
      else {
        alert("No fruits are Enter")
      }


    });

    const removeBtn = document.getElementById('removeBtn');

    removeBtn.addEventListener('click', (e) => {
      const fruitList = document.getElementById("fruitList");
          const lastFruit=  fruitList.lastElementChild;

      if (lastFruit) {
        fruitList.removeChild(lastFruit);
      } else {
        alert("No more fruits to remove!");
      }
    })
