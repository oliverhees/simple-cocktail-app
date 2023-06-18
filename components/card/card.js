const app = document.getElementById("app");

export function createCard(category, name, ingredients, alcohol, video, image) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  wrapper.innerHTML = `
          <div class="card cocktail">
            <div class="card__image" style="background-image: url('${image}')"></div>
            <div class="card__category">${category}</div>
            <div class="card__cocktail-name">${name}</div>
            <button type="button" class="display-recipe">Make it</button>
            <div class="card__cocktail-infos clearfix">
              <div class="one-third">
                <div class="sub-text">${ingredients}</div>
                <div class="subheading">Ingredients</div>
              </div>
              <div class="one-third">
                <div class="sub-text">${alcohol}</div>
                <div class="subheading">Alcohol</div>
              </div>
              <div class="one-third no-border">
                <div class="sub-text">${video}</div>
                <div class="subheading">Video</div>
              </div>
            </div>
          </div>
          <div class="card recipe">
          <div class="card__image" style="background-image: url('${image}')"></div>
          <p class="ingredients">
          testekjljtjwlketjwo
          </p>
          </div>
    `;
  app.append(wrapper);
}
